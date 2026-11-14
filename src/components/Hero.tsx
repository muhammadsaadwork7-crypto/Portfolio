"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Mail, Briefcase, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleDownloadResume = () => {
    // Generate a simple text-based resume file for downloading
    const resumeText = `MUHAMMAD SAADULLAH - SOFTWARE ENGINEER
Email: muhammadsaad.work7@gmail.com
Phone: +92 3166033217
LinkedIn: https://www.linkedin.com/in/muhammad-saad-b40679406/
GitHub: https://github.com/muhammadsaadwork7-crypto

EDUCATION:
BS in Computer Science - COMSATS University Islamabad (Sahiwal Campus)
CGPA: 3.84 / 4.00 | 2023 - Present

PROJECTS:
1. Bookstore (MERN Stack)
   - GitHub: https://github.com/muhammadsaadwork7-crypto/Book-Store-Mern-Project
2. Airbnb Clone (Node.js, Express, MongoDB, EJS)
   - GitHub: https://github.com/muhammadsaadwork7-crypto/Airbnb-clone

TECHNICAL SKILLS:
React, Node.js, Express, MongoDB, TypeScript, Next.js, Tailwind, Python, AI Integrations
`;

    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Muhammad_Saadullah_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#0A0A0A] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-6 sm:px-12"
    >
      {/* Premium Luxury Glow in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-amber-500/10 via-zinc-500/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Main Container */}
      <div className="relative w-full max-w-7xl flex flex-col justify-between items-center z-10 flex-1">
        {/* Top Header Row (Hey, there) */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <h2 className="font-serif italic font-light text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none">
              Hey,
            </h2>
            {/* Status Badge */}
            <div className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-400">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Center Empty Space on Desktop, placeholder for absolute portrait */}
          <div className="hidden md:block" />

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-end text-right justify-self-end"
          >
            <h2 className="font-serif italic font-light text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none">
              there
            </h2>
            <p className="mt-6 max-w-[240px] text-xs font-sans text-zinc-400 tracking-wide leading-relaxed">
              Specialized in Full-Stack MERN, AI integration, and Scalable Web Apps.
            </p>
          </motion.div>
        </div>

        {/* Central Portrait Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative w-[280px] sm:w-[380px] lg:w-[440px] aspect-[4/5] my-6 md:-my-12 select-none group"
        >
          {/* Subtle frame border */}
          <div className="absolute inset-0 border border-white/10 rounded-3xl transition-transform duration-700 group-hover:scale-102 group-hover:border-white/20" />
          {/* Gold Glow inside frame */}
          <div className="absolute inset-4 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent opacity-50 rounded-2xl blur-lg" />
          
          <div className="absolute inset-2 overflow-hidden rounded-2xl bg-zinc-950">
            <Image
              src="/portrait.png"
              alt="Muhammad Saadullah"
              fill
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 380px, 280px"
              priority
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Bottom Title & Bio Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-4">
          {/* Big Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col"
          >
            <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-white leading-[0.9]">
              I AM SAADULLAH
            </h1>
            <p className="mt-2 text-sm font-sans font-bold uppercase tracking-widest text-zinc-500">
              SOFTWARE ENGINEER
            </p>
          </motion.div>

          {/* Bio & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-6 max-w-md md:items-end md:text-right"
          >
            <p className="text-sm font-sans text-zinc-400 tracking-wide leading-relaxed">
              Aspiring Full-Stack Software Engineer with hands-on experience building modern, scalable web applications and AI-powered solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#projects"
                className="text-[10px] font-sans font-bold uppercase tracking-wider bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-white/5"
              >
                <Briefcase className="w-3.5 h-3.5" /> View Projects
              </a>
              <a
                href="#contact"
                className="text-[10px] font-sans font-bold uppercase tracking-wider border border-white/10 hover:border-white text-white px-6 py-3 rounded-full bg-white/[0.02] hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Contact Me
              </a>
              <button
                onClick={handleDownloadResume}
                className="text-[10px] font-sans font-bold uppercase tracking-wider border border-white/10 hover:border-white text-white px-6 py-3 rounded-full bg-white/[0.02] hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" /> Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer z-10"
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-1">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 text-zinc-500" />
        </a>
      </motion.div>
    </section>
  );
}
