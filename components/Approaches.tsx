"use client";

import { useState, ReactElement } from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    number: "01",
    title: "Smart Solutions",
    description:
      "We design tailored financial solutions that align with your goals, helping you navigate complexity with clarity and confidence.",
    image: "/approach-1.avif",
  },
  {
    id: 2,
    number: "02",
    title: "Financial Clarity",
    description:
      "We cut through financial noise to give you a clear, accurate picture of your business health and where it's headed.",
    image: "/approach-2.avif",
  },
  {
    id: 3,
    number: "03",
    title: "Efficient Strategies",
    description:
      "We assess operations, identify inefficiencies, and implement smart, streamlined strategies to boost productivity, cut costs, and drive performance.",
    image: "/approach-3.avif",
  },
  {
    id: 4,
    number: "04",
    title: "Tax Optimization",
    description:
      "We craft proactive tax strategies that minimize liability, ensure full compliance, and keep more money working for your business.",
    image: "/approach-4.avif",
  },
];

function NumberBadge({ number }: { number: string }) {
  return (
    <div className="w-9 h-9 rounded-full bg-[#dedad2] flex items-center justify-center text-xs font-medium text-gray-500 flex-shrink-0">
      {number}
    </div>
  );
}

export default function Approaches(): ReactElement {
  const [active, setActive] = useState<number>(3);

  const toggle = (id: number) => {
    if (id !== active) setActive(id);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white">

      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4">
          Smart approaches to financial success
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Our proven process blends expert advice and clear steps to bring you financial clarity,
          confidence, and long-term business success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── MOBILE (< sm): single column — badge, title, description, full-width image ── */}
        <div className="flex flex-col gap-4 sm:hidden">
          {items.map((item) => (
            <div key={item.id} className="bg-[#e8e5de] rounded-2xl overflow-hidden">
              <div className="p-6 flex flex-col gap-3">
                <NumberBadge number={item.number} />
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              {/* Full-width image at bottom */}
              <div className="relative w-full h-[220px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── TABLET (sm → lg): 2×2 grid — badge top-left, circle image top-right, title, description ── */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-[#e8e5de] rounded-2xl p-6 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
              {/* Top row: badge left, circle image right */}
              <div className="flex items-start justify-between gap-3">
                <NumberBadge number={item.number} />
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* Bottom: title + description */}
              <div className="mt-4 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP (lg+): horizontal accordion ── */}
        <div className="hidden lg:flex gap-4 h-[420px] items-stretch">
          {items.map((item) => {
            const isOpen = active === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                className={[
                  "bg-[#e8e5de] rounded-2xl overflow-hidden relative cursor-pointer",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isOpen ? "flex-1" : "flex-none w-[220px]",
                ].join(" ")}
              >
                <div className="flex flex-col justify-between h-full p-6">

                  {/* Toggle button */}
                  <div>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggle(item.id); }}
                      className={[
                        "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-none transition-all duration-300",
                        isOpen ? "bg-[#1a3d4f] text-white rotate-45" : "bg-white text-gray-800",
                      ].join(" ")}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="w-4 h-4">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>

                  {/* Expanded: description + pill image */}
                  {isOpen && (
                    <div
                      className="flex-1 mt-5 relative overflow-visible"
                      style={{ animation: "fadeUp 0.35s ease forwards" }}
                    >
                      <p className="text-sm text-gray-600 leading-relaxed max-w-[300px]">
                        {item.description}
                      </p>
                      <div className="absolute bottom-[-30px] right-[-30px] w-[250px] h-[200px] overflow-hidden rounded-tl-[70px]">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                    </div>
                  )}

                  {/* Bottom: number + title */}
                  <div className="mt-auto">
                    <p className="text-xs text-gray-400 mb-1.5 font-normal">{item.number}</p>
                    <h3 className={[
                      "text-gray-900 leading-tight transition-all duration-300",
                      isOpen
                        ? "text-xl font-bold whitespace-normal"
                        : "text-base font-normal whitespace-nowrap overflow-hidden text-ellipsis",
                    ].join(" ")}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }`}</style>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}