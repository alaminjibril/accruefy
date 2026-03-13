"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

// ── Star rating ────────────────────────────────────────────────────────────
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Floating Pie Chart ─────────────────────────────────────────────────────
function PieStatsCard() {
  const size = 160, cx = 80, cy = 80, r = 76;

  function polarToCartesian(centerX: number, centerY: number, radius: number, angleDeg: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: centerX + radius * Math.cos(rad), y: centerY + radius * Math.sin(rad) };
  }

  function slicePath(start: number, end: number) {
    const s = polarToCartesian(cx, cy, r, start);
    const e = polarToCartesian(cx, cy, r, end);
    const large = end - start > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y} Z`;
  }

  function midPoint(start: number, end: number, frac = 0.55) {
    return polarToCartesian(cx, cy, r * frac, (start + end) / 2);
  }

  const T0 = 0, T1 = 200, P0 = 200, P1 = 326, S0 = 326, S1 = 360;
  const thinMidAngle = (S0 + S1) / 2;
  const tealC = midPoint(T0, T1, 0.50);
  const purpC = midPoint(P0, P1, 0.56);

  return (
    <div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <path d={slicePath(T0, T1)} fill="#1a3d4f" />
        <path d={slicePath(P0, P1)} fill="#c8b4f0" />
        <path d={slicePath(S0, S1)} fill="#9b7fd4" />
        <text x={tealC.x} y={tealC.y - 7} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" fill="white">150%</text>
        <text x={tealC.x} y={tealC.y + 8} textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="white" opacity="0.9">Growth</text>
        <text x={purpC.x} y={purpC.y - 7} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#2d1f5e">85%</text>
        <text x={purpC.x} y={purpC.y + 7} textAnchor="middle" dominantBaseline="middle" fontSize="7.5" fill="#2d1f5e" opacity="0.85">Accuracy</text>
        <g transform={`rotate(${thinMidAngle - 90}, ${cx}, ${cy})`}>
          <text x={cx + r * 0.62} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="7.5" fontWeight="bold" fill="white" transform={`rotate(90, ${cx + r * 0.62}, ${cy})`}>8%</text>
        </g>
      </svg>
    </div>
  );
}

// ── Progress Stats Card ────────────────────────────────────────────────────
function ProgressStatsCard() {
  const stats = [
    { label: "Client Revenue Strategy", value: 99.8, display: "99.8%" },
    { label: "Tax Optimization", value: 70, display: "70%" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-[220px]">
      <div className="flex flex-col gap-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-gray-600 font-medium">{stat.label}</span>
              <span className="text-[11px] font-bold text-gray-800">{stat.display}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className="bg-[#1a3d4f] h-1.5 rounded-full transition-all" style={{ width: `${stat.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shared easing ──────────────────────────────────────────────────────────
const ease = [0.25, 0.1, 0.25, 1] as const;

// ── Hero ───────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="bg-[#f0ece4] min-h-[85vh] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* ── LEFT COLUMN — staggered fade up ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[50%]">

          {/* H1 floats up */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-semibold text-black leading-tight tracking-tight"
          >
            Simplifying accounting for your business
          </motion.h1>

          {/* Paragraph floats up */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="text-base text-gray-600 max-w-md leading-relaxed"
          >
            We are transforming numbers into financial success with expert-led
            strategies, personalized support, and unmatched precision.
          </motion.p>

          {/* Button floats up */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
          >
            <AnimatedButton className="px-7 py-3">Contact Us</AnimatedButton>
          </motion.div>

          {/* Info cards float up */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            {/* Brand Rating Card */}
            <div className="bg-white rounded-2xl shadow-md px-4 py-3 flex flex-col gap-1.5 min-w-[150px]">
              <div className="flex items-center gap-1.5">
                <Image src="/logo_1.svg" alt="Accruefy logo" width={22} height={22} className="rounded-full object-contain" />
                <span className="text-sm font-bold text-black">Accruefy</span>
              </div>
              <div className="flex items-center gap-2">
                <Stars count={4} />
                <p className="text-xs text-gray-500">5.0/4.50</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-md px-4 py-3 flex items-center gap-2.5">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01L6.62 10.79z" />
              </svg>
              <div>
                <p className="text-xs text-gray-500">Call us-</p>
                <p className="text-sm font-bold text-black">441-9189 x9761</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex-1 relative flex justify-center items-center lg:max-w-[50%] w-full">
          <div className="relative w-full max-w-[500px] p-6">

            {/* Image slides in from the right first */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.05 }}
              className="rounded-lg overflow-hidden w-full shadow-lg"
            >
              <Image
                src="/hero-businesswoman.png"
                alt="Professional businesswoman at desk"
                width={520}
                height={480}
                className="object-cover w-full h-[420px] lg:h-[480px]"
                priority
              />
            </motion.div>

            {/* Pie chart — floats in from left after image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.55 }}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 drop-shadow-xl"
            >
              <PieStatsCard />
            </motion.div>

            {/* Progress card — floats in from right after image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.7 }}
              className="absolute bottom-[40px] right-[-10px] z-20"
            >
              <ProgressStatsCard />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}