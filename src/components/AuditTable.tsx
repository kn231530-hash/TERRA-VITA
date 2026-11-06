import React, { useState, useMemo } from 'react';
import { AUDIT_INTERVENTIONS, InterventionProject } from '../data/monographData';
import { Search, ChevronDown, ChevronUp, FileText, X } from 'lucide-react';

export const AuditTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortField, setSortField] = useState<'beneficiaries' | 'budgetUSD' | 'year' | 'completionRate'>('beneficiaries');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedProject, setSelectedProject] = useState<InterventionProject | null>(null);

  const categories = [
    'all',
    'Aquifer Sovereignty',
    'Pastoral Agroecology',
    'Mobile Health',
    'Seed Repositories',
    'Deltaic Resilience'
  ];

  const filteredProjects = useMemo(() => {
    return AUDIT_INTERVENTIONS.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });
  }, [searchQuery, selectedCategory, sortField, sortOrder]);

  const toggleSort = (field: 'beneficiaries' | 'budgetUSD' | 'year' | 'completionRate') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="w-full my-8">
      {/* Table Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        {/* Search Input with baseline-only underline */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search code, wadi, basin, or region..."
            className="editorial-input w-full px-3 py-2 text-sm text-[#0A192F] placeholder:text-[#75777e] font-editorial-sans"
          />
          <Search className="w-4 h-4 text-[#75777e] absolute right-2.5 top-2.5 pointer-events-none" />
        </div>

        {/* Category Pills / Filter buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 label-caps text-[11px] whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0A192F] text-white'
                  : 'bg-[#F0EFEA] text-[#44474d] hover:bg-[#e5e2e1]'
              }`}
            >
              {cat === 'all' ? 'All Interventions' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Table (Strictly: No vertical borders, #0A192F header, alternating transparent & #F0EFEA rows, right-aligned numbers) */}
      <div className="w-full overflow-x-auto border-t border-b hairline-border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#0A192F] text-white">
              <th className="py-3.5 px-4 label-caps text-[11px] text-white tracking-wider">
                Project Code
              </th>
              <th className="py-3.5 px-4 label-caps text-[11px] text-white tracking-wider">
                Intervention & Region
              </th>
              <th className="py-3.5 px-4 label-caps text-[11px] text-white tracking-wider">
                Category
              </th>
              <th
                onClick={() => toggleSort('beneficiaries')}
                className="py-3.5 px-4 label-caps text-[11px] text-white tracking-wider text-right cursor-pointer hover:text-[#F29C38]"
              >
                <div className="flex items-center justify-end gap-1">
                  Beneficiaries
                  {sortField === 'beneficiaries' && (
                    sortOrder === 'desc' ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />
                  )}
                </div>
              </th>
              <th
                onClick={() => toggleSort('budgetUSD')}
                className="py-3.5 px-4 label-caps text-[11px] text-white tracking-wider text-right cursor-pointer hover:text-[#F29C38]"
              >
                <div className="flex items-center justify-end gap-1">
                  Budget (USD)
                  {sortField === 'budgetUSD' && (
                    sortOrder === 'desc' ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />
                  )}
                </div>
              </th>
              <th
                onClick={() => toggleSort('completionRate')}
                className="py-3.5 px-4 label-caps text-[11px] text-white tracking-wider text-right cursor-pointer hover:text-[#F29C38]"
              >
                <div className="flex items-center justify-end gap-1">
                  Audit Uptime
                  {sortField === 'completionRate' && (
                    sortOrder === 'desc' ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />
                  )}
                </div>
              </th>
              <th className="py-3.5 px-4 label-caps text-[11px] text-white tracking-wider text-right">
                Dossier
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-[#75777e] font-editorial-sans text-sm">
                  No matching field interventions found in the 2024–2026 registry.
                </td>
              </tr>
            ) : (
              filteredProjects.map((item, idx) => (
                <tr
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className={`border-b hairline-border transition-colors cursor-pointer hover:bg-[#F29C38]/10 ${
                    idx % 2 === 0 ? 'bg-transparent' : 'bg-[#F0EFEA]'
                  }`}
                >
                  <td className="py-4 px-4 font-mono text-xs font-bold text-[#0A192F] whitespace-nowrap">
                    {item.code}
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-semibold text-sm text-[#0A192F]">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#44474d] flex items-center gap-1.5 mt-0.5">
                      <span>{item.region}</span>
                      <span className="text-[#c5c6cd]">·</span>
                      <span className="font-mono text-[11px] text-[#75777e]">{item.coordinates}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="text-xs font-semibold text-[#1B4947]">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right font-mono text-xs font-bold text-[#0A192F] tabular-nums whitespace-nowrap">
                    {item.beneficiaries.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right font-mono text-xs font-semibold text-[#0A192F] tabular-nums whitespace-nowrap">
                    ${item.budgetUSD.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#1B4947]/15 text-[#1B4947]">
                      {item.completionRate}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(item);
                      }}
                      className="text-xs label-caps text-[#E05A47] hover:underline flex items-center justify-end gap-1 ml-auto"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#75777e] font-editorial-sans pt-3 gap-2">
        <span>
          Showing {filteredProjects.length} of {AUDIT_INTERVENTIONS.length} verified humanitarian interventions.
        </span>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <span>AGGREGATE REACH: 295,700 LIVES</span>
          <span>AUDIT RATING: GRADE A1</span>
        </div>
      </div>

      {/* Accession Dossier Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0A192F]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcf9f8] border border-[#0A192F] max-w-2xl w-full p-6 md:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#0A192F] hover:text-[#E05A47] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="label-caps text-[#1B4947] mb-1">
              FIELD INTERVENTION DOSSIER // {selectedProject.code}
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#0A192F] mb-2">
              {selectedProject.title}
            </h4>
            <div className="text-xs text-[#44474d] mb-6 flex items-center gap-2">
              <span>{selectedProject.region}</span>
              <span>·</span>
              <span className="font-mono">{selectedProject.coordinates}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 bg-[#F0EFEA] p-4 border hairline-border">
              <div>
                <div className="label-caps text-[10px] text-[#75777e]">Category</div>
                <div className="text-xs font-bold text-[#0A192F] mt-1">{selectedProject.category}</div>
              </div>
              <div>
                <div className="label-caps text-[10px] text-[#75777e]">Direct Reach</div>
                <div className="font-mono text-xs font-bold text-[#0A192F] mt-1 tabular-nums">
                  {selectedProject.beneficiaries.toLocaleString()} Lives
                </div>
              </div>
              <div>
                <div className="label-caps text-[10px] text-[#75777e]">Allocated Capital</div>
                <div className="font-mono text-xs font-bold text-[#E05A47] mt-1 tabular-nums">
                  ${selectedProject.budgetUSD.toLocaleString()} USD
                </div>
              </div>
              <div>
                <div className="label-caps text-[10px] text-[#75777e]">Lead Coordinator</div>
                <div className="text-xs font-medium text-[#0A192F] mt-1">{selectedProject.leadCoordinator}</div>
              </div>
              <div>
                <div className="label-caps text-[10px] text-[#75777e]">Primary Metric</div>
                <div className="text-xs font-bold text-[#1B4947] mt-1">{selectedProject.keyMetric}</div>
              </div>
              <div>
                <div className="label-caps text-[10px] text-[#75777e]">Audit Status</div>
                <div className="text-xs font-bold text-[#0A192F] mt-1">
                  {selectedProject.completionRate}% Operational
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="label-caps text-xs text-[#0A192F] mb-1">Field Observation & Sensor Log</div>
              <p className="text-sm text-[#1c1b1b] font-editorial-sans leading-relaxed bg-white p-3 border hairline-border">
                {selectedProject.notes}
              </p>
            </div>

            <div className="text-xs text-[#75777e] border-t hairline-border pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-semibold text-[#0A192F]">Audited & Verified: </span>
                {selectedProject.verifiedBy}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-[#0A192F] text-white px-5 py-2 label-caps text-xs hover:bg-[#E05A47] transition-colors"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
