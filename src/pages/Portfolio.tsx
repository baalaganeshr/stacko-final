import Reveal from "@/components/Reveal";

const caseStudies = [
  {
    name: "Pulse Analytics",
    summary: "AI chatbot that reduced support backlog by 40% and unlocked new revenue insights in six weeks.",
  },
  {
    name: "Bloom Health",
    summary: "React design system and patient onboarding portal that lifted activation by 33%.",
  },
  {
    name: "Aurora Labs",
    summary: "Full-stack rebuild that migrated legacy tooling to a modern React + Node.js stack in record time.",
  },
];

const Portfolio = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.8))] px-8 py-20 md:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">STACKO work</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Case studies & live launches</h1>
          <p className="mt-4 max-w-3xl text-base text-white/75">
            Explore recent engagements blending education, design, and engineering to create products that feel award-worthy on day one.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {caseStudies.map((study) => (
          <Reveal key={study.name}>
            <div className="glass-surface rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold text-white">{study.name}</p>
              <p className="mt-3 text-sm text-muted">{study.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.32em] text-secondary-500">Full case study coming soon</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
