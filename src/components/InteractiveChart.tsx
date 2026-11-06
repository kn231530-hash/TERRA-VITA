import React, { useState } from 'react';
import { HISTORICAL_HYDRO_DATA, REGIONAL_ALLOCATION } from '../data/monographData';

export const InteractiveChart: React.FC = () => {
  const [activeSeries, setActiveSeries] = useState<'recharge' | 'wells' | 'vegetation'>('recharge');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxRecharge = 3000; // ML
  const maxWells = 160;
  const maxVeg = 1.0;

  return (
    <div className="w-full border hairline-border bg-[#fcf9f8] p-6 md:p-8">
      {/* Chart Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b hairline-border">
        <div>
          <span className="label-caps text-[#1B4947]">
            AUDIT SERIES // HYDROLOGICAL TELEMETRY
          </span>
          <h4 className="font-serif text-2xl md:text-3xl font-bold text-[#0A192F] mt-1">
            Aquifer Recharge & Canopy Regeneration (2021–2026)
          </h4>
          <p className="text-sm text-[#44474d] mt-1 font-editorial-sans">
            Continuous sensor telemetry across 142 decentralized sand dam weir arrays.
          </p>
        </div>

        {/* Series Filter Tabs (Functional segmented button controls) */}
        <div className="flex items-center gap-1 bg-[#F0EFEA] p-1 border hairline-border self-start">
          <button
            onClick={() => setActiveSeries('recharge')}
            className={`px-3 py-1.5 label-caps text-xs transition-colors cursor-pointer ${
              activeSeries === 'recharge'
                ? 'bg-[#0A192F] text-white'
                : 'text-[#44474d] hover:text-[#0A192F]'
            }`}
          >
            Aquifer Yield (ML)
          </button>
          <button
            onClick={() => setActiveSeries('wells')}
            className={`px-3 py-1.5 label-caps text-xs transition-colors cursor-pointer ${
              activeSeries === 'wells'
                ? 'bg-[#E05A47] text-white'
                : 'text-[#44474d] hover:text-[#0A192F]'
            }`}
          >
            Active Arrays
          </button>
          <button
            onClick={() => setActiveSeries('vegetation')}
            className={`px-3 py-1.5 label-caps text-xs transition-colors cursor-pointer ${
              activeSeries === 'vegetation'
                ? 'bg-[#1B4947] text-white'
                : 'text-[#44474d] hover:text-[#0A192F]'
            }`}
          >
            Canopy Index
          </button>
        </div>
      </div>

      {/* Main Infographic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Bar & Trend Series Chart (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          {/* SVG Chart with exact 10% dashed gridlines and solid 1.5px baseline */}
          <div className="relative w-full h-[280px] md:h-[320px] select-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 600 300" preserveAspectRatio="none">
              {/* Dashed Gridlines at 10% opacity #0A192F */}
              {[0, 1, 2, 3, 4].map((g) => {
                const y = 40 + g * 55;
                return (
                  <g key={g}>
                    <line
                      x1="40"
                      y1={y}
                      x2="590"
                      y2={y}
                      stroke="#0A192F"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      opacity="0.10"
                    />
                    <text
                      x="32"
                      y={y + 3}
                      textAnchor="end"
                      fill="#75777e"
                      fontFamily="Space Mono"
                      fontSize="9"
                      className="tabular-nums"
                    >
                      {activeSeries === 'recharge'
                        ? `${Math.round(maxRecharge - (g * maxRecharge) / 4)}ML`
                        : activeSeries === 'wells'
                        ? `${Math.round(maxWells - (g * maxWells) / 4)}`
                        : `${(maxVeg - (g * maxVeg) / 4).toFixed(2)}`}
                    </text>
                  </g>
                );
              })}

              {/* Zero-baseline rendered solid 1.5px #0A192F */}
              <line x1="40" y1="260" x2="590" y2="260" stroke="#0A192F" strokeWidth="1.5" />

              {/* Data Bars */}
              {HISTORICAL_HYDRO_DATA.map((d, idx) => {
                const x = 70 + idx * 90;
                let barHeight = 0;
                let barColor = '#0A192F';
                let labelValue = '';

                if (activeSeries === 'recharge') {
                  barHeight = (d.annualRechargeML / maxRecharge) * 220;
                  barColor = idx === 5 ? '#E05A47' : '#0A192F';
                  labelValue = `${d.annualRechargeML} ML`;
                } else if (activeSeries === 'wells') {
                  barHeight = (d.activeWells / maxWells) * 220;
                  barColor = '#E05A47';
                  labelValue = `${d.activeWells} Units`;
                } else {
                  barHeight = (d.vegetativeIndex / maxVeg) * 220;
                  barColor = '#1B4947';
                  labelValue = `+${Math.round(d.vegetativeIndex * 100)}%`;
                }

                const y = 260 - barHeight;
                const isHovered = hoveredIndex === idx;

                return (
                  <g
                    key={d.year}
                    className="cursor-pointer transition-opacity"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Shadow / hover backdrop column */}
                    <rect
                      x={x - 12}
                      y="30"
                      width="54"
                      height="230"
                      fill={isHovered ? '#0A192F' : 'transparent'}
                      opacity={isHovered ? 0.05 : 0}
                    />

                    {/* Architectural Sharp Bar (0px radius) */}
                    <rect
                      x={x}
                      y={y}
                      width="30"
                      height={barHeight}
                      fill={barColor}
                      className="transition-all duration-200"
                    />

                    {/* Value label on hover or final bar */}
                    {(isHovered || idx === 5) && (
                      <text
                        x={x + 15}
                        y={y - 8}
                        textAnchor="middle"
                        fill="#0A192F"
                        fontFamily="Space Mono"
                        fontSize="9"
                        fontWeight="bold"
                        className="tabular-nums"
                      >
                        {labelValue}
                      </text>
                    )}

                    {/* Year Label */}
                    <text
                      x={x + 15}
                      y="278"
                      textAnchor="middle"
                      fill="#0A192F"
                      fontFamily="Plus Jakarta Sans"
                      fontSize="11"
                      fontWeight="600"
                      className="label-caps tracking-wider"
                    >
                      {d.year}
                    </text>
                  </g>
                );
              })}

              {/* Connecting Overlay Trend Line */}
              <polyline
                points={HISTORICAL_HYDRO_DATA.map((d, idx) => {
                  const x = 70 + idx * 90 + 15;
                  let valRatio = 0;
                  if (activeSeries === 'recharge') valRatio = d.annualRechargeML / maxRecharge;
                  else if (activeSeries === 'wells') valRatio = d.activeWells / maxWells;
                  else valRatio = d.vegetativeIndex / maxVeg;
                  const y = 260 - valRatio * 220;
                  return `${x},${y}`;
                }).join(' ')}
                fill="none"
                stroke="#F29C38"
                strokeWidth="2"
                strokeDasharray="4,2"
              />

              {HISTORICAL_HYDRO_DATA.map((d, idx) => {
                const x = 70 + idx * 90 + 15;
                let valRatio = 0;
                if (activeSeries === 'recharge') valRatio = d.annualRechargeML / maxRecharge;
                else if (activeSeries === 'wells') valRatio = d.activeWells / maxWells;
                else valRatio = d.vegetativeIndex / maxVeg;
                const y = 260 - valRatio * 220;
                return (
                  <circle
                    key={idx}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#F29C38"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>
          </div>

          <div className="flex items-center justify-between text-xs text-[#75777e] pt-4 border-t hairline-border">
            <span className="font-mono text-[11px]">
              DATA SOURCE: SAHELIAN REMOTE SENSING MATRIX & IoT WEIR PROBES
            </span>
            <span className="label-caps text-[#E05A47]">
              +576% 5-YEAR COMPOUND RECOVERY
            </span>
          </div>
        </div>

        {/* Right Column: Regional Allocation Breakdown (4 cols) */}
        <div className="lg:col-span-4 bg-[#F0EFEA] p-6 border hairline-border flex flex-col justify-between">
          <div>
            <span className="label-caps text-[#1B4947]">
              CAPITAL DEPLOYMENT MATRIX
            </span>
            <h5 className="font-serif text-lg font-semibold text-[#0A192F] mt-1 mb-4">
              Regional Interventions
            </h5>

            {/* Allocation Rows */}
            <div className="space-y-4">
              {REGIONAL_ALLOCATION.map((r) => (
                <div key={r.region} className="border-b hairline-border pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-semibold text-[#0A192F]">
                      {r.region}
                    </span>
                    <span className="font-mono text-xs tabular-nums font-bold text-[#0A192F]">
                      ${(r.amountUSD / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  {/* Progress Bar (0px radius) */}
                  <div className="w-full h-2 bg-[#dcd9d9] overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{ width: `${r.percentage}%`, backgroundColor: r.color }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-[#44474d] mt-1 font-mono">
                    <span>{r.projects} VERIFIED SITES</span>
                    <span>{r.percentage}% OF TOTAL FUND</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t hairline-border flex items-center justify-between">
            <span className="label-caps text-[11px] text-[#0A192F]">
              TOTAL AUDITED ASSETS
            </span>
            <span className="font-serif font-bold text-xl text-[#E05A47] tabular-nums">
              $6,450,000 USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
