import React from 'react';
import { MetricItem } from '../data/monographData';

interface DataMetricCardProps {
  metric: MetricItem;
  accentColor?: 'navy' | 'terracotta';
  bgVariant?: 'muted' | 'ivory';
}

export const DataMetricCard: React.FC<DataMetricCardProps> = ({
  metric,
  accentColor = 'navy',
  bgVariant = 'muted'
}) => {
  return (
    <div
      className={`p-6 md:p-7 border hairline-border rounded-none flex flex-col justify-between transition-all duration-200 hover:border-[#0A192F] ${
        bgVariant === 'muted' ? 'bg-[#F0EFEA]' : 'bg-[#fcf9f8]'
      }`}
    >
      <div>
        {/* Top edge uppercase classification tag in #1B4947 */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="label-caps text-[#1B4947] text-[11px] md:text-xs">
            {metric.category}
          </span>
          {/* Pill-shaped badge for comparative trends */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-normal ${
              metric.trendPositive
                ? 'bg-[#F29C38]/20 text-[#0A192F]'
                : 'bg-[#E05A47]/15 text-[#6d0300]'
            }`}
          >
            {metric.trend}
          </span>
        </div>

        {/* Number set in stat-display */}
        <div className="flex items-baseline gap-2 mb-2">
          <span
            className={`stat-display tracking-tight ${
              accentColor === 'terracotta' ? 'text-[#E05A47]' : 'text-[#0A192F]'
            }`}
          >
            {metric.value}
          </span>
          {metric.unit && (
            <span className="label-caps text-[#44474d] text-xs font-semibold">
              {metric.unit}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm font-editorial-sans text-[#44474d] leading-relaxed pt-3 border-t hairline-border mt-3">
        {metric.description}
      </p>
    </div>
  );
};
