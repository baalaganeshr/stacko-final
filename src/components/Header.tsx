import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import courses from "@/data/courses";

const primaryLinks = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const coursePreviews = useMemo(() => courses.slice(0, 4), []);
  const headerSurface = scrolled
    ? "bg-black/70 backdrop-blur-xl shadow-[0_10px_60px_rgba(107,70,193,0.28)]"
    : "bg-transparent";

  const navLinkClass = (isActive: boolean) =>
    [
      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
      isActive ? "bg-white/10 text-white" : "text-muted hover:text-white",
    ].join(" ");

  return (
    <header className={["sticky top-0 z-40 transition-[transform,background,box-shadow] duration-500", headerSurface].join(" ")}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-6 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.4),rgba(107,70,193,0.1))] text-white">
            <span className="text-xl font-semibold tracking-[0.2em]">S</span>
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-secondary-500">
              STACKO
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-muted">Build · Learn · Deploy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              type="button"
              className={navLinkClass(location.pathname.startsWith("/courses"))}
            >
              Courses
            </button>
            <AnimatePresence>
              {isCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="glass-surface absolute left-0 top-12 w-[24rem] rounded-3xl p-6"
                >
                  <div className="flex flex-col gap-4">
                    {coursePreviews.map((course) => (
                      <Link
                        key={course.id}
                        to={"/courses#" + course.slug}
                        className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-white/15 hover:bg-white/10"
                      >
                        <p className="text-sm font-semibold text-white">{course.title}</p>
                        <p className="text-xs text-muted">{course.tagline}</p>
                      </Link>
                    ))}
                    <Link
                      to="/courses"
                      className="flex items-center justify-between rounded-2xl border border-dashed border-white/10 px-4 py-3 text-sm font-medium text-secondary-500 transition hover:border-secondary-500/40"
                    >
                      View full catalog →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {primaryLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={({ isActive }) => navLinkClass(isActive)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <NavLink to="/login" className={({ isActive }) => navLinkClass(isActive)}>
            Login
          </NavLink>
          <Link
            to="/signup"
            className="glass-button rounded-full px-5 py-2 text-sm font-medium text-white shadow-[0_12px_40px_rgba(139,92,246,0.3)] transition hover:shadow-[0_20px_60px_rgba(139,92,246,0.35)]"
          >
            Start Learning Free
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className="absolute block h-0.5 w-6 origin-center bg-white transition-transform duration-300"
            style={{ transform: isMobileOpen ? "rotate(45deg) translateY(0px)" : "translateY(-6px)" }}
          />
          <span
            className="absolute block h-0.5 w-6 origin-center bg-white transition-opacity duration-200"
            style={{ opacity: isMobileOpen ? 0 : 1 }}
          />
          <span
            className="absolute block h-0.5 w-6 origin-center bg-white transition-transform duration-300"
            style={{ transform: isMobileOpen ? "rotate(-45deg) translateY(0px)" : "translateY(6px)" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-surface mx-5 mb-6 rounded-3xl p-6 lg:hidden"
          >
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Learn</p>
              <div className="mt-3 grid gap-3">
                {coursePreviews.map((course) => (
                  <Link
                    key={course.id}
                    to={"/courses#" + course.slug}
                    className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-white/15 hover:bg-white/10"
                  >
                    {course.title}
                  </Link>
                ))}
                <Link
                  to="/courses"
                  className="rounded-2xl border border-dashed border-white/10 px-4 py-3 text-sm text-secondary-500"
                >
                  Full catalog
                </Link>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Explore</p>
              <div className="mt-3 grid gap-2">
                {primaryLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      [
                        "rounded-2xl px-4 py-2 text-sm",
                        isActive ? "bg-white/10 text-white" : "text-muted hover:text-white",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  [
                    "rounded-2xl border border-white/5 px-4 py-3 text-center text-sm font-medium",
                    isActive ? "text-white" : "text-white",
                  ].join(" ")
                }
              >
                Login
              </NavLink>
              <Link
                to="/signup"
                className="glass-button rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Start Learning Free
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
