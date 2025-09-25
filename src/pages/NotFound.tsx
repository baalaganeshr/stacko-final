import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[calc(var(--spacing-section)*0.8)] pb-[calc(var(--spacing-section)*1.1)] pt-[calc(var(--spacing-block)*1.2)]">
      <Reveal>
        <div className="glass-surface w-full max-w-xl rounded-[3rem] border border-white/14 p-12 text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-secondary-500">404</p>
          <h1 className="mt-4 text-[clamp(2.2rem,3.4vw,2.8rem)] font-semibold text-white">We couldn’t find that view</h1>
          <p className="mt-4 text-sm text-white/70">
            The section you’re looking for might be shipping soon. Head back to the homepage to explore our cohorts and studio work.
          </p>
          <Link to="/" className="glass-button hover-lift mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Return home
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default NotFound;
