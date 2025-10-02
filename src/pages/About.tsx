import team from "@/data/team";
import Reveal from "@/components/Reveal";

const originMoments = [
  {
    year: "2021",
    headline: "Seven students, one shared mission",
    description: "STACKO began as a campus hackathon alliance. We turned late-night prototypes into a learning lab focused on momentum, mentorship, and building for real users.",
  },
  {
    year: "2023",
    headline: "Studio meets education",
    description: "Clients asked us to ship their MVPs while we taught their teams. We fused the studio and the classroom to create a new blueprint for engineering acceleration.",
  },
  {
    year: "2024",
    headline: "Global community of builders",
    description: "Cohorts now span 38 countries. Interns, alumni, and partner teams collaborate inside STACKO to build products that win awards and careers that have velocity.",
  },
];

const values = [
  {
    title: "Build with intent",
    description: "Every sprint balances design, DX, and business impact. We obsess over experiences that feel handcrafted and ship faster than expectations.",
  },
  {
    title: "Teach with empathy",
    description: "Our founders teach every cohort. We prioritize psychological safety, explicit feedback loops, and tangible wins.",
  },
  {
    title: "Ship together",
    description: "Students, clients, and mentors share the same tools, rituals, and milestone reviews inside STACKO's glassmorphism studio OS.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface relative overflow-hidden rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.4),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16 text-center">
            <div className="absolute -right-28 top-[-25%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.38),transparent_70%)] blur-[110px]" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">About STACKO</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">
              Making web development education accessible
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lead text-white/80">
              Founded by three developers passionate about teaching, STACKO helps aspiring developers learn modern web technologies through practical courses and real-world projects.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="section-shell">
          <div className="grid gap-8 rounded-[3.2rem] border border-white/12 bg-black/45 p-[clamp(2.5rem,5vw,4.5rem)] md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="space-y-3">
                <p className="text-sm font-semibold text-white">{value.title}</p>
                <p className="text-sm text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="section-shell space-y-10">
          <p className="text-xs uppercase tracking-[0.34em] text-secondary-500">Origin story</p>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {originMoments.map((moment) => (
              <div key={moment.year} className="glass-surface rounded-[2.6rem] border border-white/12 p-10">
                <p className="text-secondary-500">{moment.year}</p>
                <h2 className="mt-4 text-[1.5rem] font-semibold text-white">{moment.headline}</h2>
                <p className="mt-4 text-sm text-white/70">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="section-shell space-y-8">
          <p className="text-xs uppercase tracking-[0.34em] text-secondary-500">Meet the founders</p>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <div key={member.id} className="glass-surface rounded-[2.6rem] border border-white/12 p-10">
                <p className="text-lg font-semibold text-white">{member.name}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-secondary-500">{member.title}</p>
                <p className="mt-5 text-sm text-white/75">{member.specialty}</p>
                <p className="mt-4 text-sm text-white/65">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
