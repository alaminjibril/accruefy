"use client";

import { useState } from "react";
import Image from "next/image";

const posts = [
  {
    title: "Understanding the Cash Flow Statement",
    category: "Cash Flow",
    date: "Dec 28, 2024",
    image: "/blog-insight_1.avif",
  },
  {
    title: "Top Audit Preparation Tips for Businesses",
    category: "Auditing",
    date: "Dec 27, 2024",
    image: "/blog-insight_2.avif",
  },
  {
    title: "Stay Compliant with Financial Regulations",
    category: "Compliance",
    date: "Dec 26, 2024",
    image: "/blog-insight_3.avif",
  },
  {
    title: "Common Cash Flow Challenges to Avoid",
    category: "Cash Flow",
    date: "Dec 25, 2024",
    image: "/blog-insight_4.avif",
  },
];

const categories = ["All Blog", "Cash Flow", "Auditing", "Compliance"];

function CategoryPill({ label }: { label: string }) {
  return (
    <span className="inline-block bg-[#f0ece4] text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg">
      {label}
    </span>
  );
}

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All Blog");

  const filtered = activeCategory === "All Blog"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-8 leading-tight">
          Essential accounting advice and insights
        </h2>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                "px-5 py-2 rounded-lg text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid — 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <div
              key={post.title}
              className="bg-[#f0ece4] rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Image — inset with padding + rounded corners */}
              <div className="p-3">
                <div className="relative w-full rounded-xl overflow-hidden" style={{ height: "320px" }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pb-5 flex flex-col gap-3">
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <CategoryPill label={post.category} />
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}