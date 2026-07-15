"use client";


export default function ContactSection() {
  return (
    <section className=" text-gray-300 min-h-screen py-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-[#121318] rounded-3xl p-8 md:p-12 border border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-6">

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="max-w-xl z-10 space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Contact Us
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Get in touch with our team to discuss how we can help transform
              your business. We&apos;re here to help.
            </p>

            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-6 py-3 rounded-lg transition"
            >
              Get In Touch Now
            </button>
          </div>


          {/* Chat Icon */}
          <div className="relative flex items-center justify-center w-44 h-44 md:w-56 md:h-56 z-10">

            <div className="w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full rounded-br-none shadow-2xl flex items-center justify-center gap-2">

              {[1,2,3].map((item)=>(
                <span
                  key={item}
                  className="w-3 h-3 bg-white rounded-full animate-bounce"
                />
              ))}

            </div>


            <div className="absolute bottom-2 right-0 w-24 h-24 bg-gray-100 rounded-full rounded-bl-none shadow-xl flex items-center justify-center gap-1 border-4 border-[#121318]">

              {[1,2,3].map((item)=>(
                <span
                  key={item}
                  className="w-2 h-2 bg-blue-500 rounded-full"
                />
              ))}

            </div>

          </div>

        </div>



        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


          {/* Form */}
          <div className="lg:col-span-7 bg-[#121318] border border-gray-800/60 rounded-2xl p-6 md:p-8">

            <h2 className="text-lg font-semibold text-white mb-6">
              Send Us a Message
            </h2>


            <form
              className="space-y-4"
              onSubmit={(e)=>e.preventDefault()}
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                  name="firstName"
                  required
                  type="text"
                  placeholder="First Name"
                  className="input-style"
                />


                <input
                  name="lastName"
                  required
                  type="text"
                  placeholder="Last Name"
                  className="input-style"
                />

              </div>



              <input
                name="email"
                required
                type="email"
                placeholder="Email"
                className="input-style"
              />


              <input
                name="company"
                type="text"
                placeholder="Company"
                className="input-style"
              />



              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="input-style"
              />



              <textarea
                name="message"
                required
                rows={4}
                placeholder="Message"
                className="input-style resize-none"
              />


              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-lg transition"
              >
                Send →
              </button>


            </form>

          </div>




          {/* Information */}
          <div className="lg:col-span-5 space-y-6">


            <div className="bg-[#121318] border border-gray-800/60 rounded-2xl p-6 md:p-8">

              <h2 className="text-lg font-semibold text-white mb-6">
                Contact Information
              </h2>


              <div className="space-y-5">


                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Email
                  </h4>

                  <p className="text-xs text-gray-400">
                    contact@nexvibe.tech
                  </p>
                </div>


                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Phone
                  </h4>

                  <p className="text-xs text-gray-400">
                    +880 1761-651313
                  </p>
                </div>


                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Office
                  </h4>

                  <p className="text-xs text-gray-400">
                    Remote Based<br/>
                    Bangladesh
                  </p>
                </div>


              </div>

            </div>




            <div className="bg-[#121318] border border-gray-800/60 rounded-2xl p-6 md:p-8 space-y-5">

              <h2 className="text-lg font-semibold text-white">
                Book a Consultation
              </h2>


              <p className="text-xs text-gray-400 leading-relaxed">
                Want to discuss your project? Schedule a free consultation
                and let&apos;s talk about your ideas.
              </p>


              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-lg"
              >
                Book a Meeting
              </button>


            </div>


          </div>


        </div>

      </div>


      <style jsx>{`
        .input-style {
          width:100%;
          background:#1b1c22;
          border:1px solid #27272a;
          border-radius:0.5rem;
          padding:0.75rem 1rem;
          font-size:0.875rem;
          color:white;
          outline:none;
        }

        .input-style:focus {
          border-color:#3b82f6;
        }

        .input-style::placeholder {
          color:#6b7280;
        }
      `}</style>


    </section>
  );
}