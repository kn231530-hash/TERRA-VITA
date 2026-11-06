import React, { useState } from 'react';
import { Check, Send, Download, CheckCircle2 } from 'lucide-react';

export const DispatchTerminal: React.FC = () => {
  // Allocation Simulator
  const [allocationAmount, setAllocationAmount] = useState<number>(5000);
  const [allocationFocus, setAllocationFocus] = useState<'water' | 'soil' | 'health' | 'seed'>('water');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [dispatchType, setDispatchType] = useState('institutional-audit');
  const [requestFullMonograph, setRequestFullMonograph] = useState(true);
  const [joinElderCouncilBriefing, setJoinElderCouncilBriefing] = useState(true);
  const [specialNote, setSpecialNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Impact Projection based on allocation and focus
  const calculateImpact = () => {
    switch (allocationFocus) {
      case 'water':
        return {
          metric: `${Math.round(allocationAmount * 12.8).toLocaleString()} Liters/Day`,
          label: 'Subsurface aquifer yield secured permanently',
          communities: Math.max(1, Math.round(allocationAmount / 2500)),
          carbonOrBuffer: `${(allocationAmount * 0.04).toFixed(1)} km riverbed buffer`
        };
      case 'soil':
        return {
          metric: `${Math.round(allocationAmount * 1.6).toLocaleString()} Hectares`,
          label: 'Zaï micro-catchments & Faidherbia canopy established',
          communities: Math.max(1, Math.round(allocationAmount / 2000)),
          carbonOrBuffer: `${Math.round(allocationAmount * 0.85)} Metric tons compost`
        };
      case 'health':
        return {
          metric: `${Math.round(allocationAmount * 3.4).toLocaleString()} Children`,
          label: 'Pediatric cold-chain immunizations delivered via solar catamaran',
          communities: Math.max(1, Math.round(allocationAmount / 1800)),
          carbonOrBuffer: '100% zero-emission river transit'
        };
      case 'seed':
        return {
          metric: `${Math.round(allocationAmount * 2.2).toLocaleString()} Kg Seed`,
          label: 'Ancestral drought-hardy landraces loaned to peasant cooperatives',
          communities: Math.max(1, Math.round(allocationAmount / 1500)),
          carbonOrBuffer: '38 genetic heirloom accessions'
        };
    }
  };

  const impact = calculateImpact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full my-12 border hairline-border bg-[#fcf9f8] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Kicker & Header */}
        <div className="mb-10 text-center md:text-left">
          <span className="label-caps text-[#1B4947]">
            PARTNERSHIP & FIELD AUDIT DISPATCH
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#0A192F] mt-2">
            Pledge Terminal & Research Access Request
          </h3>
          <p className="text-base text-[#44474d] font-editorial-sans mt-2 max-w-2xl leading-relaxed">
            Institutional donors, academic research consortia, and humanitarian agencies can simulate capital deployment or request authenticated field monographs with complete hydrological sensor logs.
          </p>
        </div>

        {/* Dynamic Interactive Impact Simulator */}
        <div className="mb-12 bg-[#F0EFEA] p-6 md:p-8 border hairline-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <span className="label-caps text-[#0A192F] font-bold text-xs">
              01. CAPITAL DEPLOYMENT & IMPACT PROJECTION
            </span>
            <span className="font-mono text-xs text-[#E05A47] font-semibold">
              CALCULATED ON 2026 BENCHMARKS
            </span>
          </div>

          {/* Focus Toggle (Interactive Segmented buttons with sharp 0px corners) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {[
              { id: 'water', label: 'Aquifer Hydrology' },
              { id: 'soil', label: 'Soil Regeneration' },
              { id: 'health', label: 'Mobile Clinical' },
              { id: 'seed', label: 'Ancestral Seeds' }
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setAllocationFocus(f.id as any)}
                className={`py-2.5 px-3 label-caps text-xs text-center border cursor-pointer transition-colors ${
                  allocationFocus === f.id
                    ? 'bg-[#0A192F] text-white border-[#0A192F]'
                    : 'bg-white text-[#44474d] border-[#0A192F]/20 hover:border-[#0A192F]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Allocation Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <label htmlFor="pledge-slider" className="label-caps text-xs text-[#44474d]">
                Pledge or Research Allocation
              </label>
              <div className="font-serif text-2xl font-bold text-[#0A192F] tabular-nums">
                ${allocationAmount.toLocaleString()} <span className="text-xs font-sans font-semibold text-[#75777e]">USD</span>
              </div>
            </div>
            <input
              id="pledge-slider"
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={allocationAmount}
              onChange={(e) => setAllocationAmount(Number(e.target.value))}
              className="w-full accent-[#0A192F] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#75777e] mt-1">
              <span>$1,000 USD (Community Node)</span>
              <span>$25,000 USD (Sub-basin Grid)</span>
              <span>$50,000 USD (Regional Corridors)</span>
            </div>
          </div>

          {/* Simulated Impact Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t hairline-border">
            <div className="bg-white p-4 border hairline-border">
              <div className="label-caps text-[10px] text-[#1B4947] mb-1">Direct Field Yield</div>
              <div className="stat-display text-2xl md:text-3xl text-[#E05A47] mb-1">
                {impact.metric}
              </div>
              <p className="text-xs text-[#44474d] font-editorial-sans">
                {impact.label}
              </p>
            </div>
            <div className="bg-white p-4 border hairline-border">
              <div className="label-caps text-[10px] text-[#1B4947] mb-1">Elder-Governed Enclaves</div>
              <div className="stat-display text-2xl md:text-3xl text-[#0A192F] mb-1">
                {impact.communities} {impact.communities === 1 ? 'Council' : 'Councils'}
              </div>
              <p className="text-xs text-[#44474d] font-editorial-sans">
                Trained in sensor telemetry and water rights
              </p>
            </div>
            <div className="bg-white p-4 border hairline-border">
              <div className="label-caps text-[10px] text-[#1B4947] mb-1">Ecological Return</div>
              <div className="stat-display text-2xl md:text-3xl text-[#1B4947] mb-1">
                {impact.carbonOrBuffer}
              </div>
              <p className="text-xs text-[#44474d] font-editorial-sans">
                Direct biome stabilization index
              </p>
            </div>
          </div>
        </div>

        {/* Dispatch Form with strict specification: Baseline-only underline & Square Checkboxes */}
        <div className="bg-white p-6 md:p-10 border hairline-border">
          <div className="flex items-center justify-between mb-6 pb-3 border-b hairline-border">
            <span className="label-caps text-[#0A192F] font-bold text-xs">
              02. OFFICIAL DISPATCH & RECORD REGISTRATION
            </span>
            <span className="label-caps text-[11px] text-[#75777e]">
              SECURE REGISTRY // TV-2026
            </span>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#1B4947] mx-auto mb-4" />
              <h4 className="font-serif text-2xl font-bold text-[#0A192F] mb-2">
                Field Dispatch Registration Recorded
              </h4>
              <p className="text-sm text-[#44474d] font-editorial-sans max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-[#0A192F]">{fullName}</span>. Your inquiry regarding <span className="font-semibold">{organization || 'your institutional mission'}</span> has been logged under registry reference <span className="font-mono font-bold text-[#E05A47]">#DISP-2026-{Math.floor(1000 + Math.random() * 9000)}</span>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#0A192F] text-white px-6 py-3 label-caps text-xs hover:bg-[#E05A47] transition-colors"
                >
                  Submit Additional Inquiry
                </button>
                <a
                  href="#monograph"
                  className="border-[1.5px] border-[#0A192F] text-[#0A192F] px-6 py-3 label-caps text-xs hover:bg-[#F0EFEA] transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Review Chapters
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name Input (Baseline-only underline on #F0EFEA background, transition to #E05A47 focus) */}
                <div>
                  <label className="block label-caps text-xs text-[#0A192F] mb-1.5">
                    Authorized Representative Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Elena Vance"
                    className="editorial-input w-full px-3 py-3 text-sm text-[#0A192F] font-editorial-sans placeholder:text-[#75777e]"
                  />
                </div>

                {/* Organization / Institute Input */}
                <div>
                  <label className="block label-caps text-xs text-[#0A192F] mb-1.5">
                    Institution or Humanitarian Agency
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Global Hydrology Fellowship"
                    className="editorial-input w-full px-3 py-3 text-sm text-[#0A192F] font-editorial-sans placeholder:text-[#75777e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block label-caps text-xs text-[#0A192F] mb-1.5">
                    Institutional Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vance@research.org"
                    className="editorial-input w-full px-3 py-3 text-sm text-[#0A192F] font-editorial-sans placeholder:text-[#75777e]"
                  />
                </div>

                {/* Dispatch Purpose Dropdown */}
                <div>
                  <label className="block label-caps text-xs text-[#0A192F] mb-1.5">
                    Dispatch Nature
                  </label>
                  <select
                    value={dispatchType}
                    onChange={(e) => setDispatchType(e.target.value)}
                    className="editorial-input w-full px-3 py-3 text-sm text-[#0A192F] font-editorial-sans"
                  >
                    <option value="institutional-audit">Institutional Donor Audit Request</option>
                    <option value="academic-research">Academic Consortium Research Access</option>
                    <option value="field-partnership">Community Field Partnership Proposal</option>
                    <option value="general-inquiry">General Monograph Print Edition Order</option>
                  </select>
                </div>
              </div>

              {/* Special Note Input */}
              <div>
                <label className="block label-caps text-xs text-[#0A192F] mb-1.5">
                  Field Coordinates / Program Areas of Inquiry
                </label>
                <textarea
                  rows={3}
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="Specify particular wadi basins, aquifer depths, or community seed councils you wish to cross-reference..."
                  className="editorial-input w-full px-3 py-3 text-sm text-[#0A192F] font-editorial-sans placeholder:text-[#75777e]"
                />
              </div>

              {/* Checkboxes: Sharp square geometries with 1.5px stroke, checked state fills solid #0A192F with white checkmark */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <div
                    onClick={() => setRequestFullMonograph(!requestFullMonograph)}
                    className="w-4 h-4 mt-0.5 border-[1.5px] border-[#0A192F] rounded-none flex items-center justify-center transition-colors shrink-0"
                    style={{
                      backgroundColor: requestFullMonograph ? '#0A192F' : 'transparent'
                    }}
                  >
                    {requestFullMonograph && <Check className="w-3 h-3 text-white stroke-[2.5]" />}
                  </div>
                  <span className="text-xs text-[#44474d] font-editorial-sans">
                    Deliver complete high-resolution 48-page monograph broadsheet with raw sensor CSV appendices.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <div
                    onClick={() => setJoinElderCouncilBriefing(!joinElderCouncilBriefing)}
                    className="w-4 h-4 mt-0.5 border-[1.5px] border-[#0A192F] rounded-none flex items-center justify-center transition-colors shrink-0"
                    style={{
                      backgroundColor: joinElderCouncilBriefing ? '#0A192F' : 'transparent'
                    }}
                  >
                    {joinElderCouncilBriefing && <Check className="w-3 h-3 text-white stroke-[2.5]" />}
                  </div>
                  <span className="text-xs text-[#44474d] font-editorial-sans">
                    Register our delegation for the biannual elder council hydrological symposium (Geneva / Niamey).
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t hairline-border">
                <span className="text-[11px] font-mono text-[#75777e]">
                  CONFIDENTIALITY PROTOCOL // UN DATA PRIVACY STANDARDS
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="bg-[#0A192F] text-white label-caps px-8 py-4 rounded-none hover:bg-[#E05A47] transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Official Dispatch
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
