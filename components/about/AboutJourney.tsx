import Image from "next/image";

function DonutCard() {
  const size = 90;
  const cx = 45, cy = 45, r = 34;
  const stroke = 10;
  const circumference = 2 * Math.PI * r;
  const pct = 0.90;
  // Teal arc: 90%, purple arc: remaining ~10%
  const tealDash = circumference * pct;
  const purpleDash = circumference * (1 - pct);
  const gap = 2;

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center w-[120px] h-[120px]">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background track */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f0f0f0" strokeWidth={stroke} />
        {/* Teal segment — 90% */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="#1a3d4f"
          strokeWidth={stroke}
          strokeDasharray={`${tealDash - gap} ${circumference - tealDash + gap}`}
          strokeDashoffset={circumference * 0.25}
          strokeLinecap="round"
        />
        {/* Purple segment — 10% */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="#c8b4f0"
          strokeWidth={stroke}
          strokeDasharray={`${purpleDash - gap} ${circumference - purpleDash + gap}`}
          strokeDashoffset={circumference * 0.25 - tealDash + gap}
          strokeLinecap="round"
        />
        {/* Center text */}
        <text x={cx} y={cy - 5} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fill="#111">90%</text>
        <text x={cx} y={cy + 9} textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#888">Saving</text>
      </svg>
    </div>
  );
}

function UserInsightsCard() {
  const avatars = [
    { bg: "#e8a87c", initials: "J" },
    { bg: "#7ec8a8", initials: "M" },
    { bg: "#89a8d8", initials: "S" },
    { bg: "#c8a0d8", initials: "K" },
    { bg: "#d8c87c", initials: "R" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg px-4 py-3 w-[200px]">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-700">User insights</span>
        <span className="text-gray-400 text-sm tracking-widest">···</span>
      </div>
      {/* Avatars row */}
      <div className="flex items-center">
        {avatars.map((a, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white flex-shrink-0"
            style={{ background: a.bg, marginLeft: i === 0 ? 0 : "-8px", zIndex: avatars.length - i }}
          >
            {a.initials}
          </div>
        ))}
        {/* +5K badge */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-white flex-shrink-0"
          style={{ background: "#1a3d4f", marginLeft: "-8px", zIndex: 0 }}
        >
          +5K
        </div>
      </div>
    </div>
  );
}

export default function AboutJourney() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — image with floating cards */}
          <div className="relative">
            {/* Donut card — top-right, bleeds above image */}
            <div className="absolute top-[-30px] right-[-10px] z-20">
              <DonutCard />
            </div>

            {/* Main image */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/about_journey_1.avif"
                alt="Team reviewing documents"
                width={600}
                height={480}
                className="object-cover w-full h-[420px] lg:h-[460px]"
              />
            </div>

            {/* User insights card — bottom-left, bleeds outside image */}
            <div className="absolute bottom-[-20px] left-[-10px] z-20">
              <UserInsightsCard />
            </div>
          </div>

          {/* RIGHT — heading + two paragraphs */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Our journey towards financial excellence
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Accruefy began with a vision to make accounting transparent and dependable.
              We've earned the trust of businesses by combining accuracy with integrity in all we do.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              We go beyond numbers—helping clients understand finances, plan strategically,
              and stay ahead. With expert guidance and smart tools, we turn complexity into clarity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}