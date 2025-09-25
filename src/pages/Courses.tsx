import { Link } from "react-router-dom";
import courses from "@/data/courses";
import Reveal from "@/components/Reveal";

const courseBenefits = [
  {
    title: "Frosted-glass learning studio",
    description: "Live code walkthroughs, async capsules, and curated projects that mirror real-world briefs.",
  },
  {
    title: "Mentorship inside every sprint",
    description: "Founders host office hours, architecture reviews, and cohort retros so you never feel stuck.",
  },
  {
    title: "Career velocity and internships",
    description: "Storytelling labs, career canvases, and paid STACKO internship placements to launch your next chapter.",
  },
];

const Courses = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.8))] px-8 py-20 text-center md:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">STACKO curriculum</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Build technical mastery with immersive cohorts</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/75">
            Choose the language, stack, or specialization that accelerates your trajectory. Every cohort is powered by project-based learning, code reviews, and access to STACKO's engineering studio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/signup" className="glass-button rounded-full px-6 py-3 text-sm font-semibold text-white">
              Claim your free onboarding
            </Link>
            <Link to="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-secondary-500/60">
              Talk to our team
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course, index) => (
          <Reveal key={course.id} delay={index * 0.05}>
            <div className="glass-surface h-full rounded-[2.5rem] border border-white/10 bg-white/5 p-8" id={course.slug}>
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="rounded-full border border-secondary-500/30 bg-secondary-500/10 px-3 py-1 text-secondary-500">
                  {course.level}
                </span>
                <span>{course.duration}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">{course.title}</h2>
              <p className="mt-2 text-sm text-white/70">{course.description}</p>
              <div className="mt-6 grid gap-3 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.25em] text-secondary-500">Sprint highlights</p>
                <ul className="space-y-2">
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-secondary-500">
                {course.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-white/80">
                <span className="font-semibold">{course.price}</span>
                <Link className="text-secondary-500 transition hover:text-secondary-500/70" to={"/courses/" + course.slug}>
                  View syllabus →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 grid gap-8 rounded-[3rem] border border-white/10 bg-black/40 p-10 md:grid-cols-3">
          {courseBenefits.map((benefit) => (
            <div key={benefit.title} className="space-y-3">
              <p className="text-sm font-semibold text-white">{benefit.title}</p>
              <p className="text-sm text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Courses;
