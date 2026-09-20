import React, { useEffect, useState } from "react";

function Marker({ entry, accent }) {
  if (entry.icon) {
    return (
      <span
        className="absolute -left-[56px] top-0 w-10 h-10 rounded-full overflow-hidden"
        style={{
          background: entry.iconBg || "var(--panel)",
          boxShadow: `
            0 0 0 2px ${accent},
            0 0 0 5px var(--marker-ring),
            0 0 18px ${accent}66
          `,
        }}
      >
        <img
          src={entry.icon}
          alt=""
          className={`w-full h-full ${
            entry.iconFit === "cover"
              ? "object-cover"
              : "object-contain p-1.5"
          } ${entry.iconScale || ""}`}
        />
      </span>
    );
  }

  return (
    <span
      className="absolute -left-[30px] top-1 w-[11px] h-[11px] rounded-full"
      style={{
        background: accent,
        boxShadow: `0 0 0 3px ${accent}33`,
      }}
    />
  );
}

function EntryBody({ entry, accent }) {
  return (
    <>
      <span
        className="text-xs font-medium block mb-2"
        style={{ color: accent }}
      >
        {entry.when}
      </span>

      {entry.company ? (
        <>
          <h3 className="text-[19px] font-semibold mb-1">
            {entry.company}
          </h3>

          <p className="text-[14.5px] font-semibold text-lo mb-2">
            {entry.title}
          </p>
        </>
      ) : (
        <h3 className="text-[19px] font-semibold mb-2">
          {entry.title}
        </h3>
      )}

      <p className="text-[14.5px] leading-relaxed text-lo max-w-[62ch] mb-3.5">
        {entry.description}
      </p>

      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md border"
              style={{
                borderColor: `${accent}73`,
                color: accent,
                backgroundColor: `${accent}1f`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default function Project({ entry, isLast }) {
  const [isLight, setIsLight] = useState(
    document.documentElement.dataset.theme === "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.dataset.theme === "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const accent = entry.accent[isLight ? "light" : "dark"];

  const inner = (
    <div
      className={`relative group rounded-xl -mx-3 px-3 py-2 transition-colors duration-200 hover:bg-[var(--hover-panel)] ${
        isLast ? "" : "pb-[46px]"
      }`}
    >
      <Marker entry={entry} accent={accent} />

      <div className={entry.image ? "sm:flex sm:gap-3 sm:items-start" : ""}>
        <div className={entry.image ? "sm:flex-1 sm:min-w-0" : ""}>
          <EntryBody entry={entry} accent={accent} />
        </div>

        {entry.image && (
          <div className="hidden sm:block w-[220px] flex-shrink-0 mt-1">
            <img
              src={entry.image}
              alt={entry.title}
              className="block w-full rounded-lg shadow-lg origin-right transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:-rotate-2 group-hover:scale-[1.04]"
            />
          </div>
        )}
      </div>
    </div>
  );

  if (entry.link) {
    return (
      <a
        href={entry.link}
        target="_blank"
        rel="noreferrer"
        className="block cursor-pointer"
      >
        {inner}
      </a>
    );
  }

  return inner;
}