"use client";

import React from "react";
import { Code2, Database, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const focusAreas = [
    {
      icon: <Code2 className="w-5 h-5 text-white" />,
      title: "Full-Stack Development",
      description: "Developing end-to-end applications with clean separation of concerns and robust routing."
    },
    {
      icon: <Database className="w-5 h-5 text-white" />,
      title: "MERN Stack Applications",
      description: "Building production-grade web solutions using React, Node.js, Express, and MongoDB."
    },
    {
      icon: <Brain className="w-5 h-5 text-white" />,
      title: "AI Integration",
      description: "Integrating intelligent LLMs, AI agents, and computer vision modules into web apps."
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2">
                01 / ABOUT ME
              </span>
              <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide mb-8">
                Building the future with code and intelligence.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-sm sm:text-base font-sans text-zinc-400 leading-relaxed tracking-wide"
            >
              <p>
                I am Muhammad Saadullah, an aspiring Full-Stack Software Engineer with a passion for designing and building highly scalable, modern, and user-centric web applications. Currently completing my Bachelor&apos;s degree in Computer Science at COMSATS University, I balance academic excellence (CGPA: 3.81/4.00) with extensive hands-on project creation.
              </p>
              <p>
                My engineering philosophy is simple: write clean, maintainable code, model scalable schemas, and utilize cutting-edge AI technologies to build products that solve real-world problems. Whether constructing detailed APIs, developing smooth responsive UIs, or configuring complex database architectures, I strive for visual and structural perfection.
              </p>
            </motion.div>

            {/* Focus Areas List */}
            <div className="mt-12 w-full space-y-6">
              <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-white">
                Core Engineering Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {focusAreas.map((area, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={area.title}
                    className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/1 hover:border-white/10 hover:bg-white/2 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-sans font-semibold text-white tracking-wide">
                        {area.title}
                      </h4>
                      <p className="mt-1 text-xs font-sans text-zinc-500 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Graphic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative aspect-4/5 w-full max-w-105 lg:max-w-none mx-auto group"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-white/5 rounded-3xl blur-2xl opacity-50" />
            
            {/* Visual Frame */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl bg-zinc-950/60 backdrop-blur-sm overflow-hidden flex flex-col p-6 sm:p-8 justify-between hover:border-white/20 transition-colors duration-500">
              
              {/* Top Row: Mini Window Controls */}
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-zinc-600">
                  SYSTEM_STATUS: ACTIVE
                </span>
              </div>

              {/* Middle Section: Abstract Code Layout */}
              <div className="flex-1 flex flex-col justify-center gap-4 py-8">
                <div className="h-2 w-1/3 bg-zinc-800 rounded-full" />
                <div className="h-2.5 w-3/4 bg-white/20 rounded-full" />
                <div className="h-2.5 w-1/2 bg-white/10 rounded-full" />
                <div className="h-2 w-5/6 bg-zinc-800 rounded-full" />
                <div className="h-2 w-2/3 bg-zinc-800 rounded-full" />
                <div className="h-2.5 w-2/5 bg-amber-500/20 rounded-full" />
                <div className="h-2 w-4/5 bg-zinc-800 rounded-full" />
              </div>

              {/* Bottom Section: Stat Cards */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                <div>
                  <h5 className="text-[10px] font-sans font-bold uppercase tracking-wider text-zinc-500">
                    CURRENT STATE
                  </h5>
                  <p className="mt-1 font-sans text-xs text-white leading-relaxed">
                    COMSATS BSCS Student
                  </p>
                </div>
                <div>
                  <h5 className="text-[10px] font-sans font-bold uppercase tracking-wider text-zinc-500">
                    CUMULATIVE GPA
                  </h5>
                  <p className="mt-1 font-sans text-xs text-white leading-relaxed font-bold">
                    3.81 / 4.00
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
