const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const REDIRECT_URI =
  window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:3000/?spotify_callback=1"
    : "https://www.johntrinhvu.com/?spotify_callback=1";

const SCOPES = [
  "user-read-recently-played",
  "user-top-read",
].join(" ");

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
}

async function generateCodeChallenge(verifier) {
  const data = new TextEncoder().encode(verifier);

  const digest = await window.crypto.subtle.digest(
    "SHA-256",
    data
  );

  return btoa(
    String.fromCharCode(...new Uint8Array(digest))
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function loginSpotify() {
  const verifier = generateRandomString(128);

  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("spotify_code_verifier", verifier);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    code_challenge_method: "S256",
    code_challenge: challenge,
  });

  window.location.href =
    `${AUTH_ENDPOINT}?${params.toString()}`;
}

export async function getAccessToken(code) {
  const verifier = localStorage.getItem(
    "spotify_code_verifier"
  );

  if (!verifier) {
    throw new Error("Spotify code verifier missing");
  }

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
    code_verifier: verifier,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `Spotify token request failed: ${error}`
    );
  }

  const data = await response.json();

  localStorage.setItem(
    "spotify_access_token",
    data.access_token
  );

  if (data.refresh_token) {
    localStorage.setItem(
      "spotify_refresh_token",
      data.refresh_token
    );
  }

  localStorage.setItem(
    "spotify_expires_at",
    String(Date.now() + data.expires_in * 1000)
  );

  localStorage.removeItem("spotify_code_verifier");

  return data.access_token;
}

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("spotify_refresh_token");

  if (!refreshToken) {
    throw new Error("No Spotify refresh token");
  }

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const data = await response.json();

  if (!response.ok) {
    if (data.error === "invalid_grant") {
      localStorage.removeItem("spotify_access_token");
      localStorage.removeItem("spotify_refresh_token");
      localStorage.removeItem("spotify_expires_at");

      throw new Error("Spotify authorization expired");
    }

    throw new Error(
      `Spotify token refresh failed: ${data.error || response.status}`
    );
  }

  localStorage.setItem("spotify_access_token", data.access_token);

  if (data.refresh_token) {
    localStorage.setItem(
      "spotify_refresh_token",
      data.refresh_token
    );
  }

  localStorage.setItem(
    "spotify_expires_at",
    String(Date.now() + data.expires_in * 1000)
  );

  return data.access_token;
}

export async function spotifyFetch(endpoint) {
  let token = localStorage.getItem("spotify_access_token");
  const expiresAt = Number(
    localStorage.getItem("spotify_expires_at")
  );

  if (!token) {
    throw new Error("Not connected to Spotify");
  }

  // Refresh slightly before expiration.
  // This prevents requests from racing the 1-hour expiration.
  if (expiresAt && Date.now() >= expiresAt - 60_000) {
    token = await refreshAccessToken();
  }

  let response = await fetch(
    `https://api.spotify.com/v1${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 401) {
    token = await refreshAccessToken();

    response = await fetch(
      `https://api.spotify.com/v1${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.status}`);
  }

  return response.json();
}

export async function getRecentlyPlayed() {
  const data = await spotifyFetch(
    "/me/player/recently-played?limit=10"
  );

  return data.items.map((item) => ({
    title: item.track.name,
    artist: item.track.artists
      .map((artist) => artist.name)
      .join(", "),
    album: item.track.album.name,
    image: item.track.album.images?.[0]?.url,
    url: item.track.external_urls.spotify,
    playedAt: item.played_at,
  }));
}

export async function getTopTracks() {
  const data = await spotifyFetch(
    "/me/top/tracks?time_range=long_term&limit=10"
  );

  return data.items.map((track) => ({
    title: track.name,
    artist: track.artists
      .map((artist) => artist.name)
      .join(", "),
    album: track.album.name,
    image: track.album.images?.[0]?.url,
    url: track.external_urls.spotify,
  }));
}