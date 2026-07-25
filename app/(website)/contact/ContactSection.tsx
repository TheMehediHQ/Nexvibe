"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phoneNumber: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast.success(result.message || "Message sent successfully!");
        reset();
      } else {
        toast.error(result.error || "Failed to send message.");
        console.log(result.error);
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.log(err)
    }
  };

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
              <span className="text-blue-500">Contact</span> Us
            </h1>


            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Get in touch with our team to discuss how we can help transform
              your business. We&apos;re here to help.
            </p>

            <Button variant="primary" href="/contact">Get In Touch Now</Button>

          </div>

          {/* Chat Icon */}
          <div className="relative flex h-44 w-44 md:h-56 md:w-56 items-center justify-center">

            {/* Glow Background */}
            <div className="
    absolute inset-0 
    rounded-full 
    bg-blue-500/20 
    blur-3xl 
    animate-pulse
  " />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/icons/contact-hero.png"
                alt="Contact Icon"
                width={220}
                height={220}
                className="h-40 w-40 md:h-52 md:w-52 object-contain"
              />
            </motion.div>

          </div>




        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">

          {/* Form */}
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8 lg:col-span-7">

            <h2 className="mb-6 text-lg font-semibold text-white">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot field (hidden from real users, bots will fill it) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  autoComplete="off"
                  {...register("website")}
                  placeholder="Leave this empty"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("firstName")}
                    placeholder="First Name"
                    className={cn(
                      "w-full bg-[#1E1E1E] border rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600 transition-all",
                      errors.firstName ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                    )}
                  />
                  {errors.firstName && (
                    <span className="text-red-400 text-xs mt-1 block px-1">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    {...register("lastName")}
                    placeholder="Last Name"
                    className={cn(
                      "w-full bg-[#1E1E1E] border rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600 transition-all",
                      errors.lastName ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                    )}
                  />
                  {errors.lastName && (
                    <span className="text-red-400 text-xs mt-1 block px-1">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className={cn(
                    "w-full bg-[#1E1E1E] border rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600 transition-all",
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                  )}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1 block px-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  {...register("company")}
                  placeholder="Company (Optional)"
                  className={cn(
                    "w-full bg-[#1E1E1E] border rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600 transition-all",
                    errors.company ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                  )}
                />
                {errors.company && (
                  <span className="text-red-400 text-xs mt-1 block px-1">
                    {errors.company.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  {...register("phoneNumber")}
                  placeholder="Phone Number (Optional)"
                  className={cn(
                    "w-full bg-[#1E1E1E] border rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600 transition-all",
                    errors.phoneNumber ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                  )}
                />
                {errors.phoneNumber && (
                  <span className="text-red-400 text-xs mt-1 block px-1">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>

              <div>
                <textarea
                  rows={4}
                  {...register("message")}
                  placeholder="Message"
                  className={cn(
                    "w-full bg-[#1E1E1E] border rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600 resize-none transition-all",
                    errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                  )}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs mt-1 block px-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button
                variant="secondary"
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#4ba3f5] border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
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
                  <h4 className="text-sm font-semibold text-white">Email</h4>
                  <p className="text-xs text-gray-400">contact.nexvibe@gmail.com</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">Phone</h4>
                  <p className="text-xs text-gray-400">+8801747874773</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">Office</h4>
                  <p className="text-xs text-gray-400">
                    Remote Based <br /> Bangladesh
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

              <Button
                variant="primary"
                href="https://cal.com/TheMehediHQ/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl py-3 text-sm"
              >
                Book a Meeting
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
