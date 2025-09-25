import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import stories from "@/data/stories";

const SuccessStories = () => {
  return (
    <section className="mt-24">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Success stories</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Builders who trusted STACKO</h2>
            <p className="mt-3 text-base text-muted">
              Our cohort alumni and studio partners are rewriting their career arcs. See how their projects scale with STACKO.
            </p>
          </div>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {stories.map((story, index) => (
          <Reveal key={story.id} delay={index * 0.06}>
            <motion.div
              whileHover={{ translateY: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="glass-surface h-full rounded-[2rem] border border-white/10 bg-white/5 p-7"
            >
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="rounded-full border border-secondary-500/30 bg-secondary-500/10 px-3 py-1 text-secondary-500">
                  {story.company}
                </span>
                <span>{story.role}</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">“{story.quote}”</p>
              <p className="mt-4 text-sm text-secondary-500">{story.result}</p>
              <p className="mt-6 text-sm text-muted">{story.name}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
