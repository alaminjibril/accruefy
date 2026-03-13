"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James O'Connor",
    company: "Eco Grow Solutions",
    quote: "This team streamlined our accounting processes, allowing us to focus on scaling our business. Their attention to detail and efficiency is truly unmatched.",
    image: "/testimonial-1.avif",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Chief Financial Officer",
    quote: "Their expertise and personalized approach transformed our financial management. We've achieved significant growth and stability thanks to their strategic insights and dedicated support.",
    image: "/testimonial-2.avif",
  },
  {
    id: 3,
    name: "Natalie Evans",
    company: "CEO of Innovatech Solutions",
    quote: "Unmatched service and expertise! They revolutionized our financial strategy, unlocking significant savings while enhancing operational efficiency to drive exceptional results.",
    image: "/testimonial-3.avif",
  },
  {
    id: 4,
    name: "David Okafor",
    company: "PrimeTech Ventures",
    quote: "Their tax optimization strategies saved us significantly. A truly professional team that understands the needs of a growing business.",
    image: "/testimonial-4.jpg",
  },
];

const EASE = [0.4, 0, 0.2, 1] as const;

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.45, ease: EASE },
  }),
};

function NavButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-2 flex-shrink-0">
      <button
        onClick={onPrev}
        className="w-9 h-9 rounded-lg bg-[#1a3d4f] flex items-center justify-center hover:bg-[#0f2a38] transition-colors"
        aria-label="Previous"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="w-9 h-9 rounded-lg bg-[#1a3d4f] flex items-center justify-center hover:bg-[#0f2a38] transition-colors"
        aria-label="Next"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f0ece4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-black text-center mb-10 leading-tight">
          Client testimonials and success stories
        </h2>

        {/* Card — clips sliding animation */}
        <div className="bg-white rounded-2xl overflow-hidden relative">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >

              {/* ── MOBILE (< sm): full-width image → name → quote → nav ── */}
              <div className="flex flex-col sm:hidden">
                <div className="w-full h-[320px] overflow-hidden rounded-t-2xl">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={600}
                    height={320}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <p className="text-[15px] font-semibold text-black">{current.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{current.company}</p>
                  </div>
                  <p className="text-base text-gray-800 leading-relaxed">{current.quote}</p>
                  <div className="mt-1">
                    <NavButtons onPrev={() => go(-1)} onNext={() => go(1)} />
                  </div>
                </div>
              </div>

              {/* ── TABLET (sm → lg): image top-left + nav top-right, name below image, quote below ── */}
              <div className="hidden sm:flex lg:hidden flex-col p-7 gap-5">
                <div className="flex items-start justify-between">
                  <div className="w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={current.image}
                      alt={current.name}
                      width={150}
                      height={190}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <NavButtons onPrev={() => go(-1)} onNext={() => go(1)} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-black">{current.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{current.company}</p>
                </div>
                <p className="text-base text-gray-800 leading-relaxed">{current.quote}</p>
              </div>

              {/* ── DESKTOP (lg+): image left, content right, side by side ── */}
              <div className="hidden lg:flex items-start gap-6 p-8">
                <div className="flex-shrink-0 w-[160px] h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={160}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[15px] font-semibold text-black">{current.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{current.company}</p>
                    </div>
                    <NavButtons onPrev={() => go(-1)} onNext={() => go(1)} />
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">{current.quote}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}