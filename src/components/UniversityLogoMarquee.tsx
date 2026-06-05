import React from 'react';

interface Partner {
  name: string;
  logotext: string;
}

interface UniversityLogoMarqueeProps {
  partners: Partner[];
}

export const UniversityLogoMarquee: React.FC<UniversityLogoMarqueeProps> = ({ partners }) => {
  if (!partners || partners.length === 0) {
    return null;
  }

  // To ensure the marquee scroll is flawless and seamless without gaps on large monitors,
  // we repeat the elements several times.
  const firstRowItems = [...partners, ...partners, ...partners, ...partners];
  // Reverse the second row for opposing scroll direction or alternate items order
  const secondRowItems = [...partners, ...partners, ...partners, ...partners].reverse();

  return (
    <div className="relative w-full py-2 space-y-6 overflow-hidden">
      {/* Subtle fade effect on the left and right edges */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10" />

      {/* Row 1: Right to Left */}
      <div className="relative w-full overflow-hidden select-none">
        <div className="flex w-max flex-row items-center gap-6 md:gap-8 animate-marquee hover:[animation-play-state:paused]">
          {firstRowItems.map((partner, idx) => (
            <div
              key={`row1-${idx}`}
              className="text-slate-700 bg-white text-xs md:text-sm font-semibold tracking-wider font-mono hover:text-[#3157E6] px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 cursor-default transition-all shadow-sm shrink-0"
              title={`Official application processing pathway to ${partner.name}`}
            >
              🎓 {partner.logotext}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right */}
      <div className="relative w-full overflow-hidden select-none">
        <div className="flex w-max flex-row items-center gap-6 md:gap-8 animate-marquee-reverse hover:[animation-play-state:paused]">
          {secondRowItems.map((partner, idx) => (
            <div
              key={`row2-${idx}`}
              className="text-slate-700 bg-white text-xs md:text-sm font-semibold tracking-wider font-mono hover:text-[#3157E6] px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 cursor-default transition-all shadow-sm shrink-0"
              title={`Official application processing pathway to ${partner.name}`}
            >
              🎓 {partner.logotext}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityLogoMarquee;
