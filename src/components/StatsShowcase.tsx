import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import stats from "@/data/stats";

const StatsShowcase = () => {
  return (
    <section className="mt-24">
      <Reveal>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Proof of momentum</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Outcomes our founders obsess over</h2>
          <p className="mx-auto max-w-2xl text-base text-muted">
            STACKO blends education and delivery to fuel careers and products. Here is what we help learners and teams unlock.
          </p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.id} delay={index * 0.05}>
            <div className="glass-surface h-full rounded-[2rem] border border-white/10 bg-white/5 p-8 text-left">
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="mt-3 text-sm font-semibold text-white/80">{stat.label}</p>
              <p className="mt-2 text-sm text-muted">{stat.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default StatsShowcase;
