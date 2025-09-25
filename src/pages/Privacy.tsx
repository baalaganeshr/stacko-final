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
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.85))] px-8 py-16 md:px-14">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Privacy policy</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Your trust fuels our community</h1>
          <p className="mt-4 text-base text-white/75">
            STACKO protects your information with the same rigor we apply to shipping secure products. Here’s how we handle data and respect your preferences.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 space-y-8">
        {privacySections.map((section) => (
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

export default Privacy;
