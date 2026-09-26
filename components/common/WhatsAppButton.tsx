"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/common/icons/WhatsAppIcon";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "+8801747874773", // Replace with client's preferred WhatsApp number
  message = "Hello Nexvibe team! I'd like to inquire about your services.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block rounded-xl border border-emerald-500/20 bg-[var(--card)]/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>

      {/* Floating Button Container */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10" />

        {/* WhatsApp Official Icon */}
        <WhatsAppIcon className="h-7 w-7" />
      </motion.a>
    </motion.div>
  );
}
