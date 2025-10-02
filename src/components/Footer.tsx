import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[calc(var(--spacing-section)*1.1)] border-t border-white/8 bg-black/60 backdrop-blur-2xl">
      <div className="section-shell grid gap-16 py-[clamp(3.5rem,6vw,5.5rem)] lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-40 w-40 flex items-center justify-center">
              <img 
                src="/stacko-final/stacko-logo.svg" 
                alt="STACKO Logo" 
                className="h-full w-full object-contain"
                style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <div>
              <p className="text-xl font-semibold text-white">STACKO</p>
              <p className="text-xs uppercase tracking-[0.34em] text-white/60">Programming Collective</p>
            </div>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            STACKO teaches modern web development through hands-on courses and provides professional development services. Learn to build real applications from experienced developers.
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
