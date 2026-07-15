"use client";



export default function ContactSection() {
  return (
    <section className="text-gray-300 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-[#141414] rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">

            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Contact Us
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Get in touch with our team to discuss how we can help transform
              your business. We&apos;re here to help.
            </p>

            <button
              className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get In Touch Now
            </button>

          </div>


          {/* Chat Icon */}
          <div className="relative flex h-44 w-44 md:h-56 md:w-56 items-center justify-center">

            <div className="flex h-36 w-36 md:h-44 md:w-44 items-center justify-center gap-2 rounded-full rounded-br-none bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl">

              {[1,2,3].map((item)=>(
                <span
                  key={item}
                  className="h-3 w-3 rounded-full bg-white animate-bounce"
                />
              ))}

            </div>


            <div className="absolute bottom-2 right-0 flex h-24 w-24 items-center justify-center gap-1 rounded-full rounded-bl-none border-4 border-[#141414] bg-gray-100 shadow-xl">

              {[1,2,3].map((item)=>(
                <span
                  key={item}
                  className="h-2 w-2 rounded-full bg-blue-500"
                />
              ))}

            </div>

          </div>


        </div>



        {/* Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">


          {/* Form */}
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8 lg:col-span-7">

            <h2 className="mb-6 text-lg font-semibold text-white">
              Send Us a Message
            </h2>


            <form className="space-y-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <input
                  required
                  placeholder="First Name"
                  className="contact-input"
                />

                <input
                  required
                  placeholder="Last Name"
                  className="contact-input"
                />

              </div>


              <input
                required
                type="email"
                placeholder="Email"
                className="contact-input"
              />


              <input
                placeholder="Company"
                className="contact-input"
              />


              <input
                placeholder="Phone Number"
                className="contact-input"
              />


              <textarea
                rows={4}
                placeholder="Message"
                className="contact-input resize-none"
              />


              <button
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Send →
              </button>


            </form>

          </div>




          {/* Right Side */}
          <div className="flex h-full flex-col gap-6 lg:col-span-5">


            <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">

              <h2 className="mb-6 text-lg font-semibold text-white">
                Contact Information
              </h2>


              <div className="space-y-5">

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Email
                  </h4>
                  <p className="text-xs text-gray-400">
                    contact.nexvibe@gmail.com
                  </p>
                </div>


                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Phone
                  </h4>
                  <p className="text-xs text-gray-400">
                    +8801747874773
                  </p>
                </div>


                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Office
                  </h4>
                  <p className="text-xs text-gray-400">
                    Remote Based
                    <br />
                    Bangladesh
                  </p>
                </div>

              </div>

            </div>



            <div className="flex flex-1 flex-col justify-between space-y-5 rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">

              <h2 className="text-lg font-semibold text-white">
                Book a Consultation
              </h2>


              <p className="text-xs leading-relaxed text-gray-400">
                Want to discuss your project? Schedule a free consultation
                and let&apos;s talk about your ideas.
              </p>


              <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Book a Meeting
              </button>

            </div>


          </div>


        </div>

      </div>


      <style jsx>{`
        .contact-input {
          width: 100%;
          background: #1E1E1E;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
        }

        .contact-input:focus {
          border-color: #2563eb;
        }

        .contact-input::placeholder {
          color: #6b7280;
        }
      `}</style>

    </section>
  );
}