"use client";

import { companyData } from "@/data/companyData";
import { ShieldAlert, Heart, Share2, Scale, Star, Handshake, Lock } from "lucide-react";

export default function ValuesSection() {
  const v = companyData.companyValues;

  const valueIcons = [ShieldAlert, Heart, Share2, Scale, Star, Handshake, Lock];

  return (
    <section id="nilai" className="py-20 bg-slate-50 dark:bg-[#0F2537] text-[#0F2537] dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FFB800]/40 to-transparent" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#D97706] dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-amber-500/30 dark:border-[#FFB800]/30">
            {v.title}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F2537] dark:text-white tracking-tight">
            {v.slogan}
          </h2>
          <p className="text-[#D97706] dark:text-[#FFB800] font-bold text-lg mt-3 italic">
            "{v.governanceText}"
          </p>
          <div className="w-24 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* 7 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {v.items.map((item, idx) => {
            const IconComp = valueIcons[idx] || Star;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-white/5 hover:bg-amber-50/50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-[#FFB800]/50 p-6 rounded-3xl backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2537] text-[#FFB800] font-black text-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {item.letter}
                  </div>
                  <IconComp className="w-6 h-6 text-[#D97706] dark:text-[#FFB800]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2537] dark:text-white mb-2 group-hover:text-[#D97706] dark:group-hover:text-[#FFB800] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Bonus Highlight Card */}
          <div className="bg-gradient-to-br from-[#FFB800] to-[#F59E0B] p-6 rounded-3xl text-[#0F2537] flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2 opacity-80">
                Prinsip Utama
              </span>
              <h3 className="text-2xl font-black mb-2">We Make People Our Priority</h3>
              <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-95">
                Mengedepankan hubungan kemitraan jangka panjang dan kesejahteraan seluruh tenaga kerja.
              </p>
            </div>
            <div className="pt-4 font-extrabold text-sm border-t border-[#0F2537]/20">
              PT. ULIN MAJU SEJAHTERA
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
