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
              className="balanced-text text-[clamp(3.2rem,6.5vw,5.5rem)] font-bold leading-[1.1] text-white"
            >
              Professional Software Development Training{" "}
              <span className="text-gray-300">
                for Modern Enterprises
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl leading-relaxed max-w-[42rem] text-white/90"
            >
              Enterprise-grade software development education trusted by Fortune 500 companies. Our comprehensive curriculum covers Python, JavaScript, React, Node.js, and AI technologies with hands-on industry projects and guaranteed career advancement support.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 text-sm md:flex-row md:items-center"
          >
            <Link to="/signup" className="glass-button flex min-h-[3.5rem] items-center justify-center rounded-lg px-10 text-base font-semibold uppercase tracking-[0.1em] border border-white/20 hover:border-white/40">
              Request Program Information
            </Link>
            <Link
              to="/services"
              className="group flex min-h-[3.5rem] items-center justify-center rounded-lg border border-white/20 px-10 text-base font-semibold uppercase tracking-[0.1em] text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Enterprise Solutions
              <span className="ml-2 text-base transition group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 text-sm text-white/80 md:grid-cols-2"
          >
            <div className="glass-surface-soft p-6 rounded-lg border border-white/10 bg-black/20">
              <p className="text-lg font-semibold text-white mb-3">Flexible Learning Options</p>
              <p className="text-sm text-white/80">
                Individual courses starting at $299. Enterprise training programs from $15K. Custom development solutions available.
              </p>
            </div>
            <div className="glass-surface-soft p-6 rounded-lg border border-white/10 bg-black/20">
              <p className="text-lg font-semibold text-white mb-3">Proven Track Record</p>
              <p className="text-sm text-white/80">
                Over 1,200 professionals trained. Partnerships with leading technology companies worldwide. ISO 27001 certified training programs.
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
              <span className="rounded border border-white/20 bg-white/5 px-3 py-1 text-white/80 uppercase tracking-[0.24em]">
                Training Metrics
              </span>
              <span>Current</span>
            </div>
            <p className="text-4xl font-bold text-white">94% Placement Rate</p>
            <p className="text-sm text-white/80 leading-relaxed">
              Program graduates securing senior developer positions within 90 days of certification completion.
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
                <p className="text-xs uppercase tracking-[0.32em] text-white/60">Development Environment</p>
                <p className="mt-3 font-mono text-base text-white bg-black/60 p-3 rounded border border-white/20">
                  $ npm create stacko-app my-project
                </p>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  Production-ready React applications with TypeScript, modern build tools, and enterprise-grade configurations.
                </p>
              </div>
              <div className="rounded border border-white/20 bg-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-white/60 mb-4">Current Programs</p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    <span className="font-medium">Enterprise Dashboard Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    <span className="font-medium">Advanced React Certification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    <span className="font-medium">Corporate Training Pipeline</span>
                  </li>
                </ul>
              </div>
              <div className="rounded border border-white/20 bg-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-white/60 mb-3">Professional Development</p>
                <p className="text-sm text-white/90 leading-relaxed">
                  <span className="font-semibold text-white">Industry-standard curriculum</span> developed with leading technology companies. Real-world projects and comprehensive career support included.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col gap-6 rounded border border-white/20 bg-black/20 p-8 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60 font-semibold">Training Outcomes</p>
              <p className="mt-3 text-lg font-bold text-white">
                1,200+ professionals certified in modern development practices
              </p>
              <p className="mt-2 text-sm text-white/80">
                Average salary increase of $47K within 6 months • 94% career advancement rate among program graduates
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/portfolio" className="glass-button px-6 py-3 text-sm font-semibold rounded border border-white/20 hover:border-white/40">
                Case Studies
              </Link>
              <Link to="/courses" className="text-sm font-semibold text-white/70 hover:text-white transition-colors text-center">
                View Programs →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
