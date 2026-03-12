"use client";

import AnimatedButton from "./AnimatedButton";

// Checkmark icon
function CheckIcon() {
    return (
        <svg
            className="w-5 h-5 text-[#6b4fa0] flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 12l3 3 5.5-5.5"
            />
        </svg>
    );
}

export default function AboutUs() {
    const stats = [
        { value: "96%", label: "Client Satisfaction Rate" },
        { value: "20+", label: "Years of Experience" },
        { value: "500", label: "Successful Tax Filings Annually" },
        { value: "50+", label: "Tax Professionals on Team" },
    ];

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

    return (
        <section className="bg-white w-full py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* ---- TOP: Heading + Stats ---- */}
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 px-2">
                        Transforming numbers into financial success
                    </h2>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-t border-gray-200 pt-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <span className="text-2xl sm:text-3xl font-bold text-black">
                                    {stat.value}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-500 text-center px-2">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---- BOTTOM: Images Left + Content Right ---- */}
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 mt-6">

                    {/* LEFT: Overlapping images */}
                    <div className="w-full lg:flex-1 lg:max-w-[45%]">
                        <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px]">

                            {/* Back image — portrait (top-left, behind) */}
                            <div className="absolute top-0 left-0 w-[55%] z-0 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/about_1.avif"
                                    alt="Professional woman smiling"
                                    className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover"
                                />
                            </div>

                            {/* Front image — team meeting (bottom-right, on top) */}
                            <div className="absolute bottom-0 right-0 w-[65%] z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <img
                                    src="/about-2.avif"
                                    alt="Team meeting around laptop"
                                    className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover"
                                />
                            </div>

                            {/* Floating progress card */}
                            <div className="absolute top-[38px] sm:top-[55px] left-[28%] z-20 bg-white rounded-2xl shadow-xl p-3 sm:p-4 w-[160px] sm:w-[200px] lg:w-[220px]">
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
                                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                                            <div
                                                className="bg-[#1a3d4f] h-1.5 rounded-full"
                                                style={{ width: `${stat.value}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Content */}
                    <div className="w-full lg:flex-1 lg:max-w-[50%] flex flex-col gap-4 sm:gap-5 pt-2">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                            Your trusted accounting partner awaits
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                            At Accruefy, we blend expertise with technology to deliver
                            bookkeeping, tax planning &amp; financial consulting for businesses
                            of all sizes.
                        </p>

                        {/* Feature list */}
                        <ul className="flex flex-col gap-2.5 mt-1">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5">
                                    <CheckIcon />
                                    <span className="text-sm text-gray-700 font-medium">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Bottom stats + divider */}
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

                        {/* CTA */}
                        <div className="mt-2">
                            <AnimatedButton className="w-full sm:w-auto rounded-full">
                                Learn more about us
                            </AnimatedButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}