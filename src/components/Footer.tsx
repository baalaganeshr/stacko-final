import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[calc(var(--spacing-section)*1.1)] border-t border-white/8 bg-black/60 backdrop-blur-2xl">
      <div className="section-shell grid gap-16 py-[clamp(3.5rem,6vw,5.5rem)] lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[radial-gradient(circle_at_top,rgba(107,70,193,0.45),rgba(0,0,0,0.4))] p-2">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <circle cx="16" cy="14" r="8" fill="currentColor" opacity="0.3"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <circle cx="20" cy="12" r="2" fill="currentColor"/>
                <path d="M10 16 C10 16, 12 20, 16 20 C20 20, 22 16, 22 16" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 8 L10 10 M24 8 L22 10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">STACKO</p>
              <p className="text-xs uppercase tracking-[0.34em] text-white/60">Programming Collective</p>
            </div>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            STACKO is the home for ambitious builders. Founded by seven college innovators, we merge immersive programming education with bespoke software solutions that help teams go from idea to impact in record time.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/65">
            <a className="transition hover:text-white" href="mailto:hello@stacko.dev">
              hello@stacko.dev
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 lg:block" />
            <p>+1 (415) 555-STACK</p>
          </div>
        </div>
        <div className="space-y-5 text-sm">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Company</p>
          <div className="grid gap-3 text-white/70">
            <Link className="transition hover:text-white" to="/about">
              About & Founders
            </Link>
            <Link className="transition hover:text-white" to="/blog">
              Programming Blog
            </Link>
            <Link className="transition hover:text-white" to="/services">
              Development Services
            </Link>
            <Link className="transition hover:text-white" to="/contact">
              Book a Consultation
            </Link>
          </div>
        </div>
        <div className="space-y-6 text-sm">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Stay in the loop</p>
          <p className="text-white/70">
            Get early access to cohort launches, internship openings, and dev resources.
          </p>
          <form className="flex w-full flex-col gap-3 sm:flex-row" action="#" method="post">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
            />
            <button type="submit" className="glass-button hover-lift rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              <span className="btn btn-primary rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
                Join
              </span>
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-5 text-white/65">
            <a className="transition hover:text-white" href="#">
              Twitter
            </a>
            <a className="transition hover:text-white" href="#">
              LinkedIn
            </a>
            <a className="transition hover:text-white" href="#">
              GitHub
            </a>
            <a className="transition hover:text-white" href="#">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-8">
        <div className="section-shell flex flex-col gap-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} STACKO Labs. Built for the next generation of creators.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-white" href="#">
              Privacy
            </a>
            <a className="transition hover:text-white" href="#">
              Terms
            </a>
            <a className="transition hover:text-white" href="#">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
