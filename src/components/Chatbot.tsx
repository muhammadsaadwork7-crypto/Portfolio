"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const PROFILE_DATA = {
  about: `Muhammad Saadullah is an aspiring Full-Stack Software Engineer specializing in building modern, scalable web applications and AI-powered solutions. He is currently pursuing a BS in Computer Science at COMSATS University Islamabad (Sahiwal Campus) and holds an excellent CGPA of 3.84/4.00.`,
  skills: `Saad has a versatile skill set:
• Languages: JavaScript, Python, C++, HTML, CSS
• Frontend: React, Tailwind CSS, Bootstrap, Redux
• Backend: Node.js, Express, REST APIs
• Databases: MongoDB, MySQL
• AI Concepts: LLMs, AI Agents, YOLO, OpenCV, PyTorch (basic)
• Tools: Git, GitHub, VS Code, Postman`,
  projects: `Here are the key projects:
1. **Bookstore MERN**: A full-stack web application featuring user auth, catalog, shopping cart, admin CRUD panel, and responsive UI. GitHub: [Bookstore MERN](https://github.com/muhammadsaadwork7-crypto/Book-Store-Mern-Project).
2. **Airbnb Clone**: A rental marketplace platform with listings and reviews CRUD, validation, and cloud image uploads. GitHub: [Airbnb Clone](https://github.com/muhammadsaadwork7-crypto/Airbnb-clone).`,
  contact: `You can reach Muhammad Saadullah through:
• Email: muhammadsaad.work7@gmail.com
• Phone: +92 3166033217
• LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/muhammad-saad-b40679406/)
• GitHub: [GitHub Profile](https://github.com/muhammadsaadwork7-crypto)`,
  services: `Saad offers professional services in:
• Web Development
• MERN Stack Development
• API Development
• UI/UX Front-End Development
• AI Tool Integration
• Debugging & Performance Optimization`,
  education: `Saad is currently studying:
• Bachelor of Science in Computer Science (BS CS)
• Institution: COMSATS University Islamabad (Sahiwal Campus)
• CGPA: 3.84 / 4.00
• Duration: 2023 - Present`
};

const SUGGESTIONS = [
  { label: "Tell me about Saad", key: "about" },
  { label: "What are his skills?", key: "skills" },
  { label: "Show me his projects", key: "projects" },
  { label: "How to contact him?", key: "contact" }
];

const generateId = () => Math.random().toString(36).substring(2, 9);
const createTimestamp = () => new Date();

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I'm Saad's AI Assistant. Ask me anything about his skills, education, projects, or contact details!",
      timestamp: createTimestamp()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const processResponse = (userInput: string) => {
    const query = userInput.toLowerCase();
    
    if (query.includes("about") || query.includes("who") || query.includes("saad") || query.includes("profile")) {
      return PROFILE_DATA.about;
    } else if (query.includes("skill") || query.includes("tech") || query.includes("languages") || query.includes("frontend") || query.includes("backend")) {
      return PROFILE_DATA.skills;
    } else if (query.includes("project") || query.includes("work") || query.includes("bookstore") || query.includes("airbnb")) {
      return PROFILE_DATA.projects;
    } else if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("linkedin") || query.includes("github")) {
      return PROFILE_DATA.contact;
    } else if (query.includes("service") || query.includes("offer") || query.includes("hire")) {
      return PROFILE_DATA.services;
    } else if (query.includes("education") || query.includes("university") || query.includes("gpa") || query.includes("college") || query.includes("study")) {
      return PROFILE_DATA.education;
    } else if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("greet")) {
      return "Hi there! How can I help you learn more about Muhammad Saadullah today? Feel free to ask about his projects, skills, or education.";
    } else {
      return "I don't have information about that. Please contact the owner directly using the Contact section.";
    }
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: generateId(),
      sender: "user",
      text: textToSend,
      timestamp: createTimestamp()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = processResponse(textToSend);
      const botMessage: Message = {
        id: generateId(),
        sender: "bot",
        text: responseText,
        timestamp: createTimestamp()
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 850);
  };

  // Helper function to render text with Markdown links
  const renderMessageText = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={match[2]}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline font-semibold hover:text-zinc-300 transition-colors"
        >
          {match[1]}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? (
      <span className="whitespace-pre-line">{parts}</span>
    ) : (
      <span className="whitespace-pre-line">{text}</span>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover:hidden"></span>
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[400px] h-[550px] rounded-2xl glass flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold tracking-wide text-white flex items-center gap-1">
                    Saad&apos;s Assistant <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                  </h3>
                  <p className="text-[10px] text-zinc-400">Offline Knowledge Base</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === "user" ? "bg-white/20 text-white" : "bg-white text-black"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl max-w-[78%] text-xs font-sans leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-white/10 text-white rounded-tr-none border border-white/5"
                        : "bg-zinc-900 text-zinc-300 rounded-tl-none border border-white/5"
                    }`}
                  >
                    {renderMessageText(msg.text)}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-2xl rounded-tl-none border border-white/5 max-w-[78%] flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 flex flex-wrap gap-2 bg-black/20">
                {SUGGESTIONS.map((sug) => (
                  <button
                    key={sug.key}
                    onClick={() => handleSendMessage(sug.label)}
                    className="text-[11px] font-sans px-2.5 py-1 rounded-full border border-white/10 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer"
                  >
                    {sug.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-white/10 flex items-center gap-2 bg-black/40"
            >
              <input
                type="text"
                placeholder="Ask something about Saad..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-sans text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-xl bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:hover:bg-white transition-all flex items-center justify-center cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
