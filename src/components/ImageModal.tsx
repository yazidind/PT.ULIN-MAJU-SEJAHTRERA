"use client";

import { X, ZoomIn } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  description
}: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0F2537] rounded-3xl overflow-hidden border border-[#FFB800]/30 shadow-2xl space-y-4 p-4 sm:p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2">
            <ZoomIn className="w-5 h-5 text-[#FFB800]" />
            <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB800] hover:text-[#0F2537] flex items-center justify-center text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview Area */}
        <div className="relative max-h-[70vh] min-h-[300px] flex items-center justify-center rounded-2xl bg-black/40 overflow-hidden border border-white/5 p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[65vh] w-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Caption */}
        {description && (
          <p className="text-xs sm:text-sm text-gray-300 text-center pt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
