import React from 'react';

interface SectionDividerProps {
  chapterNumber: string;
  title?: string;
  kicker?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  chapterNumber,
  title,
  kicker
}) => {
  return (
    <div className="w-full my-12 md:my-16">
      <div className="flex items-center gap-4 mb-3">
        <span className="font-serif text-3xl md:text-5xl font-bold text-[#0A192F] tracking-tight">
          {chapterNumber}
        </span>
        {kicker && (
          <span className="label-caps text-[#1B4947] tracking-[0.15em]">
            {kicker}
          </span>
        )}
      </div>

      {/* Multi-tone Editorial Divider: 3px Navy adjacent to 3px Terracotta */}
      <div className="flex w-full h-[3px]">
        <div className="w-24 md:w-48 bg-[#0A192F]" />
        <div className="w-12 md:w-20 bg-[#E05A47]" />
        <div className="flex-1 bg-[#0A192F]/15" />
      </div>

      {title && (
        <h3 className="font-serif text-lg md:text-2xl font-semibold text-[#0A192F] mt-3 tracking-tight">
          {title}
        </h3>
      )}
    </div>
  );
};
