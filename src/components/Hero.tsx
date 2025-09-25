import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100dvh] overflow-hidden px-4 py-[var(--spacing-block)]"
    >
      <div className="absolute inset-0 -z-10 diagonal-cut bg-[linear-gradient(135deg,#6B46C1_0%,#000000_100%)] opacity-95" />

      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),rgba(107,70,193,0.08),transparent_72%)] opacity-70"
      />

      <div className="page-shell grid gap-16 pt-[calc(var(--spacing-block)*1.1)] pb-[calc(var(--spacing-block)*0.6)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs uppercase tracking-[0.45em] text-white/75"
            >
              STACKO · Crafted by seven founders
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="balanced-text text-[clamp(2.9rem,6vw,5rem)] font-semibold text-white"
            >
              Master programming, launch award-winning products, and lead with AI.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lead max-w-[38rem] text-white/80"
            >
              STACKO blends immersive cohorts with a high-velocity dev studio. Learn Python, JavaScript, React, Node.js, and AI while partnering with our engineers to ship production-ready experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 text-sm md:flex-row md:items-center"
          >
            <Link to="/signup" className="glass-button flex min-h-[3.25rem] items-center justify-center rounded-full px-8 text-sm font-semibold uppercase tracking-[0.18em]">
              Start learning free
            </Link>
            <Link
              to="/services"
              className="group flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-secondary-500/60 hover:text-secondary-500"
            >
              Get development quote
              <span className="ml-2 text-base transition group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 text-sm text-white/80 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
          >
            <div className="glass-surface-soft block-padding rounded-[2.75rem] border border-white/10">
              <p className="text-base font-semibold text-white">Cohort + studio memberships</p>
              <p className="mt-4 text-sm text-white/75">
                Subscription courses from 9/mo and bespoke development from K-0K. Ship learning journeys and live products in one ecosystem.
              </p>
            </div>
            <div className="glass-surface block-padding rounded-[2.75rem] border border-white/10">
              <p className="text-base font-semibold text-white">Momentum, globally</p>
              <p className="mt-4 text-sm text-white/75">
                Students, professionals, and venture-backed teams across 38 countries partner with STACKO for velocity that lasts.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative flex h-full flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-surface-soft pointer-events-none absolute -left-20 top-[12%] hidden w-64 flex-col gap-4 rounded-[2.4rem] border border-white/12 p-6 shadow-[0_24px_70px_rgba(107,70,193,0.28)] xl:flex"
          >
            <div className="flex items-center justify-between text-xs text-white/70">
              <span className="rounded-full border border-secondary-500/30 bg-secondary-500/10 px-3 py-1 text-secondary-500 uppercase tracking-[0.24em]">
                Cohorts
              </span>
              <span>Live</span>
            </div>
            <p className="text-3xl font-semibold text-white">92% momentum</p>
            <p className="text-xs text-white/65">
              Learners hitting their project milestone within 30 days of kickoff.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-500">
              <span className="h-1 w-1 rounded-full bg-secondary-500" />
              Updated weekly
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="glass-surface relative w-full overflow-hidden rounded-[3rem] border border-white/15"
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.42),transparent_70%)]" />
            <div className="relative flex flex-col gap-6 p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#8B5CF6]">Live Codespaces</p>
                <p className="mt-3 font-mono text-xl text-white">npm create stacko-app</p>
                <p className="mt-2 text-sm text-white/70">
                  Scaffold performance-budgeted React apps with progressive enhancement and DX best practices baked in.
                </p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-black/45 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[#8B5CF6]">Inside the studio</p>
                <ul className="mt-4 space-y-4 text-sm text-white/75">
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                    AI copilot onboarding for fintech — 8K sprint
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                    React Pro Lab cohort 09 — 312 engineers leveling up
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                    Internship track — 21 new partner companies this quarter
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[#8B5CF6]">What you unlock</p>
                <p className="mt-3 text-sm text-white/80">
                  Award-winning pedagogy, real-world briefs, and a network obsessed with building products that feel like the future.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col gap-4 rounded-[2.6rem] border border-white/12 bg-white/5 p-8 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-secondary-500">Stacked outcomes</p>
              <p className="mt-2 text-sm text-white/75">
                1,200+ learners shipped portfolio apps · 330% avg ROI on studio projects
              </p>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold text-secondary-400 transition hover:text-secondary-300">
              Explore case studies →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
