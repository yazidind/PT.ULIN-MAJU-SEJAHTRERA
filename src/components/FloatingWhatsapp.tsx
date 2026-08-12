"use client";

import { companyData } from "@/data/companyData";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsapp() {
  const wa = companyData.whatsappNumbers[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 group">
      {/* Tooltip hint */}
      <span className="hidden sm:inline-block bg-[#0F2537] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xl border border-[#FFB800]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Konsultasi Jasa via WhatsApp
      </span>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${wa.raw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative gold-glow"
        aria-label="Chat WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFB800] rounded-full border-2 border-[#0F2537] animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFB800] rounded-full border-2 border-[#0F2537]" />
      </a>
    </div>
  );
}
