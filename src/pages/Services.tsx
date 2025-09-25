import services from "@/data/services";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

const engagementHighlights = [
  {
    title: "Discovery blueprint",
    description: "In-depth workshops with founders and stakeholders to align product strategy, success metrics, and team rituals.",
  },
  {
    title: "Glassmorphism design kit",
    description: "Award-winning visual language packaged as reusable tokens, component libraries, and motion specs for your squad.",
  },
  {
    title: "Delivery operations",
    description: "CI/CD, QA, analytics, and knowledge transfer artifacts so your team can iterate confidently after launch.",
  },
];

const Services = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.45),rgba(0,0,0,0.85))] px-8 py-20 md:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">STACKO studio</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Development services for vision-driven teams</h1>
          <p className="mt-4 max-w-3xl text-base text-white/75">
            We build with the same precision we teach. Whether you need a production-ready MVP, an AI assistant, or a design system that sings, STACKO embeds multidisciplinary teams that feel like an extension of yours.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="glass-button rounded-full px-6 py-3 text-sm font-semibold text-white">
              Book a discovery call
            </Link>
            <Link to="/portfolio" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-secondary-500/60">
              Request case studies
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.06}>
            <div className="glass-surface h-full rounded-[2.5rem] border border-white/10 bg-white/5 p-8" id={service.slug}>
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="rounded-full border border-white/15 px-3 py-1 text-white/80">{service.priceRange}</span>
                <span className="text-secondary-500">{service.deliverables.length} key deliverables</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 text-sm text-white/70">{service.description}</p>
              <div className="mt-6 grid gap-3 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.25em] text-secondary-500">Deliverables</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.25em] text-secondary-500">Outcomes</p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-white/70">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-secondary-500">
                <Link to="/contact" className="transition hover:text-secondary-500/70">
                  Kick off this sprint →
                </Link>
                <Link to="/portfolio" className="rounded-full border border-secondary-500/30 px-4 py-1 text-xs uppercase tracking-[0.2em]">
                  View work
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 grid gap-6 rounded-[3rem] border border-white/10 bg-black/40 p-10 md:grid-cols-3">
          {engagementHighlights.map((highlight) => (
            <div key={highlight.title} className="space-y-3">
              <p className="text-sm font-semibold text-white">{highlight.title}</p>
              <p className="text-sm text-muted">{highlight.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Services;
