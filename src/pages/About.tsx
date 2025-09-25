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
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.4),rgba(0,0,0,0.85))] px-8 py-20 md:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">About STACKO</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">We are a builder collective turned edtech powerhouse</h1>
          <p className="mt-4 max-w-3xl text-base text-white/75">
            Founded by seven students who refused to choose between learning and shipping, STACKO pairs award-winning programming education with a product studio trusted by startups and enterprises alike.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 grid gap-8 rounded-[3rem] border border-white/10 bg-black/40 p-10 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="space-y-3">
              <p className="text-sm font-semibold text-white">{value.title}</p>
              <p className="text-sm text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20 space-y-8">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Origin story</p>
          <div className="grid gap-8 md:grid-cols-3">
            {originMoments.map((moment) => (
              <div key={moment.year} className="glass-surface rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-secondary-500">{moment.year}</p>
                <h2 className="mt-3 text-xl font-semibold text-white">{moment.headline}</h2>
                <p className="mt-3 text-sm text-muted">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Meet the founders</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.id} className="glass-surface rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-white">{member.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary-500">{member.title}</p>
                <p className="mt-3 text-sm text-white/70">{member.specialty}</p>
                <p className="mt-4 text-sm text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
