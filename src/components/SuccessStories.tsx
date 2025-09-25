import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import stories from "@/data/stories";

const columnLayouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-6",
];

const accentRings = [
  "linear-gradient(135deg, rgba(139, 92, 246, 0.28), transparent 65%)",
  "linear-gradient(135deg, rgba(107, 70, 193, 0.28), transparent 65%)",
  "linear-gradient(135deg, rgba(147, 197, 253, 0.22), transparent 65%)",
];

const SuccessStories = () => {
  return (
    <section className="section-padding">
      <div className="page-shell">
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Success stories</p>
              <h2 className="balanced-text text-[clamp(2.4rem,4vw,3.8rem)] font-semibold text-white">
                Builders who trusted STACKO to accelerate their careers and products
              </h2>
              <p className="text-lead max-w-3xl">
                Alumni and studio partners share the measurable wins they unlocked through cohorts, internships, and bespoke product sprints.
              </p>
            </div>
            <p className="max-w-sm text-sm text-white/65 leading-relaxed">
              Cohort retrospectives, KPI snapshots, and personal reflections curated from the STACKO community.
            </p>
          </div>
        </Reveal>
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {stories.map((story, index) => (
            <Reveal key={story.id} delay={index * 0.08} className={columnLayouts[index % columnLayouts.length]}>
              <motion.article
                whileHover={{ translateY: -12 }}
                transition={{ type: "spring", stiffness: 200, damping: 24 }}
                className="relative glass-surface hover-lift rounded-[3.2rem] border border-white/10 px-12 py-14"
              >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 blur-3xl opacity-70"
                style={{ background: accentRings[index % accentRings.length] }}
              />
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span className="rounded-full border border-secondary-500/30 bg-secondary-500/10 px-4 py-1 text-secondary-500 uppercase tracking-[0.22em]">
                  {story.company}
                </span>
                <span>{story.role}</span>
              </div>
              <p className="mt-8 text-[clamp(1.6rem,2.2vw,2rem)] font-semibold leading-snug text-white">
                “{story.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold text-secondary-500">{story.result}</p>
              <p className="mt-4 text-sm text-white/70">{story.name}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
