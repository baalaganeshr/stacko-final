import team from "@/data/team";
import Reveal from "@/components/Reveal";

const TeamShowcase = () => {
  return (
    <section className="mt-24" id="team">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">The founders</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Seven students, one unstoppable collective</h2>
            <p className="mt-3 text-base text-muted">
              STACKO was born on campus, forged through hackathons, and scaled through client victories. Meet the founders mentoring every cohort.
            </p>
          </div>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <Reveal key={member.id} delay={index * 0.05}>
            <div className="glass-surface h-full rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">{member.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary-500">{member.title}</p>
              <p className="mt-3 text-sm text-white/70">{member.specialty}</p>
              <p className="mt-4 text-sm text-muted">{member.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;
