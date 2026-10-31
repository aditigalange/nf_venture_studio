import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Sparkles, FileText, ExternalLink } from 'lucide-react';

interface NFBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const NFBrochureModal: React.FC<NFBrochureModalProps> = ({
  isOpen,
  onClose,
  initialPage = 0,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const pages = [
    { title: 'Brochure Cover', subtitle: 'Ideas • Innovation • Growth', file: '/brochures/page_cover.png' },
    { title: 'Message from the CEO', subtitle: 'Mr. Ashok K Patil, CEO', file: '/brochures/page_ceo_message.png' },
    { title: 'About NF Venture Studio', subtitle: 'Vision, Mission & Core Roles', file: '/brochures/page_about_studio.png' },
    { title: 'The Incubator & Ecosystem', subtitle: 'Academic & Corporate Pillars', file: '/brochures/page_ecosystem.png' },
    { title: 'From Idea to Startup', subtitle: 'Pre-Incubation & Incubation', file: '/brochures/page_pre_incubation.png' },
    { title: 'The Startup Journey', subtitle: 'A Clear Path from Idea to Growth', file: '/brochures/page_startup_journey.png' },
    { title: 'Intellectual Property Rights', subtitle: 'Protect Innovation • Build Value', file: '/brochures/page_ipr.png' },
    { title: "Institution's Innovation Council", subtitle: 'A Culture of Innovation (IIC)', file: '/brochures/page_iic.png' },
    { title: 'Partnerships & Engagement', subtitle: 'Stronger Together for a Bigger Impact', file: '/brochures/page_partnerships.png' },
    { title: 'IT Cell Digital Backbone', subtitle: '8 Core Technical Functions', file: '/brochures/page_it_cell.png' },
    { title: 'Research to Real-World Solutions', subtitle: 'From Research to Real Impact', file: '/brochures/page_research.png' },
    { title: 'Contact Us', subtitle: "Let's Build the Future Together", file: '/brochures/page_contact.png' },
  ];

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentPage((p) => (p + 1) % pages.length);
      if (e.key === 'ArrowLeft') setCurrentPage((p) => (p - 1 + pages.length) % pages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, pages.length]);

  if (!isOpen) return null;

  const current = pages[currentPage];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-[#10264A] text-white rounded-3xl border border-[#D4AF37]/40 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Bar */}
        <div className="p-3.5 sm:p-5 border-b border-[#18386B] flex items-center justify-between gap-4 bg-[#0A1A33]/90 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#1746A2] flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Page {currentPage + 1} of {pages.length}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-sky-200">
                  Official Brochure
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold truncate text-white">
                {current.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={current.file}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
              title="Open full image"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Preview Canvas */}
        <div className="relative flex-1 bg-[#050D1C] flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[220px] sm:min-h-[420px] md:min-h-[480px]">
          <img
            src={current.file}
            alt={current.title}
            className="max-h-[55vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
          />

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentPage((p) => (p - 1 + pages.length) % pages.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-[#1746A2] text-white border border-white/20 transition-all hover:scale-110 shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentPage((p) => (p + 1) % pages.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-[#1746A2] text-white border border-white/20 transition-all hover:scale-110 shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Bottom Bar */}
        <div className="p-2 sm:p-3 bg-[#0A1A33] border-t border-[#18386B] overflow-x-auto flex items-center gap-2 shrink-0">
          {pages.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`View page ${idx + 1}: ${p.title}`}
              className={`shrink-0 w-12 h-16 sm:w-14 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none ${
                currentPage === idx
                  ? 'border-[#D4AF37] scale-105 shadow-gold'
                  : 'border-white/20 opacity-50 hover:opacity-100'
              }`}
            >
              <img src={p.file} alt={p.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
