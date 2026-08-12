"use client";

import { useState, useEffect } from "react";
import { companyData } from "@/data/companyData";
import { Menu, X, Shield, Phone, MessageSquare } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  // Menu navigasi utama desktop yang lega, rapi, dan bebas bentrokan
  const desktopNavLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Profil", href: "#profil" },
    { name: "Layanan", href: "#layanan" },
    { name: "Legalitas", href: "#legalitas" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = companyData.navLinks.map((link) => link.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveHash(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#09131d]/95 backdrop-blur-xl shadow-md py-2.5 border-b border-slate-200/90 dark:border-[#FFB800]/20"
          : "bg-white/90 dark:bg-[#09131d]/90 backdrop-blur-lg py-3.5 border-b border-slate-200/70 dark:border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center space-x-3 group shrink-0">
            {companyData.logoUrl && !logoError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={companyData.logoUrl}
                alt="Logo PT. Ulin Maju Sejahtera"
                onError={() => setLogoError(true)}
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFB800] to-[#F59E0B] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-6 h-6 text-[#0F2537]" />
              </div>
            )}
            <div className="hidden sm:block">
              <span className="text-base lg:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white block leading-tight whitespace-nowrap">
                PT. ULIN MAJU SEJAHTERA
              </span>
              <span className="text-[10px] lg:text-[11px] text-amber-600 dark:text-[#FFB800] font-bold tracking-wide block">
                Penyedia Jasa Tenaga Kerja
              </span>
            </div>
          </a>

          {/* Menu Navigasi Desktop Rapi & Bebas Bentrokan */}
          <nav className="hidden lg:flex items-center space-x-1 border border-slate-200 dark:border-white/10 rounded-2xl px-3 py-1.5 bg-slate-50/80 dark:bg-white/5 shadow-inner">
            {desktopNavLinks.map((link, idx) => {
              const isActive = activeHash === link.href;

              return (
                <div key={link.href} className="flex items-center">
                  <a
                    href={link.href}
                    onClick={() => setActiveHash(link.href)}
                    className={`relative py-1 px-3 text-xs lg:text-sm font-bold whitespace-nowrap transition-all duration-200 transform hover:scale-105 origin-center ${
                      isActive
                        ? "text-amber-600 dark:text-[#FFB800] font-black"
                        : "text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-[#FFB800]"
                    }`}
                  >
                    <span>{link.name}</span>
                    
                    {/* Active Underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[3px] bg-amber-500 dark:bg-[#FFB800] rounded-full shadow-sm animate-fadeIn" />
                    )}
                  </a>

                  {/* Vertical Divider Line */}
                  {idx < desktopNavLinks.length - 1 && (
                    <span className="h-3.5 w-px bg-slate-300 dark:bg-white/20 mx-1 shrink-0" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Tombol Aksi Kanan (Mode Theme & WhatsApp Button) */}
          <div className="flex items-center space-x-3 shrink-0">
            <ThemeToggle />

            <a
              href={`https://wa.me/${companyData.whatsappNumbers[0].raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#FFB800] to-[#F59E0B] hover:from-[#e0a200] hover:to-[#d97706] text-[#0F2537] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi WA</span>
            </a>

            {/* Mobile / Tablet Menu Toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Lengkap 11 Sub-Menu) */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#09131d] border-b border-slate-200 dark:border-[#FFB800]/20 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-fadeIn max-h-[80vh] overflow-y-auto">
          {companyData.navLinks.map((link, idx) => {
            const isActive = activeHash === link.href;

            return (
              <div key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveHash(link.href);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm font-extrabold transition-all duration-200 ${
                    isActive
                      ? "text-amber-600 dark:text-[#FFB800] bg-amber-50 dark:bg-white/10 rounded-xl"
                      : "text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-[#FFB800]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-[#FFB800]" />}
                </a>
                {idx < companyData.navLinks.length - 1 && (
                  <div className="h-px bg-slate-100 dark:bg-white/5 my-1" />
                )}
              </div>
            );
          })}

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col space-y-2">
            <a
              href={`https://wa.me/${companyData.whatsappNumbers[0].raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#FFB800] text-[#0F2537] px-4 py-3 rounded-xl text-sm font-bold text-center shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi via WhatsApp ({companyData.whatsappNumbers[0].display})</span>
            </a>
            <a
              href={`tel:${companyData.phoneNumbers[0]}`}
              className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white px-4 py-3 rounded-xl text-sm font-medium text-center"
            >
              <Phone className="w-4 h-4 text-amber-600 dark:text-[#FFB800]" />
              <span>Telepon Langsung</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
