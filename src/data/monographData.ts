export interface MetricItem {
  id: string;
  category: string;
  value: string;
  unit?: string;
  description: string;
  trend: string;
  trendPositive: boolean;
}

export interface OralHistory {
  id: string;
  speaker: string;
  role: string;
  community: string;
  region: string;
  year: string;
  quote: string;
  audioDuration: string;
  waveform: number[];
  story: string;
  dialectNote: string;
}

export interface InterventionProject {
  id: string;
  code: string;
  title: string;
  region: string;
  biome: string;
  category: 'Aquifer Sovereignty' | 'Pastoral Agroecology' | 'Mobile Health' | 'Seed Repositories' | 'Deltaic Resilience';
  beneficiaries: number;
  budgetUSD: number;
  year: number;
  completionRate: number;
  leadCoordinator: string;
  keyMetric: string;
  coordinates: string;
  verifiedBy: string;
  notes: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  kicker: string;
  pageNumber: string;
  totalPages: string;
  leadParagraph: string;
  bodyParagraphs: string[];
  metrics: MetricItem[];
  pullQuote: {
    quote: string;
    attribution: string;
    role: string;
    region: string;
    year: string;
  };
  fieldNotes: {
    date: string;
    location: string;
    observer: string;
    finding: string;
  }[];
  heroImage: {
    title: string;
    type: 'arch' | 'diptych' | 'rectilinear';
    caption: string;
    figNumber: string;
    subCaption?: string;
  };
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'chapter-01',
    number: '01',
    title: 'Water Sovereignty: Subsurface Aquifer Restoration Across the Sahelian Rim',
    subtitle: 'Decentralized deep-well hydrology and community-governed solar extraction arrays',
    kicker: 'HYDRAULIC ARCHITECTURE // FIELD REPORT 2026',
    pageNumber: '04',
    totalPages: '48',
    leadParagraph:
      'Across the northern Sahelian strip, the transition from cyclical crisis to hydraulic permanence requires an architectural paradigm shift. Rather than emergency water trucking or single-point boreholes prone to mechanical exhaustion, our 2024–2026 deployment engineered 142 subterranean sand dams and solar-coupled aquifer tapping grids.',
    bodyParagraphs: [
      'Subsurface geological mapping revealed ancient paleo-drainage channels situated twelve to thirty-five meters beneath degraded wadi basins. By anchoring gabion weir foundations directly into impermeable granite bedrock, monsoon flash floods are captured within coarse sand beds, eliminating evaporative loss under 45°C ambient heat.',
      'Crucially, governance was ceded from initial commissioning to matrilineal elder committees. Utilizing mechanical sensors with local radio transceivers, extraction rates are automatically capped to match the natural seasonal infiltration index, preserving water table depth over thirty-year horizons.',
      'The secondary ecological dividend has been immediate: a 4.2-kilometer vegetative buffer zone has regenerated downstream of each weir site, stabilizing topsoil against dune migration and permitting three distinct dry-season sorghum harvests.'
    ],
    metrics: [
      {
        id: 'm1',
        category: 'AQUIFER RECHARGE CAPACITY',
        value: '2,840,000',
        unit: 'L/Day',
        description: 'Aggregate yield secured without mechanical drawdown past base thresholds.',
        trend: '+38.4% YoY',
        trendPositive: true
      },
      {
        id: 'm2',
        category: 'COMMUNITY RETENTION INDEX',
        value: '99.2%',
        unit: 'Governance',
        description: 'Local elder councils independently operating sensor telemetry grids.',
        trend: '+5.1% Retention',
        trendPositive: true
      },
      {
        id: 'm3',
        category: 'ARABLE LAND SECURED',
        value: '14,600',
        unit: 'Hectares',
        description: 'Micro-basin agro-forestry buffers shielding arable soils from dune creep.',
        trend: '+2,400 Ha Added',
        trendPositive: true
      }
    ],
    pullQuote: {
      quote:
        'When water is held beneath the clean sand rather than exposed to the harsh sun, the earth remembers how to nourish our tamarind and acacia groves.',
      attribution: 'Aïchatou Mint Bilal',
      role: 'Head of Water Management Council',
      region: 'Tagant Basin, Mauritania',
      year: 'Project Year 2025'
    },
    fieldNotes: [
      {
        date: '14 January 2026',
        location: 'Wadi el-Abiod, Chinguetti Plateau',
        observer: 'Dr. Kwame Mensah, Chief Hydrologist',
        finding: 'Depth to water table held stable at 7.2m despite 68 consecutive days without precipitation.'
      },
      {
        date: '28 February 2026',
        location: 'Tamesna Plain, Agadez Trans-Border Sector',
        observer: 'Mariam Coulibaly, Community Liaison',
        finding: 'Pastoral herd migration corridors re-routed successfully around fenced sand recharge basins.'
      }
    ],
    heroImage: {
      title: 'Subsurface Bedrock Weirs & Solar Aquifer Manifolds',
      type: 'arch',
      caption: 'Fig. 1 — Architectural profile of sand dam weir no. 18 with integrated solar pumping manifold and granite anchoring.',
      figNumber: '01'
    }
  },
  {
    id: 'chapter-02',
    number: '02',
    title: 'Pastoral Soil Regeneration: Biological Terracing & Root Mycelium Networks',
    subtitle: 'Reversing desertification through indigenous stone bunding and nitrogen-fixing perennial strips',
    kicker: 'AGROECOLOGY // FIELD DISPATCH 2026',
    pageNumber: '14',
    totalPages: '48',
    leadParagraph:
      'Soil is not mere inert mineral substrate; it is a complex biological fabric decimated by decades of intensified drought and deforestation. In the escarpments of the Great Rift Valley, our agroecological initiative reintroduced modified zaï pits coupled with deep-rooting vetiver and Faidherbia albida ribbons.',
    bodyParagraphs: [
      'By excavating crescent-shaped micro-catchments along exact contour lines, torrential runoff is trapped rather than stripping topsoil. Filled with seasoned compost inoculated with mycorrhizal fungi, these catchments increase moisture penetration by up to four hundred percent relative to unworked land.',
      'Faidherbia albida trees exhibit reverse phenology: shedding nitrogen-rich leaves during the wet season to feed cereal crops below, while casting sheltering shade during the blistering arid months. This natural symbiosis reduces soil surface temperatures by up to 6.8 degrees Celsius.',
      'Over eighteen thousand pastoral households have formed reciprocal grazing compacts, protecting young seedlings while securing guaranteed rotational foraging rights once canopies exceed livestock browse height.'
    ],
    metrics: [
      {
        id: 'm4',
        category: 'ACTIVE COMPOST RESTORATION',
        value: '48,200',
        unit: 'Metric Tons',
        description: 'Organic compost produced in village pit hubs using indigenous biomass.',
        trend: '+42% Yield',
        trendPositive: true
      },
      {
        id: 'm5',
        category: 'CANOPY COOLING DELTA',
        value: '-6.8°C',
        unit: 'Microclimate',
        description: 'Mean soil surface temperature drop under established Faidherbia canopies.',
        trend: 'Stabilized',
        trendPositive: true
      },
      {
        id: 'm6',
        category: 'SMALLHOLDER FOOD SOVEREIGNTY',
        value: '22,400',
        unit: 'Households',
        description: 'Families achieving dry-season nutritional autonomy through multi-tier cropping.',
        trend: '+3,800 Households',
        trendPositive: true
      }
    ],
    pullQuote: {
      quote:
        'The stone contour lines teach the rain to walk slowly across the hills instead of running away with our children’s inheritance.',
      attribution: 'Eldoret Kipketer',
      role: 'Agro-pastoral Guild Elder',
      region: 'Kerio Valley, Kenya',
      year: 'Project Year 2025'
    },
    fieldNotes: [
      {
        date: '03 March 2026',
        location: 'Marakwet Ridge Catchment No. 4',
        observer: 'Elena Vance, Soil Biologist',
        finding: 'Active fungal hyphae network detected at 45cm depth; soil organic matter risen from 0.8% to 2.4%.'
      }
    ],
    heroImage: {
      title: 'Topographic Zaï Catchments and Perennial Shrub Bunds',
      type: 'diptych',
      caption: 'Fig. 2 — Dual-frame comparison: left, degraded hardpan crust; right, regenerated multi-tiered canopy 24 months post-bunding.',
      figNumber: '02'
    }
  },
  {
    id: 'chapter-03',
    number: '03',
    title: 'Mobile Health Corridors: Cold-Chain Logistics for Nomadic Enclaves',
    subtitle: 'Decentralized vaccine preservation and solar boat clinics across isolated river deltas',
    kicker: 'EPIDEMIOLOGY // FIELD AUDIT 2026',
    pageNumber: '22',
    totalPages: '48',
    leadParagraph:
      'Humanitarian medical care frequently collapses at the final thirty kilometers of non-paved terrain. In the Lake Chad Basin and Chari River waterways, seasonal floods isolate nomadic pastoralists and island fisher communities from regional health infrastructure for seven months each year.',
    bodyParagraphs: [
      'Our mobile fleet of twelve shallow-draft solar catamarans and six all-terrain motorcycle sidecars was engineered to maintain an unbroken -20°C to +4°C cold chain without reliance on fossil fuels. Phase-change cooling jackets powered by rooftop bifacial photovoltaic arrays guarantee seventy-two hours of autonomous vaccine preservation.',
      'Each expedition team pairs a certified clinical nurse with a nomadic elder mediator, conducting simultaneous epidemiological surveillance, maternal health screenings, and routine pediatric immunizations.',
      'In 2025 alone, over forty-four thousand individuals received direct preventive medical consultations, reducing preventable infant rotavirus and measles mortality across the basin by eighty-two percent.'
    ],
    metrics: [
      {
        id: 'm7',
        category: 'COLD-CHAIN INTEGRITY',
        value: '100%',
        unit: 'Audit Pass',
        description: 'Zero vaccine spoilage recorded across 14,200 nautical and overland kilometers.',
        trend: 'Zero Batch Failures',
        trendPositive: true
      },
      {
        id: 'm8',
        category: 'NOMADIC ENCLAVE OUTREACH',
        value: '44,800',
        unit: 'Patients',
        description: 'Documented clinical treatments delivered directly inside seasonal encampments.',
        trend: '+28% Coverage',
        trendPositive: true
      },
      {
        id: 'm9',
        category: 'COMMUNITY HEALTH WORKERS',
        value: '310',
        unit: 'Certified',
        description: 'Locally trained pastoral health monitors managing digital triage transceivers.',
        trend: '+74 New Trainees',
        trendPositive: true
      }
    ],
    pullQuote: {
      quote:
        'Before the solar boat arrived, a simple fever in the rainy season was a death sentence. Today, our children are protected before the floodwaters rise.',
      attribution: 'Fatimé Mahamat',
      role: 'Community Midwife',
      region: 'Bol Archipelago, Lake Chad',
      year: 'Project Year 2025'
    },
    fieldNotes: [
      {
        date: '19 February 2026',
        location: 'Mani River Sector 3',
        observer: 'Dr. Jean-Paul Ndong, Medical Logistics Lead',
        finding: 'Bifacial solar array maintained full battery reserve through 4 days of monsoonal overcast sky.'
      }
    ],
    heroImage: {
      title: 'Solar Catamaran Mobile Health Unit On River Way',
      type: 'rectilinear',
      caption: 'Fig. 3 — Shallow-draft clinical catamaran vessel outfitted with solar phase-change vaccine refrigeration.',
      figNumber: '03'
    }
  },
  {
    id: 'chapter-04',
    number: '04',
    title: 'Indigenous Seed Repositories: Safeguarding High-Altitude Biodiversity',
    subtitle: 'Decentralized ancestral seed banks preserving drought-tolerant heirloom grains and tubers',
    kicker: 'BIODIVERSITY // FIELD REPORT 2026',
    pageNumber: '32',
    totalPages: '48',
    leadParagraph:
      'Industrial agricultural hybrids have consistently failed under accelerating microclimatic volatility in the Andean plateaus and East African highlands. In response, four hundred indigenous farming collectives have federated their ancestral seed preservation networks into nine climate-regulated seed sanctuaries.',
    bodyParagraphs: [
      'These repositories operate without external energy inputs, utilizing passive earth-sheltered stone vaults that maintain constant twelve-degree temperatures year-round. Over six hundred and forty distinct landrace varieties of quinoa, amaranth, finger millet, and frost-hardy tubers are curated.',
      'Each variety is cataloged alongside its oral cultivation lore: specific planting moons, companion mycorrhizal guilds, and cooking properties recorded in Quechua, Aymara, and Oromo dialects.',
      'During the severe 2024–2025 drought cycle, fields planted with conserved indigenous landraces sustained forty-five percent higher yields than commercial mono-crops, establishing heirloom seeds as the cornerstone of climate adaptation.'
    ],
    metrics: [
      {
        id: 'm10',
        category: 'LANDRACE VARIETIES PRESERVED',
        value: '640',
        unit: 'Strains',
        description: 'Genetically distinct heirloom crops held in active viable community repositories.',
        trend: '+85 New Strains',
        trendPositive: true
      },
      {
        id: 'm11',
        category: 'EARTH-SHELTERED VAULTS',
        value: '9',
        unit: 'Sanctuaries',
        description: 'Passive stone vault facilities engineered entirely by local stonemasons.',
        trend: '100% Passive Cooling',
        trendPositive: true
      },
      {
        id: 'm12',
        category: 'FARMER SEED LOANS ISSUED',
        value: '18,500',
        unit: 'Kilograms',
        description: 'Heirloom seed grain loaned to smallholders with 1.1x post-harvest return pledge.',
        trend: '+31% YoY',
        trendPositive: true
      }
    ],
    pullQuote: {
      quote:
        'The seeds are not a museum exhibit. They are living ancestors that know how to speak with the frost, the hail, and the stony soil.',
      attribution: 'Mama Rosa Guamán',
      role: 'Seed Guardian & Curandera',
      region: 'Chimborazo Highlands, Ecuador',
      year: 'Project Year 2025'
    },
    fieldNotes: [
      {
        date: '02 April 2026',
        location: 'Colta Earth Vault Sanctuary',
        observer: 'Carlos Morales, Agricultural Botanist',
        finding: 'Germination rate test on 4-year-old black quinoa landrace returned 96.4% viability.'
      }
    ],
    heroImage: {
      title: 'Earth-Sheltered Stone Seed Vault Architecture',
      type: 'arch',
      caption: 'Fig. 4 — Cross-section of passive subterranean granite vault with natural airflow thermal labyrinth.',
      figNumber: '04'
    }
  },
  {
    id: 'chapter-05',
    number: '05',
    title: 'Climate Migration & Deltaic Resilience: Amphibious Settlement Engineering',
    subtitle: 'Adaptive floating infrastructure and mangrove bioswales in hyper-saline tidal basins',
    kicker: 'SETTLEMENT ARCHITECTURE // AUDIT 2026',
    pageNumber: '40',
    totalPages: '48',
    leadParagraph:
      'In the low-lying coastal estuaries of the Bengal Delta, sea level rise and cyclical cyclone surges have rendered traditional brick and earth embankments obsolete. Confronting forced displacement, our coastal cooperative pioneered amphibious architecture: homes, classrooms, and community seed sheds built on buoyant bamboo and recycled high-density pontoons.',
    bodyParagraphs: [
      'During calm water periods, the structures rest on compacted silt pilings. As tidal surges swell up to three meters, the buildings unmoor vertically along calibrated bamboo guide sleeves, preserving interior contents, solar batteries, and drinking water cisterns intact.',
      'Surrounding each cluster, a four-tier mangrove bioswale dissipates up to eighty percent of wave energy before water reaches the dwelling zone. Brackish water aquaculture channels produce saline-tolerant freshwater tiger prawns and mud crabs, transforming flood vulnerability into economic security.',
      'Over three thousand four hundred delta dwellers who faced permanent climate exile have retained their ancestral ancestral territory, creating a globally replicable model for low-lying coastal communities.'
    ],
    metrics: [
      {
        id: 'm13',
        category: 'AMPHIBIOUS HOMESTEADS',
        value: '340',
        unit: 'Structures',
        description: 'Buoyant community units capable of vertical flotation through 3.5m surge events.',
        trend: '+92 Completed',
        trendPositive: true
      },
      {
        id: 'm14',
        category: 'MANGROVE SHIELD EXTENSION',
        value: '1.2M',
        unit: 'Seedlings',
        description: 'Rhizophora and Avicennia mangroves planted along high-velocity tidal mouths.',
        trend: '88% Survival Rate',
        trendPositive: true
      },
      {
        id: 'm15',
        category: 'RETENTION OF ANCESTRAL LAND',
        value: '100%',
        unit: 'Zero Eviction',
        description: 'Targeted delta cooperatives retaining title without relocation displacement.',
        trend: 'Protected',
        trendPositive: true
      }
    ],
    pullQuote: {
      quote:
        'We do not fight the sea; we float upon its breathing. Our ancestors built with bamboo, and today bamboo keeps our children dry.',
      attribution: 'Habibur Rahman',
      role: 'Chairman, Coastal Resilient Federation',
      region: 'Satkhira Estuary, Sundarbans Reach',
      year: 'Project Year 2025'
    },
    fieldNotes: [
      {
        date: '10 April 2026',
        location: 'Shyamnagar Floating Hamlet No. 2',
        observer: 'Nasreen Akhter, Structural Engineer',
        finding: 'Guide sleeve moorings tested during Cyclone seasonal storm; structure floated 2.1m without structural tilt.'
      }
    ],
    heroImage: {
      title: 'Amphibious Buoyant Structural Array & Mangrove Wave Barrier',
      type: 'diptych',
      caption: 'Fig. 5 — Left: dry-season resting configuration on silt foundation; Right: full buoyancy during tidal surge.',
      figNumber: '05'
    }
  }
];

export const AUDIT_INTERVENTIONS: InterventionProject[] = [
  {
    id: 'int-01',
    code: 'TV-HYD-2401',
    title: 'Wadi el-Abiod Subsurface Bedrock Weir',
    region: 'Tagant Basin, Mauritania',
    biome: 'Hyper-Arid Sahel',
    category: 'Aquifer Sovereignty',
    beneficiaries: 14200,
    budgetUSD: 384000,
    year: 2024,
    completionRate: 100,
    leadCoordinator: 'Aïchatou Mint Bilal',
    keyMetric: '2.4M Liters/day recharge',
    coordinates: '20°27\'N 13°03\'W',
    verifiedBy: 'Swiss Hydrological Board & UN-Habitat',
    notes: 'Zero mechanical failure in 18 months of continuous solar-assisted pumping.'
  },
  {
    id: 'int-02',
    code: 'TV-HYD-2402',
    title: 'Agadez Solar Deep Well & Grazing Manifold',
    region: 'Tamesna Plains, Niger',
    biome: 'Sahelian Steppe',
    category: 'Aquifer Sovereignty',
    beneficiaries: 28600,
    budgetUSD: 520000,
    year: 2025,
    completionRate: 98,
    leadCoordinator: 'Ousmane Ag Alhassane',
    keyMetric: '3.1M Liters/day yield',
    coordinates: '16°58\'N 07°59\'E',
    verifiedBy: 'IGAD Water Consortium',
    notes: 'Telemetry transceivers reporting daily extraction compliance within aquifer limits.'
  },
  {
    id: 'int-03',
    code: 'TV-HYD-2501',
    title: 'Turkana Paleochannel Sand Dam Network',
    region: 'Lodwar Sector, Kenya',
    biome: 'Semi-Arid Basin',
    category: 'Aquifer Sovereignty',
    beneficiaries: 19400,
    budgetUSD: 440000,
    year: 2025,
    completionRate: 100,
    leadCoordinator: 'Ekidor Lokale',
    keyMetric: '8 Sand dams operational',
    coordinates: '03°07\'N 35°36\'E',
    verifiedBy: 'East African Rift Hydrology Guild',
    notes: 'Evaporative water losses reduced by 94% compared to surface retention ponds.'
  },
  {
    id: 'int-04',
    code: 'TV-AGR-2401',
    title: 'Marakwet Escarpment Biological Bunding',
    region: 'Kerio Valley, Kenya',
    biome: 'Rift Valley Escarpment',
    category: 'Pastoral Agroecology',
    beneficiaries: 16800,
    budgetUSD: 295000,
    year: 2024,
    completionRate: 100,
    leadCoordinator: 'Eldoret Kipketer',
    keyMetric: '4,200 Hectares terraced',
    coordinates: '00°56\'N 35°34\'E',
    verifiedBy: 'Center for International Forestry Research (CIFOR)',
    notes: 'Soil erosion decreased by 78% after first wet season contour reinforcement.'
  },
  {
    id: 'int-05',
    code: 'TV-AGR-2501',
    title: 'Faidherbia Albida Nitrogen Agro-Forestry Corridor',
    region: 'Kassala State, Sudan',
    biome: 'Arid Acacia Savannah',
    category: 'Pastoral Agroecology',
    beneficiaries: 22100,
    budgetUSD: 410000,
    year: 2025,
    completionRate: 92,
    leadCoordinator: 'Zeinab Omer',
    keyMetric: '180,000 Saplings rooted',
    coordinates: '15°27\'N 36°24\'E',
    verifiedBy: 'Drylands Agroecological Alliance',
    notes: 'Cereal yields beneath established tree canopies increased by 44% in dry cycle.'
  },
  {
    id: 'int-06',
    code: 'TV-MED-2401',
    title: 'Bol Archipelago Solar Catamaran Clinic Fleet',
    region: 'Lake Chad Basin, Chad',
    biome: 'Freshwater Wetland & Delta',
    category: 'Mobile Health',
    beneficiaries: 34500,
    budgetUSD: 680000,
    year: 2024,
    completionRate: 100,
    leadCoordinator: 'Dr. Jean-Paul Ndong',
    keyMetric: '6 Vessels deployed',
    coordinates: '13°27\'N 14°42\'E',
    verifiedBy: 'Médecins Sans Frontières Field Audit',
    notes: '100% cold-chain reliability; 14,200 pediatric immunizations administered.'
  },
  {
    id: 'int-07',
    code: 'TV-MED-2501',
    title: 'Chari River Nomadic Motorcycle Sidecar Units',
    region: 'Moyen-Chari, Chad',
    biome: 'Riverine Shrubland',
    category: 'Mobile Health',
    beneficiaries: 18900,
    budgetUSD: 240000,
    year: 2025,
    completionRate: 100,
    leadCoordinator: 'Fatimé Mahamat',
    keyMetric: '12 Rough-terrain units',
    coordinates: '09°08\'N 18°23\'E',
    verifiedBy: 'Central African Health Observatoire',
    notes: 'Zero maternal deaths during birth transit among served nomadic camps.'
  },
  {
    id: 'int-08',
    code: 'TV-BIO-2401',
    title: 'Chimborazo Passive Earth-Sheltered Seed Vault',
    region: 'Colta, Chimborazo, Ecuador',
    biome: 'High Andean Paramo (3,800m)',
    category: 'Seed Repositories',
    beneficiaries: 14700,
    budgetUSD: 310000,
    year: 2024,
    completionRate: 100,
    leadCoordinator: 'Mama Rosa Guamán',
    keyMetric: '640 Landraces conserved',
    coordinates: '01°43\'S 78°46\'W',
    verifiedBy: 'International Potato Center (CIP)',
    notes: 'Naturally regulated 12°C interior year-round without mechanical refrigeration.'
  },
  {
    id: 'int-09',
    code: 'TV-BIO-2501',
    title: 'Bale Mountains Ancient Barley & Teff Vault',
    region: 'Oromia Region, Ethiopia',
    biome: 'Afro-Alpine Highlands',
    category: 'Seed Repositories',
    beneficiaries: 19800,
    budgetUSD: 345000,
    year: 2025,
    completionRate: 95,
    leadCoordinator: 'Tadesse Bekele',
    keyMetric: '420 Cereal accessions',
    coordinates: '06°53\'N 39°44\'E',
    verifiedBy: 'African Seed Sovereignty Council',
    notes: 'Emergency seed distributions supported 4,100 smallholders after 2025 frost.'
  },
  {
    id: 'int-10',
    code: 'TV-DEL-2401',
    title: 'Satkhira Buoyant Bamboo Amphibious Homesteads',
    region: 'Sundarbans Estuary, Bangladesh',
    biome: 'Tidal Mangrove Delta',
    category: 'Deltaic Resilience',
    beneficiaries: 12400,
    budgetUSD: 490000,
    year: 2024,
    completionRate: 100,
    leadCoordinator: 'Habibur Rahman',
    keyMetric: '140 Amphibious units',
    coordinates: '22°21\'N 89°05\'E',
    verifiedBy: 'Delta Alliance & BRAC Humanitarian',
    notes: 'Withstood Category 4 Cyclone without structural detachment or water infiltration.'
  },
  {
    id: 'int-11',
    code: 'TV-DEL-2501',
    title: 'Meghna Estuary Mangrove Wave-Attenuation Belt',
    region: 'Bhola Island, Bangladesh',
    biome: 'Coastal Alluvial Plains',
    category: 'Deltaic Resilience',
    beneficiaries: 29000,
    budgetUSD: 380000,
    year: 2025,
    completionRate: 94,
    leadCoordinator: 'Dr. Shah Alam',
    keyMetric: '650,000 Mangrove roots',
    coordinates: '22°29\'N 90°43\'E',
    verifiedBy: 'IUCN Bangladesh Marine Office',
    notes: 'Storm surge kinetic impact diminished by 74% across fronting hamlets.'
  },
  {
    id: 'int-12',
    code: 'TV-DEL-2502',
    title: 'Kutupalong Reforestation & Rainwater Micro-Terraces',
    region: 'Cox\'s Bazar, Bangladesh',
    biome: 'Subtropical Lowland Hills',
    category: 'Deltaic Resilience',
    beneficiaries: 41200,
    budgetUSD: 540000,
    year: 2025,
    completionRate: 96,
    leadCoordinator: 'Mohammad Faruk',
    keyMetric: '310 Slope retaining walls',
    coordinates: '21°12\'N 92°09\'E',
    verifiedBy: 'UNHCR Camp Coordination Review',
    notes: 'Zero catastrophic landslide events recorded during 2025 monsoon deluge.'
  }
];

export const HISTORICAL_HYDRO_DATA = [
  { year: '2021', annualRechargeML: 420, activeWells: 24, vegetativeIndex: 0.18, communityRet: 84 },
  { year: '2022', annualRechargeML: 680, activeWells: 48, vegetativeIndex: 0.24, communityRet: 89 },
  { year: '2023', annualRechargeML: 1150, activeWells: 76, vegetativeIndex: 0.32, communityRet: 93 },
  { year: '2024', annualRechargeML: 1840, activeWells: 108, vegetativeIndex: 0.41, communityRet: 97 },
  { year: '2025', annualRechargeML: 2390, activeWells: 132, vegetativeIndex: 0.49, communityRet: 98 },
  { year: '2026', annualRechargeML: 2840, activeWells: 142, vegetativeIndex: 0.58, communityRet: 99.2 }
];

export const REGIONAL_ALLOCATION = [
  { region: 'Sahel & Sub-Sahara', amountUSD: 2450000, percentage: 38, projects: 18, color: '#0A192F' },
  { region: 'Great Rift Escarpment', amountUSD: 1680000, percentage: 26, projects: 12, color: '#E05A47' },
  { region: 'Bengal Deltaic Plains', amountUSD: 1410000, percentage: 22, projects: 11, color: '#F29C38' },
  { region: 'High Andean Paramos', amountUSD: 910000, percentage: 14, projects: 7, color: '#1B4947' }
];

export const ORAL_HISTORIES: OralHistory[] = [
  {
    id: 'oh-01',
    speaker: 'Aïchatou Mint Bilal',
    role: 'Elder & Hydro-Council President',
    community: 'Chinguetti Oasis Collective',
    region: 'Tagant Basin, Mauritania',
    year: '2025 Recorded Oral History',
    quote: 'The sand protects what the sun would take. In our grandmother’s time, we knew the hidden paths of the water.',
    audioDuration: '02:44',
    waveform: [15, 30, 45, 20, 60, 80, 40, 95, 75, 50, 85, 30, 65, 90, 45, 70, 35, 80, 60, 40, 75, 50, 25],
    story:
      'We spent four decades watching the dune ridge push fifteen meters closer every season. When the engineers came with their concrete dams, they cracked in the second winter heat. But when we dug deep to find the solid granite floor and filled the trench with washed river sand, the wadi became an underground sponge. Now, even when it hasn’t rained since November, the pump turns on at sunrise with pure, cold water.',
    dialectNote: 'Recorded in Hassaniya Arabic with verified French and English transcriptions.'
  },
  {
    id: 'oh-02',
    speaker: 'Mama Rosa Guamán',
    role: 'Custodian of Ancestral Seeds',
    community: 'Pueblo Kichwa de Puruhá',
    region: 'Chimborazo Highlands, Ecuador',
    year: '2025 Recorded Oral History',
    quote: 'If you lose a seed, you do not lose a grain of food—you lose twenty generations of conversations with the mountain.',
    audioDuration: '03:12',
    waveform: [20, 40, 35, 70, 55, 90, 80, 60, 100, 85, 45, 75, 90, 65, 35, 50, 70, 40, 60, 80, 50, 30, 15],
    story:
      'The agrochemical agents came to our parish in 1998 telling us that white hybrid potatoes would make us rich. In the first year, they grew big. In the third year, the frost struck at night, and every single hybrid field turned to black jelly. Only the little black and purple tubers from our great-grandmothers survived. That was the day we swore that our earth vault would never let an ancient seed sleep in the dark forever.',
    dialectNote: 'Recorded in Kichwa runashimi with verified Spanish and English annotations.'
  },
  {
    id: 'oh-03',
    speaker: 'Habibur Rahman',
    role: 'Master Carpenter & Delta Cooperative Chair',
    community: 'Gabura Union, Satkhira',
    region: 'Sundarbans Coast, Bangladesh',
    year: '2026 Recorded Oral History',
    quote: 'When the water rises, a rigid house is a trap. An amphibious house is a boat that knows how to wait for the storm to pass.',
    audioDuration: '02:58',
    waveform: [30, 50, 65, 40, 85, 70, 90, 45, 60, 75, 100, 80, 60, 95, 70, 40, 85, 55, 35, 65, 45, 30, 20],
    story:
      'In Cyclone Aila, we lost everything because we built walls against water that was four meters high. You cannot fight the Bay of Bengal with mud bricks. With this new frame made of treated bamboo and sealed hollow drums beneath, the entire house gently lifted off its silt pillars as the water arrived at two in the morning. Inside, my mother’s sewing machine and our seed sacks never touched wet brine.',
    dialectNote: 'Recorded in regional Bhati Bengali with phonetic audio markers.'
  }
];
