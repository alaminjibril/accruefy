"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const navColumns = [
  {
    heading: "Main page",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Inner page",
    links: [
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Inner page",
    links: [
      { label: "Service details", href: "/services/details" },
      { label: "Team", href: "/team" },
      { label: "Team details", href: "/team/details" },
    ],
  },
  {
    heading: "Utility page",
    links: [
      { label: "License", href: "/license" },
      { label: "404 not found", href: "/404" },
    ],
  },
];

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "parlica01@email.com",
    href: "mailto:parlica01@email.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
      </svg>
    ),
    label: "415-201-2194",
    href: "tel:4152012194",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
      </svg>
    ),
    label: "7490 Columbia Avenue",
    href: "https://maps.google.com/?q=7490+Columbia+Avenue",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10A5 5 0 0112 7zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a.875.875 0 110 1.75.875.875 0 010-1.75z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4.98 3.5A2.49 2.49 0 012.5 6a2.49 2.49 0 002.48 2.5A2.49 2.49 0 007.46 6 2.49 2.49 0 004.98 3.5zM2.5 21.5h5V9.5h-5v12zm7.5 0h5v-6.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v6.5h5v-7c0-3.87-3.13-5-5-5-1.93 0-3.5.78-4.5 2V9.5h-5.5v12z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12a10 10 0 10-11.563 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988A10.003 10.003 0 0022 12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-[#e8e5de] pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TOP ROW: Logo left + Email right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_1.svg"
              alt="Accruefy logo"
              width={36}
              height={36}
              className="rounded-full object-contain"
            />
            <span className="text-xl font-bold text-gray-900 tracking-tight">ccruefy</span>
          </Link>

          <div className="flex items-center w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="bg-white text-sm text-gray-500 px-4 py-2.5 rounded-l-lg border border-gray-200 outline-none w-64 placeholder-gray-400"
            />
            <button className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-r-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
              Submit
            </button>
          </div>
        </div>

        {/* NAV COLUMNS + CONTACT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          {navColumns.map((col, i) => (
            <div key={i} className="flex flex-col gap-3">
              <p className="text-xs text-gray-400 font-medium mb-1">{col.heading}</p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-gray-900 hover:text-[#1a3d4f] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-gray-400 font-medium mb-1">Contact</p>
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-7 h-7 rounded-full bg-[#1a3d4f] flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-800">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-500 flex items-center gap-1 flex-wrap">
            Powered by
            <span className="font-semibold text-gray-700 flex items-center gap-1 mx-1">
              <svg viewBox="0 0 24 24" fill="#1a3d4f" className="w-3.5 h-3.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              Framer
            </span>
            Designed by
            <span className="font-semibold text-gray-700 flex items-center gap-1 mx-1">
              <svg viewBox="0 0 24 24" fill="#1a3d4f" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10" /></svg>
              WebOcean
            </span>
          </p>

          <div className="flex items-center gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-[#1a3d4f] flex items-center justify-center text-white hover:bg-[#0f2a38] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}