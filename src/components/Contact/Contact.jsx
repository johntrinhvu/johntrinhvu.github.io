import React, { useState } from "react";
import { emails } from "../../data";

function CopyableEmail({ label, email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex justify-between items-center py-[22px] border-b border-line text-hi hover:pl-2 hover:text-periwinkle transition-all w-full text-left"
    >
      <span>
        <span className="text-xs text-steel block mb-1">{label}</span>
        <span className="text-base">{email}</span>
      </span>
      <span className={`text-xs transition-opacity duration-300 ${copied ? "opacity-100 text-periwinkle" : "opacity-0"}`}>
        Copied!
      </span>
    </button>
  );
}

export default function Contact() {
  return (
    <div className="pb-[100px]">
      <h2 className="text-[30px] font-display font-semibold mb-10">Contact</h2>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full max-w-[520px]">
          <p className="text-[15px] leading-relaxed text-lo mb-10">
            The two emails below are the best ways to reach me. Expect ~2-3 business days for a reply.
          </p>
          <div className="flex flex-col">
            <CopyableEmail label="WORK" email={emails.work} />
            <CopyableEmail label="PERSONAL" email={emails.personal} />
          </div>
        </div>

        <div className="w-full lg:max-w-[420px] flex-shrink-0 lg:-mt-14">
          <div className="relative bg-panel rounded-xl overflow-hidden border border-line h-[320px] p-6 flex items-end">
            <iframe
              title="Meta Headquarters — 1 Hacker Way, Menlo Park"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ filter: "opacity(0.86)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.989105641924!2d-122.15274701120244!3d37.48458345679324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbd49651e922b%3A0x3c9b34a93a13c273!2s1%20Hacker%20Wy%2C%20Menlo%20Park%2C%20CA%2094025!5e0!3m2!1sen!2sus!4v1748545330696!5m2!1sen!2sus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}