import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const Login = () => {
  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-3xl items-center px-5 pb-24 pt-24 md:px-10">
      <Reveal>
        <div className="glass-surface w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-10">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Welcome back</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Log in to STACKO</h1>
          <p className="mt-2 text-sm text-muted">
            Access your cohorts, studio briefs, and mentorship dashboard.
          </p>
          <form className="mt-8 space-y-5">
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
                placeholder="••••••••"
              />
            </label>
            <div className="flex items-center justify-between text-xs text-muted">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-black/60" />
                <span>Keep me signed in</span>
              </label>
              <Link to="/reset" className="text-secondary-500 hover:text-secondary-500/70">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="glass-button w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white">
              Continue
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted">
            New to STACKO? <Link to="/signup" className="text-secondary-500 hover:text-secondary-500/70">Create an account</Link>
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default Login;
