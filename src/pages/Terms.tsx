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
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.85))] px-8 py-16 md:px-14">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Terms of Use</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Our shared playbook for building</h1>
          <p className="mt-4 text-base text-white/75">
            These terms outline how STACKO delivers educational experiences and development services. We keep them human, honest, and friendly.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 space-y-8">
        {termsSections.map((section) => (
          <Reveal key={section.heading}>
            <div className="glass-surface rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              <p className="mt-3 text-sm text-muted">{section.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Terms;
