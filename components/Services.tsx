"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const services = [
    {
        id: 0,
        title: "Bookkeeping and Reporting",
        description: "We keep your financial records accurate and provide detailed reports to support informed decisions.",
        image: "/services-1.avif",
        icon: (active: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={active ? "white" : "#1a3d4f"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="6" height="8" rx="1" />
                <rect x="10" y="3" width="12" height="4" rx="1" />
                <rect x="10" y="11" width="12" height="8" rx="1" />
                <rect x="2" y="15" width="6" height="4" rx="1" />
            </svg>
        ),
    },
    {
        id: 1,
        title: "Cash Flow Management",
        description: "We optimize cash flow to ensure your business remains financially stable and continues to grow.",
        image: "/services-2.avif",
        icon: (active: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={active ? "white" : "#1a3d4f"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Personalized Tax Solutions",
        description: "Tailored tax strategies to maximize savings and ensure complete compliance during tax season.",
        image: "/services-3.avif",
        icon: (active: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={active ? "white" : "#1a3d4f"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Tax Filing Assistance",
        description: "Accurate, timely tax filing services to meet deadlines and minimize any potential penalties.",
        image: "/services-4.avif",
        icon: (active: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={active ? "white" : "#1a3d4f"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M8.5 12l2.5 2.5 4.5-4.5" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Financial Consulting",
        description: "Expert advice to help you make smart financial decisions and scale your business effectively.",
        image: "/services-5.avif",
        icon: (active: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={active ? "white" : "#1a3d4f"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="3" />
                <circle cx="17" cy="5" r="2" />
                <path d="M1 19c0-3.3 3.6-6 8-6s8 2.7 8 6" />
                <path d="M17 8c2.2.5 4 2.5 4 5" />
            </svg>
        ),
    },
    {
        id: 5,
        title: "Custom Payroll Solutions",
        description: "We manage payroll end-to-end ensuring accuracy, compliance, and timely payments for your team.",
        image: "/services-5.avif",
        icon: (active: boolean) => (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke={active ? "white" : "#1a3d4f"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="3" />
                <circle cx="16" cy="8" r="3" />
                <circle cx="12" cy="17" r="3" />
                <line x1="8" y1="11" x2="12" y2="14" />
                <line x1="16" y1="11" x2="12" y2="14" />
            </svg>
        ),
    },
];

function ArrowBtn() {
    return (
        <div className="w-9 h-9 rounded-full bg-[#1a3d4f] flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-[#0f2a38] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

const PREV_H = 100;
const ACTIVE_H = 220;
const NEXT_H = 74;
const GAP = 14;
const TOTAL = PREV_H + GAP + ACTIVE_H + GAP + NEXT_H;
const OFFSET = PREV_H + GAP;

export default function Services() {
    const [active, setActive] = useState(0);
    const [slideOut, setSlideOut] = useState(false);
    const [animating, setAnimating] = useState(false);

    const goTo = (idx: number) => {
        if (idx === active || animating) return;
        setAnimating(true);
        setSlideOut(true);
        setTimeout(() => {
            setActive(idx);
            setSlideOut(false);
            setTimeout(() => setAnimating(false), 350);
        }, 300);
    };

    useEffect(() => {
        const t = setInterval(() => {
            goTo((active + 1) % services.length);
        }, 4000);
        return () => clearInterval(t);
    }, [active, animating]);

    const curr = services[active];
    const prev = services[(active - 1 + services.length) % services.length];
    const next = services[(active + 1) % services.length];
    const nextIdx = (active + 1) % services.length;

    return (
        <section className="bg-[#f0ece4] w-full py-12 lg:py-16">
            <style>{`
                @keyframes svcImgIn {
                    from { opacity: 0; transform: scale(1.04); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP ROW */}
                <div className="flex items-start justify-between mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-black leading-tight" style={{ maxWidth: 280 }}>
                        Achieving financial clarity through services
                    </h2>
                    <AnimatedButton className="rounded-full flex-shrink-0 mt-1">
                        View all services
                    </AnimatedButton>
                </div>

                {/* DESKTOP LAYOUT (lg+) */}
                <div className="hidden lg:flex items-stretch gap-6">

                    {/* Cards column */}
                    <div className="relative overflow-hidden" style={{ flex: "1 1 0", height: TOTAL }}>
                        <div
                            style={{
                                position: "absolute",
                                left: 0, right: 0, top: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: GAP,
                                transform: slideOut ? `translateY(-${OFFSET + 28}px)` : `translateY(-${OFFSET}px)`,
                                opacity: slideOut ? 0 : 1,
                                transition: slideOut ? "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease" : "none",
                            }}
                        >
                            {/* PREV */}
                            <div className="bg-white rounded-2xl flex-shrink-0" style={{ height: PREV_H + 90 }}>
                                <div style={{ padding: "20px 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-3">
                                        {prev.description.split(" ").slice(-4).join(" ")}.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 mr-4 h-px bg-gray-100" />
                                        <ArrowBtn />
                                    </div>
                                </div>
                            </div>

                            {/* ACTIVE */}
                            <div className="bg-white rounded-2xl flex-shrink-0" style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        {curr.icon(false)}
                                    </div>
                                    <h3 className="text-[15px] font-semibold text-black leading-snug">{curr.title}</h3>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">{curr.description}</p>
                                <div className="flex items-center justify-between gap-3 pt-1">
                                    <div className="flex-1 relative h-px">
                                        <div className="absolute inset-0 bg-gray-200 rounded-full" />
                                        <div className="absolute left-0 top-0 h-px bg-[#1a3d4f] rounded-full" style={{ width: "35%" }} />
                                    </div>
                                    <ArrowBtn />
                                </div>
                            </div>

                            {/* NEXT */}
                            <div
                                className="bg-white rounded-2xl flex-shrink-0 cursor-pointer hover:shadow-sm transition-shadow"
                                style={{ overflow: "hidden", height: NEXT_H + 60 }}
                                onClick={() => goTo(nextIdx)}
                            >
                                <div style={{ padding: "18px 24px", display: "flex", alignItems: "center", gap: 12 }}>
                                    <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        {next.icon(false)}
                                    </div>
                                    <span className="text-[15px] text-gray-400 font-medium">{next.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image + Icon strip */}
                    <div className="relative rounded-2xl overflow-hidden" style={{ flex: "1 1 0", minHeight: TOTAL }}>
                        <Image
                            key={active}
                            src={curr.image}
                            alt={curr.title}
                            fill
                            className="object-cover"
                            style={{ animation: "svcImgIn 0.45s ease forwards" }}
                            priority
                        />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                            <div className="bg-[#f0ece4] flex flex-col items-center" style={{ gap: 8, padding: "12px 8px" }}>
                                {services.map((svc, i) => (
                                    <button
                                        key={svc.id}
                                        onClick={() => goTo(i)}
                                        aria-label={svc.title}
                                        style={{
                                            width: 30, height: 30,
                                            borderRadius: "50%",
                                            background: i === active ? "#1a3d4f" : "#efefef",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            flexShrink: 0, border: "none", cursor: "pointer",
                                            transition: "background 0.2s",
                                        }}
                                    >
                                        {svc.icon(i === active)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* TABLET LAYOUT (md–lg): active card + image side by side, service list below */}
                <div className="hidden md:flex lg:hidden flex-col gap-4">

                    {/* Top: active card + image side by side */}
                    <div className="flex gap-4" style={{ height: 280 }}>

                        {/* Active service card */}
                        <div className="bg-white rounded-2xl flex-1 flex flex-col justify-between" style={{ padding: "20px 22px" }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    {curr.icon(false)}
                                </div>
                                <h3 className="text-[15px] font-semibold text-black leading-snug">{curr.title}</h3>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">{curr.description}</p>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex-1 relative h-px">
                                    <div className="absolute inset-0 bg-gray-200 rounded-full" />
                                    <div className="absolute left-0 top-0 h-px bg-[#1a3d4f] rounded-full" style={{ width: "35%" }} />
                                </div>
                                <ArrowBtn />
                            </div>
                        </div>

                        {/* Image with icon strip */}
                        <div className="relative rounded-2xl overflow-hidden flex-1">
                            <Image
                                key={active}
                                src={curr.image}
                                alt={curr.title}
                                fill
                                className="object-cover"
                                style={{ animation: "svcImgIn 0.45s ease forwards" }}
                                priority
                            />
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                                <div className="bg-[#f0ece4] flex flex-col items-center" style={{ gap: 6, padding: "10px 7px" }}>
                                    {services.map((svc, i) => (
                                        <button
                                            key={svc.id}
                                            onClick={() => goTo(i)}
                                            aria-label={svc.title}
                                            style={{
                                                width: 26, height: 26,
                                                borderRadius: "50%",
                                                background: i === active ? "#1a3d4f" : "#efefef",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                flexShrink: 0, border: "none", cursor: "pointer",
                                                transition: "background 0.2s",
                                            }}
                                        >
                                            {svc.icon(i === active)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: next service card (peek) */}
                    <div
                        className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 cursor-pointer hover:shadow-sm transition-shadow"
                        onClick={() => goTo(nextIdx)}
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            {next.icon(false)}
                        </div>
                        <span className="text-sm text-gray-400 font-medium flex-1">{next.title}</span>
                        <ArrowBtn />
                    </div>

                    {/* Dot indicators */}
                    <div className="flex items-center justify-center gap-3 pt-1">
                        {services.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                style={{
                                    width: i === active ? 28 : 8, height: 8,
                                    borderRadius: 999,
                                    background: i === active ? "#1a3d4f" : "#d1d5db",
                                    border: "none", cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* MOBILE LAYOUT (< md) */}
                <div className="flex md:hidden flex-col gap-4">
                    <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 260 }}>
                        <Image
                            key={active}
                            src={curr.image}
                            alt={curr.title}
                            fill
                            className="object-cover"
                            style={{ animation: "svcImgIn 0.45s ease forwards" }}
                            priority
                        />
                    </div>

                    <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                {curr.icon(false)}
                            </div>
                            <h3 className="text-[15px] font-semibold text-black">{curr.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">{curr.description}</p>
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex-1 relative h-px">
                                <div className="absolute inset-0 bg-gray-200 rounded-full" />
                                <div className="absolute left-0 top-0 h-px bg-[#1a3d4f] rounded-full" style={{ width: "35%" }} />
                            </div>
                            <ArrowBtn />
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 cursor-pointer"
                        onClick={() => goTo(nextIdx)}
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            {next.icon(false)}
                        </div>
                        <span className="text-sm text-gray-400 font-medium">{next.title}</span>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-2">
                        {services.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                style={{
                                    width: i === active ? 28 : 8, height: 8,
                                    borderRadius: 999,
                                    background: i === active ? "#1a3d4f" : "#d1d5db",
                                    border: "none", cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}