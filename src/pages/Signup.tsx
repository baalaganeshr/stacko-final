import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const plans = [
  {
    title: "Starter",
    price: "9/mo",
    description: "Access the Python Essentials cohort, community events, and weekly office hours.",
  },
  {
    title: "Builder",
    price: "9/mo",
    description: "Unlock Full-Stack JavaScript, internship studio access, and project feedback loops.",
  },
  {
    title: "Pro",
    price: "9/mo",
    description: "React Pro Lab, AI engineer tracks, and direct mentorship from STACKO founders.",
  },
];

const Signup = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Join STACKO</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">Create your learning and building account</h1>
            <p className="mt-6 max-w-3xl text-lead text-white/80">
              Get instant access to our cohorts, templates, and a network of mentors and founders ready to support your next build.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_0.3fr]">
        <Reveal>
          <form className="glass-surface rounded-[3rem] border border-white/14 p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-white/65">
                Full name
                <input
                  type="text"
                  required
                  className="rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="Grace Hopper"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/65">
                Email
                <input
                  type="email"
                  required
                  className="rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="you@stacko.dev"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/65">
                Password
                <input
                  type="password"
                  required
                  className="rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="Set a strong password"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/65">
                Select cohort track
                <select
                  className="rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose your focus
                  </option>
                  <option value="python">Python Essentials</option>
                  <option value="fullstack">Full-Stack JavaScript</option>
                  <option value="react">React Pro Lab</option>
                  <option value="ai">Node.js AI Engineer</option>
                  <option value="internship">STACKO Internship Studio</option>
                </select>
              </label>
            </div>
            <label className="mt-6 flex items-start gap-3 text-sm text-white/65">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-white/25 bg-black/60" />
              <span>
                I agree to the{" "}
                <Link to="/terms" className="text-secondary-500 transition hover:text-secondary-300">Terms of Use</Link>{" "}and{" "}
                <Link to="/privacy" className="text-secondary-500 transition hover:text-secondary-300">Privacy Policy</Link>.
              </span>
            </label>
            <button type="submit" className="glass-button hover-lift mt-10 w-full rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              <span className="btn btn-primary mt-10 w-full rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
                Create my account
              </span>
            </button>
            <p className="mt-6 text-center text-sm text-white/65">
              Already a member? <Link to="/login" className="text-secondary-500 transition hover:text-secondary-300">Log in</Link>
            </p>
          </form>
        </Reveal>
        <Reveal>
          <div className="glass-surface rounded-[3rem] border border-white/14 p-12">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Plans</p>
            <div className="mt-6 space-y-6">
              {plans.map((plan) => (
                <div key={plan.title} className="rounded-2xl border border-white/12 bg-black/40 p-6">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-sm font-semibold">{plan.title}</p>
                    <p className="text-secondary-500">{plan.price}</p>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{plan.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/70">
              All plans include live mentorship, portfolio reviews, and access to the STACKO builder community.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Signup;
