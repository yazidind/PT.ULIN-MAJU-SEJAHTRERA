"use client";

import { companyData } from "@/data/companyData";
import { CheckCircle, Layers, TrendingUp, DollarSign } from "lucide-react";

export default function PendahuluanSection() {
  const p = companyData.pendahuluan;

  const pillarIcons = [Layers, TrendingUp, DollarSign];

  return (
    <section id="pendahuluan" className="py-24 bg-white dark:bg-[#08131d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-amber-700 dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-amber-500/20 dark:border-[#FFB800]/30">
            {p.heading}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {p.title}
          </h2>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 font-medium">
            <p className="text-base sm:text-lg leading-relaxed">
              {p.text1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {p.text2}
            </p>
            <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-white/5 border-l-4 border-amber-500 dark:border-[#FFB800] text-sm text-slate-900 dark:text-white font-semibold">
              "{p.pillarsIntro}"
            </div>
          </div>

          {/* Right Cards: 3 Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {p.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx] || CheckCircle;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0F2537] hover:bg-white dark:hover:bg-[#162E44] border border-slate-200 dark:border-white/10 hover:border-amber-400/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
