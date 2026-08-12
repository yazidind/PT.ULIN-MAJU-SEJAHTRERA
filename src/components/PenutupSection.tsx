"use client";

import { companyData } from "@/data/companyData";
import { Quote, MessageSquare } from "lucide-react";

export default function PenutupSection() {
  const p = companyData.penutup;

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#08131D] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-[#0F2537] rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[#FFB800]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center shadow-md">
              <Quote className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2537] dark:text-white">
              {p.heading}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
              {p.text1}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
              {p.text2}
            </p>

            <div className="p-5 rounded-2xl bg-[#0F2537] dark:bg-[#162E44] text-[#FFB800] text-sm font-semibold italic text-center border border-[#FFB800]/20 shadow-inner">
              "{p.closingMessage}"
            </div>

            <div className="pt-4 flex justify-center">
              <a
                href={`https://wa.me/${companyData.whatsappNumbers[0].raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#FFB800] hover:bg-[#e0a200] text-[#0F2537] px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Mulai Kerja Sama Sekarang</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
