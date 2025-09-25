import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import stats from "@/data/stats";

const StatsShowcase = () => {
  return (
    <section className="section-padding">
      {/* Full-width container for stats */}
      <div className="page-shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Proof of momentum</p>
              <h2 className="balanced-text text-[clamp(2.4rem,4.2vw,3.8rem)] font-semibold text-white">
                Outcomes our founders obsess over
              </h2>
              <p className="text-lead max-w-2xl">
                STACKO blends education and delivery to fuel careers and products. Below is the measurable momentum learners and partner teams unlock with STACKO.
              </p>
            </div>
            <p className="max-w-sm text-sm text-white/60">
              Multi-year data across cohorts, custom builds, and internship placements. Updated quarterly.
            </p>
          </div>
        </Reveal>
        
        {/* Statistics grid with generous spacing */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-16">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.08}>
              <div className="glass-surface hover-lift cursor-interactive h-full rounded-[3rem] border border-white/12 p-12 text-center">
                <div className="stat-emphasis bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="mt-8 text-lg font-semibold text-white/95">{stat.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{stat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
