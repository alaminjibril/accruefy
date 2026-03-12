"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const team = [
  {
    name: "Alex Carter",
    role: "Senior Accountant",
    image: "/team-1.avif",
    imageHover: "/team-1-transparent.avif",
    slug: "alex-carter",
  },
  {
    name: "Ava Moore",
    role: "Payroll Manager",
    image: "/team-2.avif",
    imageHover: "/team-2-transparent.avif",
    slug: "ava-moore",
  },
  {
    name: "Marcus Webb",
    role: "Tax Specialist",
    image: "/team-3.avif",
    imageHover: "/team-3-transparent.avif",
    slug: "marcus-webb",
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;
const DURATION = 0.9;

function TeamCard({ member }: { member: typeof team[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/team/${member.slug}`}
      className="relative rounded-2xl overflow-hidden cursor-pointer bg-[#f0ece4] block"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{ y: hovered ? "18%" : "0%" }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        {/* Default Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: DURATION * 0.8, ease: EASE }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </motion.div>

        {/* Hover Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: DURATION * 0.8, ease: EASE }}
        >
          <Image
            src={member.imageHover}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </motion.div>
      </motion.div>

      {/* Beige curtain */}
      <motion.div
        className="absolute inset-x-0 top-0 bg-[#f0ece4] flex flex-col items-center text-center pt-8 pb-4 px-4 will-change-transform"
        animate={{ y: hovered ? "0%" : "-100%" }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        <h3 className="text-xl font-semibold text-gray-900">
          {member.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {member.role}
        </p>
      </motion.div>
    </Link>
  );
}

export default function Team() {
  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-10 leading-tight max-w-xs mx-auto">
          Your dedicated financial professionals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}