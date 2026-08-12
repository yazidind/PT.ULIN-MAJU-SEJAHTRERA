"use client";

import { companyData } from "@/data/companyData";
import { Award, Clock, Users, Headset } from "lucide-react";

export default function AdvantagesSection() {
  const advs = companyData.advantages;

  const iconMap: Record<string, any> = {
    Award,
    Clock,
    Users,
    Headset
  };

  return (
    <section id="keunggulan" className="py-24 bg-white dark:bg-[#08131d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-amber-700 dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-amber-500/20 dark:border-[#FFB800]/30">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Keunggulan PT. Ulin Maju Sejahtera
          </h2>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advs.map((adv, idx) => {
            const IconComp = iconMap[adv.iconName] || Award;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#0F2537] p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg group-hover:scale-110">
                  <IconComp className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
