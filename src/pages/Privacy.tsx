import Reveal from "@/components/Reveal";

const privacySections = [
  {
    heading: "Data we collect",
    body: "We gather profile details, learning activity, and project artifacts you choose to share. Payment data is handled by secure third parties.",
  },
  {
    heading: "How we use it",
    body: "Data powers personalized coursework, mentorship recommendations, and anonymized insights that improve STACKO experiences.",
  },
  {
    heading: "Your controls",
    body: "Download your data anytime, request deletion, or opt out of marketing updates directly from your dashboard.",
  },
];

const Privacy = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Privacy policy</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">Your trust fuels our community</h1>
            <p className="mt-6 max-w-3xl text-lead text-white/80 mx-auto">
              STACKO protects your information with the same rigor we apply to shipping secure products. Here’s how we handle data and respect your preferences.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="section-shell space-y-8">
        {privacySections.map((section) => (
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

export default Privacy;
