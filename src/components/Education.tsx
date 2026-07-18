"use client";

import React from "react";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            03 / ACADEMIC FOUNDATION
          </span>
          <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide">
            Education
          </h2>
        </div>

        {/* Elegant Card Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900/50 to-black overflow-hidden group hover:border-white/20 transition-all duration-500"
          >
            {/* Ambient background glow inside card */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-amber-500/5 rounded-full blur-[80px] group-hover:bg-amber-500/10 transition-all duration-500" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Institution and Icon column */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30 text-amber-400 bg-amber-500/5">
                    Active Student
                  </span>
                  <h3 className="text-xl font-sans font-extrabold text-white tracking-wide mt-3 leading-snug">
                    COMSATS University Islamabad
                  </h3>
                  <p className="text-xs font-sans text-zinc-400 mt-1 font-medium">
                    Sahiwal Campus
                  </p>
                </div>
              </div>

              {/* Course details column */}
              <div className="md:col-span-7 flex flex-col gap-6 md:border-l md:border-white/5 md:pl-8">
                
                {/* Degree Title */}
                <div>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    DEGREE PROGRAM
                  </span>
                  <h4 className="text-base font-sans font-bold text-white tracking-wide">
                    Bachelor of Science in Computer Science (BS CS)
                  </h4>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-zinc-500" />
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-zinc-500 block">
                      DURATION
                    </span>
                    <p className="text-xs font-sans text-zinc-300 font-medium">
                      2023 – Present
                    </p>
                  </div>
                </div>

                {/* Score */}
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-zinc-500" />
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-zinc-500 block">
                      ACADEMIC PERFORMANCE
                    </span>
                    <p className="text-xs font-sans text-zinc-300 font-medium">
                      CGPA: <strong className="text-white text-sm font-semibold">3.84</strong> / 4.00
                    </p>
                  </div>
                </div>

                {/* Core Studies */}
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-zinc-500 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                      CORE COURSEWORK
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {["Data Structures", "Algorithms", "Database Systems", "Object-Oriented Programming", "Software Engineering"].map((course) => (
                        <span
                          key={course}
                          className="text-[10px] font-sans font-medium text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
