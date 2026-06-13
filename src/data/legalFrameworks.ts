export interface LegalFramework {
  country: string;
  flag: string;
  structures: LegalStructure[];
}

export interface LegalStructure {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  url?: string;
}

export const legalFrameworks: LegalFramework[] = [
  {
    country: "United States",
    flag: "🇺🇸",
    structures: [
      {
        name: "Community Land Trust (CLT)",
        description: "Nonprofit that owns land in perpetuity, leasing it to residents via 99-year ground leases. Buildings can be owned individually but land stays communal. Over 300 CLTs exist in the US.",
        pros: [
          "Permanently affordable housing",
          "Democratic governance (tripartite board)",
          "Land removed from speculative market",
          "Can receive grants and tax-exempt donations",
        ],
        cons: [
          "Complex legal setup",
          "Requires 501(c)(3) nonprofit status",
          "Limited equity appreciation for residents",
        ],
        url: "https://www.cltweb.org",
      },
      {
        name: "Housing Cooperative (Co-op)",
        description: "Residents jointly own the entire property through shares. One member, one vote. Common in NYC with 1M+ co-op units nationwide.",
        pros: [
          "Democratic control by residents",
          "Shared costs and responsibilities",
          "Can be limited-equity for affordability",
          "Strong legal framework under state co-op laws",
        ],
        cons: [
          "Need board approval for new members",
          "Financing can be harder than traditional mortgage",
          "Members liable for collective debt",
        ],
      },
      {
        name: "LLC / Land Trust Hybrid",
        description: "Combining an LLC (for legal liability protection) with a land trust (for anonymous/collective ownership). Used by many intentional communities.",
        pros: [
          "Flexible structure",
          "Members can define operating agreement freely",
          "Pass-through taxation",
          "Privacy through land trust",
        ],
        cons: [
          "No tax-exempt status",
          "Requires careful drafting of operating agreement",
          "State-by-state variation in laws",
        ],
      },
      {
        name: "Federation of Egalitarian Communities (FEC) Model",
        description: "Income-sharing communities organized as 501(d) religious or communal groups. Members pool all income, community provides all needs. Used by Twin Oaks, East Wind, etc.",
        pros: [
          "Full income sharing — no personal wealth needed",
          "Community provides housing, food, healthcare",
          "Strong egalitarian principles",
          "Tax advantages under 501(d)",
        ],
        cons: [
          "Requires total commitment",
          "IRS scrutiny of 501(d) status",
          "Members have minimal personal assets",
        ],
        url: "https://thefec.org",
      },
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    structures: [
      {
        name: "Community Benefit Society (BenCom)",
        description: "A form of cooperative that must operate for community benefit, not just member benefit. Ideal for CLTs, community farms, and housing cooperatives. Registered with the FCA.",
        pros: [
          "Asset lock protects community property",
          "Can issue community shares for fundraising",
          "One member, one vote",
          "Can register as a CLT",
        ],
        cons: [
          "Must benefit wider community, not just members",
          "Regulatory requirements from FCA",
          "More complex than company structure",
        ],
        url: "https://www.uk.coop",
      },
      {
        name: "Community Interest Company (CIC)",
        description: "A limited company with a social purpose, regulated by the CIC Regulator. Has an asset lock ensuring assets are used for community benefit.",
        pros: [
          "Relatively easy to set up",
          "Asset lock built in",
          "Can trade and earn revenue",
          "Clear social enterprise identity",
        ],
        cons: [
          "Cannot receive charitable donations tax-free",
          "Cap on dividend payments",
          "Less democratic than co-op structure",
        ],
      },
      {
        name: "Community Land Trust (CLT)",
        description: "Defined in the Housing and Regeneration Act 2008. Not a legal structure itself but a 'wrapper' that can apply to BenComs, CICs, or CLGs. 300+ CLTs in England & Wales.",
        pros: [
          "Legally recognized status",
          "Land held in perpetuity for community",
          "Access to government CLT funding",
          "Democratic membership structure",
        ],
        cons: [
          "Must meet specific purpose and community tests",
          "Complex governance requirements",
          "Slow development process",
        ],
        url: "https://www.communitylandtrusts.org.uk",
      },
    ],
  },
  {
    country: "Spain",
    flag: "🇪🇸",
    structures: [
      {
        name: "Cooperativa de Vivienda (Housing Cooperative)",
        description: "Strong legal framework for housing cooperatives under Spanish cooperative law. Each autonomous community has its own cooperative legislation. Collective use model gaining traction.",
        pros: [
          "Well-established legal framework",
          "Tax benefits for cooperatives",
          "Collective use (cesión de uso) model removes housing from market",
          "Democratic governance required by law",
        ],
        cons: [
          "Different laws per autonomous community",
          "Initial capital requirements",
          "Bureaucratic registration process",
        ],
      },
      {
        name: "Sociedad Cooperativa Integral",
        description: "Integral cooperatives covering multiple sectors — housing, food, education, health. Inspired by Catalan CIC (Cooperativa Integral Catalana). Aim to build parallel, self-sufficient economic systems.",
        pros: [
          "Covers entire economic life, not just one sector",
          "Builds alternative to mainstream economy",
          "Strong network of existing integral cooperatives",
          "Can use internal exchange systems",
        ],
        cons: [
          "Complex legal structure",
          "Requires critical mass of members",
          "Some activities in legal grey areas",
        ],
      },
    ],
  },
  {
    country: "France",
    flag: "🇫🇷",
    structures: [
      {
        name: "SCOP (Société Coopérative et Participative)",
        description: "Worker cooperatives where employees own at least 51% of capital and 65% of voting rights. Over 3,800 SCOPs in France employing 73,000+ people.",
        pros: [
          "Workers control the company",
          "Profit-sharing mandatory",
          "Tax advantages (exemption on profits put into reserves)",
          "Strong support network (CG Scop)",
        ],
        cons: [
          "Complex governance",
          "Harder to attract outside investment",
          "Members financially responsible",
        ],
        url: "https://www.les-scop.coop",
      },
      {
        name: "Foncière Terre de Liens",
        description: "Land trust model specific to farming. Citizens buy shares to collectively purchase farmland, then lease it to organic/peasant farmers. 280+ farms preserved, 8,300+ hectares.",
        pros: [
          "Farmland removed from speculation permanently",
          "Citizens can invest from €100",
          "Supports agroecological transition",
          "National network with local groups",
        ],
        cons: [
          "Shares are not easily liquidated",
          "Returns are non-financial (social impact)",
          "Limited to agricultural land",
        ],
        url: "https://terredeliens.org",
      },
      {
        name: "Habitat Participatif (Participatory Housing)",
        description: "Legally recognized since ALUR law (2014). Residents collectively design, finance, and manage their housing. Can take form of cooperative or shared ownership society.",
        pros: [
          "Legal framework since 2014",
          "Residents design their own homes",
          "Shared spaces reduce costs",
          "Community-building built into the process",
        ],
        cons: [
          "Long development timelines (3-7 years)",
          "Requires group cohesion throughout process",
          "Limited financing options",
        ],
      },
    ],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    structures: [
      {
        name: "Mietshäuser Syndikat (Tenant House Syndicate)",
        description: "Network of 190+ collectively-owned housing projects across Germany. Properties can never be privatized or sold. Each project is a GmbH co-owned by residents AND the Syndikat, giving mutual veto power.",
        pros: [
          "Properties permanently removed from market",
          "Solidarity-based financing between projects",
          "Democratic self-governance",
          "Mutual veto prevents privatization",
        ],
        cons: [
          "Complex dual-ownership structure",
          "Relies on direct loans (Direktkredite) from supporters",
          "Long setup process",
        ],
        url: "https://www.syndikat.org",
      },
      {
        name: "Eingetragene Genossenschaft (eG) — Registered Cooperative",
        description: "Strong German cooperative tradition with over 8,000 cooperatives. Housing cooperatives (Wohnungsbaugenossenschaften) house 5 million+ Germans. Members buy shares and have democratic voice.",
        pros: [
          "Very well-established legal framework",
          "Strong regulatory protection for members",
          "One member, one vote",
          "Stable, affordable rents",
        ],
        cons: [
          "Minimum 3 founding members",
          "Must join a cooperative auditing association",
          "Initial share capital required",
        ],
      },
    ],
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    structures: [
      {
        name: "Usi Civici (Civic Uses / Commons)",
        description: "Ancient form of collective land rights, revitalized by 2017 Italian law. Communities have inalienable, indivisible, and imprescriptible rights to common lands — forests, pastures, mountains.",
        pros: [
          "Constitutional protection (Art. 42 & 43)",
          "Land cannot be sold or privatized",
          "Inter-generational co-ownership",
          "Historical precedent going back centuries",
        ],
        cons: [
          "Bureaucratic recognition process",
          "Limited to historically established commons",
          "Varies significantly by region",
        ],
      },
      {
        name: "Cooperativa Sociale (Social Cooperative)",
        description: "Two types: Type A (social services) and Type B (work integration for disadvantaged). Over 16,000 social cooperatives in Italy employing 400,000+ people.",
        pros: [
          "Tax advantages",
          "Strong social mission framework",
          "Can receive public contracts",
          "Part of large cooperative movement (Legacoop, Confcooperative)",
        ],
        cons: [
          "Must reinvest 30%+ of profits",
          "Complex governance requirements",
          "Regional variations in support",
        ],
      },
    ],
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    structures: [
      {
        name: "Ejido (Communal Farming Community)",
        description: "29,000 ejidos exist covering nearly half of Mexico's land. Communal agricultural land with collective governance. Protected by the Mexican Constitution since 1917 (Article 27).",
        pros: [
          "Constitutional protection",
          "Covers ~50% of Mexico's territory",
          "Collective decision-making by assembly",
          "Cannot be seized for debt",
        ],
        cons: [
          "1992 reforms allowed partial privatization",
          "Pressure from agribusiness and development",
          "Limited access to credit",
        ],
      },
      {
        name: "Comunidad Indígena (Indigenous Community)",
        description: "2,160+ Indigenous communities with formal collective titles. Constitutional recognition (2001) of Indigenous self-governance, land rights, and autonomous justice systems.",
        pros: [
          "Constitutional recognition",
          "Self-governance over internal affairs",
          "Collective land titles",
          "Cultural preservation framework",
        ],
        cons: [
          "Rights often not enforced in practice",
          "Conflict with extractive industries",
          "Limited state resources for protection",
        ],
      },
    ],
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    structures: [
      {
        name: "Assentamento (MST Settlement)",
        description: "Land reform settlements organized by the Landless Workers' Movement. 350,000+ families on reclaimed land with cooperative farming, schools, and community governance.",
        pros: [
          "Constitutional right to productive land use",
          "Strong organized movement (MST)",
          "Cooperative production models",
          "Community schools and health services",
        ],
        cons: [
          "Ongoing political threats to land reform",
          "Violence against land reform activists",
          "Dependency on government recognition",
        ],
        url: "https://www.mst.org.br",
      },
    ],
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    structures: [
      {
        name: "Woongroep / Wooncoöperatie (Housing Cooperative)",
        description: "Growing movement of housing cooperatives, legally enabled since 2015 amendments. Residents collectively own and manage housing. Several new cooperatives emerging in Amsterdam, Rotterdam, etc.",
        pros: [
          "Legal framework improving since 2015",
          "Municipal support in some cities",
          "Democratic self-management",
          "Anti-speculation clauses possible",
        ],
        cons: [
          "Very tight housing market",
          "Limited available land/property",
          "Still developing legal framework",
        ],
      },
      {
        name: "Stichting (Foundation) for Land Stewardship",
        description: "Foundations like BD Grondbeheer buy farmland and lease it to biodynamic/organic farmers. Land is held in perpetuity, removed from speculation. Citizens fund through perpetual bonds.",
        pros: [
          "Land permanently protected",
          "Supports agroecological farming",
          "Citizens can invest",
          "No profit extraction",
        ],
        cons: [
          "Non-democratic (foundation, not co-op)",
          "Limited scope",
          "Returns are social, not financial",
        ],
        url: "https://www.bdgrondbeheer.nl",
      },
    ],
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    structures: [
      {
        name: "CODI / Baan Makong Programme",
        description: "Government-supported collective land agreements for urban communities. 92,000+ households in cooperative land ownership or long-term community cooperative leases.",
        pros: [
          "Government-backed (CODI)",
          "Proven at scale (92,000+ households)",
          "Community savings model",
          "Secure tenure for urban poor",
        ],
        cons: [
          "Dependent on government policy",
          "Urban focus — less applicable to rural",
          "Complex bureaucratic process",
        ],
      },
    ],
  },
  {
    country: "Autonomous Regions",
    flag: "🏴",
    structures: [
      {
        name: "Zapatista Good Government Boards (JBG)",
        description: "Autonomous governance structure in Chiapas, Mexico. Rotating councils, community assemblies, collective land tenure. Operating outside the Mexican state since 1994.",
        pros: [
          "Fully autonomous governance",
          "Proven for 30+ years",
          "Collective land ownership",
          "Community-controlled education and health",
        ],
        cons: [
          "Exists in tension with Mexican state",
          "Military threats",
          "Economic isolation",
        ],
      },
      {
        name: "Rojava Social Contract (2014/2023)",
        description: "Constitutional framework for democratic confederalism. Multi-ethnic, gender-equal governance. Cooperative economy, ecological municipalities, local council system for 4M+ people.",
        pros: [
          "Gender equality mandated at every level",
          "Multi-ethnic, multi-religious inclusion",
          "Cooperative economy framework",
          "Ecological principles embedded",
        ],
        cons: [
          "War zone — ongoing military threats",
          "International non-recognition",
          "Economic embargo challenges",
        ],
      },
    ],
  },
];
