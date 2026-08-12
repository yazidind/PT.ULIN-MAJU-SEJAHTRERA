"use client";

import { useState } from "react";
import { companyData, GalleryItem } from "@/data/companyData";
import { Camera, Image as ImageIcon, Shield, Users, Award, MapPin, Eye, Maximize2 } from "lucide-react";
import ImageModal from "./ImageModal";

export default function GallerySection() {
  const g = companyData.gallery;
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categoryIcons = [Shield, Users, Award, MapPin, Camera, ImageIcon];

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#FFB800] uppercase tracking-widest bg-[#FFB800]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#FFB800]/30">
            {g.heading}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2537] tracking-tight">
            Dokumentasi Pelatihan & Aktivitas Perusahaan
          </h2>
          <p className="text-gray-600 text-sm mt-3">
            {g.subtitle} (Klik pada foto untuk melihat ukuran penuh)
          </p>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {g.items.map((item, idx) => {
            const IconComp = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-3xl overflow-hidden bg-[#0F2537] border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-8 text-white min-h-[280px] cursor-pointer"
              >
                {/* Background Image (If present) or Gradient */}
                {item.image ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2537] via-[#0F2537]/50 to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F2537] via-[#1E3A5F] to-[#0F2537] opacity-95 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <IconComp className="w-32 h-32 text-[#FFB800]" />
                    </div>
                  </>
                )}

                {/* Top Badge & Zoom Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-block bg-[#FFB800] text-[#0F2537] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#FFB800] hover:text-[#0F2537] flex items-center justify-center text-white backdrop-blur-md transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="relative z-10 mt-auto pt-8">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#FFB800] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FFB800] font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <Eye className="w-4 h-4" />
                      <span>Klik Untuk Memperbesar</span>
                    </div>
                    <span className="text-gray-400 font-mono">PT. UMS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedPhoto && (
        <ImageModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          imageSrc={selectedPhoto.image || "/images/gallery/placeholder.jpg"}
          title={selectedPhoto.title}
          description={`${selectedPhoto.category} - ${selectedPhoto.desc}`}
        />
      )}
    </section>
  );
}
