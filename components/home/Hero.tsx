// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
//       {/* Background Dot Grid Pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.15]" 
//         style={{
//           backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
//           backgroundSize: '24px 24px'
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

//         {/* Left Content */}
//         <div className="flex flex-col space-y-8 z-10">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
//             Transforming Data <br />
//             <span>into </span>
//             <span className="inline-block bg-[#0070f3] text-white px-5 py-1 rounded-2xl shadow-lg shadow-blue-600/20">
//               Decisions
//             </span>
//           </h1>

//           <p className="text-gray-400 text-base md:text-lg max-w-md font-normal leading-relaxed">
//             Leverage the power of machine learning and AI to unlock insights and drive business growth.
//           </p>

//           <div className="space-y-6">
//             <button className="rounded-xl bg-[#0070f3] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-600 active:scale-95">
//               Book a Meeting
//             </button>

//             <div className="flex items-center gap-3">
//               <div className="flex -space-x-2.5">
//                 {["/images/s.png", "/images/n.png", "/images/h.png"].map((src, index) => (
//                   <Image
//                     key={index}
//                     src={src}
//                     alt="client avatar"
//                     width={32}
//                     height={32}
//                     className="h-8 w-8 rounded-full border-2 border-[#0a0a0a] object-cover"
//                   />
//                 ))}
//               </div>
//               <p className="text-xs font-medium text-gray-500">
//                 Over <span className="font-semibold text-gray-400">100+ clients</span> have worked with us
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Illustration */}
//         <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          
//           {/* Radial Blue/Purple Glow Behind Robot */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

//           <motion.div
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="relative z-10 w-full max-w-[450px]"
//           >
//             <Image
//               src="/icons/robot.png"
//               alt="AI Shield Robot"
//               width={500}
//               height={500}
//               priority
//               className="object-contain drop-shadow-[0_0_35px_rgba(0,112,243,0.15)]"
//             />
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-28 md:py-36">

      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="flex flex-col space-y-10 z-10">

          {/* Heading */}
         <h1 className="text-5xl md:text-6xl font-extrabold text-white 
  leading-[1.25] md:leading-[1.3] tracking-tight"
>
  Transforming{" "}
  <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
    Data
  </span>{" "}
  into{" "}
  <span className="text-blue-400">
    Intelligent
  </span>{" "}
  <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-1 
    rounded-2xl backdrop-blur-sm border border-blue-500/20 
    shadow-[0_0_30px_rgba(0,112,243,0.25)]"
  >
    Decisions
  </span>
</h1>


          {/* Subtext */}
          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
            Leverage the power of machine learning and AI to unlock insights and drive business growth.
          </p>

          {/* CTA + Social Proof */}
          <div className="space-y-6">

            <button className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95">
              Book a Meeting
            </button>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {["/images/s.png", "/images/n.png", "/images/h.png"].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="client avatar"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-[#0a0a0a] object-cover"
                  />
                ))}
              </div>

              <p className="text-xs font-medium text-gray-500">
                Trusted by{" "}
                <span className="font-semibold text-gray-300">100+ clients</span>
              </p>
            </div>

          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center min-h-[420px] lg:min-h-[520px]">

          {/* Glow Behind Robot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full bg-blue-600/15 blur-[120px]" />
          </div>

          {/* Floating Robot */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[480px]"
          >
            <Image
              src="/icons/robot.png"
              alt="AI Robot"
              width={500}
              height={500}
              priority
              className="object-contain drop-shadow-[0_0_45px_rgba(0,112,243,0.25)]"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
