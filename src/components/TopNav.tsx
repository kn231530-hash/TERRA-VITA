import React from 'react';
import { Printer, BookOpen } from 'lucide-react';

interface TopNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onToggleBroadsheet: () => void;
  isBroadsheetMode: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeSection,
  onNavigate,
  onToggleBroadsheet,
  isBroadsheetMode
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fcf9f8]/95 backdrop-blur-sm border-b hairline-border px-6 md:px-12 py-4 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#monograph"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('monograph');
          }}
          className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#0A192F] whitespace-nowrap shrink-0 hover:text-[#E05A47] transition-colors"
        >
          TERRA VITA <span className="font-normal italic text-base md:text-lg text-[#1B4947]">Monograph</span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => onNavigate('monograph')}
            className={`label-caps whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'monograph'
                ? 'text-[#E05A47] border-b-2 border-[#E05A47]'
                : 'text-[#1c1b1b] hover:text-[#E05A47]'
            }`}
          >
            Chapters
          </button>
          <button
            onClick={() => onNavigate('impact')}
            className={`label-caps whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'impact'
                ? 'text-[#E05A47] border-b-2 border-[#E05A47]'
                : 'text-[#1c1b1b] hover:text-[#E05A47]'
            }`}
          >
            Field Impact
          </button>
          <button
            onClick={() => onNavigate('voices')}
            className={`label-caps whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'voices'
                ? 'text-[#E05A47] border-b-2 border-[#E05A47]'
                : 'text-[#1c1b1b] hover:text-[#E05A47]'
            }`}
          >
            Community Voice
          </button>
          <button
            onClick={() => onNavigate('ledger')}
            className={`label-caps whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'ledger'
                ? 'text-[#E05A47] border-b-2 border-[#E05A47]'
                : 'text-[#1c1b1b] hover:text-[#E05A47]'
            }`}
          >
            Audit Ledger
          </button>
          <button
            onClick={() => onNavigate('pledge')}
            className={`label-caps whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'pledge'
                ? 'text-[#E05A47] border-b-2 border-[#E05A47]'
                : 'text-[#1c1b1b] hover:text-[#E05A47]'
            }`}
          >
            Pledge Terminal
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleBroadsheet}
            title={isBroadsheetMode ? 'Switch to Interactive Layout' : 'View as Printed Broadsheet Monograph'}
            className="hidden sm:inline-flex items-center gap-2 border-[1.5px] border-[#0A192F] px-4 py-2.5 label-caps text-[#0A192F] rounded-none bg-transparent hover:bg-[#F0EFEA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isBroadsheetMode ? <BookOpen className="w-3.5 h-3.5" /> : <Printer className="w-3.5 h-3.5" />}
            {isBroadsheetMode ? 'Interactive View' : 'Broadsheet Folio'}
          </button>
          <button
            onClick={() => onNavigate('pledge')}
            className="bg-[#0A192F] text-white label-caps px-6 md:px-8 py-3.5 rounded-none hover:bg-[#E05A47] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-none"
          >
            Field Dispatch →
          </button>
        </div>
      </div>
    </header>
  );
};
