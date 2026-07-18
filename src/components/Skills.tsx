"use client";

import React, { useState } from "react";
import { Terminal, Layout, Server, Database, Brain, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5 text-white" />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 75 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 }
    ]
  },
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5 text-white" />,
    skills: [
      { name: "React", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 80 },
      { name: "Redux Toolkit", level: 85 }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5 text-white" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5 text-white" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "AI Engineering",
    icon: <Brain className="w-5 h-5 text-white" />,
    skills: [
      { name: "LLM Concepts", level: 75 },
      { name: "AI Agents", level: 70 },
      { name: "YOLO (Object Detection)", level: 80 },
      { name: "OpenCV", level: 75 },
      { name: "PyTorch (Basic)", level: 60 }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5 text-white" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 }
    ]
  }
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<number | null>(0);

  return (
    <section id="skills" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            04 / TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide">
            Skills & Toolkit
          </h2>
          <p className="mt-4 text-sm font-sans text-zinc-400 leading-relaxed max-w-xl">
            A comprehensive overview of backend, frontend, database, and emerging AI technologies I work with regularly to build complete web products.
          </p>
        </div>

        {/* Desktop Split Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Category Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SKILL_GROUPS.map((group, index) => (
              <button
                key={group.category}
                onClick={() => setActiveGroup(index)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  activeGroup === index
                    ? "bg-white text-black border-white shadow-lg shadow-white/5"
                    : "bg-white/[0.01] border-white/5 text-zinc-400 hover:border-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                    activeGroup === index ? "bg-black/10 border-black/10 text-black" : "bg-white/5 border-white/10 text-white"
                  }`}>
                    {group.icon}
                  </div>
                  <span className="text-sm font-sans font-bold uppercase tracking-wider">
                    {group.category}
                  </span>
                </div>
                <span className="text-xs font-sans font-bold opacity-60">
                  {group.skills.length} Skills
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Interactive Progress Bars & Tags */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-white/5 bg-zinc-950/60 backdrop-blur-sm min-h-[400px]">
            {activeGroup !== null && (
              <motion.div
                key={activeGroup}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    {SKILL_GROUPS[activeGroup].icon}
                  </div>
                  <h3 className="text-base font-sans font-bold uppercase tracking-wider text-white">
                    {SKILL_GROUPS[activeGroup].category} Proficiency
                  </h3>
                </div>

                <div className="space-y-6">
                  {SKILL_GROUPS[activeGroup].skills.map((skill, i) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-sans tracking-wide">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-zinc-500 font-bold">{skill.level}%</span>
                      </div>
                      
                      {/* Outer bar */}
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        {/* Animated Inner bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                          className="h-full bg-white rounded-full relative"
                        >
                          <span className="absolute top-0 right-0 w-2 h-full bg-amber-400 opacity-50 blur-[2px]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Grid Tags preview at bottom */}
                <div className="pt-6 border-t border-white/5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 block mb-3">
                    Technology Tag Cloud
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_GROUPS[activeGroup].skills.map((skill) => (
                      <span
                        key={skill.name + "_tag"}
                        className="text-[10px] font-sans font-bold text-zinc-300 bg-white/5 border border-white/5 hover:border-white/20 px-3 py-1 rounded-full transition-all cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
