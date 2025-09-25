export type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  priceRange: string;
};

const services: Service[] = [
  {
    id: 1,
    slug: "product-sprints",
    title: "Full-Stack Product Sprints",
    description:
      "Multidisciplinary teams shipping MVPs, internal tools, and redesigns with weekly shipping cadence.",
    deliverables: [
      "Discovery & product mapping",
      "Design systems & component libraries",
      "React / Node implementation",
      "CI/CD and observability setup",
    ],
    outcomes: [
      "Production-ready launch in under 6 weeks",
      "Design-to-engineering parity",
      "Documentation and handover kits",
    ],
    priceRange: "15K - 35K",
  },
  {
    id: 2,
    slug: "ai-chatbots",
    title: "AI Chatbots & Automation",
    description:
      "Conversational AI, copilots, and workflow automation tailored for customer support, product teams, and operations.",
    deliverables: [
      "Persona and knowledge base design",
      "LLM orchestration & vector search",
      "Dashboard & analytics portal",
      "Security and compliance review",
    ],
    outcomes: [
      "Reduce support load by up to 45%",
      "Automated insights and reporting",
      "Safe guardrails for enterprise teams",
    ],
    priceRange: "12K - 28K",
  },
  {
    id: 3,
    slug: "experience-design",
    title: "Experience Design Systems",
    description:
      "Motion-rich, accessible design systems that empower product squads to ship faster across platforms.",
    deliverables: [
      "Audit & component inventory",
      "Design tokens and theming",
      "Storybook and playground setup",
      "Team onboarding workshops",
    ],
    outcomes: [
      "Consistent brand expression",
      "Design to dev handoff in hours",
      "Improved usability metrics",
    ],
    priceRange: "8K - 22K",
  },
  {
    id: 4,
    slug: "education-enterprise",
    title: "Enterprise Upskilling",
    description:
      "Tailored curriculum that upgrades your engineering org with modern JavaScript, AI, and development workflows.",
    deliverables: [
      "Skill gap analysis",
      "Custom cohort curriculum",
      "Live workshops & office hours",
      "Capstone with stakeholder showcase",
    ],
    outcomes: [
      "Retention and promotion readiness",
      "Reusable course library",
      "Quantified skill improvement",
    ],
    priceRange: "18K - 50K",
  },
];

export default services;
