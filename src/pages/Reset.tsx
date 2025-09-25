import Reveal from "@/components/Reveal";

const Reset = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[calc(var(--spacing-section)*0.8)] pb-[calc(var(--spacing-section)*1.1)] pt-[calc(var(--spacing-block)*1.2)]">
      <Reveal>
        <div className="glass-surface w-full max-w-lg rounded-[3rem] border border-white/14 p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-secondary-500">Reset password</p>
          <h1 className="mt-4 text-[clamp(2.2rem,3.4vw,2.8rem)] font-semibold text-white">Send a recovery link</h1>
          <p className="mt-4 text-sm text-white/70">
            Enter the email associated with your STACKO account and we’ll share a secure reset link.
          </p>
          <form className="mt-8 space-y-6">
            <label className="flex flex-col gap-2 text-sm text-white/65">
              Email address
              <input
                type="email"
                required
                className="rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/30"
                placeholder="you@stacko.dev"
              />
            </label>
            <button type="submit" className="glass-button hover-lift w-full rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Email me a link
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Reset;
