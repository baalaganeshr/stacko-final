import Reveal from "@/components/Reveal";

const termsSections = [
  {
    heading: "Using STACKO",
    body: "STACKO provides programming courses, mentorship, and development services. Respect community guidelines, protect confidential studio work, and ship responsibly.",
  },
  {
    heading: "Subscriptions",
    body: "Course tiers renew monthly and can be paused anytime. Development engagements follow the statement of work approved by both parties.",
  },
  {
    heading: "Intellectual property",
    body: "Client work remains the property of the client upon payment. Curriculum content is licensed for personal use by members and cannot be redistributed.",
  },
];

const Terms = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Terms of Use</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">Our shared playbook for building</h1>
            <p className="mt-6 max-w-3xl text-lead text-white/80">
              These terms outline how STACKO delivers educational experiences and development services. We keep them human, honest, and friendly.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="section-shell space-y-8">
        {termsSections.map((section) => (
          <Reveal key={section.heading}>
            <div className="glass-surface rounded-[3rem] border border-white/12 p-12">
              <h2 className="text-[clamp(1.7rem,2.4vw,2.1rem)] font-semibold text-white">{section.heading}</h2>
              <p className="mt-4 text-sm text-white/70">{section.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Terms;
