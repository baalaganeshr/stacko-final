const Background = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,70,193,0.12),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(139,92,246,0.1),_transparent_60%),_#000000]" />
      <div className="absolute left-[-15%] top-[5%] h-[38rem] w-[38rem] rounded-full bg-[conic-gradient(from_45deg_at_50%_50%,rgba(139,92,246,0.35),rgba(107,70,193,0.1),transparent_70%)] blur-[120px]" />
      <div className="absolute right-[-10%] top-[30%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(107,70,193,0.28),_rgba(0,0,0,0))] blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_40%,rgba(255,255,255,0)_100%)] opacity-40" />
      <div
        className="absolute inset-0 opacity-25"
        style={{ maskImage: "radial-gradient(circle at 50% 50%, black 0%, transparent 70%)" }}
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stacko-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(148, 163, 184, 0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stacko-grid)" />
        </svg>
      </div>
    </div>
  );
};

export default Background;
