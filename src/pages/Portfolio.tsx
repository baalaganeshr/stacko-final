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
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">STACKO work</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">Case studies & live launches</h1>
            <p className="mt-6 max-w-3xl text-lead text-white/80 mx-auto">
              Explore recent engagements blending education, design, and engineering to create products that feel award-worthy on day one.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="section-shell">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.name} className="glass-surface rounded-[3rem] border border-white/12 p-10">
                <p className="text-sm font-semibold text-white">{study.name}</p>
                <p className="mt-4 text-sm text-white/70">{study.summary}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.32em] text-secondary-500">Full case study coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Portfolio;

