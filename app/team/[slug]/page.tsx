// app/team/[slug]/page.tsx
import BlogInsights from "@/components/BlogInsights";
import Image from "next/image";
import { notFound } from "next/navigation";

const teamData: Record<string, {
  name: string;
  role: string;
  image: string;
  bio: string;
  phone: string;
  email: string;
  location: string;
  experienceIntro: string;
  experienceBullets: string[];
  experienceFooter: string;
  story: string;
}> = {
  "alex-carter": {
    name: "Alex Carter",
    role: "Senior Accountant",
    image: "/team-1.avif",
    bio: "Alex brings precision and clarity to every financial report, ensuring businesses stay compliant and informed with reliable, accurate data.",
    phone: "415-201-2194",
    email: "parlica01@email.com",
    location: "7490 Columbia Avenue",
    experienceIntro: "Alex Carter approaches accounting with a detail-oriented mindset and a commitment to clarity. His work ensures that every number tells the right story — supporting sound decisions and long-term financial health for clients.",
    experienceBullets: [
      "Leads with accuracy and attention to detail.",
      "Transforms complex financial data into clear reports.",
      "Delivers consistent results under tight deadlines.",
      "Specialist in compliance, auditing, and financial analysis.",
      "Supports clients with dependable, proactive service.",
    ],
    experienceFooter: "Alex's commitment to excellence makes him a trusted asset for every client he serves.",
    story: "Alex Carter's journey is defined by a passion for numbers and a drive for financial clarity. With a background in accounting and business finance, he's built a career around helping organizations understand and optimize their finances. Guided by integrity, he turns challenges into opportunities for growth. Today, Alex continues to lead with purpose, shaping the financial future of businesses and clients alike.",
  },
  "ava-moore": {
    name: "Ava Moore",
    role: "Payroll Manager",
    image: "/team-2.avif",
    bio: "Ava ensures payroll runs like clockwork, balancing precision with a deep understanding of compliance and internal processes. Her calm, methodical approach keeps operations smooth and teams supported.",
    phone: "415-201-2194",
    email: "parlica01@email.com",
    location: "7490 Columbia Avenue",
    experienceIntro: "Ava Moore keeps things running with calm precision. Her work in payroll goes beyond numbers — it's about trust, consistency, and supporting people behind the process. She ensures compliance, streamlines systems, and handles challenges before they become problems. Ava is the kind of leader who sees both the fine print and the big picture, and makes both work together seamlessly.",
    experienceBullets: [
      "Leads with clarity and calm.",
      "Turns complex processes into clean workflows.",
      "Delivers accuracy under pressure.",
      "Specialist in compliance, reporting, and payroll systems.",
      "Supports teams with dependable, people-focused service.",
    ],
    experienceFooter: "Ava's methodical mindset and genuine care make her a steady force behind the scenes.",
    story: "Ava Moore's journey is defined by a passion for innovation and a relentless drive for excellence. With a background in finance and leadership, she's built a career around empowering teams and delivering impactful solutions. Guided by integrity, she thrives on turning challenges into opportunities for growth. Today, Ava continues to lead with purpose, shaping the future for both clients and communities alike.",
  },
  "marcus-webb": {
    name: "Marcus Webb",
    role: "Tax Specialist",
    image: "/team-3.avif",
    bio: "Marcus specializes in tax optimization and strategic planning, helping businesses minimize liabilities while staying fully compliant with ever-changing regulations.",
    phone: "415-201-2194",
    email: "parlica01@email.com",
    location: "7490 Columbia Avenue",
    experienceIntro: "Marcus Webb brings sharp analytical thinking to every tax challenge. He works closely with clients to uncover savings opportunities and build proactive strategies that protect their financial interests year-round.",
    experienceBullets: [
      "Leads with strategic thinking and tax expertise.",
      "Turns regulatory complexity into clear action plans.",
      "Delivers maximum savings through proactive planning.",
      "Specialist in corporate tax, deductions, and compliance.",
      "Supports clients through audits and tax season with ease.",
    ],
    experienceFooter: "Marcus's expertise and proactive approach make him an invaluable partner for businesses navigating complex tax landscapes.",
    story: "Marcus Webb's journey is defined by a passion for financial strategy and a relentless pursuit of optimal outcomes. With a background in tax law and corporate finance, he's built a career around helping businesses thrive. Guided by integrity, he turns tax challenges into opportunities for growth. Today, Marcus continues to lead with purpose, delivering clarity and confidence to every client he works with.",
  },
};

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamData[slug];
  if (!member) return notFound();

  return (
    <main className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP SECTION — image left, info right */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 mb-16">

          {/* Photo */}
          <div className="relative w-full rounded-xl overflow-hidden" style={{ height: "320px" }}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain object-top"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            {/* Role + Name + Bio */}
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400">{member.role}</p>
              <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">{member.bio}</p>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-100" />

            {/* Personal info */}
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold text-gray-900 mb-3">Personal info</h2>

              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-[120px_1fr]">
                  <span className="text-sm text-gray-900 font-medium">Phone number</span>
                  <span className="text-sm text-gray-500">{member.phone}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                  <span className="text-sm text-gray-900 font-medium">Email address</span>
                  <a href={`mailto:${member.email}`} className="text-sm text-gray-500 hover:text-[#1a3d4f] transition-colors">
                    {member.email}
                  </a>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                  <span className="text-sm text-gray-900 font-medium">Location</span>
                  <span className="text-sm text-gray-500">{member.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="flex flex-col gap-5 mb-14">
          <h2 className="text-xl font-bold text-gray-900">{member.name}'s Experience</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{member.experienceIntro}</p>

          <ul className="flex flex-col gap-2 pl-1">
            {member.experienceBullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-600 leading-relaxed">{member.experienceFooter}</p>
        </div>

        {/* STORY SECTION */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-gray-900">{member.name}'s Story</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{member.story}</p>
        </div>

      </div>
      <BlogInsights />
    </main>
  );
}