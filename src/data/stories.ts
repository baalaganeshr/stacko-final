export type Story = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  result: string;
};

const stories: Story[] = [
  {
    id: 1,
    name: "Ivy Thompson",
    role: "Software Engineer",
    company: "Aurora Labs",
    quote:
      "STACKO gave me the structured roadmap and mentorship to go from computer science student to full-stack engineer in under six months.",
    result: "Landed offer 14 days post cohort",
  },
  {
    id: 2,
    name: "Marcus Lee",
    role: "Founder",
    company: "Pulse Analytics",
    quote:
      "Their AI sprint delivered a production chatbot that saved our support team 40% of inbound volume within the first quarter.",
    result: "40% reduction in support backlog",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Product Manager",
    company: "Bloom Health",
    quote:
      "The internship studio unlocked a portfolio of real healthcare projects. The portfolio storytelling workshops were game changers.",
    result: "2 promotions in 9 months",
  },
];

export default stories;
