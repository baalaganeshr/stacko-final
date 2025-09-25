import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import courses from "@/data/courses";
import Reveal from "@/components/Reveal";

const cardHeights = [
  "md:min-h-[28rem]",
  "md:min-h-[32rem]",
  "md:min-h-[26rem]",
  "md:min-h-[34rem]",
  "md:min-h-[30rem]",
  "md:min-h-[28rem]",
];

const accentGradients = [
  "linear-gradient(135deg, rgba(139, 92, 246, 0.45), transparent 70%)",
  "linear-gradient(135deg, rgba(107, 70, 193, 0.45), transparent 70%)",
  "linear-gradient(135deg, rgba(147, 197, 253, 0.35), transparent 70%)",
];

const CourseShowcase = () => {
  return (
    <section className="section-shell section-padding">
      <Reveal>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">Programming catalog</p>
            <h2 className="balanced-text text-[clamp(2.4rem,4.2vw,3.6rem)] font-semibold text-white">
              Cohorts engineered for velocity and real-world momentum
            </h2>
            <p className="text-lead">
              Learn through asymmetrical sprints, pair-programming, live architecture reviews, and studio-grade briefs. Choose your stack, then start shipping.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/courses"
              className="glass-button hover-lift inline-flex min-h-[3rem] items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              View all courses
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-secondary-500 transition hover:text-secondary-300">
              Curate a cohort →
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="masonry-grid mt-12">
        {courses.map((course, index) => {
          const dynamicHeight = cardHeights[index % cardHeights.length];
          const accent = accentGradients[index % accentGradients.length];
          return (
            <Reveal key={course.id} delay={index * 0.06} className="masonry-item">
              <motion.article
                whileHover={{ translateY: -10 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className={["relative", "glass-surface", "hover-lift", "trail-interactive", dynamicHeight, "overflow-hidden", "rounded-[2.8rem]", "border", "border-white/14"].join(" ")}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 right-[-30%] h-56 w-56 blur-3xl opacity-70"
                  style={{ background: accent }}
                />
                <div className="block-padding space-y-6">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1 text-secondary-500">
                      {course.level}
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
                    <p className="text-sm text-white/70">{course.tagline}</p>
                  </div>
                  <p className="text-sm text-white/75">{course.description}</p>
                  <ul className="space-y-3 text-sm text-white/75">
                    {course.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-secondary-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-xs text-secondary-500">
                    {course.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 text-sm text-white/75">
                    <span className="font-semibold text-white">{course.price}</span>
                    <Link className="text-secondary-500 transition hover:text-secondary-300" to={"/courses/" + course.slug}>
                      Explore syllabus →
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default CourseShowcase;
