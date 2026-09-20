import React, { useEffect, useRef, useState } from "react";
import { photos, watching, nowPlaying, topTrack } from "../../data";

function PhotoCarousel() {
  const railRef = useRef(null);

  const scrollRail = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(".photo-slide");
    const step = card ? card.getBoundingClientRect().width + 14 : 200;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="py-14 border-b border-line">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-[19px] font-display font-semibold">Recently in life</h2>
        <span className="text-[11px] tracking-wider text-steel">PHOTOS</span>
      </div>
      <div ref={railRef} className="rail flex gap-3.5 items-center overflow-x-auto">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`photo-slide flex-shrink-0 rounded-xl border border-line bg-gradient-to-br from-navy to-panel2 ${
              i === 0 ? "w-[280px] h-[220px] opacity-100" : "w-[170px] h-[220px] opacity-45"
            }`}
          >
            {/* Replace with an <img src={p.src} alt={p.alt} className="w-full h-full object-cover rounded-xl" /> once real photos are added */}
          </div>
        ))}
      </div>
      <div className="flex gap-2.5 mt-4">
        <button
          onClick={() => scrollRail(-1)}
          aria-label="Previous photo"
          className="w-8 h-8 rounded-full border border-line bg-panel flex items-center justify-center hover:border-periwinkle hover:text-periwinkle"
        >
          ←
        </button>
        <button
          onClick={() => scrollRail(1)}
          aria-label="Next photo"
          className="w-8 h-8 rounded-full border border-line bg-panel flex items-center justify-center hover:border-periwinkle hover:text-periwinkle"
        >
          →
        </button>
      </div>
    </div>
  );
}

function WatchingRail() {
  const [watching, setWatching] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/users/sahorin/animelist?status=watching")
      .then((r) => r.json())
      .then((json) => {
        const list = (json.data || []).map((entry) => ({
          title: entry.anime.title,
          poster: entry.anime.images?.jpg?.image_url,
          episodeLabel:
            entry.watched_episodes && entry.anime.episodes
              ? `Ep ${entry.watched_episodes} / ${entry.anime.episodes}`
              : entry.watched_episodes
              ? `Ep ${entry.watched_episodes}`
              : "—",
        }));
        setWatching(list);
      })
      .catch((err) => console.error("MAL fetch failed:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-14 border-b border-line">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-[19px] font-display font-semibold">What I'm watching now</h2>
        <span className="text-[11px] tracking-wider text-steel">MYANIMELIST</span>
      </div>

      {loading ? (
        <p className="text-sm text-faint">Loading…</p>
      ) : watching.length === 0 ? (
        <p className="text-sm text-faint">Nothing currently airing on my list.</p>
      ) : (
        <div className="rail flex gap-3 overflow-x-auto pb-1.5">
          {watching.map((a, i) => (
            <div key={i} className="flex-shrink-0 w-[130px] bg-panel border border-line rounded-lg overflow-hidden">
              <div
                className="h-[170px] bg-gradient-to-br from-navy to-panel2 bg-cover bg-center"
                style={a.poster ? { backgroundImage: `url(${a.poster})` } : undefined}
              />
              <div className="px-3 py-2.5">
                <p className="text-xs mb-1 leading-snug">{a.title}</p>
                <span className="text-[11px] text-faint">{a.episodeLabel}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SpotifyTabs() {
  const [tab, setTab] = useState("now");
  const track = tab === "now" ? nowPlaying : topTrack;
  const label = tab === "now" ? "NOW PLAYING" : "TOP TRACK · ALL TIME";

  const btnRefs = useRef({});
  const [glassStyle, setGlassStyle] = useState({ left: 0, width: 0 });

  const moveGlass = (key) => {
    const btn = btnRefs.current[key];
    if (btn) setGlassStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
  };

  useEffect(() => {
    moveGlass(tab);
    window.addEventListener("resize", () => moveGlass(tab));
    return () => window.removeEventListener("resize", () => moveGlass(tab));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div className="py-14">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-[19px] font-display font-semibold">Current music taste</h2>
        <span className="text-[11px] tracking-wider text-steel">SPOTIFY</span>
      </div>

      <div className="relative flex justify-center gap-1.5 mb-5">
        <div className="relative flex gap-1.5 border border-line rounded-full p-1 bg-panel">
          <span
            className="absolute top-1 bottom-1 rounded-full bg-periwinkle transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ left: glassStyle.left, width: glassStyle.width }}
            aria-hidden="true"
          />
          <button
            ref={(el) => (btnRefs.current["now"] = el)}
            onClick={() => setTab("now")}
            className={`relative z-10 text-xs px-4 py-1.5 rounded-full transition-colors duration-300 ${
              tab === "now" ? "text-bg" : "text-lo hover:text-hi"
            }`}
          >
            Recently played
          </button>
          <button
            ref={(el) => (btnRefs.current["top"] = el)}
            onClick={() => setTab("top")}
            className={`relative z-10 text-xs px-4 py-1.5 rounded-full transition-colors duration-300 ${
              tab === "top" ? "text-bg" : "text-lo hover:text-hi"
            }`}
          >
            Top tracks
          </button>
        </div>
      </div>

      <div className="max-w-[420px] mx-auto">
        <div className="bg-panel border border-line rounded-xl p-4 flex items-center gap-3.5">
          <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-navy to-panel2 flex items-center justify-center">
            {tab === "now" && (
              <div className="flex gap-0.5 items-end h-3.5">
                <span className="eq-bar w-0.5 bg-periwinkle" style={{ animationDelay: "0s" }} />
                <span className="eq-bar w-0.5 bg-periwinkle" style={{ animationDelay: "0.2s" }} />
                <span className="eq-bar w-0.5 bg-periwinkle" style={{ animationDelay: "0.4s" }} />
              </div>
            )}
          </div>
          <div>
            <span className="text-[11px] tracking-wider text-steel block mb-1">{label}</span>
            <p className="text-sm text-hi mb-0.5">{track.title}</p>
            <p className="text-xs text-faint m-0">{track.artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PhotoCarousel />
      <WatchingRail />
      <SpotifyTabs />
    </>
  );
}
