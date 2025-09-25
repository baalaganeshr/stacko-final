import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[calc(var(--spacing-section)*0.8)] pb-[calc(var(--spacing-section)*1.2)] pt-[calc(var(--spacing-block)*1.2)]">
      <Reveal>
        <div className="glass-surface w-full max-w-xl rounded-[3rem] border border-white/14 p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-secondary-500">Welcome back</p>
          <h1 className="mt-4 text-[clamp(2.2rem,3.4vw,2.8rem)] font-semibold text-white">Log in to STACKO</h1>
          <p className="mt-4 text-sm text-white/70">
            Access your cohorts, studio briefs, and mentorship dashboard.
          </p>
          <form className="mt-10 space-y-6">
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
                placeholder="••••••••"
              />
            </label>
            <div className="flex items-center justify-between text-xs text-white/60">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-white/25 bg-black/60" />
                <span>Keep me signed in</span>
              </label>
              <Link to="/reset" className="text-secondary-500 transition hover:text-secondary-300">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="glass-button hover-lift w-full rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Continue
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-white/65">
            New to STACKO? <Link to="/signup" className="text-secondary-500 transition hover:text-secondary-300">Create an account</Link>
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default Login;
