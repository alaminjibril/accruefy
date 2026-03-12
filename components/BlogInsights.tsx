import Image from "next/image";

const featured = {
  title: "Understanding the Cash Flow Statement",
  category: "Cash Flow",
  date: "Dec 28, 2024",
  image: "/blog-insight_1.avif",
};

const posts = [
  {
    title: "Top Audit Preparation Tips for Businesses",
    category: "Auditing",
    date: "Dec 27, 2024",
    image: "/blog-insight_2.avif",
  },
  {
    title: "Stay Compliant with Financial Regulations",
    category: "Compliance",
    date: "Dec 26, 2024",
    image: "/blog-insight_3.avif",
  },
  {
    title: "Common Cash Flow Challenges to Avoid",
    category: "Cash Flow",
    date: "Dec 25, 2024",
    image: "/blog-insight_4.avif",
  },
];

function CategoryPill({ label }: { label: string }) {
  return (
    <span className="inline-block bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg">
      {label}
    </span>
  );
}

export default function BlogInsights() {
  return (
    <section className="w-full py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-10 leading-tight">
          Essential accounting advice and insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

          {/* LEFT: Featured large card */}
          <div className="bg-[#e8e5de] rounded-lg flex flex-col cursor-pointer hover:shadow-md transition-shadow p-3 gap-4">
            {/* Image box — inset, rounded, fixed height */}
            <div className="relative w-full rounded-lg overflow-hidden flex-shrink-0" style={{ height: "390px" }}>
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            </div>
            {/* Text below image */}
            <div className="flex flex-col gap-3 px-1 pb-1">
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {featured.title}
              </h3>
              <div className="flex items-center justify-between">
                <CategoryPill label={featured.category} />
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: 3 post cards */}
          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-[#e8e5de] rounded-lg flex flex-row items-stretch cursor-pointer hover:shadow-md transition-shadow p-3 gap-4"
              >
                {/* Image box — fixed size, inset, rounded — does NOT stretch full card height */}
                <div
                  className="relative flex-shrink-0 rounded-lg overflow-hidden self-start"
                  style={{ width: "148px", height: "148px" }}
                >
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <CategoryPill label={post.category} />
                    <span className="text-xs text-gray-400 flex-shrink-0">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}