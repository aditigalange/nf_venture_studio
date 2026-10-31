import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { NFApplicationForm } from './NFApplicationForm';

interface NFApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
  isDark?: boolean;
}

export const NFApplicationModal: React.FC<NFApplicationModalProps> = ({
  isOpen,
  onClose,
  initialTrack = 'student',
  isDark = false,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-modal-title"
        className={`relative w-full max-w-2xl rounded-2xl sm:rounded-3xl border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col transition-colors ${
          isDark
            ? 'bg-[#0B1E3F] text-white border-[#1E4176]'
            : 'bg-white text-[#10264A] border-[#DCEEFF]'
        }`}
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-3 sm:py-3.5 border-b border-[#DCEEFF] dark:border-[#1E4176] flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Startup Incubator Application</span>
            </div>
            <h2 id="app-modal-title" className="text-lg sm:text-xl font-black tracking-tight text-[#10264A] dark:text-white leading-tight">
              Apply to NF Venture Studio
            </h2>
            <p className="text-[11px] font-semibold text-[#52627A] dark:text-slate-300">
              NF Venture Studio &bull; Ideas &bull; Innovation &bull; Growth
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[#52627A] hover:text-[#10264A] dark:text-slate-400 dark:hover:text-white hover:bg-[#DCEEFF]/40 dark:hover:bg-[#18386B] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Form (Non-scrollable on desktop/laptop) */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 overflow-y-auto flex-1 overscroll-contain">
          <NFApplicationForm
            initialTrack={initialTrack}
            isDark={isDark}
            isModal={true}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};
