"use client";

import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger canvas-confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffffff", "#d4af37", "#a1a1aa"]
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Hide success notification after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            08 / GET IN TOUCH
          </span>
          <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide">
            Contact
          </h2>
          <p className="mt-4 text-sm font-sans text-zinc-400 leading-relaxed max-w-xl">
            Have a project in mind, want to hire me, or just say hello? Fill out the form or reach out directly.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-white">
              Contact Details
            </h3>

            {/* Info Cards */}
            <div className="space-y-4">
              <a
                href="mailto:muhammadsaad.work7@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500">
                    Email Address
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-white font-medium mt-0.5">
                    muhammadsaad.work7@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+923166033217"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500">
                    Phone Contact
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-white font-medium mt-0.5">
                    +92 3166033217
                  </p>
                </div>
              </a>
            </div>

            {/* Social Connect */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-white">
                Social Accounts
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/muhammad-saad-b40679406/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </a>
                <a
                  href="https://github.com/muhammadsaadwork7-crypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                >
                  <Github className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-white/5 bg-zinc-950/60 backdrop-blur-sm relative overflow-hidden">
              <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-white mb-6 border-b border-white/5 pb-4">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-sans font-bold uppercase tracking-wider text-zinc-500">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-sans font-bold uppercase tracking-wider text-zinc-500">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-sans font-bold uppercase tracking-wider text-zinc-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Collaboration Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-sans font-bold uppercase tracking-wider text-zinc-500">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full text-xs font-sans font-bold uppercase tracking-wider bg-white text-black py-4 rounded-xl hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : submitted ? (
                    <>
                      Message Sent <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </>
                  ) : (
                    <>
                      Submit Message <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Submitted toast notice inside card */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 right-4 bg-zinc-900 border border-zinc-800 text-white rounded-xl p-3 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px] font-sans font-medium">Thank you! I will respond shortly.</span>
                </motion.div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
