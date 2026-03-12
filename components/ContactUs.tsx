"use client";

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const contactItems = [
    {
        label: "Give us call",
        value: "( 691 ) 691-48991105141",
        href: "tel:69148991105141",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
        ),
    },
    {
        label: "Our Location",
        value: "90613 Swaniamki Forest",
        href: "https://maps.google.com/?q=90613+Swaniamki+Forest",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
            </svg>
        ),
    },
    {
        label: "Send us Email",
        value: "Jeanm017@hotmail.com",
        href: "mailto:Jeanm017@hotmail.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
    },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactUs() {
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.message) {
            setErrorMsg("Please fill in your name, email, and message.");
            return;
        }
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", phone: "", email: "", message: "" });
            } else {
                const data = await res.json();
                setErrorMsg(data.error || "Something went wrong. Please try again.");
                setStatus("error");
            }
        } catch {
            setErrorMsg("Network error. Please try again.");
            setStatus("error");
        }
    };

    return (
        <section className="w-full bg-white py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-4xl font-bold text-black">Contact Us</h1>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                                Whether you have questions, need support, or just want to connect, our team
                                is ready to guide you every step of the way.
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex flex-col gap-3 flex-1">
                                {contactItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="bg-[#f0ece4] rounded-xl px-4 py-4 flex items-center gap-4 hover:shadow-sm transition-shadow"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[#1a3d4f] flex items-center justify-center text-white flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                                            <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="flex-shrink-0 rounded-xl overflow-hidden hidden sm:block" style={{ width: "170px", height: "265px" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16918.77005500649!2d7.404159545665011!3d9.099236641924469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75719a095157%3A0xca5b19be21988cee!2s4%20King%20Jaja%20St%2C%20Gwarinpa%2C%20900108%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1773235908141!5m2!1sen!2sng"
                                    width="170"
                                    height="265"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title="Our Location"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — form */}
                    <div className="bg-[#f0ece4] rounded-2xl p-8 flex flex-col gap-5">

                        {/* Success state */}
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                                <div className="w-14 h-14 rounded-full bg-[#1a3d4f] flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                                <p className="text-sm text-gray-500">Thanks for reaching out. We'll get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-2 text-sm font-semibold text-[#1a3d4f] underline underline-offset-2"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700">Full name</label>
                                    <input
                                        type="text"
                                        placeholder="Ex. Jone Alex"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700">Phone number</label>
                                    <input
                                        type="tel"
                                        placeholder="Ex.(225) 555-0118"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Ex. jone@example.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700">Leave Us a Message</label>
                                    <textarea
                                        placeholder="Your message here..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        rows={5}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors resize-none"
                                    />
                                </div>

                                {errorMsg && (
                                    <p className="text-xs text-red-500">{errorMsg}</p>
                                )}

                                <AnimatedButton
                                    onClick={handleSubmit}
                                    disabled={status === "loading"}
                                    className="w-full py-3.5 rounded-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                                                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : "Submit"}
                                </AnimatedButton>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}