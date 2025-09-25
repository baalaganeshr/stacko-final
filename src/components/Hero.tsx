import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,#6B46C1_0%,#000000_100%)] px-5 py-24 md:px-16"
    >
      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(107,70,193,0.05),transparent_70%)] opacity-50"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/80">STACKO · Crafted by seven builders</p>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">
            Master Programming.
            <br /> Build Your Future.
          </h1>
          <p className="text-lg text-white/70">
            Learn Python, JavaScript, React, Node.js, and AI from engineers shipping award-winning products. Join live cohorts, ship real deliverables, and partner with our studio for development that delivers ROI.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="glass-button flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(139,92,246,0.35)] transition hover:shadow-[0_26px_80px_rgba(139,92,246,0.45)]"
            >
              Start Learning Free
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-secondary-500/60 hover:text-secondary-500"
            >
              Get Development Quote
            </Link>
          </div>
          <div className="grid gap-6 pt-6 text-sm text-white/80 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-base font-semibold text-white">Cohort + Studio</p>
              <p className="mt-2 text-sm text-white/70">
                Subscription courses from 9/mo and bespoke builds from K-0K.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-base font-semibold text-white">Trusted by builders</p>
              <p className="mt-2 text-sm text-white/70">
                Students, professionals, and teams scaling experiences across 38 countries.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-surface relative mt-10 min-h-[24rem] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-8 backdrop-blur-2xl lg:mt-0"
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.45),transparent_65%)]" />
            <div className="relative flex flex-col gap-6 text-sm text-white/80">
              <div>
                <p className="text-xs uppercase tracking-[0.38em] text-secondary-500">Live Codespaces</p>
                <p className="mt-2 font-mono text-lg text-white">npm create stacko-app</p>
                <p className="mt-2 text-white/60">
                  Scaffold production-ready React apps with performance budgets baked in.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">In the studio</p>
                <ul className="mt-3 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                    AI Copilot for Fintech onboarding — 8K project
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                    React Pro Lab Cohort 09 — 312 engineers enrolled
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                    University internship track — 21 new partner teams
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">What you unlock</p>
                <p className="mt-2 text-white">
                  Award-winning pedagogy, real clients, and a network obsessed with building.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
