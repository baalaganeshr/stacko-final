import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programTracks = [
  "Enterprise Dashboard Development",
  "Advanced React Certification",
  "AI Delivery Pods",
  "Corporate Training Pipeline",
];

const partnerSignals = [
  { value: "94%", label: "Placement within 90 days" },
  { value: "1,200+", label: "Professionals certified" },
  { value: "$47K", label: "Average salary lift" },
];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,#2E1D57_0%,#06070C_68%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(139,92,246,0.22),transparent_65%)]" />
        <div className="absolute -top-24 -left-12 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/35 to-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 to-transparent blur-[140px]" />
      </div>

      <div className="page-shell grid gap-12 py-[clamp(6rem,10vw,8.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
        <div className="space-y-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.45em] text-white/70"
          >
            STACKO - Industry-backed cohorts
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="balanced-text text-[clamp(3rem,6vw,4.8rem)] font-semibold leading-tight text-white"
          >
            Professional software development made clear and actionable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl text-lg leading-relaxed text-white/80"
          >
            Guided programs built with Fortune 500 partners, live architecture reviews, and production-grade briefs.
            Every cohort leaves with battle-tested systems, confident teams, and measurable business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/signup"
              className="btn btn-primary min-h-[3.25rem] rounded-full px-8 text-sm font-semibold uppercase tracking-[0.18em] shadow-[0_18px_40px_rgba(107,70,193,0.35)] hover:shadow-[0_22px_50px_rgba(107,70,193,0.45)]"
            >
              Start a cohort plan
            </Link>
            <Link
              to="/services"
              className="btn btn-secondary min-h-[3.25rem] rounded-full px-8 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              Explore services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {partnerSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-2xl border border-white/12 bg-white/6 px-5 py-4 backdrop-blur-sm"
              >
                <p className="text-3xl font-semibold text-white">{signal.value}</p>
                <p className="mt-1 text-sm text-white/70">{signal.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-3xl border border-white/12 bg-[linear-gradient(150deg,rgba(17,24,39,0.85),rgba(15,23,42,0.72))] p-8 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Programs launching this quarter</p>
            <div className="mt-6 space-y-4 text-sm text-white/75">
              {programTracks.map((track) => (
                <div key={track} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500" />
                  <span className="leading-relaxed">{track}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75">
              <p className="font-semibold text-white">Remote-first - Weekly delivery - Portfolio-grade assets</p>
              <p className="mt-2 leading-relaxed">
                Teams collaborate live with STACKO mentors, ship production features, and exit with a polished playbook.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Trusted by product & engineering leaders</p>
            <div className="mt-5 grid gap-3 text-sm text-white/75">
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-3">
                <span className="text-white">Velocity playbooks delivered</span>
                <span className="font-semibold text-white/90">60+</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-3">
                <span className="text-white">Sprint-to-launch timeline</span>
                <span className="font-semibold text-white/90">6 weeks</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-3">
                <span className="text-white">Live mentor hours per cohort</span>
                <span className="font-semibold text-white/90">40+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
