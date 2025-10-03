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
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,#2E1D57_0%,#06070C_68%)] section-padding">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(139,92,246,0.22),transparent_65%)]" />
        <div className="absolute -top-24 -left-12 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/35 to-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 to-transparent blur-[140px]" />
      </div>

      <div className="page-shell grid lg:grid-cols-2 items-stretch" style={{ gap: '80px' }}>
        <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-primary)', fontSize: '13px', display: 'inline-block', marginBottom: '32px' }}
          >
            STACKO - Professional Development Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontSize: '64px', fontWeight: 800, lineHeight: '1.1', letterSpacing: '-0.03em', marginBottom: '24px' }}
          >
            Learn modern web development from expert developers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--color-text-secondary)', marginBottom: '40px', maxWidth: '540px' }}
          >
            Master React, Node.js, and full-stack development through hands-on courses. Build real projects with guidance from experienced developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
            className="flex flex-wrap items-center"
            style={{ gap: '16px', marginBottom: '64px' }}
          >
            <Link to="/signup" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              Start Learning
            </Link>
            <Link to="/services" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              View Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: '24px' }}
          >
            {partnerSignals.map((signal) => (
              <div
                key={signal.label}
                className="card text-center"
                style={{ padding: '32px 24px' }}
              >
                <p className="text-gradient" style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1, marginBottom: '12px' }}>{signal.value}</p>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{signal.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="hero-code-block flex-1 rounded-3xl border border-white/10 bg-[linear-gradient(150deg,rgba(17,24,39,0.9),rgba(15,23,42,0.8))] backdrop-blur-lg shadow-xl transition-all duration-300 hover:border-white/15 flex flex-col"
            style={{ padding: '32px' }}
          >
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500 font-bold">Programs launching this quarter</p>
            <div className="mt-6 space-y-4 text-white/70" style={{ fontSize: '14px', lineHeight: '1.8' }}>
              {programTracks.map((track) => (
                <div key={track} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shadow-lg shadow-purple-500/50" />
                  <span className="leading-relaxed font-medium">{track}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-6 text-sm text-white/70 transition-all duration-300 hover:bg-white/6">
              <p className="font-bold text-white tracking-tight">Remote-first · Weekly delivery · Portfolio-grade assets</p>
              <p className="mt-3 leading-relaxed">
                Teams collaborate live with STACKO mentors, ship production features, and exit with a polished playbook.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-lg shadow-xl transition-all duration-300 hover:border-white/15"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500 font-bold">Trusted by product & engineering leaders</p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <div className="flex items-center justify-between rounded-2xl bg-white/4 px-5 py-4 border border-white/5 transition-all duration-300 hover:bg-white/8 hover:border-white/10">
                <span className="text-white font-medium">Velocity playbooks delivered</span>
                <span className="font-bold text-white text-base">60+</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/4 px-5 py-4 border border-white/5 transition-all duration-300 hover:bg-white/8 hover:border-white/10">
                <span className="text-white font-medium">Sprint-to-launch timeline</span>
                <span className="font-bold text-white text-base">6 weeks</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/4 px-5 py-4 border border-white/5 transition-all duration-300 hover:bg-white/8 hover:border-white/10">
                <span className="text-white font-medium">Live mentor hours per cohort</span>
                <span className="font-bold text-white text-base">40+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
