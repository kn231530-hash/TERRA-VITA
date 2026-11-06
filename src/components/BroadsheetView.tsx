import React from 'react';
import { CHAPTERS, Chapter } from '../data/monographData';
import { Printer, ArrowLeft } from 'lucide-react';
import { PullQuote } from './PullQuote';
import { ArchitecturalImage } from './ArchitecturalImage';

interface BroadsheetViewProps {
  onBack: () => void;
}

export const BroadsheetView: React.FC<BroadsheetViewProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  const getThemeForChapter = (index: number): 'water' | 'soil' | 'health' | 'seed' | 'delta' => {
    const themes: ('water' | 'soil' | 'health' | 'seed' | 'delta')[] = ['water', 'soil', 'health', 'seed', 'delta'];
    return themes[index % themes.length];
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#1c1b1b] py-8 px-4 sm:px-8 lg:px-16 print:p-0">
      {/* Top Utility Bar (hidden during actual print) */}
      <div className="max-w-[1280px] mx-auto flex items-center justify-between mb-8 pb-4 border-b hairline-border no-print">
        <button
          onClick={onBack}
          className="flex items-center gap-2 label-caps text-xs text-[#0A192F] hover:text-[#E05A47] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Interactive Monograph
        </button>

        <div className="flex items-center gap-4">
          <span className="label-caps text-xs text-[#75777e] hidden sm:inline">
            SWISS BROADSHEET FORMAT // COLLECTIBLE EDITION
          </span>
          <button
            onClick={handlePrint}
            className="bg-[#0A192F] text-white label-caps px-6 py-2.5 hover:bg-[#E05A47] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Print Monograph Broadsheet
          </button>
        </div>
      </div>

      {/* Main Printed Broadsheet Container */}
      <div className="max-w-[1280px] mx-auto bg-white p-6 sm:p-12 lg:p-16 border hairline-border shadow-xs print:border-none print:shadow-none print:p-0">
        {/* Monograph Master Masthead */}
        <div className="border-b-4 border-[#0A192F] pb-6 mb-8 text-center relative">
          {/* Swiss Registration Marks */}
          <div className="absolute top-0 left-0 text-[10px] font-mono text-[#75777e] uppercase tracking-widest hidden sm:block">
            + REGISTRATION MARK 01A
          </div>
          <div className="absolute top-0 right-0 text-[10px] font-mono text-[#75777e] uppercase tracking-widest hidden sm:block">
            VOL. XII // AUDIT 2026
          </div>

          <span className="label-caps text-[#1B4947] tracking-[0.25em] text-xs">
            GLOBAL HUMANITARIAN OBSERVATORY & FIELD ALLIANCE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A192F] mt-2 mb-3">
            TERRA VITA MONOGRAPH
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#44474d] max-w-3xl mx-auto">
            The Architecture of Hydrological Sovereignty, Biological Soil Regeneration, and Community Governance Across Vulnerable Biomes
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-4 border-t hairline-border text-xs label-caps text-[#44474d]">
            <span>GENEVA // DAKAR // QUITO // DHAKA</span>
            <span>·</span>
            <span>PUBLISHED MARCH 2026</span>
            <span>·</span>
            <span>48 PAGES COMPLETE FIELD AUDIT</span>
            <span>·</span>
            <span className="text-[#E05A47] font-bold">CIRCULATION NO. 0422/1000</span>
          </div>
        </div>

        {/* Chapters Rendered in Full Asymmetric Broadsheet Layout */}
        <div className="space-y-16">
          {CHAPTERS.map((chap: Chapter, idx: number) => (
            <article key={chap.id} className="border-b hairline-border pb-16 print-page-break">
              {/* Running Folio for this chapter */}
              <div className="flex justify-between items-center text-xs label-caps text-[#75777e] border-b hairline-border pb-2 mb-6">
                <span>TERRA VITA MONOGRAPH // CHAPTER {chap.number}</span>
                <span className="font-mono text-[#0A192F] font-bold">PAGE {chap.pageNumber} // {chap.totalPages}</span>
              </div>

              {/* Chapter Header Ribbon */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif text-5xl font-bold text-[#E05A47]">
                  {chap.number}
                </span>
                <div>
                  <div className="label-caps text-[#1B4947] text-xs">{chap.kicker}</div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A192F] leading-tight">
                    {chap.title}
                  </h2>
                </div>
              </div>

              <div className="w-full flex h-[3px] mb-8">
                <div className="w-32 bg-[#0A192F]" />
                <div className="w-16 bg-[#E05A47]" />
                <div className="flex-1 bg-[#0A192F]/15" />
              </div>

              {/* 12-Column Swiss Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* 7 Columns: Main Narrative with Drop Cap */}
                <div className="lg:col-span-7">
                  <p className="font-editorial-sans text-lg text-[#1c1b1b] leading-relaxed mb-6 font-normal first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#0A192F] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                    {chap.leadParagraph}
                  </p>

                  <div className="space-y-4 text-base font-editorial-sans text-[#44474d] leading-relaxed mb-8">
                    {chap.bodyParagraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Pull Quote */}
                  <PullQuote
                    quote={chap.pullQuote.quote}
                    attribution={chap.pullQuote.attribution}
                    role={chap.pullQuote.role}
                    region={chap.pullQuote.region}
                    year={chap.pullQuote.year}
                  />

                  {/* Field Notes Section */}
                  <div className="bg-[#F0EFEA] p-5 border hairline-border mt-8">
                    <span className="label-caps text-[11px] text-[#0A192F] block mb-3 font-bold">
                      VERIFIED FIELD LOG ENTRY
                    </span>
                    {chap.fieldNotes.map((note, nIdx) => (
                      <div key={nIdx} className="border-t hairline-border pt-3 mt-2 text-xs">
                        <div className="font-mono text-[#1B4947] font-semibold mb-1">
                          {note.date} // {note.location}
                        </div>
                        <p className="font-editorial-sans text-[#1c1b1b]">
                          {note.finding} — <span className="italic text-[#75777e]">{note.observer}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5 Columns: Architectural Photo Mask & Statistical Callouts */}
                <div className="lg:col-span-5 space-y-6">
                  <ArchitecturalImage
                    type={chap.heroImage.type}
                    title={chap.heroImage.title}
                    caption={chap.heroImage.caption}
                    figNumber={chap.heroImage.figNumber}
                    theme={getThemeForChapter(idx)}
                  />

                  {/* Metric Stack */}
                  <div className="space-y-4 pt-2">
                    {chap.metrics.map((m) => (
                      <div key={m.id} className="p-4 bg-[#F0EFEA] border hairline-border">
                        <div className="flex justify-between items-center mb-1">
                          <span className="label-caps text-[10px] text-[#1B4947]">{m.category}</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F29C38]/20 text-[#0A192F]">
                            {m.trend}
                          </span>
                        </div>
                        <div className="font-serif text-3xl font-bold text-[#0A192F] tabular-nums mb-1">
                          {m.value} <span className="text-xs font-sans font-normal text-[#44474d]">{m.unit}</span>
                        </div>
                        <p className="text-xs text-[#44474d] font-editorial-sans">
                          {m.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Colophon & Certification */}
        <footer className="mt-16 pt-8 border-t-2 border-[#0A192F] text-xs text-[#75777e] flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <div className="font-serif font-bold text-[#0A192F] text-sm">TERRA VITA PRESS // GENEVA</div>
            <p className="mt-1">Printed on unbleached archival heavy newsprint stock. Typeset in Playfair Display & Plus Jakarta Sans.</p>
          </div>
          <div className="font-mono text-right text-[11px] text-[#0A192F]">
            <div>ISBN: 978-2-940726-14-8</div>
            <div>VERIFIED ARCHIVE COPY #0422</div>
          </div>
        </footer>
      </div>
    </div>
  );
};
