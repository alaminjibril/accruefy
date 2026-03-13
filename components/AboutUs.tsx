"use client";

import AnimatedButton from "./AnimatedButton";
import Stats from "./Stats";
import { motion } from "framer-motion";

function CheckIcon() {
    return (
        <svg
            className="w-5 h-5 text-[#6b4fa0] flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12l3 3 5.5-5.5" />
        </svg>
    );
}

const features = [
    "Expert Team of Professionals",
    "Client-Centric Approach",
    "Trusted by Industry Leaders",
    "Tailored Financial Solutions",
];

const progressStats = [
    { label: "Success in IRS Audits", value: 98, display: "98%" },
    { label: "On-Time Project Delivery", value: 95, display: "95%" },
];

export default function AboutUs() {
    return (
        <section className="bg-white w-full mb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <Stats />

                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 mt-6">

                    {/* LEFT: Images */}
                    <div className="w-full lg:flex-1 lg:max-w-[45%]">
                        <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px]">

                            {/* Top image - from TOP */}
                            <motion.div
                                initial={{ y: -80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-[55%] z-0 rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src="/about_1.avif"
                                    alt="Professional woman smiling"
                                    className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover"
                                />
                            </motion.div>

                            {/* Bottom image - from BOTTOM */}
                            <motion.div
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-[65%] z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                            >
                                <img
                                    src="/about-2.avif"
                                    alt="Team meeting around laptop"
                                    className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover"
                                />
                            </motion.div>

                            {/* Floating progress card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85, y: -20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="absolute top-[38px] sm:top-[55px] left-[28%] z-20 bg-white rounded-2xl shadow-xl p-3 sm:p-4 w-[160px] sm:w-[200px] lg:w-[220px]"
                            >
                                {progressStats.map((stat) => (
                                    <div key={stat.label} className="mb-2.5 last:mb-0">

                                        <div className="flex justify-between items-center mb-1 gap-1">
                                            <span className="text-[10px] sm:text-[11px] text-gray-600 font-medium leading-tight">
                                                {stat.label}
                                            </span>

                                            <span className="text-[10px] sm:text-[11px] font-bold text-gray-800 flex-shrink-0">
                                                {stat.display}
                                            </span>
                                        </div>

                                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${stat.value}%` }}
                                                transition={{ duration: 1, delay: 0.6 }}
                                                viewport={{ once: true }}
                                                className="bg-[#1a3d4f] h-1.5 rounded-full"
                                            />
                                        </div>

                                    </div>
                                ))}
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT: Content from RIGHT */}
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:flex-1 lg:max-w-[50%] flex flex-col gap-4 sm:gap-5 pt-2"
                    >
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                            Your trusted accounting partner awaits
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                            At Accruefy, we blend expertise with technology to deliver
                            bookkeeping, tax planning & financial consulting for businesses
                            of all sizes.
                        </p>

                        <ul className="flex flex-col gap-2.5 mt-1">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5">
                                    <CheckIcon />
                                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-6 sm:gap-8 mt-4 pt-4">
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-black">20+</p>
                                <p className="text-xs sm:text-sm text-gray-500">Years of Experience</p>
                            </div>

                            <div className="h-10 sm:h-12 w-px bg-gray-200" />

                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-black">8K</p>
                                <p className="text-xs sm:text-sm text-gray-500">Happy Clients</p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <AnimatedButton className="w-full sm:w-auto rounded-full">
                                Learn more about us
                            </AnimatedButton>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}