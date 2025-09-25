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
    <div className="flex flex-col gap-[calc(var(--spacing-section)*1.1)] pb-[calc(var(--spacing-section)*1.4)] pt-[calc(var(--spacing-block)*0.6)]">
      <Reveal>
        <div className="section-shell">
          <article className="glass-surface rounded-[3.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(107,70,193,0.35),rgba(0,0,0,0.87))] px-10 py-[clamp(3.5rem,6vw,5.5rem)] md:px-16">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-500">{post.category}</p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.4vw,3.8rem)] font-semibold text-white">{post.title}</h1>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/65">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <p className="mt-8 text-lead text-white/80">{post.excerpt}</p>
          </article>
        </div>
      </Reveal>

      <div className="section-shell space-y-8">
        {articleSections.map((section) => (
          <Reveal key={section.heading}>
            <div className="glass-surface rounded-[3rem] border border-white/12 p-12">
              <h2 className="text-[clamp(1.7rem,2.4vw,2.1rem)] font-semibold text-white">{section.heading}</h2>
              <p className="mt-4 text-sm text-white/70">{section.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
