import React, { useEffect, useRef, useState } from "react";

export default function SpotifyTabs() {
    const [tab, setTab] = useState("now");
    const [recentTracks, setRecentTracks] = useState([]);
    const [topTracks, setTopTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const btnRefs = useRef({});
    const [glassStyle, setGlassStyle] = useState({
      left: 0,
      width: 0,
    });
  
    const moveGlass = (key) => {
      const btn = btnRefs.current[key];
  
      if (btn) {
        setGlassStyle({
          left: btn.offsetLeft,
          width: btn.offsetWidth,
        });
      }
    };
  
    useEffect(() => {
      moveGlass(tab);
  
      const handleResize = () => moveGlass(tab);
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, [tab]);
  
    useEffect(() => {
        fetch("https://johntrinhvu-spotify.johntrinhvu.workers.dev/api/spotify")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Spotify API failed: ${response.status}`);
            }
      
            return response.json();
          })
          .then((data) => {
            setRecentTracks(data.recentlyPlayed || []);
            setTopTracks(data.topTracks || []);
          })
          .catch((err) => {
            console.error("Spotify fetch failed:", err);
            setError(true);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
  
    const tracks = tab === "now" ? recentTracks : topTracks;
  
    const formatPlayedAt = (dateString) => {
      if (!dateString) return "";
  
      const date = new Date(dateString);
      const diff = Date.now() - date.getTime();
  
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
  
      if (minutes < 1) return "Just now";
      if (minutes < 60) return `${minutes}m ago`;
      if (hours < 24) return `${hours}h ago`;
      if (days === 1) return "Yesterday";
  
      return `${days}d ago`;
    };
  
    const mainTrack = tracks[0];
    const secondaryTracks = tracks.slice(1, 5);
  
    return (
      <div className="py-14 border-b border-line">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-[19px] font-display font-semibold">
            Current music taste
          </h2>
  
          <span className="text-[11px] tracking-wider text-steel">
            SPOTIFY
          </span>
        </div>
  
        {/* Tabs */}
        <div className="relative flex justify-center mb-6">
          <div className="relative flex gap-1.5 border border-line rounded-full p-1 bg-panel">
            <span
              className="absolute top-1 bottom-1 rounded-full bg-periwinkle transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{
                left: glassStyle.left,
                width: glassStyle.width,
              }}
              aria-hidden="true"
            />
  
            <button
              ref={(el) => (btnRefs.current["now"] = el)}
              onClick={() => setTab("now")}
              className={`relative z-10 text-xs px-4 py-1.5 rounded-full transition-colors duration-300 ${
                tab === "now"
                  ? "text-bg"
                  : "text-lo hover:text-hi"
              }`}
            >
              Recently played
            </button>
  
            <button
              ref={(el) => (btnRefs.current["top"] = el)}
              onClick={() => setTab("top")}
              className={`relative z-10 text-xs px-4 py-1.5 rounded-full transition-colors duration-300 ${
                tab === "top"
                  ? "text-bg"
                  : "text-lo hover:text-hi"
              }`}
            >
              Top tracks
            </button>
          </div>
        </div>
  
        {/* Spotify panel */}
        <div className="max-w-[700px] mx-auto">
          {loading ? (
            <div className="border border-line rounded-xl bg-panel p-8 text-center">
              <p className="text-sm text-faint">
                Loading Spotify…
              </p>
            </div>
          ) : error ? (
            <div className="border border-line rounded-xl bg-panel p-8 text-center">
              <p className="text-sm text-faint">
                Couldn't load Spotify data.
              </p>
            </div>
          ) : !mainTrack ? (
            <div className="border border-line rounded-xl bg-panel p-8 text-center">
              <p className="text-sm text-faint">
                No tracks found.
              </p>
            </div>
          ) : (
            <div className="border border-line rounded-xl bg-panel overflow-hidden">
              {/* Panel title */}
              <div className="px-5 py-4 border-b border-line flex items-center justify-between">
                <div>
                  <p className="text-sm text-hi">
                    {tab === "now"
                      ? "Recently Played"
                      : "Top Tracks"}
                  </p>
  
                  <p className="text-[11px] text-faint mt-0.5">
                    {tab === "now"
                      ? "What I've been listening to lately"
                      : "My most played tracks"}
                  </p>
                </div>
  
                <span className="text-[10px] tracking-wider text-steel">
                  {tab === "now" ? "RECENT" : "ALL TIME"}
                </span>
              </div>
  
              {/* Two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr]">
                {/* Main track */}
                <a
                  href={mainTrack.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-5 md:p-6 md:border-r border-line transition-colors hover:bg-panel2"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-navy to-panel2 mb-5 relative">
                    {mainTrack.image && (
                      <img
                        src={mainTrack.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    )}
  
                    {/* Play button */}
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-bg/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-[11px] text-hi ml-0.5">
                        ▶
                      </span>
                    </div>
                  </div>
  
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[15px] text-hi truncate group-hover:text-periwinkle transition-colors">
                        {mainTrack.title}
                      </p>
  
                      <p className="text-xs text-faint mt-1 truncate">
                        {mainTrack.artist}
                      </p>
                    </div>
  
                    {tab === "now" && (
                      <span className="text-[10px] text-steel flex-shrink-0 pt-1">
                        {formatPlayedAt(mainTrack.playedAt)}
                      </span>
                    )}
                  </div>
                </a>
  
                {/* Secondary tracks */}
                <div className="flex flex-col">
                  {secondaryTracks.map((track, index) => (
                    <a
                      key={`${track.title}-${index}`}
                      href={track.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group flex items-center gap-3.5 px-5 py-3.5 flex-1 transition-colors hover:bg-panel2 ${
                        index !== secondaryTracks.length - 1
                          ? "border-b border-line"
                          : ""
                      }`}
                    >
                      {/* Number */}
                      <span className="text-[11px] text-steel w-5 flex-shrink-0">
                        {String(index + 2).padStart(2, "0")}
                      </span>
  
                      {/* Album art */}
                      <div className="w-11 h-11 rounded-md overflow-hidden bg-gradient-to-br from-navy to-panel2 flex-shrink-0 relative">
                        {track.image && (
                          <img
                            src={track.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        )}
  
                        <div className="absolute inset-0 bg-bg/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <span className="text-[10px] text-hi ml-0.5">
                            ▶
                          </span>
                        </div>
                      </div>
  
                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-hi truncate group-hover:text-periwinkle transition-colors">
                          {track.title}
                        </p>
  
                        <p className="text-[11px] text-faint truncate mt-0.5">
                          {track.artist}
                        </p>
                      </div>
  
                      {/* Timestamp / arrow */}
                      <div className="flex-shrink-0">
                        {tab === "now" ? (
                          <span className="text-[10px] text-steel">
                            {formatPlayedAt(track.playedAt)}
                          </span>
                        ) : (
                          <span className="text-[11px] text-steel opacity-0 group-hover:opacity-100 transition-opacity">
                            ▶
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}