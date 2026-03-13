"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "96%", label: "Client Satisfaction Rate" },
  { value: "20+", label: "Years of Experience" },
  { value: "500", label: "Successful Tax Filings Annually" },
  { value: "50+", label: "Tax Professionals on Team" },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Stats() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Heading — drops in from above */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-black text-center mb-14 leading-tight"
        >
          Transforming numbers into financial success
        </motion.h2>

        {/* Stats row — each item floats up with stagger */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 px-6"
            >
              <span className="text-4xl sm:text-5xl font-light text-black tracking-tight">
                {stat.value}
              </span>
              <div className="w-full h-px bg-gray-200" />
              <span className="text-xs sm:text-sm text-gray-500 text-center leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}