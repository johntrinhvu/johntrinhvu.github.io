import React, { useEffect, useRef, useState } from "react";
import { photos } from "../../data";
import SpotifyTabs from "../../components/SpotifyTabs/SpotifyTabs";

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

export default function About() {
  return (
    <>
      <PhotoCarousel />
      <WatchingRail />
      <SpotifyTabs />
    </>
  );
}
