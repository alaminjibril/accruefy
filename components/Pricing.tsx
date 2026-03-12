import AnimatedButton from "./AnimatedButton";

const plans = [
  {
    id: 1,
    name: "Basic Package",
    description: "Essential support for small businesses and startups. Stay compliant with simple, reliable financial tracking and tax prep.",
    price: "$99",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    services: [
      "Tax Filing Assistance",
      "Basic Bookkeeping Services",
      "Financial Consultation",
      "Monthly Reports",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    description: "Perfect for growing businesses that require consistent financial oversight and strategic tax planning.",
    price: "$199",
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    services: [
      "Tax Optimizing Assistance",
      "Advanced Bookkeeping Services",
      "Financial Consultation & Solution",
      "Weekly Reports",
    ],
  },
  {
    id: 3,
    name: "Premium Package",
    description: "Designed for established businesses needing advanced financial consulting and full-scale support.",
    price: "$299",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="5" r="2" />
        <path d="M1 19c0-3.3 3.6-6 8-6s8 2.7 8 6" />
        <path d="M17 8c2.2.5 4 2.5 4 5" />
      </svg>
    ),
    services: [
      "Advanced Tax Solutions",
      "Advanced Bookkeeping Expertise",
      "Unlimited Consultation",
      "Custom reports",
    ],
  },
];

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4 flex-shrink-0 mt-0.5"
      stroke={featured ? "white" : "#1a3d4f"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12 leading-tight">
          Custom solutions at competitive rates
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={[
                "rounded-2xl flex flex-col overflow-hidden",
                plan.featured
                  ? "bg-[#1a3d4f] text-white shadow-2xl scale-[1.03] z-10"
                  : "bg-[#e8e5de] text-gray-900 shadow-md",
              ].join(" ")}
            >
              {/* Top section */}
              <div className="p-7 flex flex-col gap-4">

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: plan.featured ? "rgba(255,255,255,0.15)" : "#1a3d4f" }}
                >
                  {plan.icon}
                </div>

                {/* Name + description */}
                <div className="flex flex-col gap-2">
                  <h3 className={`text-xl font-bold leading-tight ${plan.featured ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${plan.featured ? "text-white/70" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Dashed divider */}
                <div
                  className="w-full border-t border-dashed mt-1"
                  style={{ borderColor: plan.featured ? "rgba(255,255,255,0.25)" : "#c8c4bc" }}
                />

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-semibold ${plan.featured ? "text-white/80" : "text-gray-700"}`}>
                    USD
                  </span>
                  <span className={`text-xs ${plan.featured ? "text-white/60" : "text-gray-400"}`}>
                    /month
                  </span>
                </div>

                {/* CTA Button */}
                <AnimatedButton className="w-full py-3 rounded-xl">
                  Get Started
                </AnimatedButton>
              </div>

              {/* Services box */}
              <div
                className="mx-4 mb-4 rounded-xl p-5 flex flex-col gap-3"
                style={{ background: plan.featured ? "rgba(255,255,255,0.08)" : "white" }}
              >
                <p className={`text-sm font-semibold mb-1 ${plan.featured ? "text-white" : "text-gray-800"}`}>
                  Services Included:
                </p>
                {plan.services.map((service) => (
                  <div key={service} className="flex items-start gap-2.5">
                    <CheckIcon featured={plan.featured} />
                    <span className={`text-sm leading-snug ${plan.featured ? "text-white/85 font-medium" : "text-gray-600"}`}>
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}