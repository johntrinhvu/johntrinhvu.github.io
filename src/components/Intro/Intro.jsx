import React from "react";
import profilePicture from "../../images/profilePicture.jpg";
import logo from "../../images/logo.png";

export default function Intro() {
  return (
    <div className="pb-[70px] border-b border-line">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-7">
        <img
          src={profilePicture}
          alt="John Trinh Vu"
          className="w-[128px] h-[128px] rounded-full object-cover object-top flex-shrink-0 border-2 border-periwinkle shadow-[0_0_0_4px_var(--accent-glow)]"
        />

        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-5">
            <img
              src={logo}
              alt=""
              className="w-10 h-10 object-contain"
            />
            <span className="text-[11px] tracking-wider text-steel">SAN FRANCISCO BAY AREA</span>
          </div>

          <h1 className="font-display font-semibold leading-tight text-[clamp(32px,4.4vw,50px)] mb-5">
            hey, i'm johnnie
          </h1>

          <p className="text-base leading-relaxed text-lo max-w-[56ch] mb-7">
            software engineer from irvine now in the bay. challenger adc player,
            climber, and matcha + tea barista. (looking to relocate back to LA/OC)
          </p>

          <div className="inline-flex items-center gap-2.5 border border-line rounded-full px-4 py-2.5 text-[13px] bg-glass backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <span className="w-1.5 h-1.5 rounded-full bg-periwinkle shadow-[0_0_0_3px_var(--accent-glow)]" />
            Software Engineer (iOS) at Meta
          </div>
        </div>
      </div>
    </div>
  );
}
