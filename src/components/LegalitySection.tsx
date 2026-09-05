"use client";

import { useState } from "react";
import { companyData, LegalityDoc } from "@/data/companyData";
import { FileCheck, ShieldCheck, CheckCircle2, Eye, FileText } from "lucide-react";
import PdfModal from "./PdfModal";

export default function LegalitySection() {
  const leg = companyData.legality;
  const [selectedDoc, setSelectedDoc] = useState<LegalityDoc | null>(null);

  return (
    <section id="legalitas" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#FFB800] uppercase tracking-widest bg-[#FFB800]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#FFB800]/30">
            {leg.heading}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2537] tracking-tight">
            Izin Resmi & Legalitas Hukum Lengkap
          </h2>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            {leg.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* Legal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leg.docs.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedDoc(doc)}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#FFB800] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2537] group-hover:bg-[#FFB800] text-[#FFB800] group-hover:text-[#0F2537] flex items-center justify-center transition-colors">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0F2537] bg-[#FFB800]/20 hover:bg-[#FFB800] px-2.5 py-1 rounded-full flex items-center space-x-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Lihat PDF</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F2537] mb-2 leading-snug group-hover:text-[#FFB800] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs font-semibold text-[#0F2537] bg-[#FFB800]/20 p-2 rounded-lg mb-2 font-mono break-all">
                  {doc.number}
                </p>
                <p className="text-xs text-gray-500">
                  {doc.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-600 font-semibold">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dokumen Resmi</span>
                </div>
                <FileText className="w-4 h-4 text-gray-400 group-hover:text-[#FFB800] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F2537] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFB800] text-[#0F2537] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Jaminan Legalitas & Kepatuhan Hukum</h4>
              <p className="text-xs text-gray-300">Seluruh izin operasional dan ketenagakerjaan telah memenuhi regulasi Pemerintah Indonesia & POLRI.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${companyData.whatsappNumbers[0].raw}?text=Halo%20PT%20Ulin%20Maju%20Sejahtera,%20saya%20ingin%20meminta%20salinan%20dokumen%20legalitas`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#0F2537] px-5 py-2.5 rounded-xl font-bold text-xs shrink-0 shadow-md transition-colors"
          >
            Minta Salinan Legalitas
          </a>
        </div>

      </div>

      {/* PDF Document Modal Preview */}
      {selectedDoc && (
        <PdfModal
          isOpen={!!selectedDoc}
          onClose={() => setSelectedDoc(null)}
          pdfSrc={selectedDoc.file || selectedDoc.image || ""}
          title={selectedDoc.title}
          description={`Nomor: ${selectedDoc.number} | Penerbit: ${selectedDoc.issuer}`}
        />
      )}
    </section>
  );
}
