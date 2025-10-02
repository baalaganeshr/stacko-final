import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import courses from "@/data/courses";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = useMemo(() => courses.find((item) => item.slug === slug), [slug]);

  useEffect(() => {
    if (!course) {
      navigate("/courses", { replace: true });
    }
  }, [course, navigate]);

  if (!course) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <div className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">STACKO course spotlight</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">{course.title}</h1>
            <p className="mt-6 text-lead text-white/80 mx-auto max-w-3xl">{course.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-white/70">
              <span className="rounded-full border border-white/18 px-3 py-1 text-white/90">{course.level}</span>
              <span className="rounded-full border border-white/18 px-3 py-1 text-white/90">{course.duration} sprint</span>
              <span className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1 text-secondary-500">{course.price}</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="section-shell grid gap-12 lg:grid-cols-[0.6fr_0.4fr]">
        <Reveal>
          <div className="glass-surface rounded-[3rem] border border-white/14 p-12">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">What you’ll build</p>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              {course.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-4">
                  <span className="mt-[6px] block h-2.5 w-2.5 rounded-full bg-secondary-500" />
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs uppercase tracking-[0.32em] text-secondary-500">Stack & tools</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-secondary-500">
              {course.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-surface rounded-[3rem] border border-white/14 p-12"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">Enrollment includes</p>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li>Weekly live workshops led by STACKO founders</li>
              <li>Peer programming pods and code reviews</li>
              <li>Access to STACKO internship opportunities</li>
              <li>Career storytelling labs and interview prep</li>
            </ul>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
};

export default CourseDetail;
