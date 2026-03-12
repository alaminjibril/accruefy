"use client";

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const plans = [
    {
        name: "Basic Package",
        price: "$99",
        tagline: "Essential support for small businesses and startups. Stay compliant with simple, reliable financial tracking and tax prep.",
        detailsTitle: "Basic Package Details",
        detailsBody: "Get peace of mind with hassle-free financial upkeep. Our Basic Package is ideal for entrepreneurs and early-stage startups who need foundational support to stay compliant and focused on growth.",
        bullets: [
            "Stay compliant with up-to-date tax filings",
            "Simplify your books with expert-led tracking",
            "Gain early insights through monthly reports",
            "Save time with straightforward financial consultations",
        ],
        footer: "Built to give you clarity, control, and confidence as you scale your operations from day one.",
    },
    {
        name: "Standard Plan",
        price: "$199",
        tagline: "The Standard Plan is crafted for growing teams who need more than just bookkeeping. With advanced reporting and frequent consultations, this plan helps you optimize decisions and reduce liabilities.",
        detailsTitle: "Standard Package Details",
        detailsBody: "Get peace of mind with hassle-free financial upkeep. Our Basic Package is ideal for entrepreneurs and early-stage startups who need foundational support to stay compliant and focused on growth.",
        bullets: [
            "Maximize tax efficiency with proactive strategies",
            "Get deeper insights through weekly reports",
            "Streamline operations with tailored financial solutions",
            "Stay audit-ready with advanced bookkeeping practices",
        ],
        footer: "This plan acts as your extended finance department—so you can focus on scaling without financial blind spots.",
    },
    {
        name: "Premium Package",
        price: "$299",
        tagline: "Designed for established businesses needing advanced financial consulting and full-scale support.",
        detailsTitle: "Premium Package Details",
        detailsBody: "For established enterprises, the Premium Package offers an all-inclusive financial partnership. From strategy to execution, we help you future-proof your financial systems.",
        bullets: [
            "Unlock unlimited access to senior consultants",
            "Receive fully customized reports and projections",
            "Optimize every dollar with enterprise-level tax planning",
            "Manage complexity with high-level bookkeeping expertise",
        ],
        footer: "Built for companies that demand excellence, this package ensures you're equipped for sustainable growth, investor confidence, and operational efficiency.",
    },
];

function PlanBlock({ plan }: { plan: typeof plans[0] }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-black">{plan.price}</span>
                <span className="text-sm font-semibold text-black">USD</span>
                <span className="text-xs text-gray-400">/ month</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{plan.tagline}</p>
            <div className="w-full border-t border-gray-200" />
            <h4 className="text-base font-bold text-black">{plan.detailsTitle}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{plan.detailsBody}</p>
            <ul className="flex flex-col gap-2">
                {plan.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {b}
                    </li>
                ))}
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">{plan.footer}</p>
        </div>
    );
}

type Status = "idle" | "loading" | "success" | "error";

function CustomPackageForm() {
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async () => {
        if (!form.name || !form.email) {
            setErrorMsg("Please fill in your name and email.");
            return;
        }
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/custom-package", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", phone: "", email: "" });
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

    if (status === "success") {
        return (
            <div className="bg-[#f0ece4] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#1a3d4f] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900">Request Received!</h3>
                <p className="text-sm text-gray-500">We'll reach out shortly to discuss your custom package.</p>
                <button onClick={() => setStatus("idle")} className="text-sm font-semibold text-[#1a3d4f] underline underline-offset-2">
                    Submit another
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            <p className="text-base font-semibold text-black leading-snug">
                Want to create a Custom Package? Fill out the form and receive a call from us.
            </p>
            <div className="bg-[#f0ece4] rounded-2xl p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Full name</label>
                    <input
                        type="text"
                        placeholder="Ex. Jone Alex"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Phone number</label>
                    <input
                        type="tel"
                        placeholder="Ex.(225) 555-0118"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        placeholder="Ex. jone@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors"
                    />
                </div>

                {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}

                <AnimatedButton
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-lg mt-1 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            </div>
        </div>
    );
}

export default function PricingDetails() {
    return (
        <section className="w-full bg-white py-16 lg:py-20">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-14">
                    What we offer on every package
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14">
                    <PlanBlock plan={plans[0]} />
                    <PlanBlock plan={plans[1]} />
                    <PlanBlock plan={plans[2]} />
                    <CustomPackageForm />
                </div>
            </div>
        </section>
    );
}