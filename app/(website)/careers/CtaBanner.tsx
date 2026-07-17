"use client";

export default function CtaBanner() {
  return (
    <div className="relative overflow-hidden space-y-8 mx-auto max-w-5xl mt-5 bg-[#141414] rounded-3xl border border-white/10 py-14 px-6 md:py-16 text-center">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Radial fade so grid is subtle near edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #141414 90%)",
        }}
      />

      <div className="relative z-10 space-y-5">
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          READY TO DISCUSS
        </h2>

        <p className="text-gray-300 text-sm md:text-base">
          Your Product Needs With{" "}
          <span className="text-blue-500 font-semibold">Catalyst Analytic</span>{" "}
          Experts?
        </p>

        <div>
          <button className="rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold px-8 py-3">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}