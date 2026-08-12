"use client";

import { companyData } from "@/data/companyData";
import { Eye, Target, Compass, Award } from "lucide-react";

export default function VisionMissionSection() {
  const vm = companyData.visionMission;

  const items = [
    {
      data: vm.visi,
      icon: Eye
    },
    {
      data: vm.misi,
      icon: Target
    },
    {
      data: vm.fokus,
      icon: Compass
    },
    {
      data: vm.integritas,
      icon: Award
    }
  ];

  return (
    <section id="visimisi" className="py-24 bg-white dark:bg-[#08131d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-amber-700 dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-amber-500/20 dark:border-[#FFB800]/30">
            Visi, Misi & Prinsip
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Landasan Utama Perusahaan Kami
          </h2>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#0F2537] hover:bg-white dark:hover:bg-[#162E44] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-amber-400/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center mb-6 transition-colors duration-300 shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-wider uppercase">
                    {item.data.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                    {item.data.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="w-8 h-1 bg-[#FFB800] rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
