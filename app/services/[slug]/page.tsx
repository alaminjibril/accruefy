// app/services/[slug]/page.tsx
"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";

const servicesData: Record<string, {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  aboutTitle: string;
  aboutBody: string[];
  bullets: string[];
  aboutFooter: string;
  whatTitle: string;
  whatBody: string;
}> = {
  "bookkeeping-and-reporting": {
    title: "Bookkeeping and Reporting",
    description: "We keep your financial records accurate and provide detailed reports to support informed decisions.",
    image: "/services-1.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#1a3d4f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="8" rx="1" /><rect x="10" y="3" width="12" height="4" rx="1" />
        <rect x="10" y="11" width="12" height="8" rx="1" /><rect x="2" y="15" width="6" height="4" rx="1" />
      </svg>
    ),
    aboutTitle: "About our service details",
    aboutBody: [
      "At Accruefy, we bring clarity and control to your financial records with professional bookkeeping and reporting services. Our team ensures that your transactions are accurately recorded, categorized, and reconciled, giving you a real-time view of your financial health. We tailor our systems to suit your business model, providing reports that are not only compliant with accounting standards but also valuable for internal decision-making.",
      "From daily transaction logging to monthly financial reports, our process is built for consistency, transparency, and accuracy. We help you track where your money goes and highlight areas for improvement, enabling smarter forecasting and stronger financial planning.",
    ],
    bullets: [
      "Dedicated experts focused on your financial growth",
      "Customized accounting solutions tailored to your needs",
      "Reliable and timely reporting for better business planning",
      "Strategic advice to maximize savings and compliance",
      "Real-time insights into cash flow and expenses",
      "Transparent processes with full data accessibility",
      "Support for startups, growing businesses, and individuals",
      "Ongoing consultation to adapt as your business evolves",
      "Proactive planning for taxes and regulatory updates",
      "Complete peace of mind with professional financial care",
    ],
    aboutFooter: "We believe that your numbers should work for you — not against you. That's why our bookkeeping and reporting services go beyond data entry. We provide actionable insights and consistent support to help you stay organized, compliant, and financially prepared for whatever comes next.",
    whatTitle: "What's part of the service",
    whatBody: "With Accruefy's bookkeeping and reporting solutions, you get detailed financial statements, ledger management, bank reconciliations, and performance tracking — all designed to give you a solid foundation for growth. Whether you need weekly updates or monthly overviews, we align our services with your pace, ensuring accuracy and timeliness every step of the way.",
  },
  "cash-flow-management": {
    title: "Cash Flow Management",
    description: "We optimize cash flow to ensure your business remains financially stable and continues to grow.",
    image: "/services-2.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#1a3d4f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    aboutTitle: "About our service details",
    aboutBody: [
      "At Accruefy, we help businesses take full control of their cash flow with strategic monitoring and forecasting. We analyze inflows and outflows to ensure your business always has the liquidity it needs to operate and grow confidently.",
      "Our team builds custom cash flow models tailored to your business cycle, helping you anticipate shortfalls, plan for growth, and make informed spending decisions.",
    ],
    bullets: [
      "Real-time cash flow monitoring and tracking",
      "Custom forecasting models for your business cycle",
      "Early identification of cash flow risks",
      "Strategies to improve receivables and payables",
      "Monthly cash flow reports and trend analysis",
      "Support for seasonal businesses and variable revenue",
      "Integration with your existing accounting tools",
      "Proactive advice to prevent cash crunches",
      "Tailored solutions for startups and enterprises",
      "Ongoing guidance to maintain financial stability",
    ],
    aboutFooter: "With the right cash flow strategy, your business can grow with confidence. We give you the visibility and tools to stay ahead of financial challenges before they arise.",
    whatTitle: "What's part of the service",
    whatBody: "Our cash flow management service includes cash flow statements, rolling forecasts, receivables and payables tracking, and liquidity analysis — all tailored to keep your business financially stable and ready for opportunities.",
  },
  "personalized-tax-solutions": {
    title: "Personalized Tax Solutions",
    description: "Tailored tax strategies to maximize savings and ensure complete compliance during tax season.",
    image: "/services-3.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#1a3d4f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
    aboutTitle: "About our service details",
    aboutBody: [
      "Accruefy delivers personalized tax strategies designed around your unique financial situation. We go beyond standard tax filing to proactively identify savings opportunities and ensure full compliance year-round.",
      "Our tax professionals work closely with you to understand your goals, structure your finances strategically, and minimize your tax liability while keeping you fully compliant with current regulations.",
    ],
    bullets: [
      "Personalized tax planning for individuals and businesses",
      "Proactive identification of deductions and credits",
      "Year-round tax strategy — not just at filing time",
      "Expert guidance on tax law changes",
      "Full compliance with local and federal regulations",
      "Support for complex tax situations and multi-entity structures",
      "Tax-efficient investment and business planning",
      "Audit support and representation",
      "Timely filing with zero penalties",
      "Ongoing tax advisory as your business grows",
    ],
    aboutFooter: "We believe smart tax planning is a year-round discipline, not a once-a-year event. Our team is always working to keep more money in your pocket legally and strategically.",
    whatTitle: "What's part of the service",
    whatBody: "Our personalized tax solutions include tax planning sessions, return preparation, deduction optimization, and compliance monitoring — all designed to reduce your tax burden and give you confidence through every financial decision.",
  },
  "tax-filing-assistance": {
    title: "Tax Filing Assistance",
    description: "Accurate, timely tax filing services to meet deadlines and minimize any potential penalties.",
    image: "/services-4.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#1a3d4f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M8.5 12l2.5 2.5 4.5-4.5" />
      </svg>
    ),
    aboutTitle: "About our service details",
    aboutBody: [
      "Accruefy handles your tax filings with precision, ensuring every form is completed accurately and submitted on time. We take the stress out of tax season so you can focus on what matters most — running your business.",
      "Our team stays current with the latest tax codes and filing requirements, so nothing slips through the cracks. From simple returns to complex multi-entity filings, we handle it all with care and expertise.",
    ],
    bullets: [
      "Accurate preparation of all required tax forms",
      "On-time filing to avoid penalties and interest",
      "Support for individual, business, and entity returns",
      "Electronic filing for faster processing",
      "Review of prior returns to catch missed deductions",
      "Clear communication throughout the process",
      "Secure handling of all financial documents",
      "Support for amended returns if needed",
      "Coordination with payroll and bookkeeping data",
      "Post-filing support and audit readiness",
    ],
    aboutFooter: "We make tax filing simple, accurate, and stress-free. Our team handles every detail so you never miss a deadline or leave money on the table.",
    whatTitle: "What's part of the service",
    whatBody: "Our tax filing assistance includes federal and state return preparation, document collection and review, electronic submission, and post-filing support — giving you a complete, worry-free filing experience every year.",
  },
  "financial-consulting": {
    title: "Financial Consulting",
    description: "Expert advice to help you make smart financial decisions and scale your business effectively.",
    image: "/services-5.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#1a3d4f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" /><circle cx="17" cy="5" r="2" /><path d="M1 19c0-3.3 3.6-6 8-6s8 2.7 8 6" /><path d="M17 8c2.2.5 4 2.5 4 5" />
      </svg>
    ),
    aboutTitle: "About our service details",
    aboutBody: [
      "Accruefy's financial consulting service provides expert, objective guidance to help your business grow strategically. We analyze your financial position, identify opportunities, and build actionable plans aligned with your goals.",
      "Whether you're planning an expansion, navigating a challenge, or preparing for investment, our consultants bring the insight and experience to guide every critical decision.",
    ],
    bullets: [
      "Strategic financial planning and goal-setting",
      "Business performance analysis and benchmarking",
      "Investment planning and capital allocation advice",
      "Risk assessment and mitigation strategies",
      "Support for mergers, acquisitions, and exits",
      "Financial modeling and scenario planning",
      "Cash flow and profitability optimization",
      "Budgeting and forecasting frameworks",
      "Guidance on funding and financing options",
      "Ongoing advisory as your business evolves",
    ],
    aboutFooter: "Great financial decisions start with great advice. Our consultants partner with you for the long term, providing the clarity and strategy you need to grow with confidence.",
    whatTitle: "What's part of the service",
    whatBody: "Our financial consulting service covers business financial reviews, strategic planning sessions, financial modeling, and ongoing advisory support — all designed to align your finances with your long-term business vision.",
  },
  "custom-payroll-solutions": {
    title: "Custom Payroll Solutions",
    description: "We manage payroll end-to-end ensuring accuracy, compliance, and timely payments for your team.",
    image: "/services-6.avif",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#1a3d4f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3" /><circle cx="16" cy="8" r="3" /><circle cx="12" cy="17" r="3" />
        <line x1="8" y1="11" x2="12" y2="14" /><line x1="16" y1="11" x2="12" y2="14" />
      </svg>
    ),
    aboutTitle: "About our service details",
    aboutBody: [
      "Accruefy takes the complexity out of payroll with fully managed, end-to-end solutions designed for businesses of all sizes. We handle everything from employee setup to tax withholdings, ensuring your team is always paid accurately and on time.",
      "Our payroll systems are built for compliance, integrating seamlessly with your HR and accounting processes while staying current with changing labor laws and tax regulations.",
    ],
    bullets: [
      "Full-service payroll processing for any team size",
      "Accurate tax withholding and remittance",
      "Direct deposit and payment management",
      "Employee onboarding and offboarding support",
      "Compliance with federal and state payroll laws",
      "Integration with your accounting and HR systems",
      "Year-end W-2 and 1099 preparation",
      "Detailed payroll reports and audit trails",
      "Support for hourly, salaried, and contract workers",
      "Dedicated support for payroll questions and issues",
    ],
    aboutFooter: "Reliable payroll is the foundation of a happy, productive team. We make sure every payment is right, every time — so you can focus on growing your business.",
    whatTitle: "What's part of the service",
    whatBody: "Our custom payroll solutions include full payroll processing, tax filing, compliance management, employee records, and year-end reporting — giving you a complete, worry-free payroll experience tailored to your business.",
  },
};

type Status = "idle" | "loading" | "success" | "error";

function CallForm() {
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
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="w-12 h-12 rounded-full bg-[#1a3d4f] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <p className="text-sm font-bold text-gray-900">Request received!</p>
        <p className="text-xs text-gray-500">We'll call you shortly.</p>
        <button onClick={() => setStatus("idle")} className="text-xs text-[#1a3d4f] underline underline-offset-2">Submit another</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-gray-700">Full name</label>
        <input type="text" placeholder="Ex. Jone Alex" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-gray-700">Phone number</label>
        <input type="tel" placeholder="Ex.(225) 555-0118" value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-gray-700">Email Address</label>
        <input type="email" placeholder="Ex. jone@example.com" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-[#1a3d4f] transition-colors" />
      </div>
      {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}
      <button onClick={handleSubmit} disabled={status === "loading"}
        className="w-full bg-black text-white text-sm font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
        {status === "loading" ? (
          <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>Sending...</>
        ) : "Submit"}
      </button>
    </div>
  );
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = servicesData[slug];
  if (!service) return notFound();

  return (
    <main className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* HERO — icon, title, description, image */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-[#f0ece4] flex items-center justify-center">
            {service.icon}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-black">{service.title}</h1>
          <p className="text-sm text-gray-500 max-w-md leading-relaxed">{service.description}</p>
        </div>

        {/* Full-width image */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-14" style={{ height: "420px" }}>
          <Image src={service.image} alt={service.title} fill className="object-cover" priority />
        </div>

        {/* MAIN CONTENT — left body + right form */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">

          {/* LEFT — about + bullets + what's part */}
          <div className="flex flex-col gap-8">

            {/* About section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-gray-900">{service.aboutTitle}</h2>
              {service.aboutBody.map((p, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed">{p}</p>
              ))}
              <ul className="flex flex-col gap-2 pl-1">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed">{service.aboutFooter}</p>
            </div>

            {/* What's part */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-gray-900">{service.whatTitle}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{service.whatBody}</p>
            </div>

          </div>

          {/* RIGHT — sticky call form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#f0ece4] rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="text-base font-bold text-gray-900 leading-snug">
                Receive a call from our accountants
              </h3>
              <CallForm />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}