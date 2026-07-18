"use client";

import React from "react";
import { Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const highlightExperiences = [
    {
      role: "Aspiring Full-Stack Software Engineer",
      company: "Open for Opportunities / Freelance",
      duration: "Present",
      description: "Actively seeking a full-time position or internship to build high-scale React, Node.js, and Python systems. Building and contributing to open-source and personal projects.",
      icon: <Sparkles className="w-5 h-5 text-white" />
    },
    {
      role: "Full-Stack Project Developer",
      company: "Hands-on Development",
      duration: "2023 - Present",
      description: "Engineered comprehensive MERN bookstore with secure JWT user authentication, admin catalog CRUD controls, responsive client design, and MongoDB schemas. Recreated Airbnb core features utilizing express, EJS MVC patterns, and cloud media handling.",
      icon: <Code2 className="w-5 h-5 text-white" />
    },
    {
      role: "AI Integration Enthusiast",
      company: "Self-Driven Research",
      duration: "2024 - Present",
      description: "Experimented with computer vision (YOLO object detection, OpenCV image processing) and LLM agent concepts to embed intelligent prediction capabilities inside standard web architectures.",
      icon: <Cpu className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            02 / PROFESSIONAL JOURNEY
          </span>
          <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide">
            Experience
          </h2>
          <p className="mt-4 text-sm font-sans text-zinc-400 leading-relaxed max-w-xl">
            Currently a fresher but highly focused on practical, hands-on software development. Building complex application architectures and refining engineering standards.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="relative border-l border-white/10 ml-4 pl-8 sm:pl-12 space-y-12 max-w-4xl">
          {highlightExperiences.map((exp, i) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={exp.role + exp.company}
              className="relative"
            >
              {/* Timeline dot icon */}
              <div className="absolute -left-[53px] sm:-left-[69px] top-1.5 w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center">
                {exp.icon}
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-sans font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-sans text-zinc-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-amber-500/80 shrink-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-zinc-500 leading-relaxed tracking-wide">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
