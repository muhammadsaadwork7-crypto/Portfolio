"use client";

import React from "react";
import { Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo and Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-sm font-sans font-black tracking-tight text-white uppercase">
            Muhammad Saadullah
          </span>
          <span className="text-[10px] font-sans font-semibold tracking-wider text-zinc-500 uppercase">
            Software Engineer
          </span>
        </div>

        {/* Mid Copyright */}
        <div className="text-zinc-600 font-sans text-xs tracking-wide">
          &copy; {currentYear} Saadullah. All rights reserved.
        </div>

        {/* Right side: social & Back to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/muhammad-saad-b40679406/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/muhammadsaadwork7-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <div className="h-4 w-px bg-zinc-800" />

          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-lg border border-white/5 bg-white/[0.01] text-zinc-500 hover:text-white hover:border-white/10 transition-all cursor-pointer flex items-center justify-center"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
