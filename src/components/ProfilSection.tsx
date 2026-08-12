"use client";

import { companyData } from "@/data/companyData";
import { Building2, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function ProfilSection() {
  const pr = companyData.profil;

  return (
    <section id="profil" className="py-24 bg-slate-50 dark:bg-[#09131d] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-amber-700 dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-amber-500/20 dark:border-[#FFB800]/30">
            {pr.heading}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {pr.title}
          </h2>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* Top 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: About Us */}
          <div className="bg-white dark:bg-[#0F2537] p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center mb-6 shadow-md">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
              Tentang Kami
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
              {pr.aboutUsText}
            </p>
          </div>

          {/* Card 2: Manajemen SDM */}
          <div className="bg-white dark:bg-[#0F2537] p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center mb-6 shadow-md">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
              Efisiensi Manajemen SDM
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
              {pr.managementText}
            </p>
          </div>

        </div>

        {/* Commitment Banner Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2537] to-[#1E3A5F] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-80 h-80 bg-[#FFB800]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#FFB800] text-[#0F2537] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>{pr.commitmentTitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pelayanan Terbaik & Memuaskan untuk Setiap Mitra Usaha
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              {pr.commitmentText}
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${companyData.whatsappNumbers[0].raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#FFB800] hover:bg-[#e0a200] text-[#0F2537] px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all duration-300"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Konsultasikan Kebutuhan Anda Sekarang</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
