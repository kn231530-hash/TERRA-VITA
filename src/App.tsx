/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CHAPTERS, Chapter } from './data/monographData';
import { TopNav } from './components/TopNav';
import { PageFolio } from './components/PageFolio';
import { SectionDivider } from './components/SectionDivider';
import { DataMetricCard } from './components/DataMetricCard';
import { PullQuote } from './components/PullQuote';
import { ArchitecturalImage } from './components/ArchitecturalImage';
import { InteractiveChart } from './components/InteractiveChart';
import { AuditTable } from './components/AuditTable';
import { OralHistoryPlayer } from './components/OralHistoryPlayer';
import { DispatchTerminal } from './components/DispatchTerminal';
import { BroadsheetView } from './components/BroadsheetView';
import { ArrowRight, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';

export default function App() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('monograph');
  const [isBroadsheetMode, setIsBroadsheetMode] = useState(false);

  const currentChapter: Chapter = CHAPTERS[activeChapterIndex];

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isBroadsheetMode) {
      setIsBroadsheetMode(false);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getThemeForChapter = (idx: number): 'water' | 'soil' | 'health' | 'seed' | 'delta' => {
    const themes: ('water' | 'soil' | 'health' | 'seed' | 'delta')[] = ['water', 'soil', 'health', 'seed', 'delta'];
    return themes[idx % themes.length];
  };

  if (isBroadsheetMode) {
    return <BroadsheetView onBack={() => setIsBroadsheetMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] flex flex-col font-editorial-sans selection:bg-[#E05A47] selection:text-white">
      {/* Top Bar Contract (3 zones) */}
      <TopNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onToggleBroadsheet={() => setIsBroadsheetMode(!isBroadsheetMode)}
        isBroadsheetMode={isBroadsheetMode}
      />

      {/* Running Page Folio (Header) */}
      <PageFolio
        publicationTitle="TERRA VITA // HUMANITARIAN MONOGRAPH"
        sectionName={currentChapter.title}
        pageIndex={currentChapter.pageNumber}
        totalPages={currentChapter.totalPages}
        coordinates="14°12'N 00°58'E · SAHEL BASIN"
        variant="header"
      />

      {/* Main Viewport Container (1440px max width baseline) */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 pb-24">
        {/* Section 1: Monograph Cover & Chapter Browser */}
        <section id="monograph" className="pt-2 pb-16">
          {/* Chapter Selector Strip (Segmented tabs with active indicator in #E05A47) */}
          <div className="border hairline-border bg-[#F0EFEA] p-2 mb-10 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              <span className="label-caps text-[#75777e] text-[11px] px-3 py-1">
                Chapters:
              </span>
              {CHAPTERS.map((chap, idx) => (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`px-4 py-2 text-xs font-editorial-sans transition-all cursor-pointer rounded-none flex items-center gap-2 ${
                    activeChapterIndex === idx
                      ? 'bg-[#0A192F] text-white font-semibold shadow-xs'
                      : 'bg-transparent text-[#44474d] hover:bg-white hover:text-[#0A192F]'
                  }`}
                >
                  <span
                    className={`font-serif font-bold text-sm ${
                      activeChapterIndex === idx ? 'text-[#E05A47]' : 'text-[#75777e]'
                    }`}
                  >
                    {chap.number}
                  </span>
                  <span className="truncate max-w-[180px] md:max-w-[220px]">
                    {chap.title.split(':')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Headline Spread */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="label-caps text-[#1B4947] tracking-[0.16em]">
                {currentChapter.kicker}
              </span>
              <span className="text-[#c5c6cd]">·</span>
              <span className="label-caps text-[#E05A47]">
                PAGE {currentChapter.pageNumber} OF {currentChapter.totalPages}
              </span>
            </div>

            <h1 className="headline-display-xl text-[#0A192F] mb-4">
              {currentChapter.title}
            </h1>

            <p className="font-serif italic text-xl md:text-2xl text-[#44474d] max-w-4xl leading-relaxed">
              {currentChapter.subtitle}
            </p>
          </div>

          {/* Multi-tone Divider Ribbon (3px Navy adjacent to 3px Terracotta with chapter number) */}
          <SectionDivider chapterNumber={currentChapter.number} />

          {/* 12-Column Swiss Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            {/* 7 Columns: Main Narrative + Pull Quote */}
            <div className="lg:col-span-7">
              {/* Lead Paragraph with Elegant Serif Drop Cap */}
              <p className="text-lg md:text-xl font-editorial-sans text-[#1c1b1b] leading-[1.75] mb-6 font-normal first-letter:text-5xl md:first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[#0A192F] first-letter:float-left first-letter:mr-3.5 first-letter:leading-none">
                {currentChapter.leadParagraph}
              </p>

              {/* Multi-column Body Prose with generous line height */}
              <div className="space-y-5 text-base font-editorial-sans text-[#1c1b1b]/90 leading-[1.75]">
                {currentChapter.bodyParagraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Exact Pull Quote Component with 96px Terracotta quote mark */}
              <PullQuote
                quote={currentChapter.pullQuote.quote}
                attribution={currentChapter.pullQuote.attribution}
                role={currentChapter.pullQuote.role}
                region={currentChapter.pullQuote.region}
                year={currentChapter.pullQuote.year}
              />

              {/* Field Observation Log Card */}
              <div className="bg-[#F0EFEA] border hairline-border p-6 mt-8">
                <div className="flex items-center justify-between mb-4 border-b hairline-border pb-2.5">
                  <span className="label-caps text-[#0A192F]">
                    FIELD TELEMETRY LOG // CH-{currentChapter.number}
                  </span>
                  <span className="font-mono text-xs text-[#1B4947] font-semibold">
                    GROUND SENSORS ACTIVE
                  </span>
                </div>

                <div className="space-y-4">
                  {currentChapter.fieldNotes.map((note, nIdx) => (
                    <div key={nIdx} className="text-xs">
                      <div className="flex items-center gap-2 font-mono text-[#0A192F] font-bold mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E05A47]" />
                        <span>{note.date} // {note.location}</span>
                      </div>
                      <p className="font-editorial-sans text-[#44474d] pl-5 leading-relaxed">
                        {note.finding} <span className="italic text-[#75777e]">({note.observer})</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapter Pager Controls */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t hairline-border">
                <button
                  disabled={activeChapterIndex === 0}
                  onClick={() => setActiveChapterIndex((prev) => Math.max(0, prev - 1))}
                  className={`flex items-center gap-2 label-caps text-xs py-2 px-3 border transition-colors ${
                    activeChapterIndex === 0
                      ? 'opacity-40 border-[#c5c6cd] cursor-not-allowed'
                      : 'border-[#0A192F] text-[#0A192F] hover:bg-[#F0EFEA] cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous Chapter
                </button>

                <span className="label-caps text-xs text-[#75777e]">
                  {activeChapterIndex + 1} OF {CHAPTERS.length} CHAPTERS
                </span>

                <button
                  disabled={activeChapterIndex === CHAPTERS.length - 1}
                  onClick={() => setActiveChapterIndex((prev) => Math.min(CHAPTERS.length - 1, prev + 1))}
                  className={`flex items-center gap-2 label-caps text-xs py-2 px-3 border transition-colors ${
                    activeChapterIndex === CHAPTERS.length - 1
                      ? 'opacity-40 border-[#c5c6cd] cursor-not-allowed'
                      : 'border-[#0A192F] text-[#0A192F] hover:bg-[#F0EFEA] cursor-pointer'
                  }`}
                >
                  Next Chapter
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4 Columns (+1 Breathing Room): Architectural Photo Mask & Statistical Callouts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Architectural Image Mask (Arched or Diptych or Rectilinear) */}
              <ArchitecturalImage
                type={currentChapter.heroImage.type}
                title={currentChapter.heroImage.title}
                caption={currentChapter.heroImage.caption}
                figNumber={currentChapter.heroImage.figNumber}
                theme={getThemeForChapter(activeChapterIndex)}
              />

              {/* Data Metric Callout Cards Stack */}
              <div className="space-y-4 pt-2">
                {currentChapter.metrics.map((metric, mIdx) => (
                  <DataMetricCard
                    key={metric.id}
                    metric={metric}
                    accentColor={mIdx === 0 ? 'navy' : mIdx === 1 ? 'terracotta' : 'navy'}
                    bgVariant={mIdx % 2 === 0 ? 'muted' : 'ivory'}
                  />
                ))}
              </div>

              {/* Download / Broadside CTA Card */}
              <div className="bg-[#0A192F] text-white p-6 border hairline-border">
                <span className="label-caps text-[#F29C38] text-[11px] block mb-2">
                  ARCHIVAL MONOGRAPH FOLIO
                </span>
                <h4 className="font-serif text-xl font-bold mb-2">
                  Full Broadside Edition
                </h4>
                <p className="text-xs text-[#d6e3ff] font-editorial-sans leading-relaxed mb-4">
                  Access the complete 48-page monograph layout with high-resolution hydraulic schematics, CAD cross-sections, and laboratory soil reports.
                </p>
                <button
                  onClick={() => setIsBroadsheetMode(true)}
                  className="w-full bg-[#E05A47] hover:bg-white hover:text-[#0A192F] text-white label-caps py-3 text-center transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Open Broadsheet Folio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Field Data & Impact Matrix */}
        <section id="impact" className="py-12 border-t hairline-border">
          <SectionDivider
            chapterNumber="02"
            kicker="QUANTITATIVE IMPACT TELEMETRY // 2021–2026"
            title="Hydrological & Agroecological Regeneration Matrix"
          />

          <div className="mb-6">
            <InteractiveChart />
          </div>
        </section>

        {/* Section 3: Community Voice & Oral History Player */}
        <section id="voices" className="py-12 border-t hairline-border">
          <SectionDivider
            chapterNumber="03"
            kicker="COMMUNITY TESTIMONIES // ORAL DISPATCHES"
            title="Voices from the Watershed & Earth Sanctuaries"
          />

          <OralHistoryPlayer />
        </section>

        {/* Section 4: Audit Ledger & Comprehensive Intervention Table */}
        <section id="ledger" className="py-12 border-t hairline-border">
          <SectionDivider
            chapterNumber="04"
            kicker="PROGRAM AUDIT & ASSET VERIFICATION // 2024–2026"
            title="Humanitarian Intervention Registry & Field Dossiers"
          />

          <AuditTable />
        </section>

        {/* Section 5: Pledge Terminal & Dispatch Form */}
        <section id="pledge" className="py-12 border-t hairline-border">
          <SectionDivider
            chapterNumber="05"
            kicker="INSTITUTIONAL PARTNERSHIP & ALLOCATION TERMINAL"
            title="Direct Field Dispatch & Research Transmission"
          />

          <DispatchTerminal />
        </section>
      </main>

      {/* Running Page Folio (Footer) */}
      <PageFolio
        publicationTitle="TERRA VITA // HUMANITARIAN MONOGRAPH"
        sectionName="END OF REPORT AUDIT"
        pageIndex="48"
        totalPages="48"
        variant="footer"
      />

      {/* Institutional Colophon Footer */}
      <footer className="w-full border-t-2 border-[#0A192F] bg-[#F0EFEA] text-[#1c1b1b] py-12 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-2xl font-bold text-[#0A192F] mb-2">
              TERRA VITA
            </div>
            <p className="text-xs text-[#44474d] font-editorial-sans leading-relaxed">
              Global humanitarian publication documenting community-governed hydraulic architecture, biological soil restoration, and ancestral seed repositories.
            </p>
            <div className="font-mono text-[11px] text-[#1B4947] mt-4">
              GENEVA REGISTRY #CH-660-2026
            </div>
          </div>

          <div>
            <div className="label-caps text-xs text-[#0A192F] mb-3">
              Editorial Sections
            </div>
            <ul className="space-y-2 text-xs text-[#44474d]">
              <li>
                <button onClick={() => handleNavigate('monograph')} className="hover:text-[#E05A47] cursor-pointer">
                  01. Sahelian Aquifer Sovereignty
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('impact')} className="hover:text-[#E05A47] cursor-pointer">
                  02. Quantitative Field Data
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('voices')} className="hover:text-[#E05A47] cursor-pointer">
                  03. Dialect Oral Histories
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('ledger')} className="hover:text-[#E05A47] cursor-pointer">
                  04. Audited Intervention Registry
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('pledge')} className="hover:text-[#E05A47] cursor-pointer">
                  05. Pledge Simulator & Dispatch
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="label-caps text-xs text-[#0A192F] mb-3">
              Institutional Partners
            </div>
            <div className="text-xs text-[#44474d] space-y-1.5 font-editorial-sans">
              <p>Swiss Hydrological Board</p>
              <p>UN-Habitat Sahelian Office</p>
              <p>International Potato Center (CIP)</p>
              <p>Médecins Sans Frontières Logistique</p>
              <p>Bengal Deltaic Alliance</p>
            </div>
          </div>

          <div>
            <div className="label-caps text-xs text-[#0A192F] mb-3">
              Broadsheet Folio
            </div>
            <p className="text-xs text-[#44474d] mb-4 font-editorial-sans leading-relaxed">
              Switch to print-ready Swiss broadsheet folio format with registration plates and full typography spreads.
            </p>
            <button
              onClick={() => setIsBroadsheetMode(true)}
              className="bg-[#0A192F] text-white label-caps text-xs px-5 py-2.5 hover:bg-[#E05A47] transition-colors cursor-pointer w-full text-center"
            >
              View Broadsheet Folio →
            </button>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto mt-12 pt-6 border-t hairline-border flex flex-col sm:flex-row justify-between items-center text-xs text-[#75777e]">
          <p>© 2026 Terra Vita Humanitarian Consortium. All field data certified under open science commons.</p>
          <div className="flex gap-4 font-mono text-[11px] mt-2 sm:mt-0">
            <span>UNBLEACHED MATTE PAPER ARCHIVE</span>
            <span>·</span>
            <span>SWISS GRID ARCHITECTURE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
