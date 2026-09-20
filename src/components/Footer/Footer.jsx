import React from "react";
import { socials } from "../../data";

const ICONS = {
  linkedin: (
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  leetcode: (
    <path d="M13.5 2.5 6.8 9.4a2.6 2.6 0 0 0 0 3.6l4.8 5c1 1 2.6 1 3.6 0l2-2a1.2 1.2 0 0 0-1.7-1.7l-2 2a.4.4 0 0 1-.6 0l-4.8-5a.4.4 0 0 1 0-.6l6.7-6.9a1.2 1.2 0 1 0-1.3-2ZM10 15h9a1.2 1.2 0 1 1 0 2.4h-9A1.2 1.2 0 1 1 10 15Z" />
  ),
  instagram: (
    <path d="M12 2.2c2.7 0 3 0 4 .05 1 .05 1.7.2 2.3.45.6.24 1.1.55 1.6 1.05.5.5.8 1 1.05 1.6.24.6.4 1.3.45 2.3.05 1 .05 1.3.05 4s0 3-.05 4c-.05 1-.2 1.7-.45 2.3a4.4 4.4 0 0 1-1.05 1.6c-.5.5-1 .8-1.6 1.05-.6.24-1.3.4-2.3.45-1 .05-1.3.05-4 .05s-3 0-4-.05c-1-.05-1.7-.2-2.3-.45a4.4 4.4 0 0 1-1.6-1.05 4.4 4.4 0 0 1-1.05-1.6c-.24-.6-.4-1.3-.45-2.3-.05-1-.05-1.3-.05-4s0-3 .05-4c.05-1 .2-1.7.45-2.3.24-.6.55-1.1 1.05-1.6.5-.5 1-.8 1.6-1.05.6-.24 1.3-.4 2.3-.45 1-.05 1.3-.05 4-.05ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0Z" />
  ),
  x: (
    <path d="M18.9 3H22l-7.5 8.6L23 21h-6.9l-5.4-6.6L4.4 21H1.3l8-9.2L1 3h7l4.9 6L18.9 3Zm-1.2 16.2h1.9L7.4 4.7H5.4l12.3 14.5Z" />
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-line pt-[34px] pb-[60px] mt-5">
      <div className="max-w-[960px] mx-auto px-10 flex justify-between items-center flex-wrap gap-5">
        <span className="text-xs text-faint">© 2026 developed/designed by johnnie vu</span>
        <div className="flex gap-4">
          {Object.entries(socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              className="w-[34px] h-[34px] border border-line rounded-lg flex items-center justify-center text-lo hover:border-periwinkle hover:text-periwinkle transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                {ICONS[key]}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
