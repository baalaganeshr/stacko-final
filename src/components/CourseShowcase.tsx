import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import courses from "@/data/courses";
import Reveal from "@/components/Reveal";

const CourseShowcase = () => {
  return (
    <section className="mt-24" id="courses">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Programming Catalog</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Cohorts engineered for velocity</h2>
            <p className="mt-3 text-base text-muted">
              Learn through real briefs, pair-programming, code reviews, and live studio sessions. Choose your stack, start shipping.
            </p>
          </div>
          <Link
            to="/courses"
            className="glass-button inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-white"
          >
            View all courses
          </Link>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course, index) => (
          <Reveal key={course.id} delay={index * 0.08}>
            <motion.div
              whileHover={{ translateY: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="glass-surface h-full rounded-[2rem] border border-white/10 bg-white/5 p-7"
              id={course.slug}
            >
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="rounded-full border border-white/10 px-3 py-1 text-white/80">{course.level}</span>
                <span>{course.duration}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{course.title}</h3>
              <p className="mt-2 text-sm text-muted">{course.tagline}</p>
              <p className="mt-4 text-sm text-white/70">{course.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {course.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-secondary-500">
                {course.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-white/80">
                <span className="font-semibold">{course.price}</span>
                <Link className="text-secondary-500 transition hover:text-secondary-500/70" to={"/courses/" + course.slug}>
                  Learn more →
                </Link>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default CourseShowcase;
