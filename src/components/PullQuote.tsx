import React from 'react';

interface PullQuoteProps {
  quote: string;
  attribution: string;
  role?: string;
  region: string;
  year: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({
  quote,
  attribution,
  role,
  region,
  year
}) => {
  return (
    <figure className="relative my-10 md:my-14 pl-8 md:pl-12 border-l-0">
      {/* Oversized opening quotation mark at 96px in #E05A47 hanging outside */}
      <span
        aria-hidden="true"
        className="font-serif text-[#E05A47] text-[80px] md:text-[96px] leading-none absolute -top-8 -left-2 md:-left-4 select-none pointer-events-none opacity-90"
      >
        “
      </span>

      {/* Quote text rendered in headline-md italic */}
      <blockquote className="relative z-10 font-serif italic text-xl md:text-2xl lg:text-[28px] leading-[1.35] text-[#1c1b1b] text-balance mb-6">
        {quote}
      </blockquote>

      {/* 2px horizontal rule in #0A192F (width: 48px) separating quote from attribution */}
      <div className="w-12 h-[2px] bg-[#0A192F] mb-4" />

      {/* Attribution in label-caps */}
      <figcaption className="label-caps text-xs text-[#0A192F]">
        <span className="font-bold">{attribution}</span>
        {role && <span className="text-[#44474d] font-normal normal-case"> · {role}</span>}
        <div className="text-[#1B4947] font-semibold mt-1">
          {region} · {year}
        </div>
      </figcaption>
    </figure>
  );
};
