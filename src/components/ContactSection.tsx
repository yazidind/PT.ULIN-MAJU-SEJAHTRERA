"use client";

import { useState } from "react";
import { companyData } from "@/data/companyData";
import { MapPin, Phone, MessageSquare, Mail, Globe, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "Tenaga Keamanan",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo PT Ulin Maju Sejahtera,%0A%0ASaya: ${encodeURIComponent(formData.name)}%0APerusahaan: ${encodeURIComponent(formData.company || "-")}%0ALayanan yang dibutuhkan: ${encodeURIComponent(formData.service)}%0A%0APesan:%0A${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/${companyData.whatsappNumbers[0].raw}?text=${text}`, "_blank");
  };

  return (
    <section id="kontak" className="py-20 bg-slate-100 dark:bg-[#0F2537] text-[#0F2537] dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#D97706] dark:text-[#FFB800] uppercase tracking-widest bg-amber-500/10 dark:bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-amber-500/30 dark:border-[#FFB800]/30">
            Kontak & Informasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2537] dark:text-white tracking-tight">
            Hubungi PT. Ulin Maju Sejahtera
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 font-medium">
            Tim kami siap membantu dan memberikan solusi terbaik untuk kebutuhan tenaga kerja perusahaan Anda.
          </p>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* WhatsApp Box */}
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3 shadow-md">
              <div className="flex items-center space-x-3 text-[#D97706] dark:text-[#FFB800]">
                <div className="w-10 h-10 rounded-xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2537] dark:text-white">WhatsApp Resmi</h3>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {companyData.whatsappNumbers.map((wa, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${wa.raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-[#FFB800] text-[#0F2537] dark:bg-white/10 dark:hover:bg-[#FFB800] dark:text-white dark:hover:text-[#0F2537] px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
                  >
                    <span>{wa.display}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Telepon Box */}
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3 shadow-md">
              <div className="flex items-center space-x-3 text-[#D97706] dark:text-[#FFB800]">
                <div className="w-10 h-10 rounded-xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2537] dark:text-white">Telepon Kantor</h3>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {companyData.phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-[#0F2537] dark:bg-white/10 dark:hover:bg-white/20 dark:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                  >
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Alamat Balikpapan Box */}
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-4 shadow-md">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F2537] dark:bg-[#FFB800] text-[#FFB800] dark:text-[#0F2537] flex items-center justify-center font-bold shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#D97706] dark:text-[#FFB800] uppercase tracking-wider">Alamat Perusahaan:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-200 mt-1 leading-relaxed font-medium">{companyData.addressMain}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                    <h4 className="text-xs font-bold text-[#D97706] dark:text-[#FFB800] uppercase tracking-wider">Alamat Kantor:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-200 mt-1 leading-relaxed font-medium">{companyData.addressOffice}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex items-center space-x-3 shadow-md">
                <Mail className="w-5 h-5 text-[#D97706] dark:text-[#FFB800] shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email Resmi:</p>
                  <p className="text-xs sm:text-sm text-[#0F2537] dark:text-white font-bold truncate">{companyData.email}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex items-center space-x-3 shadow-md">
                <Globe className="w-5 h-5 text-[#D97706] dark:text-[#FFB800] shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Website:</p>
                  <p className="text-xs sm:text-sm text-[#0F2537] dark:text-white font-bold truncate">{companyData.website}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Message Form */}
          <div className="lg:col-span-6 bg-white dark:bg-[#0B1A27] p-8 rounded-3xl text-[#0F2537] dark:text-white border border-gray-200 dark:border-white/10 shadow-2xl space-y-6">
            <div>
              <h3 className="text-2xl font-black mb-1">Kirim Pesan Langsung</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                Isi formulir singkat ini untuk terhubung secara instan via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-[#FFB800] text-sm text-[#0F2537] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200 mb-1">
                  Nama Perusahaan / Instansi (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="PT / CV / Instansi Anda"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-[#FFB800] text-sm text-[#0F2537] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200 mb-1">
                  Layanan yang Dibutuhkan
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F2537] border border-gray-200 dark:border-white/10 focus:outline-none focus:border-[#FFB800] text-sm text-[#0F2537] dark:text-white"
                >
                  <option value="Jasa Driver">01. Jasa Driver</option>
                  <option value="Tenaga Keamanan">02. Tenaga Keamanan (Security)</option>
                  <option value="Jasa Cleaning">03. Jasa Cleaning Service</option>
                  <option value="Jasa Operator">04. Jasa Operator</option>
                  <option value="Jasa Helper">05. Jasa Helper</option>
                  <option value="Lainnya">Lainnya / Konsultasi General</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200 mb-1">
                  Pesan / Pertanyaan *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan kebutuhan tenaga kerja Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-[#FFB800] text-sm text-[#0F2537] dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[#FFB800] hover:bg-[#e0a200] text-[#0F2537] py-4 rounded-xl font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
