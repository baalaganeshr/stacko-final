import team from "@/data/team";
import Reveal from "@/components/Reveal";

const spans = [
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
];

const TeamShowcase = () => {
  return (
    <section className="section-shell section-padding" id="team">
      <Reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">The founders</p>
            <h2 className="balanced-text text-[clamp(2.2rem,3.5vw,3.2rem)] font-semibold text-white">
              Seven students, one unstoppable collective of builders and educators
            </h2>
            <p className="text-lead">
              STACKO was born on campus, forged through hackathons, and scaled through client victories. Meet the founders mentoring every cohort.
            </p>
          </div>
          <p className="max-w-sm text-sm text-white/65">
            Hands-on guidance from product strategy to AI architecture. We learn, ship, and iterate alongside every cohort.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
        {team.map((member, index) => (
          <Reveal key={member.id} delay={index * 0.05} className={spans[index % spans.length]}>
            <div className="glass-surface hover-lift rounded-[2.6rem] border border-white/12 px-8 py-10">
              <p className="text-lg font-semibold text-white">{member.name}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-secondary-500">{member.title}</p>
              <p className="mt-5 text-sm text-white/75">{member.specialty}</p>
              <p className="mt-4 text-sm text-white/65">{member.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;
