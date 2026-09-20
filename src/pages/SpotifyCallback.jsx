import { useEffect } from "react";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = `${window.location.origin}/callback`;

export default function SpotifyCallback() {
  useEffect(() => {
    async function exchangeCode() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) return;

      const verifier = localStorage.getItem("spotify_code_verifier");

      const body = new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: verifier,
      });

      const response = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        }
      );

      const data = await response.json();

      if (data.access_token) {
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

        window.location.href = "/";
      }
    }

    exchangeCode();
  }, []);

  return <p>Connecting Spotify…</p>;
}