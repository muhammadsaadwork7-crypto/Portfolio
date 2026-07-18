"use client";

import React from "react";
import { Laptop, Database, Globe, Layers, Cpu, Bug } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Web Development",
    description: "Building responsive, modern, and high-performance websites using semantic layouts and standardized styling systems."
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "MERN Stack Development",
    description: "Engineering single-page applications and custom software products leveraging MongoDB, Express, React, and Node.js."
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "API Development",
    description: "Designing RESTful APIs and secure server routes using JSON Web Tokens (JWT), validation schemas, and database indices."
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    title: "UI Development",
    description: "Creating premium user interfaces with interactive components, smooth micro-animations, and structured responsiveness."
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: "AI Integration",
    description: "Connecting custom machine learning concepts, object-detection APIs, and LLMs into client-facing web architectures."
  },
  {
    icon: <Bug className="w-6 h-6 text-white" />,
    title: "Debugging & Optimization",
    description: "Troubleshooting complex codebases, refactoring monolithic code, and optimizing database queries for peak throughput."
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            05 / WHAT I CAN HELP YOU WITH
          </span>
          <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide">
            Services
          </h2>
          <p className="mt-4 text-sm font-sans text-zinc-400 leading-relaxed max-w-xl">
            Providing end-to-end full-stack services with modern technology stacks. Focused on delivering premium code quality and exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={service.title}
              className="p-8 rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm flex flex-col justify-between aspect-square group hover:border-white/20 hover:bg-zinc-900/30 transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-black">
                <span className="group-hover:text-black transition-colors duration-300">
                  {React.cloneElement(service.icon, {
                    className: "w-6 h-6 text-white group-hover:text-black transition-colors duration-300"
                  })}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mt-8">
                <h3 className="text-base sm:text-lg font-sans font-bold text-white tracking-wide transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-sans text-zinc-500 leading-relaxed tracking-wide group-hover:text-zinc-400 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative Number/Arrow */}
              <div className="flex justify-end pt-4 border-t border-white/5 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">
                  Active
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
