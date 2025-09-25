import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center px-5 pb-24 pt-24 md:px-10">
      <Reveal>
        <div className="glass-surface w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">404</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">We couldn’t find that view</h1>
          <p className="mt-3 text-sm text-muted">
            The section you’re looking for might be shipping soon. Head back to the homepage to explore our cohorts and studio work.
          </p>
          <Link to="/" className="glass-button mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white">
            Return home
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default NotFound;
