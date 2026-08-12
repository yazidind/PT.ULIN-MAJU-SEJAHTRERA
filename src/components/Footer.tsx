"use client";

import { companyData } from "@/data/companyData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#0A1A27] text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={companyData.logoUrl}
                alt="Logo PT. Ulin Maju Sejahtera"
                className="h-12 w-auto object-contain"
              />
              <span className="text-lg font-extrabold text-[#0F2537] dark:text-white tracking-tight">
                PT. ULIN MAJU SEJAHTERA
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {companyData.subTagline}. Perusahaan penyedia & pengelola tenaga kerja terpercaya di Indonesia.
            </p>
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 font-medium">
              <p>NIB: <span className="text-[#0F2537] dark:text-white font-mono font-bold">{companyData.nib}</span></p>
              <p>NPWP: <span className="text-[#0F2537] dark:text-white font-mono font-bold">{companyData.npwp}</span></p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0F2537] dark:text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {companyData.navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#D97706] dark:hover:text-[#FFB800] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0F2537] dark:text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {companyData.services.items.map((srv) => (
                <li key={srv.id}>
                  <a href="#layanan" className="hover:text-[#D97706] dark:hover:text-[#FFB800] transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address Brief */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0F2537] dark:text-white uppercase tracking-wider">
              Lokasi Perusahaan
            </h4>
            <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
              {companyData.addressMain}
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${companyData.whatsappNumbers[0].raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-extrabold text-[#D97706] dark:text-[#FFB800] hover:underline"
              >
                Obrolan WhatsApp &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} PT. ULIN MAJU SEJAHTERA. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-white dark:bg-white/5 hover:bg-[#FFB800] text-[#0F2537] dark:text-white dark:hover:text-[#0F2537] px-4 py-2 rounded-xl transition-all shadow-sm border border-gray-200 dark:border-transparent font-bold"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
