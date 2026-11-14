"use client";

import React from "react";
import Image from "next/image";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Bookstore Application",
    category: "Full-Stack MERN Stack",
    description: "A complete production-ready digital bookstore platform featuring secure user accounts, cart functionality, ordering pathways, and a robust admin dashboard for library administration.",
    image: "/bookstore.png",
    github: "https://github.com/muhammadsaadwork7-crypto/Book-Store-Mern-Project",
    live: "#",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"],
    features: [
      "JWT-based User Authentication & Profiles",
      "Full Book Catalog with search & filter systems",
      "Interactive Shopping Cart & Order Checkout",
      "User Personal Wishlist management",
      "Admin Panel with comprehensive CRUD for books & orders",
      "Fully responsive mobile-optimized UI layout"
    ]
  },
  {
    title: "Airbnb Clone",
    category: "Node.js MVC Web Application",
    description: "An elegant home rental marketplace clone utilizing server-side rendering, featuring property uploads, reviews, user validations, and custom media workflows.",
    image: "/airbnb.png",
    github: "https://github.com/muhammadsaadwork7-crypto/Airbnb-clone",
    live: "#",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS Templates", "Cloudinary SDK", "Joi Validation"],
    features: [
      "User signups & cookie-based session management",
      "Property Listings with full CRUD controls",
      "Dynamic Reviews & star rating workflows",
      "Rigorous server-side schema & form validation",
      "Cloud image file uploads & storage management",
      "Comprehensive error boundary handlers"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            06 / SELECTED WORKS
          </span>
          <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide">
            Featured Projects
          </h2>
          <p className="mt-4 text-sm font-sans text-zinc-400 leading-relaxed max-w-xl">
            A showcase of full-stack engineering work, demonstrating robust system architecture, database modeling, and interactive interfaces.
          </p>
        </div>

        {/* Projects List - Stacked premium cards */}
        <div className="space-y-24 sm:space-y-32">
          {PROJECTS.map((proj, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              key={proj.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left/Right swapping layout */}
              <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="text-xs font-sans font-bold text-amber-500/80 uppercase tracking-widest">
                  {proj.category}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-white uppercase leading-none">
                  {proj.title}
                </h3>
                
                <p className="text-sm font-sans text-zinc-400 leading-relaxed tracking-wide">
                  {proj.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 py-4 border-y border-white/5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 block">
                    Core Functionality
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {proj.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span className="text-xs font-sans text-zinc-400 leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-sans font-medium text-zinc-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-sans font-bold uppercase tracking-wider bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-white/5"
                  >
                    <Github className="w-3.5 h-3.5" /> View GitHub Code
                  </a>
                  {proj.live !== "#" && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-sans font-bold uppercase tracking-wider border border-white/10 hover:border-white text-white px-6 py-3 rounded-full bg-white/[0.02] hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Mockup Column */}
              <div className={`lg:col-span-6 relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 backdrop-blur-sm group hover:border-white/20 transition-all duration-500 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(min-width: 1376px) 568px, (min-width: 1024px) calc(50vw - 72px), (min-width: 640px) calc(100vw - 96px), calc(100vw - 48px)"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
