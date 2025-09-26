import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import team from "@/data/team";
import Reveal from "@/components/Reveal";

type MentorVariant = {
  id: string;
  surface: string;
  halo: string;
  badge: string;
  chip: string;
  accent: string;
  dot: string;
};

const mentorVariants: MentorVariant[] = [
  {
    id: "charcoal",
    surface: "bg-[#101421]/95 border-white/12 shadow-[0_22px_60px_rgba(2,4,12,0.45)]",
    halo: "from-white/12 via-white/5 to-transparent",
    badge: "border-white/15 bg-white/8 text-white/60",
    chip: "border-white/12 bg-white/6 text-white/65",
    accent: "from-white/14 to-transparent",
    dot: "bg-white/45",
  },
  {
    id: "slate",
    surface: "bg-[#0f121d]/95 border-white/12 shadow-[0_22px_60px_rgba(3,5,14,0.42)]",
    halo: "from-white/11 via-white/4 to-transparent",
    badge: "border-white/15 bg-white/8 text-white/60",
    chip: "border-white/12 bg-white/6 text-white/65",
    accent: "from-white/12 to-transparent",
    dot: "bg-white/45",
  },
  {
    id: "ink",
    surface: "bg-[#0e121c]/95 border-white/12 shadow-[0_22px_60px_rgba(1,3,10,0.48)]",
    halo: "from-white/12 via-white/4 to-transparent",
    badge: "border-white/15 bg-white/8 text-white/60",
    chip: "border-white/12 bg-white/6 text-white/65",
    accent: "from-white/12 to-transparent",
    dot: "bg-white/45",
  },
];
const simpleMentorSummaries: Record<number, string> = {
  1: "Keeps product stories clear and design systems tidy.",
  2: "Helps teams build AI copilots and steady full-stack apps.",
  3: "Designs cohorts that stay simple and on track.",
  4: "Supports React and Node builds from idea to launch.",
  5: "Turns AI research into everyday automations.",
  6: "Matches talent with projects and easy routines.",
  7: "Builds partnerships and keeps the community active.",
};

const toSpecialtyTokens = (value: string) =>
  value
    .split("&")
    .map((token) => token.trim())
    .filter(Boolean);

const TeamShowcase = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const slides = useMemo(
    () =>
      team.map((member, index) => ({
        member,
        variant: mentorVariants[index % mentorVariants.length],
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
    resumeTimerRef.current = window.setTimeout(() => setIsAutoPlay(true), 11000);
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
    const cards = Array.from(node.querySelectorAll<HTMLElement>('[data-mentor-card="true"]'));
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
    const cards = node.querySelectorAll<HTMLElement>('[data-mentor-card="true"]');
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
    }, 8500);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isAutoPlay, scrollToIndex, slides.length]);

  const progressPercent = slides.length <= 1 ? 100 : (progress || activeIndex / (slides.length - 1)) * 100;

  return (
    <section className="section-shell section-padding" id="team">
      <Reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-white/55">Mentor team</p>
            <h2 className="balanced-text text-[clamp(2.2rem,3.5vw,3.2rem)] font-semibold text-white">
              Meet the mentors by your side each week
            </h2>
            <p className="text-lead">
              Weekly reviews, async notes, and practical check-ins keep every project moving forward.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <p className="text-sm text-white/60 sm:text-right">Practical help from planning to launch.</p>
            <div className="hidden items-center gap-3 sm:flex">
              <button
                type="button"
                onClick={() => handleNavigate("prev")}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                aria-label="Previous mentor"
              >
                <span className="text-base transition-transform group-hover:-translate-x-0.5">&larr;</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("next")}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                aria-label="Next mentor"
              >
                <span className="text-base transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </button>
            </div>
            <div className="hidden h-1 w-36 overflow-hidden rounded-full bg-white/10 sm:block">
              <motion.div
                className="h-full rounded-full bg-white/70"
                animate={{ width: `${Math.max(8, progressPercent)}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#04050b] via-[#04050b]/65 to-transparent lg:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#04050b] via-[#04050b]/65 to-transparent lg:w-20" />
        <div
          ref={sliderRef}
          className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-4 pr-8 sm:-mx-6 sm:pl-6 sm:pr-10 lg:-mx-8 lg:pl-8 lg:pr-16"
          onMouseEnter={() => {
            setIsAutoPlay(false);
            clearResumeTimer();
          }}
          onMouseLeave={() => scheduleResume()}
        >
          {slides.map(({ member, variant }, index) => {
            const isActive = index === activeIndex;
            const specialties = toSpecialtyTokens(member.specialty).slice(0, 2);
            const plainBio = member.bio
              .split(".")
              .map((part) => part.trim())
              .filter(Boolean)[0] ?? member.bio;
            const summary = simpleMentorSummaries[member.id] ?? `${plainBio}.`;
            return (
              <motion.article
                key={member.id}
                data-mentor-card="true"
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.95,
                  opacity: isActive ? 1 : 0.75,
                  translateY: isActive ? 0 : 16,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`group relative flex h-full w-[min(92vw,22rem)] flex-col justify-between overflow-hidden rounded-[30px] border p-8 backdrop-blur ${variant.surface}`}
              >
                <div
                  className={`pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br ${variant.halo} opacity-0 transition group-hover:opacity-100`}
                />
                <motion.div
                  className={`absolute left-8 right-8 top-6 h-px bg-gradient-to-r ${variant.accent}`}
                  animate={{ opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />

                <div className="relative space-y-5">
                  <div className="flex items-center justify-between text-xs text-white/65">
                    <span className={`rounded-full border px-3 py-1 uppercase tracking-[0.24em] ${variant.badge}`}>
                      Mentor
                    </span>
                    <span className="text-white/50">{member.title}</span>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xl font-semibold text-white">{member.name}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{summary}</p>
                  </div>
                  {specialties.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-xs">
                      {specialties.map((specialty) => (
                        <span key={specialty} className={`rounded-full px-3 py-1 ${variant.chip}`}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative mt-6 flex items-center justify-between text-sm text-white/70">
                  <div className="flex items-center gap-2 text-xs text-white/55">
                    <span className={`h-2 w-2 rounded-full ${variant.dot}`} />
                    <span>Currently mentoring</span>
                  </div>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/0 px-3 py-2 text-xs font-medium text-white/75 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    Meet the team
                  </Link>
                </div>
              </motion.article>
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
              aria-label={`Go to mentor ${index + 1}`}
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

export default TeamShowcase;









