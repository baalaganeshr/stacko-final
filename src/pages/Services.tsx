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

const layouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
];

const Services = () => {
  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface relative overflow-hidden rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.45),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16">
            <div className="absolute -left-24 top-[-30%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.4),transparent_70%)] blur-[110px]" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">STACKO studio</p>
            <h1 className="mt-6 text-[clamp(2.7rem,4.6vw,3.9rem)] font-semibold text-white">
              Development services for vision-driven teams
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-white/80">
              We build with the same precision we teach. Whether you need a production-ready MVP, an AI assistant, or a design system that sings, STACKO embeds multidisciplinary teams that feel like an extension of yours.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="glass-button hover-lift rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Book a discovery call
              </Link>
              <Link
                to="/portfolio"
                className="hover-lift rounded-full border border-white/25 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-secondary-500/60"
              >
                Request case studies
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <article
                className={["glass-surface", "hover-lift", "rounded-[3rem]", "border", "border-white/14", "p-12", layouts[index % layouts.length]].join(" ")}
                id={service.slug}
              >
                <div className="flex items-center justify-between text-xs text-white/65">
                  <span className="rounded-full border border-white/20 px-4 py-1 text-white/90">{service.priceRange}</span>
                  <span className="text-secondary-500">{service.deliverables.length} key deliverables</span>
                </div>
                <h2 className="mt-6 text-[clamp(1.7rem,2.5vw,2.1rem)] font-semibold text-white">{service.title}</h2>
                <p className="mt-4 text-sm text-white/75">{service.description}</p>
                <div className="mt-8 grid gap-4 text-sm text-white/80">
                  <p className="text-xs uppercase tracking-[0.28em] text-secondary-500">Deliverables</p>
                  <ul className="grid gap-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 grid gap-4 text-sm text-white/80">
                  <p className="text-xs uppercase tracking-[0.28em] text-secondary-500">Outcomes</p>
                  <ul className="grid gap-3">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3 text-white/75">
                        <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-secondary-500">
                  <Link to="/contact" className="transition hover:text-secondary-300">
                    Kick off this sprint →
                  </Link>
                  <Link to="/portfolio" className="rounded-full border border-secondary-500/30 px-5 py-2 text-xs uppercase tracking-[0.24em]">
                    View work
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="section-shell">
          <div className="grid gap-8 rounded-[3.2rem] border border-white/12 bg-black/45 p-[clamp(2.5rem,5vw,4.5rem)] md:grid-cols-3">
            {engagementHighlights.map((highlight) => (
              <div key={highlight.title} className="space-y-3">
                <p className="text-sm font-semibold text-white">{highlight.title}</p>
                <p className="text-sm text-white/70">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Services;
