export interface Directory {
  name: string;
  url: string;
  description: string;
  scope: string;
  count?: string;
}

export const directories: Directory[] = [
  {
    name: "Foundation for Intentional Community (FIC)",
    url: "https://www.ic.org",
    description: "The most comprehensive directory of intentional communities worldwide — communes, ecovillages, cohousing, co-ops, and more.",
    scope: "Global",
    count: "1,000+",
  },
  {
    name: "Global Ecovillage Network (GEN)",
    url: "https://ecovillage.org",
    description: "Worldwide map of ecovillage projects focused on sustainability. Strong European coverage but global reach.",
    scope: "Global",
    count: "900+",
  },
  {
    name: "Federation for Egalitarian Communities (FEC)",
    url: "https://thefec.org",
    description: "Network of income-sharing communities and communes. Support, resources, and directory for egalitarian living.",
    scope: "USA",
  },
  {
    name: "Diggers & Dreamers",
    url: "https://www.diggersanddreamers.org.uk",
    description: "UK-focused directory of intentional communities — urban, spiritual, ecovillage, cohousing, and everything between.",
    scope: "UK",
  },
  {
    name: "Ecobasa",
    url: "https://ecobasa.org",
    description: "Directory of sustainable communities and eco-villages with work-trade opportunities. Mostly European focus.",
    scope: "Europe",
  },
  {
    name: "WWOOF (Worldwide Workers on Organic Farms)",
    url: "https://wwoof.net",
    description: "Global network for farming work-exchange. Live and learn on organic farms worldwide — a gateway to community living.",
    scope: "Global",
  },
  {
    name: "Transition Network",
    url: "https://transitionnetwork.org",
    description: "Global movement to transition existing towns and cities toward community-based sustainability. Find local groups, hubs, and trainers.",
    scope: "Global",
  },
  {
    name: "NuMundo",
    url: "https://numundo.org",
    description: "Network of impact centers offering transformational experiences. Focus on Central America and regenerative communities.",
    scope: "Americas",
  },
  {
    name: "Cohousing Association (CohoUS)",
    url: "https://www.cohousing.org",
    description: "US cohousing communities with shared spaces and collaborative living. Directory of 300+ communities.",
    scope: "USA",
    count: "300+",
  },
  {
    name: "UK Cohousing Network",
    url: "https://cohousing.org.uk",
    description: "Directory of 40+ cohousing communities across the UK with guidance on starting your own.",
    scope: "UK",
    count: "40+",
  },
  {
    name: "LandMark Map",
    url: "https://www.landmarkmap.org",
    description: "Interactive global map of indigenous and community lands. Visualizes collective land tenure worldwide.",
    scope: "Global",
  },
  {
    name: "Platform Cooperativism Consortium",
    url: "https://platform.coop",
    description: "Directory and resources for platform cooperatives — tech platforms owned and governed by their users and workers.",
    scope: "Global",
  },
];

export const starterPacks = [
  {
    title: "🏡 Start a Housing Cooperative",
    steps: [
      "Gather a core group of 5-10 committed people",
      "Study your country's cooperative law (see Legal Frameworks below)",
      "Define your vision: full income-sharing, limited equity, or market-rate?",
      "Choose a legal structure (co-op, CLT, CIC, etc.)",
      "Find land or property — check CLT networks, land auctions, municipal programs",
      "Draft bylaws / constitution — templates available from national co-op networks",
      "Secure financing: community shares, ethical banks, grants, crowdfunding",
      "Build or renovate together — consider natural building, passive house standards",
      "Move in and practice governance — regular assemblies, consensus or sociocracy",
    ],
    resources: [
      { name: "Guide to Legal Structures (UK)", url: "https://bhclt.org.uk/wp-content/uploads/2018/08/Guide-to-Legal-Structures-2017.pdf" },
      { name: "Community Land Trust Network", url: "https://www.cltweb.org" },
      { name: "NASCO (Student Co-ops)", url: "https://nasco.coop" },
      { name: "Radical Routes (UK)", url: "https://www.radicalroutes.org.uk" },
    ],
  },
  {
    title: "🌾 Start a Collective Farm",
    steps: [
      "Form a group with shared vision for agroecological/regenerative farming",
      "Research collective land ownership options in your country",
      "Explore land trusts (Terre de Liens, Ecological Land Cooperative, etc.)",
      "Learn permaculture design — PDC courses, books, online resources",
      "Start small: community garden, allotment, or WWOOF placement",
      "Scale up: lease or buy land collectively",
      "Set up CSA (Community Supported Agriculture) for financial sustainability",
      "Document and share your knowledge — open source your methods",
    ],
    resources: [
      { name: "Terre de Liens (France)", url: "https://terredeliens.org" },
      { name: "Ecological Land Cooperative (UK)", url: "https://ecologicalland.coop" },
      { name: "FarmHack (Open Source Farm Tools)", url: "https://farmhack.org" },
      { name: "Open Source Ecology", url: "https://www.opensourceecology.org" },
    ],
  },
  {
    title: "💻 Launch a Tech Cooperative",
    steps: [
      "Find 2-5 developers/designers who share cooperative values",
      "Study platform cooperativism and worker-owned tech companies",
      "Choose a legal structure: worker co-op, SCOP (France), LCA (UK)",
      "Define governance: how decisions get made, profit sharing, onboarding",
      "Use open source tools: Git, Matrix/Element, Loomio, Decidim",
      "Build products that serve communities, not extract from them",
      "Join networks: CoTech (UK), US Federation of Worker Cooperatives",
      "Share your code, processes, and learnings openly",
    ],
    resources: [
      { name: "CoTech (UK Tech Co-ops)", url: "https://www.coops.tech" },
      { name: "US Federation of Worker Cooperatives", url: "https://www.usworker.coop" },
      { name: "Platform Cooperativism", url: "https://platform.coop" },
      { name: "Tech Workers Coalition", url: "https://techworkerscoalition.org" },
    ],
  },
  {
    title: "🔄 Build a Gift Economy / Moneyless Exchange",
    steps: [
      "Start a local free store, free fridge, or tool library",
      "Create or join a Buy Nothing / gift economy group",
      "Set up a local time bank — exchange hours, not money",
      "Organize skill-sharing workshops and repair cafes",
      "Document resources: what's available freely in your area?",
      "Use tech: Open Food Network, gift economy apps, local wikis",
      "Connect with existing networks: Freecycle, OLIO, Too Good To Go",
      "Scale gradually: from sharing things to sharing land and housing",
    ],
    resources: [
      { name: "Buy Nothing Project", url: "https://buynothingproject.org" },
      { name: "TimeOverflow (Time Banking)", url: "https://www.timeoverflow.org" },
      { name: "Gift Economy Platform (GitHub)", url: "https://github.com/seif245/gift-economyPlatform" },
      { name: "Cyber Stasis Simulator", url: "https://github.com/stateless-minds/cyber-stasis" },
    ],
  },
];

export const essentialReading = [
  {
    title: "The Conquest of Bread",
    author: "Peter Kropotkin (1892)",
    description: "The foundational text on anarcho-communism. How a society can organize production and distribution without bosses or money.",
    url: "https://theanarchistlibrary.org/library/petr-kropotkin-the-conquest-of-bread",
  },
  {
    title: "Mutual Aid: A Factor of Evolution",
    author: "Peter Kropotkin (1902)",
    description: "Cooperation, not competition, drives evolution. Scientific evidence that mutual aid is natural and essential to survival.",
    url: "https://theanarchistlibrary.org/library/petr-kropotkin-mutual-aid-a-factor-of-evolution",
  },
  {
    title: "Debt: The First 5,000 Years",
    author: "David Graeber (2011)",
    description: "The history of debt reveals that markets and money were imposed by violence, not naturally evolved. Gift economies came first.",
  },
  {
    title: "The Dawn of Everything",
    author: "David Graeber & David Wengrow (2021)",
    description: "A radical rethinking of human history — humans have always experimented with egalitarian, non-hierarchical societies. Hierarchy is not inevitable.",
  },
  {
    title: "Walkaway",
    author: "Cory Doctorow (2017)",
    description: "Science fiction novel about people who 'walk away' from capitalism to build open-source, post-scarcity communities. A blueprint disguised as a story.",
  },
  {
    title: "Caliban and the Witch",
    author: "Silvia Federici (2004)",
    description: "How the transition to capitalism required the destruction of the commons, the subjugation of women, and the creation of the wage system.",
  },
  {
    title: "The Dispossessed",
    author: "Ursula K. Le Guin (1974)",
    description: "An anarchist utopia on the moon — and its imperfections. The greatest literary exploration of what an anarchist society could look like.",
  },
  {
    title: "Sacred Economics",
    author: "Charles Eisenstein (2011)",
    description: "Tracing money from ancient gift economies to modern capitalism, and a vision for a more connected, ecological economy.",
    url: "https://sacred-economics.com",
  },
];
