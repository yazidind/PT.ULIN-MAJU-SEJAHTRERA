"use client";

import { companyData } from "@/data/companyData";
import { Shield, Crown, Briefcase } from "lucide-react";

export default function OrgStructureSection() {
  const org = companyData.organization;

  const topLeader = org.members.find((m) => m.level === 1);
  const directors = org.members.filter((m) => m.level === 2);
  const commissioner = org.members.find((m) => m.level === 3);

  return (
    <section id="organisasi" className="py-20 bg-white dark:bg-[#08131D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#D97706] dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-amber-500/30 dark:border-[#FFB800]/30">
            {org.heading}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2537] dark:text-white tracking-tight">
            Jajaran Manajemen & Direksi Perusahaan
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 font-medium">
            {org.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* Tree Diagram Visual */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Level 1: Direktur Utama */}
          {topLeader && (
            <div className="flex justify-center">
              <div className="bg-gradient-to-b from-[#0F2537] to-[#1E3A5F] text-white p-8 rounded-3xl border-2 border-[#FFB800] shadow-2xl text-center w-full max-w-md transform hover:scale-105 transition-transform duration-300 relative group">
                <div className="w-16 h-16 rounded-2xl bg-[#FFB800] text-[#0F2537] mx-auto flex items-center justify-center mb-4 shadow-lg">
                  <Crown className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black tracking-wider text-white">
                  {topLeader.name}
                </h3>
                <div className="inline-block bg-[#FFB800] text-[#0F2537] px-4 py-1 rounded-full text-xs font-bold mt-2 uppercase tracking-wide">
                  {topLeader.position}
                </div>
              </div>
            </div>
          )}

          {/* Connector Line */}
          <div className="w-0.5 h-8 bg-[#FFB800] mx-auto" />

          {/* Level 2: Direktur & Direktur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {directors.map((dir, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#0F2537] p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#FFB800] shadow-md text-center group hover:bg-white dark:hover:bg-[#162E44] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] mx-auto flex items-center justify-center mb-3 transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0F2537] dark:text-white">
                  {dir.name}
                </h4>
                <p className="text-xs font-semibold text-[#0F2537] dark:text-[#FFB800] uppercase mt-1 bg-[#FFB800] dark:bg-[#0F2537] px-3 py-1 rounded-full inline-block">
                  {dir.position}
                </p>
              </div>
            ))}
          </div>

          {/* Connector Line */}
          <div className="w-0.5 h-8 bg-[#FFB800] mx-auto" />

          {/* Level 3: Komisaris */}
          {commissioner && (
            <div className="flex justify-center">
              <div className="bg-slate-50 dark:bg-[#0F2537] p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#FFB800] shadow-md text-center w-full max-w-xs group hover:bg-white dark:hover:bg-[#162E44] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] mx-auto flex items-center justify-center mb-3 transition-colors">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0F2537] dark:text-white">
                  {commissioner.name}
                </h4>
                <p className="text-xs font-semibold text-[#0F2537] dark:text-[#FFB800] uppercase mt-1 bg-[#FFB800] dark:bg-[#0F2537] px-3 py-1 rounded-full inline-block">
                  {commissioner.position}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
