export type TeamMember = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  bio: string;
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Lena Ortiz",
    title: "CEO & Experience Architect",
    specialty: "Product storytelling & design systems",
    bio: "Shaping award-winning edtech experiences and leading the STACKO vision.",
  },
  {
    id: 2,
    name: "Devon Park",
    title: "CTO",
    specialty: "AI platforms & full-stack architecture",
    bio: "Built AI copilots for Fortune 500 teams and coaches our advanced engineering cohorts.",
  },
  {
    id: 3,
    name: "Amina Farouk",
    title: "Head of Education",
    specialty: "Curriculum design & learning science",
    bio: "Crafts cohort experiences with a focus on mastery, momentum, and multiplayer learning.",
  },
  {
    id: 4,
    name: "Noah Reyes",
    title: "Lead Engineer",
    specialty: "Scalable React & Node.js systems",
    bio: "Guides teams through production builds and co-leads mentorship for interns.",
  },
  {
    id: 5,
    name: "Mira Patel",
    title: "AI Research Lead",
    specialty: "Conversational AI & applied ML",
    bio: "Turns research breakthroughs into deployable chatbots and automation frameworks.",
  },
  {
    id: 6,
    name: "Caleb Johnson",
    title: "Program Director",
    specialty: "Career strategy & community",
    bio: "Connects STACKO talent with companies and orchestrates internship placements.",
  },
  {
    id: 7,
    name: "Yara Chen",
    title: "Marketing & Partnerships",
    specialty: "Growth strategy & partner success",
    bio: "Expands STACKO's reach across universities, startups, and enterprise innovation labs.",
  },
];

export default team;
