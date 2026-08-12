"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center space-x-2 group animate-bounce-short">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-2xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] border border-[#FFB800]/40 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Kembali ke Atas"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
      <span className="hidden sm:inline-block bg-[#0F2537] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-[#FFB800]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Kembali ke Atas
      </span>
    </div>
  );
}
