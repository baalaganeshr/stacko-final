export type TeamMember = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  portfolio?: string;
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Baalaganesh",
    title: "Full-Stack Developer & UI/UX Designer",
    specialty: "React, Node.js & Modern Web Development",
    bio: "Creating modern web applications with React, Node.js, and cutting-edge UI/UX design principles",
    portfolio: "https://baalaganeshr.github.io/new-portfolio/",
  },
  {
    id: 2,
    name: "Harikrishnan A",
    title: "Software Engineer & Product Developer",
    specialty: "Full-stack development & System Architecture",
    bio: "Building scalable software solutions and architecting robust systems for complex web applications",
    portfolio: "https://baalaganeshr.github.io/Harikrishnan-A/",
  },
  {
    id: 3,
    name: "Aathan J",
    title: "Frontend Developer & Creative Technologist",
    specialty: "Modern Frontend & Interactive Experiences",
    bio: "Specializing in innovative frontend technologies and crafting engaging interactive digital experiences",
    portfolio: "https://aathanj.github.io/AathanJ.github/",
  },
];

export default team;
