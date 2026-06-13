import { useState } from "react";

// ============================================================
// DATA
// ============================================================

const githubProjects = [
  {
    name: "Cyber Autonomy",
    desc: "P2P self-governance prototype — moneyless economy, liquid democracy, p2p media. Built on IPFS.",
    url: "https://github.com/stateless-minds/cyber-autonomy",
    tags: ["p2p", "moneyless", "ipfs"],
    cat: "governance",
  },
  {
    name: "Cyber Stasis",
    desc: "Post-money economy simulator — gift economy game testing markets without any exchange or barter.",
    url: "https://github.com/stateless-minds/cyber-stasis",
    tags: ["gift-economy", "simulator"],
    cat: "economy",
  },
  {
    name: "Cyber GUBI",
    desc: "Universal basic income prototype for the cyber age. Supply capped to living people. Trust-based, not surveillance-based.",
    url: "https://github.com/stateless-minds/cyber-gubi",
    tags: ["basic-income", "p2p"],
    cat: "economy",
  },
  {
    name: "HumanityOS Chat",
    desc: "Life-management OS & encrypted chat. No accounts, no tracking. Voice, video, threads. Public domain (CC0).",
    url: "https://united-humanity.us/",
    tags: ["communication", "CC0"],
    cat: "community",
  },
  {
    name: "Decidim",
    desc: "Participatory democracy platform used by Barcelona, Helsinki, and hundreds of cities. 1.5k+ ★",
    url: "https://github.com/decidim/decidim",
    tags: ["democracy", "civic-tech"],
    cat: "governance",
  },
  {
    name: "Loomio",
    desc: "Collaborative decision-making for cooperatives, collectives, and communities worldwide. 2.3k+ ★",
    url: "https://github.com/loomio/loomio",
    tags: ["decisions", "cooperative"],
    cat: "governance",
  },
  {
    name: "Open Source Ecology",
    desc: "50 open source industrial machines to build a small civilization. Blueprints for self-sufficiency.",
    url: "https://www.opensourceecology.org",
    tags: ["hardware", "manufacturing"],
    cat: "ecology",
  },
  {
    name: "Open Food Network",
    desc: "Platform for local food systems. Connects farmers, hubs, and communities for fair, transparent supply chains. 1.1k+ ★",
    url: "https://github.com/openfoodfoundation/openfoodnetwork",
    tags: ["food", "local"],
    cat: "ecology",
  },
  {
    name: "FarmHack",
    desc: "Worldwide community of farmers building and sharing open source tools for sustainable agriculture.",
    url: "https://farmhack.org",
    tags: ["farming", "open-hardware"],
    cat: "tools",
  },
  {
    name: "Gift Economy Platform",
    desc: "Hyper-localized gift-sharing app. Join local groups, share items & services for free. No money.",
    url: "https://github.com/seif245/gift-economyPlatform",
    tags: ["gift-economy", "local"],
    cat: "economy",
  },
  {
    name: "Awesome Sustainable Tech",
    desc: "Curated list of open source projects for energy, agriculture, water, transport — the ecological transition toolkit.",
    url: "https://github.com/OpenEnergyPlatform/awesome-sustainable-technology",
    tags: ["sustainability", "curated-list"],
    cat: "ecology",
  },
  {
    name: "Awesome Tech For Good",
    desc: "Open source projects for social impact — humanitarian mapping, civic tech, open data, community tools.",
    url: "https://github.com/TechforgoodCAST/awesome-techforgood",
    tags: ["social-impact", "humanitarian"],
    cat: "tools",
  },
  {
    name: "Humanitarian OpenStreetMap",
    desc: "Free, open map data for humanitarian aid. Volunteer-driven mapping powering disaster response worldwide.",
    url: "https://github.com/hotosm",
    tags: ["mapping", "humanitarian"],
    cat: "tools",
  },
  {
    name: "KoBoToolbox",
    desc: "Robust data collection tools for demanding contexts — used by humanitarian orgs and community researchers.",
    url: "https://github.com/kobotoolbox",
    tags: ["data", "fieldwork"],
    cat: "tools",
  },
  {
    name: "Open Bionics",
    desc: "Open source affordable prosthetic hands. Making assistive technology accessible to everyone.",
    url: "https://github.com/OpenBionics",
    tags: ["prosthetics", "health"],
    cat: "tools",
  },
  {
    name: "TogetherOS (Topic Hub)",
    desc: "GitHub topic hub for cooperation, governance, direct democracy, coops, ecovillages, timebanking, and more.",
    url: "https://github.com/topics/humanity",
    tags: ["meta", "directory"],
    cat: "community",
  },
];

const catMeta: Record<string, { label: string; emoji: string }> = {
  governance: { label: "Governance", emoji: "🏛️" },
  economy: { label: "Post-Money Economy", emoji: "🔄" },
  tools: { label: "Tools", emoji: "🔧" },
  community: { label: "Community", emoji: "🤝" },
  ecology: { label: "Ecology", emoji: "🌱" },
};

const collectives = [
  // Europe
  { name: "Mondragon Corporation", loc: "Basque Country, Spain", region: "europe", type: "Worker Co-op Federation", year: "1956", desc: "80,000+ worker-owners across 100+ cooperatives — industry, finance, retail, education. Largest worker cooperative system on Earth.", url: "https://www.mondragon-corporation.com" },
  { name: "Marinaleda", loc: "Andalusia, Spain", region: "europe", type: "Cooperative Town", year: "1979", desc: "Collective farming, participatory governance, near-zero unemployment, housing for €15/month. Anti-capitalist town that works.", url: "https://en.wikipedia.org/wiki/Marinaleda" },
  { name: "Freetown Christiania", loc: "Copenhagen, Denmark", region: "europe", type: "Autonomous District", year: "1971", desc: "850+ residents, collective decision-making, self-governance. 50+ years of autonomous community in the heart of a capital city.", url: "https://www.christiania.org" },
  { name: "Tamera", loc: "Alentejo, Portugal", region: "europe", type: "Peace Research Village", year: "1995", desc: "170+ residents — water retention landscapes, solar tech, community building, nonviolent political models.", url: "https://www.tamera.org" },
  { name: "Longo Maï", loc: "France / Austria / Switzerland", region: "europe", type: "Agricultural Co-op Network", year: "1973", desc: "Self-sufficient farming cooperatives across Europe. Income-sharing, collective ownership, radio station." },
  { name: "Calafou", loc: "Catalonia, Spain", region: "europe", type: "Post-Capitalist Colony", year: "2011", desc: "Former industrial colony → hackerspaces, workshops, cooperative housing. Tech + ecology + anarchism.", url: "https://calafou.org" },
  { name: "Mietshäuser Syndikat", loc: "Germany (190+ houses)", region: "europe", type: "Housing Syndicate", year: "1992", desc: "Properties can NEVER be privatized or sold. Dual-ownership model with mutual veto. Solidarity financing between projects.", url: "https://www.syndikat.org" },
  { name: "Findhorn Foundation", loc: "Scotland, UK", region: "europe", type: "Ecovillage", year: "1962", desc: "One of the world's largest intentional communities. Ecological education, organic farming, renewable energy." },
  { name: "Réseau des AMAP", loc: "France (nationwide)", region: "europe", type: "CSA Network", year: "2001", desc: "2,000+ community-supported agriculture partnerships. Direct farmer-to-consumer, fair prices, solidarity food." },
  { name: "Cecosesola", loc: "Barquisimeto, Venezuela", region: "americas", type: "Co-op Federation", year: "1967", desc: "50+ cooperatives serving 100,000 families. No bosses, no hierarchy. Food markets, health, funerals — all by assembly." },
  // Americas
  { name: "Zapatistas (EZLN)", loc: "Chiapas, Mexico", region: "americas", type: "Autonomous Indigenous Governance", year: "1994", desc: "Autonomous education, healthcare, justice, agriculture. 'A world where many worlds fit.' 30+ years outside the state.", url: "https://schoolsforchiapas.org" },
  { name: "Twin Oaks", loc: "Virginia, USA", region: "americas", type: "Income-Sharing Commune", year: "1967", desc: "~100 members, collectively owned land & businesses. Decisions by consensus. Hammocks, tofu, and solidarity.", url: "https://www.twinoaks.org" },
  { name: "East Wind", loc: "Missouri, USA", region: "americas", type: "Income-Sharing Commune", year: "1974", desc: "Egalitarian, 1,000+ acres collectively owned. Nut butters, rope sandals, labor-credit system." },
  { name: "MST Settlements", loc: "Brazil (nationwide)", region: "americas", type: "Land Reform Movement", year: "1984", desc: "1.5 million members, 350,000 families on reclaimed land. Cooperative farming, schools, health. One of Earth's largest social movements.", url: "https://www.mst.org.br" },
  { name: "Black Bear Ranch", loc: "California, USA", region: "americas", type: "Anarchist Land Collective", year: "1968", desc: "80 acres in remote mountains. Free land for the free people — no rent, no mortgage, collective stewardship." },
  // Middle East & Asia
  { name: "Rojava (AANES)", loc: "Northern Syria", region: "asia-me", type: "Democratic Confederalism", year: "2012", desc: "Direct democracy, gender equality co-chairs at every level, cooperative economy, ecological municipalities. 4M+ people.", url: "https://internationalistcommune.com" },
  { name: "Kibbutzim", loc: "Israel", region: "asia-me", type: "Collective Settlements", year: "1910", desc: "270+ collective communities. Dozens still maintain traditional income-sharing, communal governance, cooperative agriculture." },
  { name: "Auroville", loc: "Tamil Nadu, India", region: "asia-me", type: "International Township", year: "1968", desc: "UNESCO-supported, 3,000+ residents from 60+ countries. No private land ownership. Experimental human unity.", url: "https://auroville.org" },
  // Africa & Oceania
  { name: "SEKEM", loc: "Egypt", region: "africa-oce", type: "Sustainable Initiative", year: "1977", desc: "700 acres reclaimed from desert for biodynamic farming. Schools, medical center, research. 2,000+ people in cooperative structures.", url: "https://www.sekem.com" },
  { name: "Crystal Waters", loc: "Queensland, Australia", region: "africa-oce", type: "Permaculture Village", year: "1988", desc: "World's first permaculture village. 200+ residents, 640 acres, food forests, cooperative governance.", url: "https://crystalwaters.org.au" },
];

const regionMeta: Record<string, { label: string; emoji: string }> = {
  europe: { label: "Europe", emoji: "🇪🇺" },
  americas: { label: "Americas", emoji: "🌎" },
  "asia-me": { label: "Asia & Middle East", emoji: "🌏" },
  "africa-oce": { label: "Africa & Oceania", emoji: "🌍" },
};

const legalFrameworks = [
  {
    country: "United States", flag: "🇺🇸", structures: [
      { name: "Community Land Trust (CLT)", desc: "Nonprofit owns land in perpetuity, leases to residents via 99-year ground leases. 300+ CLTs in the US.", pros: ["Permanently affordable", "Democratic governance", "Land off the market", "Tax-exempt donations"], cons: ["Complex legal setup", "501(c)(3) required", "Limited equity"], url: "https://www.cltweb.org" },
      { name: "Housing Cooperative", desc: "Residents jointly own property through shares. One member, one vote. 1M+ co-op units nationwide.", pros: ["Democratic control", "Shared costs", "Strong legal framework"], cons: ["Board approval needed", "Harder financing", "Collective debt liability"] },
      { name: "FEC Model (501(d))", desc: "Income-sharing communal groups. Members pool all income, community provides all needs. Used by Twin Oaks, East Wind.", pros: ["Full income sharing", "All needs provided", "Tax advantages"], cons: ["Total commitment required", "IRS scrutiny", "Minimal personal assets"], url: "https://thefec.org" },
    ]
  },
  {
    country: "United Kingdom", flag: "🇬🇧", structures: [
      { name: "Community Benefit Society (BenCom)", desc: "Cooperative for community benefit. Asset lock, community shares, one member one vote. Ideal for CLTs.", pros: ["Asset lock", "Community shares", "Democratic", "CLT-compatible"], cons: ["Must benefit wider community", "FCA regulation"], url: "https://www.uk.coop" },
      { name: "Community Interest Company (CIC)", desc: "Limited company with social purpose. Asset lock ensuring assets used for community benefit.", pros: ["Easy to set up", "Built-in asset lock", "Can trade"], cons: ["No tax-free donations", "Dividend cap", "Less democratic"] },
      { name: "CLT (Housing & Regeneration Act 2008)", desc: "Legal status 'wrapper' for BenComs, CICs, or CLGs. 300+ CLTs in England & Wales.", pros: ["Legal recognition", "Government funding", "Perpetual community ownership"], cons: ["Must pass purpose & community tests", "Complex governance"], url: "https://communitylandtrusts.org.uk" },
    ]
  },
  {
    country: "Spain", flag: "🇪🇸", structures: [
      { name: "Cooperativa de Vivienda", desc: "Housing cooperatives with strong legal framework. Collective use (cesión de uso) model gaining traction.", pros: ["Tax benefits", "Collective use model", "Democratic by law"], cons: ["Laws vary by region", "Capital requirements", "Bureaucracy"] },
      { name: "Cooperativa Integral", desc: "Integral cooperatives covering housing, food, education, health. Building parallel self-sufficient economies.", pros: ["Covers entire economic life", "Internal exchange systems", "Strong networks"], cons: ["Complex structure", "Needs critical mass", "Some grey areas"] },
    ]
  },
  {
    country: "France", flag: "🇫🇷", structures: [
      { name: "SCOP (Worker Cooperative)", desc: "Employees own 51%+ of capital, 65%+ of votes. 3,800+ SCOPs, 73,000+ people.", pros: ["Workers control", "Mandatory profit-sharing", "Tax advantages"], cons: ["Complex governance", "Harder outside investment"], url: "https://www.les-scop.coop" },
      { name: "Terre de Liens (Land Trust)", desc: "Citizens buy shares to collectively purchase farmland, lease to organic farmers. 280+ farms, 8,300+ hectares.", pros: ["Farmland off speculation", "Invest from €100", "Agroecological"], cons: ["Shares not liquid", "Non-financial returns", "Ag land only"], url: "https://terredeliens.org" },
    ]
  },
  {
    country: "Germany", flag: "🇩🇪", structures: [
      { name: "Mietshäuser Syndikat", desc: "190+ collectively-owned housing projects. Properties can NEVER be privatized. Dual-ownership with mutual veto.", pros: ["Permanent de-commodification", "Solidarity financing", "Democratic self-governance"], cons: ["Complex dual-ownership", "Relies on direct loans", "Long setup"], url: "https://www.syndikat.org" },
      { name: "Eingetragene Genossenschaft (eG)", desc: "Registered cooperative. 8,000+ in Germany. Housing cooperatives house 5M+ Germans.", pros: ["Strong legal framework", "Regulatory protection", "Stable rents"], cons: ["Min 3 founders", "Auditing association required", "Share capital needed"] },
    ]
  },
  {
    country: "Italy", flag: "🇮🇹", structures: [
      { name: "Usi Civici (Civic Commons)", desc: "Ancient collective land rights revitalized by 2017 law. Inalienable, indivisible community commons.", pros: ["Constitutional protection", "Cannot be privatized", "Inter-generational"], cons: ["Bureaucratic recognition", "Limited to historic commons", "Regional variation"] },
    ]
  },
  {
    country: "Mexico", flag: "🇲🇽", structures: [
      { name: "Ejido", desc: "29,000 communal farming communities covering ~50% of Mexico. Constitutional protection since 1917.", pros: ["Constitutional protection", "Collective assembly governance", "Cannot be seized for debt"], cons: ["1992 reforms allowed partial privatization", "Agribusiness pressure"] },
    ]
  },
  {
    country: "Brazil", flag: "🇧🇷", structures: [
      { name: "MST Assentamento", desc: "Land reform settlements — 350,000+ families on reclaimed land with cooperative farming, schools, and clinics.", pros: ["Constitutional right", "Strong movement (MST)", "Cooperative models"], cons: ["Political threats", "Violence against activists"], url: "https://www.mst.org.br" },
    ]
  },
  {
    country: "Autonomous Zones", flag: "🏴", structures: [
      { name: "Zapatista JBG (Good Government)", desc: "Rotating councils, community assemblies, collective land tenure. 30+ years outside the Mexican state.", pros: ["Fully autonomous", "Proven 30+ years", "Community-controlled everything"], cons: ["State tension", "Military threats", "Economic isolation"] },
      { name: "Rojava Social Contract", desc: "Constitutional framework for democratic confederalism. Multi-ethnic, gender-equal, cooperative economy for 4M+ people.", pros: ["Gender equality mandated", "Multi-ethnic", "Cooperative economy"], cons: ["War zone", "Non-recognition", "Embargo"] },
    ]
  },
];

const starterPacks = [
  {
    title: "🏡 Start a Housing Cooperative",
    steps: [
      "Gather 5-10 committed people with shared vision",
      "Study your country's cooperative law (see Legal Frameworks)",
      "Define your model: income-sharing, limited equity, or collective use?",
      "Choose legal structure (co-op, CLT, CIC, BenCom, etc.)",
      "Find land: CLT networks, land auctions, municipal programs, donations",
      "Draft bylaws — templates from national co-op networks",
      "Finance: community shares, ethical banks, grants, crowdfunding",
      "Build / renovate together — natural building, passive house",
      "Move in, practice governance — assemblies, consensus or sociocracy",
    ],
    resources: [
      { name: "Community Land Trust Network", url: "https://www.cltweb.org" },
      { name: "Radical Routes (UK)", url: "https://www.radicalroutes.org.uk" },
      { name: "NASCO (Student Co-ops)", url: "https://nasco.coop" },
      { name: "Mietshäuser Syndikat", url: "https://www.syndikat.org" },
    ],
  },
  {
    title: "🌾 Start a Collective Farm",
    steps: [
      "Form a group with shared agroecological vision",
      "Research collective land ownership in your country",
      "Explore land trusts (Terre de Liens, Ecological Land Co-op)",
      "Learn permaculture — PDC courses, books, WWOOF placements",
      "Start small: community garden, allotment, or farm volunteering",
      "Scale up: lease or buy land collectively",
      "Set up CSA (Community Supported Agriculture) for sustainability",
      "Document and open source your methods",
    ],
    resources: [
      { name: "Terre de Liens (France)", url: "https://terredeliens.org" },
      { name: "Ecological Land Co-op (UK)", url: "https://ecologicalland.coop" },
      { name: "Open Source Ecology", url: "https://www.opensourceecology.org" },
      { name: "FarmHack", url: "https://farmhack.org" },
    ],
  },
  {
    title: "💻 Launch a Tech Cooperative",
    steps: [
      "Find 2-5 devs/designers who share cooperative values",
      "Study platform cooperativism and worker-owned tech",
      "Choose legal structure: worker co-op, SCOP, LCA",
      "Define governance: decisions, profit sharing, onboarding",
      "Use open source tools: Git, Matrix, Loomio, Decidim",
      "Build products that serve communities, not extract from them",
      "Join networks: CoTech (UK), US Federation of Worker Co-ops",
      "Share your code, processes, and learnings openly",
    ],
    resources: [
      { name: "CoTech (UK Tech Co-ops)", url: "https://www.coops.tech" },
      { name: "US Worker Cooperatives", url: "https://www.usworker.coop" },
      { name: "Platform Cooperativism", url: "https://platform.coop" },
    ],
  },
  {
    title: "🔄 Build a Gift Economy Network",
    steps: [
      "Start a free store, free fridge, or tool library",
      "Create or join a Buy Nothing / gift economy group",
      "Set up a time bank — exchange hours, not money",
      "Organize skill-sharing workshops and repair cafés",
      "Map what's freely available in your area",
      "Connect with Freecycle, OLIO, Too Good To Go",
      "Scale: from sharing things to sharing land and housing",
    ],
    resources: [
      { name: "Buy Nothing Project", url: "https://buynothingproject.org" },
      { name: "TimeOverflow", url: "https://www.timeoverflow.org" },
      { name: "Cyber Stasis Simulator", url: "https://github.com/stateless-minds/cyber-stasis" },
    ],
  },
];

const directories = [
  { name: "Foundation for Intentional Community", url: "https://www.ic.org", desc: "Most comprehensive directory — 1,000+ communes, ecovillages, co-ops worldwide.", scope: "Global" },
  { name: "Global Ecovillage Network (GEN)", url: "https://ecovillage.org", desc: "900+ ecovillages focused on sustainability. Strong global coverage.", scope: "Global" },
  { name: "Federation of Egalitarian Communities", url: "https://thefec.org", desc: "Network of income-sharing communities and communes.", scope: "USA" },
  { name: "Diggers & Dreamers", url: "https://www.diggersanddreamers.org.uk", desc: "UK intentional communities — urban, rural, spiritual, cohousing.", scope: "UK" },
  { name: "Ecobasa", url: "https://ecobasa.org", desc: "Sustainable communities with work-trade opportunities.", scope: "Europe" },
  { name: "WWOOF", url: "https://wwoof.net", desc: "Worldwide work-exchange on organic farms. Gateway to community living.", scope: "Global" },
  { name: "Transition Network", url: "https://transitionnetwork.org", desc: "Transition existing towns toward community-based sustainability.", scope: "Global" },
  { name: "Platform Cooperativism", url: "https://platform.coop", desc: "Directory of tech platforms owned by their users and workers.", scope: "Global" },
  { name: "LandMark Map", url: "https://www.landmarkmap.org", desc: "Interactive global map of indigenous and community lands.", scope: "Global" },
  { name: "Cohousing Association (US)", url: "https://www.cohousing.org", desc: "300+ cohousing communities with shared spaces.", scope: "USA" },
  { name: "NuMundo", url: "https://numundo.org", desc: "Impact centers for transformational experiences.", scope: "Americas" },
  { name: "UK Cohousing Network", url: "https://cohousing.org.uk", desc: "40+ cohousing communities across the UK.", scope: "UK" },
];

const reading = [
  { title: "The Conquest of Bread", author: "Peter Kropotkin (1892)", desc: "The foundational text on anarcho-communism. How to organize production and distribution without bosses or money.", url: "https://theanarchistlibrary.org/library/petr-kropotkin-the-conquest-of-bread" },
  { title: "Mutual Aid: A Factor of Evolution", author: "Peter Kropotkin (1902)", desc: "Cooperation, not competition, drives evolution. Scientific evidence that mutual aid is natural.", url: "https://theanarchistlibrary.org/library/petr-kropotkin-mutual-aid-a-factor-of-evolution" },
  { title: "Debt: The First 5,000 Years", author: "David Graeber (2011)", desc: "Markets and money were imposed by violence. Gift economies came first. History proves another way is possible." },
  { title: "The Dawn of Everything", author: "Graeber & Wengrow (2021)", desc: "Humans always experimented with egalitarian societies. Hierarchy is not inevitable — it's a choice." },
  { title: "Caliban and the Witch", author: "Silvia Federici (2004)", desc: "Capitalism required destroying the commons, subjugating women, and creating wage slavery." },
  { title: "The Dispossessed", author: "Ursula K. Le Guin (1974)", desc: "An anarchist society on the moon — and its imperfections. The greatest literary exploration of anarchism." },
  { title: "Sacred Economics", author: "Charles Eisenstein (2011)", desc: "From ancient gift economies to modern capitalism, and a vision for a connected, ecological economy.", url: "https://sacred-economics.com" },
  { title: "Walkaway", author: "Cory Doctorow (2017)", desc: "Sci-fi: people 'walk away' from capitalism to build open-source, post-scarcity communities. A blueprint as a story." },
];

// ============================================================
// COMPONENTS
// ============================================================

function GH({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
}

function ExtLink({ size = 13 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>;
}

// --- Navbar ---
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Vision", href: "#vision" },
    { label: "Projects", href: "#projects" },
    { label: "Collectives", href: "#collectives" },
    { label: "Legal", href: "#legal" },
    { label: "Starter Packs", href: "#starters" },
    { label: "Directories", href: "#directories" },
    { label: "Reading", href: "#reading" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2 font-bold text-white text-lg tracking-tight">
          <span className="text-xl">🌍</span> Humanity<span className="text-emerald-400">OS</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-1.5 text-sm text-gray-300 hover:text-emerald-400 rounded-lg hover:bg-white/5 transition-colors">{l.label}</a>
          ))}
          <a href="https://github.com/topics/humanity" target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-sm bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"><GH size={15} /> GitHub</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-4 py-3 space-y-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-emerald-400 rounded-lg">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

// --- Hero ---
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-black to-teal-950/60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(20,184,166,0.1) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* floating dots */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse" style={{ left: `${10 + Math.floor(i * 6.2) % 80}%`, top: `${5 + Math.floor(i * 7.7) % 90}%`, animationDelay: `${i * 0.4}s`, animationDuration: `${3 + (i % 4)}s` }} />
        ))}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open Source · Community Driven · No Money Required
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6">
          Humanity<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"> OS</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">Open source seeds for a world without money.</p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We have all the knowledge to live together in abundance. What's missing are the <span className="text-emerald-400 font-semibold">links</span>.
          This hub connects projects, collectives, legal frameworks, and starter packs proving another world is not utopia — <span className="text-white font-semibold">it already exists</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#projects" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all hover:scale-105">Explore the Ecosystem</a>
          <a href="#starters" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all">Get a Starter Pack</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {([["16+", "GitHub Projects"], ["20+", "Active Collectives"], ["10+", "Countries Mapped"], ["4", "Starter Packs"]] as const).map(([v, l]) => (
            <div key={l} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-emerald-400">{v}</div>
              <div className="text-xs text-gray-400">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Vision ---
function Vision() {
  const pillars = [
    { emoji: "🔄", title: "Gift Economy", desc: "Gift economies are the oldest form of exchange — trust, reciprocity, and abundance, not artificial scarcity." },
    { emoji: "🏛️", title: "Collective Governance", desc: "From Zapatista assemblies to Rojava councils — direct democracy works. People can govern themselves." },
    { emoji: "🌱", title: "Commons & Shared Ownership", desc: "Land, housing, and production owned collectively. CLTs, cooperatives, and commons remove resources from speculation." },
    { emoji: "💡", title: "Open Source Everything", desc: "Knowledge, tools, designs shared freely. Farm equipment to governance templates — blueprints for a better world." },
    { emoji: "⚖️", title: "Mutual Aid", desc: "'From each according to ability, to each according to need.' Not charity — solidarity. Horizontal networks of support." },
    { emoji: "⚡", title: "Post-Scarcity Tech", desc: "Automation, solar, permaculture, and digital tools: we produce enough for everyone. Scarcity is manufactured." },
  ];
  return (
    <section id="vision" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">The Vision</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Not Utopia — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Already Happening</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Millions already live outside the money system — in cooperatives, communes, ecovillages, and autonomous zones. These are the six pillars that make it work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all">
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-center">
          <p className="text-xl sm:text-2xl text-white italic leading-relaxed">"Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing."</p>
          <p className="mt-3 text-emerald-400 font-semibold">— Arundhati Roy</p>
        </div>
      </div>
    </section>
  );
}

// --- Projects ---
function Projects() {
  const [cat, setCat] = useState("all");
  const cats = ["all", ...Object.keys(catMeta)];
  const filtered = cat === "all" ? githubProjects : githubProjects.filter((p) => p.cat === cat);
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">GitHub Ecosystem</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Projects</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Tools, platforms, and simulators for post-capitalist infrastructure. All open source. All forkable.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === c ? "bg-emerald-500 text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"}`}>
              {c === "all" ? "✨ All" : `${catMeta[c].emoji} ${catMeta[c].label}`}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{catMeta[p.cat]?.emoji} {catMeta[p.cat]?.label}</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">{p.name} <ExtLink /></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-gray-500 text-xs">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Collectives ---
function Collectives() {
  const [region, setRegion] = useState("all");
  const regions = ["all", ...Object.keys(regionMeta)];
  const filtered = region === "all" ? collectives : collectives.filter((c) => c.region === region);
  return (
    <section id="collectives" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Living Proof</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Collectives & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Communities</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">From Zapatista autonomous zones to Danish freetown — these communities are already living the alternative.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {regions.map((r) => (
            <button key={r} onClick={() => setRegion(r)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${region === r ? "bg-emerald-500 text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"}`}>
              {r === "all" ? "🌐 All" : `${regionMeta[r].emoji} ${regionMeta[r].label}`}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((c) => (
            <div key={c.name} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{c.type}</span>
                <span className="flex items-center gap-1 text-xs text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Active</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{c.name}</h3>
              <p className="text-xs text-gray-500 mb-2">📍 {c.loc} {c.year && `· Est. ${c.year}`}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{c.desc}</p>
              {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300">Visit <ExtLink /></a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Legal Frameworks ---
function Legal() {
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const filtered = active === "all" ? legalFrameworks : legalFrameworks.filter((f) => f.country === active);
  return (
    <section id="legal" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Legal Pathways</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Frameworks</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Collective ownership is legal — in many forms, in many countries. Here's how.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button onClick={() => setActive("all")} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === "all" ? "bg-emerald-500 text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"}`}>🌐 All</button>
          {legalFrameworks.map((f) => (
            <button key={f.country} onClick={() => setActive(f.country)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === f.country ? "bg-emerald-500 text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"}`}>{f.flag} {f.country}</button>
          ))}
        </div>
        <div className="space-y-6">
          {filtered.map((f) => (
            <div key={f.country}>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">{f.flag}</span>{f.country}</h3>
              <div className="space-y-2">
                {f.structures.map((s) => {
                  const key = `${f.country}-${s.name}`;
                  const isOpen = expanded === key;
                  return (
                    <div key={key} className="rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden">
                      <button onClick={() => setExpanded(isOpen ? null : key)} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold">{s.name}</h4>
                          {!isOpen && <p className="text-gray-500 text-sm mt-0.5 truncate">{s.desc}</p>}
                        </div>
                        <span className="text-gray-500 ml-3 flex-shrink-0">{isOpen ? "▲" : "▼"}</span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 space-y-4">
                          <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">✓ Advantages</p>
                              <ul className="space-y-1">{s.pros.map((p, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-emerald-400">+</span>{p}</li>)}</ul>
                            </div>
                            <div>
                              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">⚠ Challenges</p>
                              <ul className="space-y-1">{s.cons.map((c, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-amber-400">–</span>{c}</li>)}</ul>
                            </div>
                          </div>
                          {s.url && <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300">Learn more <ExtLink /></a>}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Starter Packs ---
function Starters() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="starters" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Action Blueprints</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Starter <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Packs</span></h2>
          <p className="mt-4 text-lg text-gray-400">Step-by-step guides to start building right now. No permission needed.</p>
        </div>
        <div className="space-y-3">
          {starterPacks.map((pack, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={pack.title} className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all overflow-hidden">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{pack.title}</h3>
                    <p className="text-sm text-gray-500">{pack.steps.length} steps · {pack.resources.length} resources</p>
                  </div>
                  <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 space-y-5">
                    <div>
                      <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">🚀 Step-by-Step</p>
                      <ol className="space-y-2">
                        {pack.steps.map((s, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">📎 Key Resources</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {pack.resources.map((r) => (
                          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 text-sm text-gray-300 hover:text-emerald-400 transition-all"><ExtLink /> {r.name}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Directories ---
function Directories() {
  return (
    <section id="directories" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Find Your People</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Directories</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Networks to find communities, cooperatives, and collectives near you — or anywhere.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {directories.map((d) => (
            <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer" className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all">
              <p className="text-xs text-gray-500 mb-2">🌐 {d.scope}</p>
              <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">{d.name} <ExtLink /></h3>
              <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Reading ---
function Reading() {
  return (
    <section id="reading" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Knowledge Commons</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Reading</span></h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">The ideas that shaped the movement — from Kropotkin to Graeber, Le Guin to Doctorow.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {reading.map((b) => (
            <div key={b.title} className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all">
              <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">📖 {b.title}</h3>
              <p className="text-sm text-emerald-400/70 mb-2">{b.author}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">{b.desc}</p>
              {b.url && <a href={b.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300">Read free <ExtLink /></a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Fork It. Build It. <span className="text-emerald-400">Live It.</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">This is a living document. Every link is a seed. Fork the repo. Add your collective. Share your legal structure. The revolution is open source.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/topics/humanity" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all hover:scale-105">⭐ Star on GitHub</a>
            <a href="https://github.com/topics/sharing-economy" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all">🍴 Fork & Contribute</a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-3">Key Projects</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="https://github.com/stateless-minds/cyber-autonomy" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Cyber Autonomy</a></li>
              <li><a href="https://github.com/stateless-minds/cyber-stasis" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Cyber Stasis</a></li>
              <li><a href="https://github.com/decidim/decidim" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Decidim</a></li>
              <li><a href="https://github.com/loomio/loomio" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Loomio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Networks</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="https://www.ic.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">ic.org</a></li>
              <li><a href="https://ecovillage.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Global Ecovillage Network</a></li>
              <li><a href="https://thefec.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Egalitarian Communities</a></li>
              <li><a href="https://platform.coop" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Platform Cooperativism</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="https://www.cltweb.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Community Land Trusts</a></li>
              <li><a href="https://www.syndikat.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Mietshäuser Syndikat</a></li>
              <li><a href="https://terredeliens.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Terre de Liens</a></li>
              <li><a href="https://www.les-scop.coop" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">SCOPs (France)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Movement</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="https://theanarchistlibrary.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Anarchist Library</a></li>
              <li><a href="https://transitionnetwork.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Transition Network</a></li>
              <li><a href="https://www.opensourceecology.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Open Source Ecology</a></li>
              <li><a href="https://www.radicalroutes.org.uk" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Radical Routes</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>🌍 Humanity<span className="text-emerald-400 font-semibold">OS</span> — No Copyright. No Permission Needed. Fork Everything.</span>
          <span>Made with ❤️ for the commons</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// APP
// ============================================================

export default function App() {
  return (
    <div className="bg-black text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <Vision />
      <Projects />
      <Collectives />
      <Legal />
      <Starters />
      <Directories />
      <Reading />
      <Footer />
    </div>
  );
}
