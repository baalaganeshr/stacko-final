import { Link } from "react-router-dom";
import blogPosts from "@/data/blog";
import Reveal from "@/components/Reveal";

const BlogHighlight = () => {
  return (
    <section className="mt-24" id="blog">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">STACKO journal</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Insights for engineers & operators</h2>
            <p className="mt-3 text-base text-muted">
              Tutorials, strategy briefings, and behind-the-scenes notes from the STACKO studio.
            </p>
          </div>
          <Link to="/blog" className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-secondary-500/60">
            Explore blog
          </Link>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal key={post.id} delay={index * 0.05}>
            <Link
              to={"/blog/" + post.slug}
              className="glass-surface flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">{post.category}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
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
    </section>
  );
};

export default BlogHighlight;
