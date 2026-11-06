import React from 'react';

interface ArchitecturalImageProps {
  type: 'arch' | 'diptych' | 'rectilinear';
  title: string;
  caption: string;
  figNumber: string;
  theme?: 'water' | 'soil' | 'health' | 'seed' | 'delta';
  aspectRatio?: '16:9' | '4:3' | '3:4' | '1:1';
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  type,
  title,
  caption,
  figNumber,
  theme = 'water'
}) => {
  // Theme-specific duotone color palettes and architectural schematics
  const getIllustration = () => {
    switch (theme) {
      case 'water':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none">
            {/* Architectural Grid & Plate Marks */}
            <rect width="800" height="500" fill="#0A192F" />
            <defs>
              <pattern id="grid-pattern-water" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#515f78" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.35" />
              </pattern>
              <linearGradient id="sand-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F29C38" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#ab3425" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0A192F" />
              </linearGradient>
              <linearGradient id="aquifer-glow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1B4947" />
                <stop offset="50%" stopColor="#515f78" />
                <stop offset="100%" stopColor="#1B4947" />
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#grid-pattern-water)" />

            {/* Geological Bedrock Strata (Granite) */}
            <path d="M 0 380 Q 200 350 400 370 T 800 340 L 800 500 L 0 500 Z" fill="#071120" stroke="#75777e" strokeWidth="1" />
            <path d="M 0 320 Q 250 280 500 310 T 800 270 L 800 380 L 0 380 Z" fill="url(#aquifer-glow)" opacity="0.8" />

            {/* Coarse River Sand Retention Body */}
            <path d="M 80 240 Q 300 200 650 220 L 720 310 L 120 320 Z" fill="url(#sand-gradient)" opacity="0.75" />

            {/* Subsurface Sand Dam Gabion Wall */}
            <rect x="420" y="160" width="48" height="210" fill="#E05A47" />
            <line x1="420" y1="160" x2="420" y2="370" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="468" y1="160" x2="468" y2="370" stroke="#0A192F" strokeWidth="1.5" />
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={i} x1="420" y1={180 + i * 18} x2="468" y2={180 + i * 18} stroke="#ffffff" strokeWidth="0.75" opacity="0.6" />
            ))}

            {/* Solar Pump Tower & Extraction Manifold */}
            <rect x="438" y="70" width="12" height="90" fill="#ffffff" />
            {/* Solar Panel Array on top */}
            <polygon points="400,60 488,40 500,55 412,75" fill="#F29C38" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="444" cy="115" r="8" fill="#E05A47" />

            {/* Hydraulic Elevation Contour lines */}
            <path d="M 100 140 Q 280 180 420 160" stroke="#F9F8F5" strokeWidth="1" strokeDasharray="4,4" opacity="0.7" />
            <path d="M 468 180 Q 600 220 750 210" stroke="#F9F8F5" strokeWidth="1" strokeDasharray="4,4" opacity="0.7" />

            {/* Measurement Annotations (Swiss Monograph style) */}
            <line x1="120" y1="100" x2="260" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
            <text x="120" y="90" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="bold" letterSpacing="0.1em">DATUM LEVEL +24.8m</text>
            <text x="520" y="80" fill="#F29C38" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="bold" letterSpacing="0.1em">BIFACIAL PV ARRAY [3.2 kW]</text>
            <text x="490" y="270" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="bold" letterSpacing="0.1em">GABION WEIR FOUNDATION</text>
            <text x="140" y="360" fill="#76849f" fontFamily="Space Mono" fontSize="9" letterSpacing="0.1em">BEDROCK GRANITE // WATER TABLE RETENTION</text>

            {/* Registration crosshair marks */}
            <circle cx="30" cy="30" r="10" stroke="#ffffff" strokeWidth="0.75" fill="none" opacity="0.5" />
            <line x1="30" y1="15" x2="30" y2="45" stroke="#ffffff" strokeWidth="0.75" opacity="0.5" />
            <line x1="15" y1="30" x2="45" y2="30" stroke="#ffffff" strokeWidth="0.75" opacity="0.5" />
          </svg>
        );

      case 'soil':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="800" height="500" fill="#1B4947" />
            <defs>
              <pattern id="grid-pattern-soil" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#grid-pattern-soil)" />

            {/* Topographic Contours (Zaï pits & micro-terraces) */}
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M 0 ${120 + i * 45} C 200 ${90 + i * 45}, 450 ${160 + i * 45}, 800 ${110 + i * 45}`}
                stroke="#F29C38"
                strokeWidth={i === 4 ? 2.5 : 1.2}
                strokeDasharray={i % 2 === 0 ? 'none' : '6,3'}
                opacity={0.4 + i * 0.08}
              />
            ))}

            {/* Faidherbia Albida Umbrella Canopy Architecture */}
            <circle cx="480" cy="220" r="90" fill="#E05A47" opacity="0.85" />
            <circle cx="510" cy="200" r="70" fill="#F29C38" opacity="0.7" />
            <circle cx="450" cy="240" r="60" fill="#0A192F" opacity="0.85" />
            <line x1="480" y1="220" x2="480" y2="420" stroke="#ffffff" strokeWidth="4" />
            <line x1="480" y1="320" x2="430" y2="280" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="480" y1="300" x2="530" y2="260" stroke="#ffffff" strokeWidth="2.5" />

            {/* Root Mycelium Strata */}
            <path d="M 480 420 Q 380 450 300 490" stroke="#F9F8F5" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M 480 420 Q 560 460 680 480" stroke="#F9F8F5" strokeWidth="1.5" strokeDasharray="3,3" />

            {/* Zaï Micro-Catchment pockets */}
            {[180, 260, 340, 620, 700].map((cx, idx) => (
              <g key={idx}>
                <ellipse cx={cx} cy={340 + (idx % 3) * 30} rx="24" ry="10" fill="#0A192F" stroke="#F29C38" strokeWidth="1.5" />
                <circle cx={cx} cy={335 + (idx % 3) * 30} r="4" fill="#ffffff" />
              </g>
            ))}

            <text x="80" y="80" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="bold" letterSpacing="0.12em">
              CONTOUR ELEVATION // 1,420m A.S.L.
            </text>
            <text x="80" y="100" fill="#F29C38" fontFamily="Space Mono" fontSize="9" letterSpacing="0.08em">
              MICRO-CATCHMENT RADIUS = 40cm · INOCULATED BIOMASS
            </text>
          </svg>
        );

      case 'health':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="800" height="500" fill="#0A192F" />
            {/* River water currents */}
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={i}
                d={`M -50 ${220 + i * 24} Q 250 ${190 + i * 20} 500 ${230 + i * 24} T 850 ${200 + i * 22}`}
                stroke="#1B4947"
                strokeWidth={1.5}
                opacity={0.5 + i * 0.04}
              />
            ))}
            {/* Solar Catamaran Silhouette */}
            <polygon points="260,320 540,320 500,360 300,360" fill="#E05A47" />
            <rect x="310" y="240" width="180" height="80" fill="#F0EFEA" />
            <rect x="330" y="260" width="35" height="40" fill="#0A192F" />
            <rect x="380" y="260" width="35" height="40" fill="#0A192F" />
            <rect x="430" y="260" width="35" height="40" fill="#0A192F" />
            {/* Red Cross / Medical Caduceus marker */}
            <rect x="480" y="270" width="16" height="5" fill="#E05A47" />
            <rect x="485.5" y="264.5" width="5" height="16" fill="#E05A47" />
            {/* PV canopy roof */}
            <rect x="290" y="225" width="220" height="15" fill="#F29C38" stroke="#ffffff" strokeWidth="1" />
            {/* Temperature readout indicator */}
            <circle cx="560" cy="280" r="18" fill="#1B4947" stroke="#ffffff" strokeWidth="1.5" />
            <text x="560" y="284" textAnchor="middle" fill="#ffffff" fontFamily="Space Mono" fontSize="9" fontWeight="bold">
              -18°C
            </text>
            <text x="120" y="100" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="bold" letterSpacing="0.12em">
              CHARI RIVER NAVIGABLE CORRIDOR // COLD CHAIN ACTIVE
            </text>
          </svg>
        );

      case 'seed':
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="800" height="500" fill="#0A192F" />
            {/* Mountain rock strata */}
            <polygon points="0,500 0,220 220,110 420,240 620,80 800,210 800,500" fill="#1B4947" />
            <polygon points="0,500 0,340 320,260 550,360 800,290 800,500" fill="#071120" />
            {/* Earth-Sheltered Stone Arch Vault Entrance */}
            <path d="M 320 500 L 320 320 A 80 80 0 0 1 480 320 L 480 500 Z" fill="#F0EFEA" stroke="#E05A47" strokeWidth="3" />
            {/* Inner vault stone masonry courses */}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={i} x1="335" y1={330 + i * 22} x2="465" y2={330 + i * 22} stroke="#0A192F" strokeWidth="1" strokeDasharray="5,2" />
            ))}
            <circle cx="400" cy="300" r="18" fill="#F29C38" />
            <text x="400" y="304" textAnchor="middle" fill="#0A192F" fontFamily="Space Mono" fontSize="9" fontWeight="bold">
              640
            </text>
            <text x="80" y="60" fill="#F29C38" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="bold" letterSpacing="0.12em">
              PUEBLO KICHWA PURUHÁ // ELEVATION 3,840m
            </text>
            <text x="80" y="80" fill="#ffffff" fontFamily="Space Mono" fontSize="9" letterSpacing="0.08em">
              PASSIVE THERMAL LABYRINTH · 12°C STABLE INTERIOR
            </text>
          </svg>
        );

      default: // delta
        return (
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="800" height="500" fill="#0A192F" />
            <defs>
              <linearGradient id="delta-water" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1B4947" />
                <stop offset="100%" stopColor="#071120" />
              </linearGradient>
            </defs>
            <rect y="260" width="800" height="240" fill="url(#delta-water)" />
            {/* Floating Bamboo Amphibious Platform */}
            <rect x="240" y="210" width="320" height="50" fill="#F29C38" stroke="#0A192F" strokeWidth="2" />
            {/* Bamboo Home Superstructure */}
            <polygon points="260,210 400,110 540,210" fill="#F0EFEA" stroke="#0A192F" strokeWidth="2" />
            <rect x="360" y="160" width="40" height="50" fill="#0A192F" />
            {/* Guide Sleeve Vertical Mooring Pilings */}
            <line x1="230" y1="90" x2="230" y2="440" stroke="#E05A47" strokeWidth="4" />
            <line x1="570" y1="90" x2="570" y2="440" stroke="#E05A47" strokeWidth="4" />
            {/* Floatation Collar sleeves */}
            <rect x="222" y="200" width="16" height="30" fill="#ffffff" stroke="#0A192F" strokeWidth="1.5" />
            <rect x="562" y="200" width="16" height="30" fill="#ffffff" stroke="#0A192F" strokeWidth="1.5" />
            {/* Mangrove Root Buffer */}
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={i}
                d={`M ${600 + i * 14} 260 Q ${610 + i * 14} 340 ${590 + i * 15} 420`}
                stroke="#1B4947"
                strokeWidth="2.5"
                opacity="0.85"
              />
            ))}
            <text x="80" y="60" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="bold" letterSpacing="0.12em">
              SATKHIRA ESTUARY // TIDAL RANGE 0.0m → +3.5m
            </text>
            <text x="80" y="80" fill="#E05A47" fontFamily="Space Mono" fontSize="9" letterSpacing="0.08em">
              FREE-FLOATING BAMBOO CASING // MANGROVE BUFFER
            </text>
          </svg>
        );
    }
  };

  // Render according to the exact architectural mask types in specification:
  // 1. Asymmetric arched crop (top edge semi-circle arch, base sharp)
  // 2. Diptych split frame separated by 2px Ivory seam
  // 3. Rectilinear edge-to-edge crop
  return (
    <figure className="w-full my-6 select-none">
      {type === 'arch' && (
        <div className="w-full max-w-[680px] mx-auto border hairline-border p-2 bg-[#fcf9f8]">
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/4.5] arch-mask-top overflow-hidden bg-[#0A192F] shadow-sm">
            {getIllustration()}
          </div>
        </div>
      )}

      {type === 'diptych' && (
        <div className="w-full border hairline-border p-2 bg-[#fcf9f8]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[#fcf9f8] overflow-hidden">
            <div className="relative aspect-[16/10] bg-[#0A192F] overflow-hidden">
              {getIllustration()}
              <div className="absolute bottom-2 left-3 bg-[#0A192F]/80 px-2 py-0.5 label-caps text-[10px] text-white">
                FRAME A · PRIMARY TRANSECT
              </div>
            </div>
            <div className="relative aspect-[16/10] bg-[#1B4947] overflow-hidden">
              {/* Secondary comparative perspective */}
              <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none">
                <rect width="800" height="500" fill="#0d1c32" />
                {Array.from({ length: 9 }).map((_, i) => (
                  <circle
                    key={i}
                    cx="400"
                    cy="250"
                    r={30 + i * 26}
                    stroke="#E05A47"
                    strokeWidth="1.2"
                    strokeDasharray="4,4"
                    opacity={0.25 + i * 0.08}
                  />
                ))}
                <line x1="100" y1="250" x2="700" y2="250" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
                <line x1="400" y1="50" x2="400" y2="450" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
                <circle cx="400" cy="250" r="14" fill="#F29C38" />
                <text x="400" y="254" textAnchor="middle" fill="#0A192F" fontFamily="Space Mono" fontSize="9" fontWeight="bold">
                  RADIAL
                </text>
                <text x="50" y="60" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="bold" letterSpacing="0.12em">
                  FRAME B · MICRO-CATCHMENT RADIAL RECOVERY
                </text>
              </svg>
              <div className="absolute bottom-2 left-3 bg-[#0A192F]/80 px-2 py-0.5 label-caps text-[10px] text-white">
                FRAME B · 24-MONTH ISOMETRIC AUDIT
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 'rectilinear' && (
        <div className="w-full border hairline-border p-2 bg-[#fcf9f8]">
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0A192F]">
            {getIllustration()}
          </div>
        </div>
      )}

      {/* Museum figure caption placed directly beneath image */}
      <figcaption className="mt-3 text-xs font-editorial-sans text-[#44474d] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-t hairline-border pt-2.5">
        <span className="font-semibold text-[#0A192F] label-caps text-[11px]">
          {caption}
        </span>
        <span className="font-mono text-[10px] text-[#75777e] uppercase tracking-wider shrink-0">
          ARCHIVE REF // SEC-{figNumber}
        </span>
      </figcaption>
    </figure>
  );
};
