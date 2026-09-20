const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = `${window.location.origin}/callback`;

const SCOPES = [
  "user-read-recently-played",
  "user-top-read",
].join(" ");

const AUTH_URL = "https://accounts.spotify.com/authorize";

function generateRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

async function generateCodeChallenge(verifier) {
  const data = new TextEncoder().encode(verifier);

  const digest = await crypto.subtle.digest("SHA-256", data);

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
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

  window.location.href = `${AUTH_URL}?${params.toString()}`;
}