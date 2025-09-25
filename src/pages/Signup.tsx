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
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.8))] px-8 py-20 md:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Join STACKO</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Create your learning and building account</h1>
          <p className="mt-4 max-w-3xl text-base text-white/75">
            Get instant access to our cohorts, templates, and a network of mentors and founders ready to support your next build.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
        <Reveal>
          <form className="glass-surface rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-muted">
                Full name
                <input
                  type="text"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="Grace Hopper"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Email
                <input
                  type="email"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="you@stacko.dev"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Password
                <input
                  type="password"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                  placeholder="Set a strong password"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Select cohort track
                <select
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
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
            <label className="mt-6 flex items-start gap-3 text-sm text-muted">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-white/20 bg-black/60" />
              <span>
                I agree to the{" "}
                <Link to="/terms" className="text-secondary-500 hover:text-secondary-500/70">Terms of Use</Link>{" "}and{" "}
                <Link to="/privacy" className="text-secondary-500 hover:text-secondary-500/70">Privacy Policy</Link>.
              </span>
            </label>
            <button type="submit" className="glass-button mt-8 w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white">
              Create my account
            </button>
            <p className="mt-6 text-center text-sm text-muted">
              Already a member? <Link to="/login" className="text-secondary-500 hover:text-secondary-500/70">Log in</Link>
            </p>
          </form>
        </Reveal>
        <Reveal>
          <div className="glass-surface rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Plans</p>
            <div className="mt-4 space-y-6">
              {plans.map((plan) => (
                <div key={plan.title} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-sm font-semibold">{plan.title}</p>
                    <p className="text-secondary-500">{plan.price}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted">{plan.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              All plans include live mentorship, portfolio reviews, and access to the STACKO builder community.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Signup;
