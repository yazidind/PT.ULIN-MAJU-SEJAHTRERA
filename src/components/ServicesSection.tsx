"use client";

import { useState } from "react";
import { companyData, ServiceItem } from "@/data/companyData";
import {
  Car,
  ShieldCheck,
  Sparkles,
  Headphones,
  UserCheck,
  CheckCircle,
  MessageSquare
} from "lucide-react";

export default function ServicesSection() {
  const s = companyData.services;
  const [activeTab, setActiveTab] = useState<string>("all");

  const iconMap: Record<string, any> = {
    Car,
    ShieldCheck,
    Sparkles,
    Headphones,
    UserCheck
  };

  const filteredServices =
    activeTab === "all"
      ? s.items
      : s.items.filter((item) => item.id === activeTab);

  return (
    <section id="layanan" className="py-24 bg-slate-50 dark:bg-[#09131d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold text-amber-700 dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-amber-500/20 dark:border-[#FFB800]/30">
            {s.heading}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            5 Sektor Jasa & Layanan Utama Perusahaan
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-medium">
            {s.introText}
          </p>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              activeTab === "all"
                ? "bg-[#0F2537] dark:bg-[#FFB800] text-white dark:text-[#0F2537] shadow-md scale-105"
                : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
            }`}
          >
            Semua Layanan
          </button>
          {s.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-[#0F2537] dark:bg-[#FFB800] text-white dark:text-[#0F2537] shadow-md scale-105"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const IconComp = iconMap[service.iconName] || CheckCircle;

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#0F2537] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-amber-400/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center transition-colors duration-300 shadow-md">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-extrabold text-amber-800 dark:text-[#FFB800] bg-amber-500/10 dark:bg-white/10 px-3 py-1 rounded-full border border-amber-500/20 dark:border-white/10">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                    {service.description}
                  </p>

                  <p className="text-xs text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-white/5 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 mb-6 font-medium italic">
                    "{service.subtext}"
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                        <CheckCircle className="w-4 h-4 text-amber-500 dark:text-[#FFB800] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <a
                    href={`https://wa.me/${companyData.whatsappNumbers[0].raw}?text=Halo%20PT%20Ulin%20Maju%20Sejahtera,%20saya%20ingin%20bertanya%20mengenai%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-[#0F2537] hover:bg-amber-500 dark:bg-[#FFB800] dark:hover:bg-amber-500 text-white dark:text-[#0F2537] dark:hover:text-white py-3 rounded-xl text-xs font-bold transition-colors duration-300 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Pesan / Konsultasi Layanan</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-white dark:bg-[#0F2537] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-md">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">
            {s.trustText}
          </p>
        </div>

      </div>
    </section>
  );
}
