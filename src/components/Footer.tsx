import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:grid-cols-[2fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[radial-gradient(circle_at_top,rgba(107,70,193,0.45),rgba(0,0,0,0.4))] text-white">
              <span className="text-xl font-semibold tracking-[0.2em]">S</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">STACKO</p>
              <p className="text-xs uppercase tracking-[0.32em] text-muted">Programming Collective</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm text-muted">
            STACKO is the home for ambitious builders. Founded by seven college innovators, we merge immersive programming education with bespoke software solutions that help teams go from idea to impact in record time.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
            <a className="transition hover:text-white" href="mailto:hello@stacko.dev">
              hello@stacko.dev
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 md:block" />
            <p>+1 (415) 555-STACK</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Company</p>
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
        <div className="flex flex-col gap-3 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Stay in the Loop</p>
          <p className="text-sm text-muted">
            Get early access to cohort launches, internship openings, and dev resources.
          </p>
          <form className="mt-4 flex w-full gap-2" action="#" method="post">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/70 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
            />
            <button
              type="submit"
              className="glass-button rounded-2xl px-4 py-3 text-sm font-semibold text-white"
            >
              Join
            </button>
          </form>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-muted">
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
      <div className="border-t border-white/5 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
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
