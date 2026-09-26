"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, RefreshCw, User, ExternalLink, MessageCircle } from "lucide-react";
import WhatsAppIcon from "@/components/common/icons/WhatsAppIcon";

function renderMarkdown(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-sky-400 underline hover:text-sky-300">$1</a>')
    .replace(/^---$/gm, '<hr class="border-white/10 my-3" />')
    .replace(/\n/g, "<br />");
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "👋 Hello! I am Nexvibe AI. How can I help you today? Ask me about our web development, mobile apps, pricing packages, or custom digital solutions!",
  },
];

const SUGGESTED_QUESTIONS = [
  "💰 What are your pricing plans?",
  "🚀 What services do you offer?",
  "📱 Can you build mobile apps?",
  "💬 Connect with founder on WhatsApp",
];

const WHATSAPP_URL =
  "https://wa.me/8801747874773?text=Hi%20Nexvibe!%20I%20would%20like%20to%20discuss%20a%20project.";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idCounterRef = useRef(100);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleMainClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsMenuOpen((prev) => !prev);
  };

  const handleOpenChat = () => {
    setIsMenuOpen(false);
    setIsOpen(true);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setInput("");
  };

  const sendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend ?? input).trim();
    if (!messageContent || isLoading) return;

    idCounterRef.current += 1;
    const userMsgId = `usr-${idCounterRef.current}`;
    const userMessage: Message = {
      id: userMsgId,
      role: "user",
      content: messageContent,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      const reply =
        data.reply ||
        "I'm here to help! Feel free to ask about our web development, mobile apps, or pricing.";

      idCounterRef.current += 1;
      const botMsgId = `bot-${idCounterRef.current}`;
      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          role: "assistant",
          content: reply,
        },
      ]);
    } catch {
      idCounterRef.current += 1;
      const botMsgId = `bot-${idCounterRef.current}`;
      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          role: "assistant",
          content:
            "Sorry, I had trouble connecting. You can talk directly with our team on WhatsApp at +8801747874773!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  };

  return (
    <>
      {/* Click-away backdrop while the speed dial is expanded */}
      {isMenuOpen && !isOpen && (
        <button
          type="button"
          aria-label="Close quick actions"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 cursor-default"
        />
      )}

      {/* Floating Speed-Dial Launcher */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isMenuOpen && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex flex-col items-end gap-3"
            >
              {/* AI Chat action */}
              <motion.button
                type="button"
                onClick={handleOpenChat}
                initial={{ opacity: 0, y: 12, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.05 }}
                aria-label="Open AI chat"
                className="group flex items-center gap-3"
              >
                <span className="rounded-xl border border-sky-500/20 bg-[#0c1222]/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md whitespace-nowrap">
                  Nexvibe AI
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 via-indigo-600 to-cyan-400 text-white shadow-[0_4px_20px_rgba(14,165,233,0.4)] transition-transform duration-200 group-hover:scale-105">
                  <Bot className="h-6 w-6" />
                </span>
              </motion.button>

              {/* WhatsApp action */}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 12, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                aria-label="Chat on WhatsApp"
                className="group flex items-center gap-3"
              >
                <span className="rounded-xl border border-emerald-500/20 bg-[#0c1222]/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md whitespace-nowrap">
                  WhatsApp
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 group-hover:scale-105">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Trigger */}
<motion.button
  type="button"
  onClick={handleMainClick}
  aria-label={isOpen || isMenuOpen ? "Close quick actions" : "Open quick actions"}
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.94 }}
  className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 via-indigo-600 to-cyan-400 text-white shadow-[0_4px_25px_rgba(14,165,233,0.45)] hover:shadow-[0_6px_30px_rgba(14,165,233,0.65)] transition-shadow duration-300 focus:outline-none"
>
  {/* বাটন বন্ধ থাকলে ব্যাকগ্রাউন্ডে পালস/রিপল ইফেক্ট চলবে */}
  {!(isOpen || isMenuOpen) && (
    <span className="pointer-events-none absolute -inset-1 rounded-full bg-cyan-400 opacity-60 animate-ping" />
  )}

  {isOpen || isMenuOpen ? (
    <X className="relative z-10 h-6 w-6 transition-transform duration-200" />
  ) : (
    <div className="relative z-10 flex items-center justify-center">
      <MessageCircle className="h-6 w-6 text-white" />
    </div>
  )}
</motion.button>
        
      </div>

      {/* Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="fixed bottom-6 right-4 sm:right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[390px] h-[580px] max-h-[85vh] flex flex-col rounded-2xl border border-white/10 bg-[#090d16]/95 backdrop-blur-2xl shadow-2xl overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-gradient-to-r from-sky-950/60 via-indigo-950/40 to-[#090d16]">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md">
                  <Bot className="h-5 w-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#090d16]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      Nexvibe AI
                    </h3>
                    <span className="inline-flex items-center rounded-md bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-medium text-sky-400 border border-sky-500/20">
                      Assistant
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Ready to help
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
              {messages.map((m) => {
                const isAssistant = m.role === "assistant";
                return (
                  <div
                    key={m.id}
                    className={`flex items-start gap-2.5 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && (
                      <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-lg bg-sky-600/20 border border-sky-500/30 text-sky-400">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                        isAssistant
                          ? "bg-white/[0.06] text-slate-200 border border-white/5 shadow-inner"
                          : "bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium shadow-md shadow-sky-900/30"
                      }`}
                    >
                      <div
                        className="whitespace-pre-wrap break-words"
                        dangerouslySetInnerHTML={{
                          __html: isAssistant ? renderMarkdown(m.content) : m.content,
                        }}
                      />
                    </div>

                    {!isAssistant && (
                      <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-lg bg-indigo-600/30 border border-indigo-500/30 text-indigo-300">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-600/20 border border-sky-500/30 text-sky-400">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl bg-white/[0.06] px-4 py-3 border border-white/5">
                    <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips (when only initial message is visible or after reply) */}
            {messages.length <= 3 && !isLoading && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void sendMessage(question)}
                    className="text-[11px] rounded-full border border-sky-500/20 bg-sky-500/5 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-sky-500/15 hover:border-sky-500/40 transition-all text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* WhatsApp Direct Banner */}
            <div className="px-3 py-1.5 bg-emerald-500/10 border-t border-b border-emerald-500/20 flex items-center justify-between text-[11px]">
              <span className="text-emerald-300 font-medium">Need urgent human consultation?</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline font-semibold flex items-center gap-1"
              >
                WhatsApp Us <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-[#060910]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void sendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Nexvibe AI anything..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/60 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
