import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import courses from "@/data/courses";
import Reveal from "@/components/Reveal";

type DesignVariant = {
  id: string;
  surface: string;
  tag: string;
  chip: string;
  dot: string;
  accent: string;
  sheen?: string;
};

const designVariants: DesignVariant[] = [
  {
    id: "charcoal",
    surface: "bg-[#0f131f]/95 border-white/12 shadow-[0_22px_60px_rgba(2,4,12,0.45)]",
    tag: "border-white/12 bg-white/6 text-white/60",
    chip: "border-white/12 bg-white/5 text-white/65",
    dot: "bg-white/45",
    accent: "from-white/14 to-transparent",
  },
  {
    id: "slate",
    surface: "bg-[#101520]/95 border-white/12 shadow-[0_22px_60px_rgba(3,5,14,0.42)]",
    tag: "border-white/12 bg-white/6 text-white/60",
    chip: "border-white/12 bg-white/5 text-white/65",
    dot: "bg-white/45",
    accent: "from-white/12 to-transparent",
  },
  {
    id: "ink",
    surface: "bg-[#0e121d]/95 border-white/12 shadow-[0_22px_60px_rgba(1,3,10,0.48)]",
    tag: "border-white/12 bg-white/6 text-white/60",
    chip: "border-white/12 bg-white/5 text-white/65",
    dot: "bg-white/45",
    accent: "from-white/12 to-transparent",
  },
];
const friendlyCourseDescriptions: Record<number, string> = {
  1: "Pick up Python basics, automate routine tasks, and handle data with clear examples.",
  2: "Build React screens and simple APIs step by step with guided reviews.",
  3: "Practice React patterns for smoother UI, faster loads, and easier teamwork.",
  4: "Ship Node.js bots and automations using AI helpers without heavy setup.",
  5: "Create portfolio pieces with weekly mentor check-ins and plain feedback.",
};

const CourseShowcase = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const slides = useMemo(
    () =>
      courses.map((course, index) => ({
        course,
        variant: designVariants[index % designVariants.length],
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => setIsAutoPlay(true), 12000);
  }, [clearResumeTimer]);

  useEffect(() => {
    return () => {
      clearResumeTimer();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [clearResumeTimer]);

  const computeActiveCard = useCallback(() => {
    const node = sliderRef.current;
    if (!node) return;
    const cards = Array.from(node.querySelectorAll<HTMLElement>('[data-course-card="true"]'));
    if (!cards.length) return;

    const containerRect = node.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    const maxScroll = node.scrollWidth - node.clientWidth;
    setProgress(maxScroll <= 0 ? 1 : Math.min(1, node.scrollLeft / maxScroll));
  }, []);

  useEffect(() => {
    const node = sliderRef.current;
    if (!node) return;

    const handleScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        computeActiveCard();
      });
      setIsAutoPlay(false);
      scheduleResume();
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", computeActiveCard);
    computeActiveCard();

    return () => {
      node.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", computeActiveCard);
    };
  }, [computeActiveCard, scheduleResume]);

  const scrollToIndex = useCallback((index: number) => {
    const node = sliderRef.current;
    if (!node) return;
    const cards = node.querySelectorAll<HTMLElement>('[data-course-card="true"]');
    const target = cards[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, []);

  const handleNavigate = useCallback(
    (direction: "prev" | "next") => {
      if (!slides.length) return;
      const delta = direction === "next" ? 1 : -1;
      const nextIndex = (() => {
        if (direction === "next" && activeIndex === slides.length - 1) return 0;
        if (direction === "prev" && activeIndex === 0) return slides.length - 1;
        return activeIndex + delta;
      })();

      setIsAutoPlay(false);
      scheduleResume();
      scrollToIndex(nextIndex);
    },
    [activeIndex, scheduleResume, scrollToIndex, slides.length]
  );

  useEffect(() => {
    if (!isAutoPlay || slides.length <= 1) return;
    const timer = window.setTimeout(() => {
      const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
      scrollToIndex(nextIndex);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isAutoPlay, scrollToIndex, slides.length]);

  const progressPercent = slides.length <= 1 ? 100 : (progress || activeIndex / (slides.length - 1)) * 100;

  return (
    <section className="section-shell section-padding">
      <div className="space-y-10 lg:flex lg:items-end lg:justify-between lg:gap-8">
        <Reveal>
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">Course catalog</p>
            <h2 className="balanced-text text-[clamp(2.4rem,4vw,3.4rem)] font-semibold text-white">
              Courses built around real projects
            </h2>
            <p className="text-lead">
              Pick a course that fits your team. Each one blends short lessons, build time, and weekly feedback so you always know the next step.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <div className="hidden items-center gap-3 sm:flex">
              <button
                type="button"
                onClick={() => handleNavigate("prev")}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                aria-label="Previous program"
              >
                <span className="text-lg transition-transform group-hover:-translate-x-0.5">&larr;</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("next")}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                aria-label="Next program"
              >
                <span className="text-lg transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </button>
            </div>
            <div className="hidden h-1 w-48 overflow-hidden rounded-full bg-white/10 sm:block">
              <motion.div
                className="h-full rounded-full bg-white/70"
                animate={{ width: `${Math.max(8, progressPercent)}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#05060d] via-[#05060d]/65 to-transparent lg:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#05060d] via-[#05060d]/65 to-transparent lg:w-24" />
        <div
          ref={sliderRef}
          className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-4 pr-8 sm:-mx-6 sm:pl-6 sm:pr-10 lg:-mx-8 lg:pl-8 lg:pr-16"
          onMouseEnter={() => {
            setIsAutoPlay(false);
            clearResumeTimer();
          }}
          onMouseLeave={() => scheduleResume()}
        >
          {slides.map(({ course, variant }, index) => {
            const isActive = index === activeIndex;
            return (
              <Reveal key={course.id} delay={index * 0.04} className="snap-center">
                <motion.article
                  data-course-card="true"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.94,
                    opacity: isActive ? 1 : 0.75,
                    translateY: isActive ? 0 : 16,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative flex h-full w-[min(92vw,24rem)] flex-col justify-between rounded-[28px] border p-8 backdrop-blur ${variant.surface}`}
                >
                  {variant.sheen && (
                    <div className={`pointer-events-none absolute inset-0 rounded-[28px] ${variant.sheen}`} />
                  )}
                  <motion.div
                    className={`absolute left-8 right-8 top-6 h-px bg-gradient-to-r ${variant.accent}`}
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />

                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between text-xs text-white/65">
                      <span className={`rounded-full border px-3 py-1 uppercase tracking-[0.18em] ${variant.tag}`}>
                        {course.level}
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
                      <p className="text-sm text-white/75">{course.tagline}</p>
                    </div>
                    <p className="text-sm text-white/65">{friendlyCourseDescriptions[course.id] || course.description}</p>
                    <ul className="space-y-3 text-sm text-white/80">
                      {course.highlights.slice(0, 2).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className={`mt-[6px] h-2 w-2 rounded-full ${variant.dot}`} />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/75">
                    <div className="flex flex-wrap gap-2 text-xs">
                      {course.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className={`rounded-full px-3 py-1 ${variant.chip}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                      <span className="text-base font-semibold text-white">{course.price}</span>
                      <Link
                        className="inline-flex items-center gap-2 rounded-full border border-white/0 px-4 py-2 text-white/75 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                        to={"/courses/" + course.slug}
                      >
                        View course
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                setIsAutoPlay(false);
                clearResumeTimer();
                scrollToIndex(index);
              }}
              aria-label={`Go to program ${index + 1}`}
              className="group relative h-3 w-3 rounded-full bg-white/12 transition hover:bg-white/20"
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-white/70"
                animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CourseShowcase;








