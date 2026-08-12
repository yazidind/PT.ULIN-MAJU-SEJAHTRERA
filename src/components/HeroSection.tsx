"use client";

import { companyData } from "@/data/companyData";
import { ShieldCheck, MessageSquare, ArrowRight, Users, Clock, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-amber-50/50 via-slate-50 to-white dark:bg-none dark:bg-[#0F2537] overflow-hidden transition-colors duration-300">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] bg-[#FFB800]/15 dark:bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-100/60 dark:bg-[#1E3A5F]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 dark:bg-white/10 dark:border-[#FFB800]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#D97706] dark:text-[#FFB800]" />
              <span className="text-xs sm:text-sm font-bold text-[#B45309] dark:text-[#FFB800] uppercase tracking-wider">
                {companyData.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F2537] dark:text-white tracking-tight leading-tight">
              Solusi Penyedia Jasa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#0F2537] dark:from-[#FFB800] dark:via-[#FFD056] dark:to-[#F59E0B]">
                Tenaga Kerja Terpercaya
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-medium">
              {companyData.subTagline}. Kami menghadirkan SDM terlatih (Driver, Keamanan, Cleaning, Operator, Helper) yang siap meningkatkan produktivitas usaha Anda.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center space-x-2 bg-[#FFB800] hover:bg-[#e0a200] text-[#0F2537] px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Lihat Layanan Kami</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/${companyData.whatsappNumbers[0].raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-[#0F2537] dark:text-white border border-gray-300 dark:border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 text-[#D97706] dark:text-[#FFB800]" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* Quick Legal Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-1.5 bg-white dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] dark:text-[#FFB800]" />
                <span className="font-semibold">NIB: {companyData.nib}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] dark:text-[#FFB800]" />
                <span className="font-semibold">NPWP: {companyData.npwp}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Feature Card Box */}
              <div className="relative rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#1E3A5F] dark:to-[#0F2537] p-8 border border-gray-200 dark:border-[#FFB800]/30 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0F2537] dark:text-white">PT. Ulin Maju Sejahtera</h3>
                    <p className="text-xs text-[#D97706] dark:text-[#FFB800] mt-1 font-bold">Mitra Strategis Outsourcing</p>
                  </div>
                  <div className="h-16 sm:h-20 w-auto flex items-center justify-center shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={companyData.logoUrl}
                      alt="Logo PT. Ulin Maju Sejahtera"
                      className="h-full w-auto object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Key Stat Items */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-200 dark:border-white/10">
                    <div className="flex items-center space-x-2 text-[#D97706] dark:text-[#FFB800] mb-1">
                      <Users className="w-5 h-5" />
                      <span className="text-2xl font-black text-[#0F2537] dark:text-white">{companyData.trainedWorkersCount}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Tenaga Kerja Terlatih</p>
                  </div>

                  <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-200 dark:border-white/10">
                    <div className="flex items-center space-x-2 text-[#D97706] dark:text-[#FFB800] mb-1">
                      <Clock className="w-5 h-5" />
                      <span className="text-2xl font-black text-[#0F2537] dark:text-white">{companyData.experienceYears}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Tahun Pengalaman</p>
                  </div>
                </div>

                {/* Service Bullets */}
                <div className="space-y-2.5 pt-2">
                  {[
                    "Driver Profesional & Berizin SIM",
                    "Tenaga Keamanan Sertifikasi Gada Utama/Pratama",
                    "Spesialis Jasa Cleaning Service Indoor & Outdoor",
                    "Operator Produksi & Customer Service",
                    "Helper Perkantoran & Rumah Tangga"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 text-xs text-gray-700 dark:text-gray-200 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] dark:bg-[#FFB800]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center border-t border-gray-100 dark:border-white/10">
                  <span className="text-xs text-[#0F2537] dark:text-[#FFB800] font-bold tracking-wide">
                    Support System & Operasional 24 Jam
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
