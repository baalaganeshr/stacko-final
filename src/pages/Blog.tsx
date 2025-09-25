import { Link } from "react-router-dom";
import blogPosts from "@/data/blog";
import Reveal from "@/components/Reveal";

const Blog = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.85))] px-8 py-20 text-center md:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">STACKO journal</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Field notes from our engineers and educators</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/75">
            Tutorials, opinion pieces, and deep dives on the technologies powering STACKO's studio and cohorts. Subscribe to stay ahead of the next wave.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <Reveal key={post.id} delay={index * 0.05}>
            <Link
              to={"/blog/" + post.slug}
              className="glass-surface flex h-full flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/5 p-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">{post.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 rounded-[3rem] border border-white/10 bg-black/40 p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">Want STACKO in your inbox?</h2>
          <p className="mt-3 text-sm text-muted">
            Curated digests on programming education, AI product strategy, and developer experience every two weeks.
          </p>
          <form className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/70 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30 sm:w-72"
            />
            <button type="submit" className="glass-button rounded-2xl px-6 py-3 text-sm font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Blog;
