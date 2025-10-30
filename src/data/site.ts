export type Project = {
  title: string
  summary?: string
  details?: string[]
  logo?: string
  link?: string
  docs?: string
  period?: string
  role?: string
}

export const site = {
  name: "Ashwin Yardi",
  headline: "CTO • Developer • Product Manager",
  tagline: "I ship great products and get my team to do the same.",
  email: "mailto:ashwin@bitsbyblocks.com",
  socials: {
    github: "https://github.com/ashwinYardi",
    linkedin: "https://www.linkedin.com/in/ashwin-yardi/",
    x: "https://x.com/yardi_ashwin",
    website: "https://bitsbyblocks.com",
  },
  about: [
    "I’m Ashwin Yardi — CTO, developer, and product manager.",
    "I ship great products and get my team to do the same.",
    "Started in 2017 at Deqode, got hands-on with Solidity and web3 during the ICO wave.",
    "In 2019, I left my job, helped StackOS build their MVP (raised $4M), worked with Fetch.ai, and founded my studio.",
    "Since then I’ve built and shipped 30+ products for clients and myself.",
    "In 2023, I joined Lucidity to build from the ground up: a leverage aggregator and optimizer with AI for DeFi.",
    "We shipped debt/collateral swaps, one‑click protocol switchers, position optimization, and auto‑liquidation protection.",
    "Later at Qurios (qurios.ai), I led Blockchain & Data, hired a founding team of 4, and shipped in ~2 months.",
    "We cut query latency from ~2 minutes to ~30 seconds with better pipelines, indexing/caching, and pragmatic infra.",
    "Promoted to CTO at Qurios in May 2025.",
    "I also occasionally write at bitsbyblocks.com.",
  ],
  achievements: [
    "Built and shipped 30+ products",
    "Won Best DeFi Project award from Polygon",
    "Won Network First Prize from Connext",
    "Won Protocol Prizes from The Graph and Push Protocol",
    "Generated $2,000,000 daily trading volume on PolyDEX",
    "Created $50,000 monthly recurring revenue",
  ],
  projects: [
    {
      title: "Qurios",
      link: "https://qurios.ai",
      docs: "https://qurios.gitbook.io/qurios-tech-docs/V1L2GNQ7HKiDomlUPimI/",
      logo: "/companies/qurios.jpeg",
      role: "CTO (promoted May 2025)",
      period: "2024–2025",
      details: [
        "Started as Blockchain & Data team lead; built founding team of 4 and led R&D.",
        "Shipped the product in ~2 months end-to-end.",
        "Brought query latency from ~2 minutes to ~30 seconds via better pipelines, indexing/caching, and pragmatic infra.",
        "AI memory platform enabling creation of Minds from multi‑source ingestion (Twitter, Telegram, Substack, docs, YouTube, websites).",
        "AI analysis with Google Gemini 2.5 (Flash, Flash Lite, Pro); personality modeling, stance detection, citations.",
        "Architecture: Memory Pipeline (NestJS) for mind creation + content processing; Query Engine (Python FastAPI) for NL queries and responses.",
        "Data layer: PostgreSQL (Supabase) for metadata; Mem0 for vector memory and profiles; Base chain (X402) micro‑payments; Privy embedded wallets.",
        "Documentation reference: https://qurios.gitbook.io/qurios-tech-docs/V1L2GNQ7HKiDomlUPimI/",
      ],
    },
    {
      title: "Lucidity",
      logo: "/companies/lucidity.jpeg",
      period: "2023–2024",
      details: [
        "Built an end-to-end leverage aggregator and optimizer.",
        "Used AI early in DeFi to optimize user positions and risk.",
        "Implemented complex DeFi recipes: debt swap, collateral swap, one-click protocol position switchers.",
        "Position optimization and auto-liquidation protection baked in.",
      ],
    },
    {
      title: "Expendzo",
      link: "https://expendzo.com",
      details: [
        "Privacy-first expense tracking.",
        "No sensitive data required; smart insights.",
      ],
    },
    {
      title: "BingeBlogs",
      link: "https://bingeblogs.com",
      details: [
        "Automated blog generator.",
        "Optimized for LLMs and LLM-SEO.",
      ],
    },
    {
      title: "Crypto Twitter AMA",
      summary: "Ask-me-anything tool for notable crypto accounts.",
      details: [
        "RAG pipeline on top of historic tweets.",
        "Realtime tweets fetching pipeline.",
      ],
    },
    {
      title: "Atomix by Fetch.ai",
      logo: "/companies/fetch.png",
      details: [
        "Early-stage planning, prototyping, and research.",
        "Studied Aave, Compound, Balancer v1 for design inputs.",
      ],
    },
    {
      title: "StackOS.io",
      logo: "/companies/stackos.png",
      details: [
        "First engineer; built on-chain contracts and interfacing backend MVP solo.",
        "MVP enabled StackOS to raise $4M.",
        "Contracts: STACK staking, Resources Manager, streaming payments/subscriptions, STACK token, Uniswap v2 LP farming (STACK–USDT).",
      ],
    },
    {
      title: "Phoenix Staking (Fetch.ai)",
      logo: "/companies/fetch.png",
      details: [
        "Proxy staking contract integrating with FET staking to manage MTLX distribution.",
        "Also used for Atomix rewards program.",
      ],
    },
    {
      title: "Mettalex Amplify",
      details: [
        "Full smart-contract suite for Amplify program.",
        "Forked FuruCombo v1; single-sided entry with ETH → MTLX.",
        "Uniswap LP add (MTLX–ETH) and stake in MasterChef; MTLX peaked > $10.",
      ],
    },
    {
      title: "XFai Potentializer LGE",
      logo: "/companies/xfai.jpeg",
      details: [
        "All on-chain contracts solo: LP staking (MasterChef), token sale, liquidity provision, auto-stake flow.",
      ],
    },
    {
      title: "UniFi Lending",
      details: [
        "Compound protocol fork; lending markets and interest rate model.",
      ],
    },
    {
      title: "Open Oracle Coingecko Reporter",
      details: [
        "On-chain price reporter compatible with Compound-style markets.",
      ],
    },
    {
      title: "PolyDEX",
      details: [
        "Polygon DEX; first fully gasless DEX on Polygon.",
        "Built multi-reward farms and staking pools; later evolved into DEX aggregator.",
      ],
    },
    {
      title: "Cross-chain Farming",
      details: [
        "Novel 100% cross-chain farming using Polygon FxPortals.",
      ],
    },
    {
      title: "DappFactory",
      details: [
        "No-code smart contracts as a service.",
        "Used minimal proxies and modular on-chain architecture.",
        "Pools: fixed APR and multi-reward staking pools.",
      ],
    },
    {
      title: "Yugen Finance",
      details: [
        "Two-token model preventing dilution; floor price mechanics for YGN.",
      ],
    },
    {
      title: "Mirai Protocol",
      details: [
        "Cross-chain lending for Polygon zkEVM; Best DeFi award at hackathon.",
        "Euler-style modular architecture; wrote deployment and simulation scripts.",
      ],
    },
  ] as Project[],
} as const
