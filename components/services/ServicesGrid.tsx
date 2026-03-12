"use client";

import { useState } from "react";
import Image from "next/image";

const allServices = [
  {
    title: "Bookkeeping and Reporting",
    desc: "We keep your financial records accurate and provide detailed reports to support informed decisions.",
    image: "/services-1.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1a3d4f]">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
  },
  {
    title: "Cash Flow Management",
    desc: "We optimize cash flow to ensure your business remains financially stable and continues to grow.",
    image: "/services-2.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1a3d4f]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    ),
  },
  {
    title: "Personalized Tax Solutions",
    desc: "Tailored tax strategies to maximize savings and ensure complete compliance during tax season.",
    image: "/services-3.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1a3d4f]">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Financial Consulting",
    desc: "Strategic financial advice to help your business scale, plan investments, and achieve long-term goals.",
    image: "/services-4.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1a3d4f]">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: "Tax Filing Assistance",
    desc: "We handle your tax filings accurately and on time, reducing stress and avoiding costly mistakes.",
    image: "/services-5.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1a3d4f]">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
      </svg>
    ),
  },
  {
    title: "Payroll Solutions",
    desc: "Streamlined payroll processing that ensures your team is paid accurately and on schedule, every time.",
    image: "/services-6.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1a3d4f]">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
  },
];

const PAGE_SIZE = 3;

export default function ServicesGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = allServices.slice(0, visible);
  const hasMore = visible < allServices.length;

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black text-center mb-12 leading-tight">
          Achieving financial clarity<br className="hidden sm:block" /> through services
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((service) => (
            <div
              key={service.title}
              className="bg-[#f0ece4] rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image — top, no padding, full bleed */}
              <div className="relative w-full" style={{ height: "260px" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content — bottom */}
              <div className="flex flex-col gap-4 p-5 flex-1">
                {/* Icon + title row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* Arrow button — bottom right */}
                <div className="flex justify-end">
                  <button className="w-8 h-8 rounded-full bg-[#1a3d4f] flex items-center justify-center text-white hover:bg-[#0f2a38] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="bg-black text-white text-sm font-semibold px-10 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}