"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Sparkles, Code2, Cpu, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import webConceptLogo from "../../public/the-web-concept-logo.png";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  location?: string;
  badge?: string;
  icon?: React.ReactNode;
  logo?: string | StaticImageData;
  tags?: string[];
}

export default function Experience() {
  const highlightExperiences: ExperienceItem[] = [
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
    },
    {
      role: "Web Developer",
      company: "The Web Concept · Internship",
      duration: "Jul 2026 - September 2026 · 3 mos",
      location: "Faisalabad, Punjab, Pakistan · On-site",
      badge: "Present",
      description: "Working as a full-stack web developer intern at The Web Concept in Faisalabad, Pakistan. Building hands-on real-world web applications and scalable solutions with the organization, developing component-based architectures, responsive user interfaces, RESTful APIs, and strengthening core full-stack software engineering skills.",
      logo: webConceptLogo,
      tags: ["Full Stack", "React", "Node.js", "Express", "REST APIs", "Tailwind CSS", "Git"]
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
            Hands-on professional internship and project-based experience building scalable, modern web applications, robust REST APIs, and responsive architectures.
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
              <div className="absolute -left-13.25 sm:-left-17.25 top-1.5 w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center overflow-hidden">
                {exp.logo ? (
                  <div className="w-7 h-7 relative flex items-center justify-center">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  exp.icon
                )}
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/1 hover:border-white/10 hover:bg-white/2 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3.5">
                    {exp.logo && (
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-8 h-8 relative">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            fill
                            sizes="32px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-sans font-bold text-white tracking-wide">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/10">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-sans text-zinc-400 mt-1">
                        {exp.company}
                      </p>
                      {exp.location && (
                        <div className="flex items-center gap-1.5 text-[11px] font-sans text-zinc-500 mt-1">
                          <MapPin className="w-3 h-3 text-zinc-500 shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-amber-500/80 shrink-0 sm:self-start">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed tracking-wide">
                  {exp.description}
                </p>

                {/* Optional Tags */}
                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-sans font-medium text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
