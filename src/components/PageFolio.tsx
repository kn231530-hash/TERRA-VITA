import React from 'react';

interface PageFolioProps {
  publicationTitle?: string;
  sectionName: string;
  pageIndex: string;
  totalPages?: string;
  variant?: 'header' | 'footer';
  coordinates?: string;
}

export const PageFolio: React.FC<PageFolioProps> = ({
  publicationTitle = 'TERRA VITA // HUMANITARIAN MONOGRAPH 2026',
  sectionName,
  pageIndex,
  totalPages = '48',
  variant = 'header',
  coordinates
}) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between text-[#44474d] text-xs label-caps select-none py-3 ${
        variant === 'header'
          ? 'border-b hairline-border mb-8'
          : 'border-t hairline-border mt-16'
      }`}
    >
      <div className="flex items-center gap-3 tracking-widest truncate">
        <span className="text-[#0A192F] font-bold">{publicationTitle}</span>
        <span className="text-[#c5c6cd]">·</span>
        <span className="text-[#1B4947] truncate">{sectionName}</span>
        {coordinates && (
          <>
            <span className="text-[#c5c6cd] hidden sm:inline">·</span>
            <span className="text-[#75777e] font-mono text-[11px] hidden sm:inline">
              [{coordinates}]
            </span>
          </>
        )}
      </div>

      <div className="flex items-center gap-2 font-mono text-xs tabular-nums tracking-widest shrink-0 text-[#0A192F]">
        <span className="font-bold text-[#E05A47]">{pageIndex}</span>
        <span className="text-[#c5c6cd]">//</span>
        <span>{totalPages}</span>
      </div>
    </div>
  );
};
