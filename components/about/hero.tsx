"use client";

import Image from "next/image";
import { useState } from "react";
import AnimatedButton from "../AnimatedButton";

export default function AboutHero() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto  lg:py-10 py-16 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

                    {/* LEFT — tall portrait image */}
                    <div className="relative w-full rounded-lg overflow-hidden hidden lg:block" style={{ height: "340px" }}>
                        <Image
                            src="/about_hero_1.avif"
                            alt="Team member"
                            fill
                            className="object-cover object-top rounded-lg"
                        />
                    </div>

                    {/* CENTER — heading, description, button */}
                    <div className="flex flex-col items-center text-center gap-5 px-2">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight">
                            Building trust through financial excellence
                        </h1>
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                            Accruefy simplifies complex finances into clear strategies,
                            helping your business grow with confidence.
                        </p>
                        <AnimatedButton className="px-8 py-3">Contact Us</AnimatedButton>
                    </div>

                    {/* RIGHT — two stacked landscape images */}
                    <div className="hidden lg:flex flex-col gap-4">
                        <div className="relative w-full rounded-lg overflow-hidden" style={{ height: "95px" }}>
                            <Image
                                src="/about_hero_2.avif"
                                alt="Team meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-full rounded-lg overflow-hidden" style={{ height: "250px" }}>
                            <Image
                                src="/about_hero_3.avif"
                                alt="Team collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}