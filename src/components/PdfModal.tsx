"use client";

import { X, ExternalLink, Download, FileText } from "lucide-react";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfSrc: string;
  title: string;
  description?: string;
}

export default function PdfModal({
  isOpen,
  onClose,
  pdfSrc,
  title,
  description
}: PdfModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full h-[90vh] bg-[#0F2537] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#FFB800]/30 shadow-2xl flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 p-4 shrink-0">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">{title}</h3>
              {description && (
                <p className="text-xs text-gray-400 truncate">{description}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#FFB800] hover:text-[#0F2537] flex items-center space-x-1.5 text-xs font-semibold transition-colors"
              title="Buka di Tab Baru"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Buka Tab Baru</span>
            </a>
            <a
              href={pdfSrc}
              download
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#FFB800] hover:text-[#0F2537] flex items-center space-x-1.5 text-xs font-semibold transition-colors"
              title="Unduh PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Unduh</span>
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500 hover:text-white flex items-center justify-center text-white transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Area */}
        <div className="flex-1 bg-gray-900 relative">
          <iframe
            src={`${pdfSrc}#toolbar=1`}
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
