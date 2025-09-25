import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import services from "@/data/services";
import Reveal from "@/components/Reveal";

const ServicesHighlight = () => {
  return (
    <section className="mt-24" id="services">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Development studio</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Your engineering accelerator</h2>
            <p className="mt-3 text-base text-muted">
              From AI copilots to full product launches, STACKO delivers design, engineering, and momentum in one glassmorphism-fueled experience.
            </p>
          </div>
          <Link to="/services" className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-secondary-500/60">
            Explore services
          </Link>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.07}>
            <motion.div
              whileHover={{ translateY: -8, scale: 1.005 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="glass-surface h-full rounded-[2.5rem] border border-white/10 bg-white/5 p-8"
            >
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="rounded-full border border-white/15 px-3 py-1 text-white/80">{service.priceRange}</span>
                <span className="text-secondary-500">{service.deliverables.length} deliverables</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-white/70">{service.description}</p>
              <div className="mt-6 grid gap-3 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.25em] text-secondary-500">Deliverables</p>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                      {deliverable}
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
                <Link to={"/services#" + service.slug} className="transition hover:text-secondary-500/70">
                  Build with STACKO →
                </Link>
                <Link to="/contact" className="rounded-full border border-secondary-500/30 px-4 py-1 text-xs uppercase tracking-[0.2em]">
                  Book call
                </Link>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesHighlight;
