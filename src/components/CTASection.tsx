import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="page-shell">
        <Reveal>
          <div className="glass-surface relative overflow-hidden rounded-[4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.18),rgba(0,0,0,0.85))]">
            {/* Enhanced background effects */}
            <div className="absolute -left-20 top-[-25%] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),transparent_70%)] blur-[120px]" />
            <div className="absolute -right-28 bottom-[-35%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(107,70,193,0.28),transparent_70%)] blur-[140px]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />
            
            <div className="relative grid gap-12 px-12 py-[clamp(5rem,8vw,7rem)] text-center md:px-20 lg:px-24">
              <div className="space-y-8">
                <p className="text-xs uppercase tracking-[0.45em] text-secondary-500">Launch with STACKO</p>
                <h2 className="balanced-text text-[clamp(2.8rem,5vw,4.2rem)] font-semibold text-white leading-[1.1]">
                  Ready to learn, build, and stay ahead?
                </h2>
                <p className="mx-auto max-w-4xl text-lead leading-relaxed text-white/85">
                  Join a cohort, plug our engineers into your roadmap, or bring STACKO internships to your campus. We craft experiences that feel like the future.
                </p>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
                <Link 
                  to="/signup" 
                  className="glass-button hover-lift rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] min-w-[280px] sm:min-w-auto"
                >
                  Start a free learning account
                </Link>
                <Link
                  to="/contact"
                  className="hover-lift rounded-full border border-white/25 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-secondary-500/60 hover:bg-white/5 min-w-[280px] sm:min-w-auto"
                >
                  Schedule a consultation
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-col items-center gap-6 text-sm text-white/60">
                <p>Trusted by teams at startups and Fortune 500 companies</p>
                <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-wider">
                  <span className="opacity-60">Venture-backed startups</span>
                  <span className="opacity-40">•</span>
                  <span className="opacity-60">Global enterprises</span>
                  <span className="opacity-40">•</span>
                  <span className="opacity-60">University programs</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
