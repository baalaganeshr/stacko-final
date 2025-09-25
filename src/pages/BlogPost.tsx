import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogPosts from "@/data/blog";
import Reveal from "@/components/Reveal";

const articleSections = [
  {
    heading: "Why this matters",
    body: "Developers need tools that balance shipping speed with craft. Our studio experiments become guides that save teams months of trial and error.",
  },
  {
    heading: "What you’ll learn",
    body: "We break down implementation patterns, share internal heuristics, and provide templates inspired by real client engagements.",
  },
  {
    heading: "Ship it",
    body: "Every post ends with actionable next steps—from code sandboxes to facilitation checklists—so your team can apply insights immediately.",
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug]);

  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-20 md:px-10">
      <Reveal>
        <article className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.85))] px-8 py-16 md:px-14">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary-500">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/70">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <p className="mt-6 text-base text-white/75">{post.excerpt}</p>
        </article>
      </Reveal>

      <div className="mt-16 space-y-10">
        {articleSections.map((section) => (
          <Reveal key={section.heading}>
            <div className="glass-surface rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              <p className="mt-3 text-sm text-muted">{section.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
