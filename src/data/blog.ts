export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ai-chatbots-with-node",
    title: "Designing Delightful AI Chatbots with Node.js and LangChain",
    excerpt:
      "Practical patterns to ship conversational experiences, from prompt testing to observability and human handoff.",
    readTime: "12 min read",
    date: "Jan 7, 2025",
    category: "AI Engineering",
  },
  {
    id: 2,
    slug: "design-systems-for-react",
    title: "Building a Motion-First Design System for React Teams",
    excerpt:
      "How we use tokens, Framer Motion, and accessibility stress tests to keep product squads in sync.",
    readTime: "9 min read",
    date: "Dec 18, 2024",
    category: "Product Design",
  },
  {
    id: 3,
    slug: "python-automation-blueprint",
    title: "Python Automation Blueprints for Ops Teams",
    excerpt:
      "Templates to orchestrate repetitive workflows, integrate APIs, and deliver instant dashboards for stakeholders.",
    readTime: "11 min read",
    date: "Nov 30, 2024",
    category: "Python",
  },
];

export default blogPosts;
