import Reveal from "@/components/Reveal";

const officeHours = [
  {
    title: "Education partnerships",
    description: "Universities and bootcamps looking to integrate STACKO curriculum or internship tracks.",
  },
  {
    title: "Product sprints",
    description: "Founders and product leaders needing rapid delivery with a design-forward engineering team.",
  },
  {
    title: "Talent network",
    description: "Companies hiring STACKO alumni or offering apprenticeship-style roles for our fellows.",
  },
];

const Contact = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.85))] px-8 py-20 md:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Contact STACKO</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Let’s architect your next chapter</h1>
          <p className="mt-4 max-w-3xl text-base text-white/75">
            Share your goals, timeline, and challenges. We’ll assemble a tailored roadmap—whether that’s a cohort seat, a full-stack team on demand, or an AI build that makes your ops sing.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form className="glass-surface rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-muted">
                Full name
                <input
                  type="text"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="Ada Lovelace"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Email
                <input
                  type="email"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="you@company.com"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Company / School
                <input
                  type="text"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="Stacked Ventures"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Budget or subscription tier
                <input
                  type="text"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="9/mo - 0K project"
                />
              </label>
            </div>
            <label className="mt-6 flex flex-col gap-2 text-sm text-muted">
              How can we help?
              <textarea
                rows={5}
                required
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                placeholder="We’re launching a new cohort for our internal dev team…"
              />
            </label>
            <button type="submit" className="glass-button mt-8 w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white">
              Book my consultation
            </button>
          </form>
        </Reveal>
        <Reveal>
          <div className="glass-surface rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Office hours</p>
            <p className="mt-3 text-sm text-muted">
              We host weekly consults. Choose your track and we’ll pair you with the right founder or lead engineer.
            </p>
            <div className="mt-6 space-y-6">
              {officeHours.map((slot) => (
                <div key={slot.title} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-sm font-semibold text-white">{slot.title}</p>
                  <p className="mt-2 text-sm text-muted">{slot.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-secondary-500/30 bg-secondary-500/10 p-5 text-sm text-secondary-500">
              <p className="font-semibold">Direct line</p>
              <p className="mt-1 text-white/80">hello@stacko.dev · +1 (415) 555-STACK</p>
              <p className="mt-3 text-muted">Response within 2 business days.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
