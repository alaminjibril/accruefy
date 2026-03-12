import AnimatedButton from "./AnimatedButton";

export default function CtaBanner() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ backgroundColor: "#1a5c6b", minHeight: "250px" }}
        >

          {/* ── Decorative circles ── */}

          {/* Large dark circle — bleeds top-left */}
          <div
            className="absolute rounded-full"
            style={{
              width: 260,
              height: 260,
              background: "#154f5d",
              top: -100,
              left: -80,
            }}
          />

          {/* Large dark circle — bleeds top-right */}
          <div
            className="absolute rounded-full"
            style={{
              width: 240,
              height: 240,
              background: "#154f5d",
              top: -80,
              right: -60,
            }}
          />

          {/* Large teal circle — behind person, center-right */}
          <div
            className="absolute rounded-full"
            style={{
              width: 340,
              height: 340,
              background: "#1d6878",
              top: "50%",
              right: "18%",
              transform: "translateY(-50%)",
            }}
          />

          {/* White quarter-circle — top right of the teal circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: 160,
              height: 160,
              background: "white",
              top: -10,
              right: "26%",
            }}
          />

          {/* White crescent — bottom right (partial circle, clipped by a second circle) */}
          {/* We simulate the crescent with two overlapping divs */}
          <div
            className="absolute"
            style={{
              width: 180,
              height: 180,
              bottom: -40,
              right: "10%",
              borderRadius: "50%",
              background: "white",
            }}
          />
          {/* Inner circle to "cut out" the crescent shape */}
          <div
            className="absolute"
            style={{
              width: 150,
              height: 150,
              bottom: -20,
              right: "12%",
              borderRadius: "50%",
              background: "#1a5c6b",
            }}
          />

          {/* ── Content ── */}
          <div className="relative z-10 flex items-center justify-between h-full px-10 sm:px-16 py-12 gap-6">

            {/* Left: heading + button */}
            <div className="flex flex-col gap-7 max-w-sm">
              <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Get expert accounting assistance now
              </h2>
              <div>
                <AnimatedButton className="px-7 py-3">
                  Get Started
                </AnimatedButton>
              </div>
            </div>

            {/* Right: person image */}
            <div className="relative flex-shrink-0 hidden sm:block" style={{ height: "300px", width: "300px" }}>
              <img
                src="/cta-person.avif"
                alt="Accounting professional"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full object-contain z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}