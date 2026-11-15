"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "Who are you and what do you do?",
    answer: "I am Muhammad Saadullah, an aspiring Full-Stack Software Engineer. I am currently pursuing my Bachelor's degree in Computer Science at COMSATS University Islamabad (Sahiwal Campus) while building production-grade web systems and AI tools."
  },
  {
    question: "What primary technologies do you use in your projects?",
    answer: "My core technology stack revolves around the MERN architecture: MongoDB, Express.js, React, and Node.js. I also write scripts in Python, build scalable React codebases using TypeScript/Next.js, and style applications with Tailwind CSS."
  },
  {
    question: "Are you available for job opportunities or freelance contracts?",
    answer: "Yes, I am actively seeking full-time roles, internships, and freelance development projects. Having maintaining an excellent academic record alongside building robust side projects, I am ready to bring value to modern engineering teams."
  },
  {
    question: "Do you specialize in MERN stack development?",
    answer: "Yes, MERN stack is my specialty. I build comprehensive MERN applications from scratch, designing database models in MongoDB, creating REST APIs in Express/Node, and building highly interactive responsive front-ends in React."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 w-full bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            07 / FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif italic font-light text-4xl sm:text-5xl text-white tracking-wide">
            Questions & Answers
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span className="text-sm sm:text-base font-sans font-semibold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-zinc-400">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed tracking-wide border-t border-white/5 mt-px">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
