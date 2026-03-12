import Image from "next/image";

const values = [
  {
    title: "Integrity",
    desc: "We uphold honesty.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2a5 5 0 110 10A5 5 0 0112 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/>
      </svg>
    ),
  },
  {
    title: "Client-Centricity",
    desc: "We prioritize clients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: "Trust",
    desc: "Trust drives everything.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
  {
    title: "Excellence",
    desc: "Excellence defines us.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2l2.83 6.17L22 9.27l-5.5 5.36L17.66 22 12 18.77 6.34 22l1.16-7.37L2 9.27l7.17-1.1L12 2z"/>
      </svg>
    ),
  },
];

export default function AboutValues() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — heading, description, 2x2 value cards */}
          <div className="flex flex-col gap-8">
            {/* Heading + description */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                How we guide your success
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                We value trust, use our expertise to guide you, and focus on clear, honest
                support that helps your business grow.
              </p>
            </div>

            {/* 2x2 grid of value cards */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#f0ece4] rounded-xl p-6 flex flex-col items-center text-center gap-3"
                >
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-full bg-[#1a3d4f] flex items-center justify-center text-white flex-shrink-0">
                    {v.icon}
                  </div>
                  <p className="text-sm font-bold text-gray-900">{v.title}</p>
                  <p className="text-xs text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/about-values.avif"
              alt="Visual representation of growth and values"
              width={620}
              height={560}
              className="object-cover w-full h-[460px] lg:h-[540px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}