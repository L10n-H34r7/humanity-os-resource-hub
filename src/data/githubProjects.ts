export interface GitHubProject {
  name: string;
  description: string;
  url: string;
  tags: string[];
  stars?: string;
  category: 'governance' | 'economy' | 'tools' | 'community' | 'education' | 'ecology';
}

export const githubProjects: GitHubProject[] = [
  // Governance & Self-Organization
  {
    name: "TogetherOS",
    description: "An OS for humanity — open source, modular, empathy-based platform covering cooperation, governance, direct democracy, solidarity economy, coops, ecovillages, and timebanking.",
    url: "https://github.com/topics/humanity",
    tags: ["governance", "direct-democracy", "solidarity-economy", "coops"],
    category: "governance",
  },
  {
    name: "HumanityOS",
    description: "Life-management OS and communication platform. Fully operational chat with E2E encryption, voice/video, federated servers. Public domain (CC0). Built on the belief that education is the foundation and tools are the path.",
    url: "https://github.com/humanityos",
    tags: ["communication", "education", "p2p", "public-domain"],
    stars: "Active",
    category: "community",
  },
  {
    name: "Cyber Autonomy",
    description: "P2P self-governance society prototype researching the intersection of moneyless economy, liquid democracy, and p2p media. Built on IPFS for permanent decentralized hosting.",
    url: "https://github.com/stateless-minds/cyber-autonomy",
    tags: ["p2p", "moneyless", "liquid-democracy", "ipfs"],
    stars: "27+",
    category: "governance",
  },
  {
    name: "Cyber Stasis",
    description: "Post-money economy simulator — a free fictional game based on gift economy testing the hypothesis of a market system without any exchange (barters or money). Real-time global demand/supply dashboard.",
    url: "https://github.com/stateless-minds/cyber-stasis",
    tags: ["gift-economy", "simulator", "post-scarcity", "game"],
    category: "economy",
  },
  {
    name: "Cyber GUBI",
    description: "Basic income done right for the cyber age — a guaranteed unconditional basic income digital currency. Supply is naturally capped to living people. Built on trust, presence, and freedom.",
    url: "https://github.com/stateless-minds/cyber-gubi",
    tags: ["basic-income", "digital-currency", "p2p", "post-scarcity"],
    category: "economy",
  },
  {
    name: "Gift Economy Platform",
    description: "Hyper-localized gift-sharing platform promoting generosity and gratitude. Users join local groups to share items and services for free — furniture, food, skills, art, and more.",
    url: "https://github.com/seif245/gift-economyPlatform",
    tags: ["gift-economy", "sharing", "local", "community"],
    category: "economy",
  },
  // Ecology & Sustainability
  {
    name: "Open Source Ecology",
    description: "Developing 50 open source industrial machines (Global Village Construction Set) that can be built for a fraction of commercial cost. Blueprints for a small, sustainable civilization.",
    url: "https://github.com/OpenSourceEcology",
    tags: ["hardware", "machines", "self-sufficiency", "manufacturing"],
    stars: "Popular",
    category: "ecology",
  },
  {
    name: "Awesome Sustainable Technology",
    description: "Curated list of open source projects for sustainable technology — energy systems, agriculture, water, transport, and more. A knowledge commons for ecological transition.",
    url: "https://github.com/OpenEnergyPlatform/awesome-sustainable-technology",
    tags: ["sustainability", "energy", "ecology", "curated-list"],
    category: "ecology",
  },
  {
    name: "Awesome Tech for Good",
    description: "Selection of open source projects, tools, and resources for social impact. Includes humanitarian mapping, open data, civic tech, and community tools.",
    url: "https://github.com/TechforgoodCAST/awesome-techforgood",
    tags: ["social-impact", "civic-tech", "humanitarian", "open-data"],
    category: "tools",
  },
  // Community & Communication Tools
  {
    name: "Decidim",
    description: "Free open source participatory democracy platform for cities and organizations. Used by Barcelona, Helsinki, and hundreds of communities worldwide.",
    url: "https://github.com/decidim/decidim",
    tags: ["democracy", "participation", "governance", "civic"],
    stars: "1.5k+",
    category: "governance",
  },
  {
    name: "Loomio",
    description: "Open source tool for collaborative decision-making. Enables groups to discuss, propose, and decide together — used by cooperatives, collectives, and communities globally.",
    url: "https://github.com/loomio/loomio",
    tags: ["decision-making", "collaboration", "cooperative", "governance"],
    stars: "2.3k+",
    category: "governance",
  },
  {
    name: "Open Food Network",
    description: "Open source platform for local food systems. Connects farmers, food hubs, and communities to build resilient, fair, and transparent food supply chains.",
    url: "https://github.com/openfoodfoundation/openfoodnetwork",
    tags: ["food", "local", "supply-chain", "agriculture"],
    stars: "1.1k+",
    category: "ecology",
  },
  {
    name: "FarmHack",
    description: "A worldwide community of farmers that build and modify their own tools. Open source designs for sustainable agriculture equipment.",
    url: "https://farmhack.org",
    tags: ["farming", "open-hardware", "diy", "tools"],
    category: "tools",
  },
  {
    name: "Open Street Map / Humanitarian",
    description: "Free, open map data for humanitarian aid and development. Volunteer-driven mapping that powers disaster response and community resilience worldwide.",
    url: "https://github.com/hotosm",
    tags: ["mapping", "humanitarian", "open-data", "volunteers"],
    category: "tools",
  },
  {
    name: "KoBoToolbox",
    description: "Simple, robust, and powerful tools for data collection in demanding contexts — used by humanitarian organizations, researchers, and communities.",
    url: "https://github.com/kobotoolbox",
    tags: ["data-collection", "humanitarian", "research", "fieldwork"],
    category: "tools",
  },
  {
    name: "Open Bionics",
    description: "Open source initiative for development of affordable, lightweight, modular robot and prosthetic hands. Making assistive technology accessible to everyone.",
    url: "https://github.com/OpenBionics",
    tags: ["prosthetics", "open-hardware", "accessibility", "health"],
    category: "tools",
  },
];

export const categoryLabels: Record<string, { label: string; emoji: string; color: string }> = {
  governance: { label: "Governance & Democracy", emoji: "🏛️", color: "bg-purple-100 text-purple-800" },
  economy: { label: "Post-Money Economy", emoji: "🔄", color: "bg-amber-100 text-amber-800" },
  tools: { label: "Tools & Infrastructure", emoji: "🔧", color: "bg-blue-100 text-blue-800" },
  community: { label: "Community & Communication", emoji: "🤝", color: "bg-green-100 text-green-800" },
  education: { label: "Education & Knowledge", emoji: "📚", color: "bg-rose-100 text-rose-800" },
  ecology: { label: "Ecology & Sustainability", emoji: "🌱", color: "bg-emerald-100 text-emerald-800" },
};
