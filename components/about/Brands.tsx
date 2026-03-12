"use client";

const logos = [
  { name: "Logoipsum", icon: "◎" },
  { name: "Logoipsum", icon: "◉" },
  { name: "Logoipsum", icon: "⊕" },
  { name: "Logoipsum", icon: "⊛" },
  { name: "LOCOO", icon: "" },
  { name: "Logoipsum", icon: "◎" },
  { name: "logoipsum", icon: "⊕" },
];

// Duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos];

export default function Brands() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-10">
          Partnered Brands, Proven Success
        </h2>

      </div>

      {/* Constrained scrolling strip */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        {/* Fade masks left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        {/* Scrolling track */}
        <div
          className="flex gap-5 w-max"
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 whitespace-nowrap flex-shrink-0"
            >
              {logo.icon && <span className="text-base text-gray-500">{logo.icon}</span>}
              <span className="text-sm font-semibold tracking-wide">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}