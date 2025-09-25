import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const CTASection = () => {
  return (
    <section className="mt-24">
      <Reveal>
        <div className="glass-surface relative overflow-hidden rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.25),rgba(0,0,0,0.7))] px-6 py-20 md:px-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.45),transparent_65%)] blur-[80px]" />
          <div className="relative flex flex-col gap-6 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Launch with STACKO</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to learn, build, and stay ahead?</h2>
            <p className="mx-auto max-w-3xl text-base text-white/80">
              Join a cohort, plug our engineers into your roadmap, or bring STACKO internships to your campus. We craft experiences that feel like the future.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/signup" className="glass-button rounded-full px-6 py-3 text-sm font-semibold text-white">
                Start a free learning account
              </Link>
              <Link to="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-secondary-500/60">
                Schedule a consultation
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTASection;
