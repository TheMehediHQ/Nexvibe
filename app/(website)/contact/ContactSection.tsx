
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Turnstile } from "react-turnstile";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import { HONEYPOT_FIELD } from "@/lib/validations";
import type { ContactPageContent } from "@/lib/contact";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [content, setContent] = useState<ContactPageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/api/contact/info");
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch {
        // Silently fall back to defaults if the API is unavailable
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.firstName?.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!data.lastName?.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!data.email?.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(data.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!data.message?.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    if (siteKey && !turnstileToken) {
      toast.error("Please complete the CAPTCHA.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      firstName: (formData.get("firstName") as string) || "",
      lastName: (formData.get("lastName") as string) || "",
      email: (formData.get("email") as string) || "",
      company: (formData.get("company") as string) || undefined,
      phone: (formData.get("phone") as string) || undefined,
      message: (formData.get("message") as string) || "",
    };

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    setIsSubmitting(true);

    const requestBody: Record<string, string> = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      company: data.company?.trim() || "",
      phone: data.phone?.trim() || "",
      message: data.message.trim(),
    };

    if (turnstileToken) {
      requestBody.turnstileToken = turnstileToken;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Failed to send message");
      }

      toast.success(
        content?.form.successMessage || "Message sent successfully!",
        {
          description:
            content?.form.successDescription ||
            "I'll get back to you within 24–48 hours.",
        }
      );

      if (formRef.current) {
        formRef.current.reset();
      }
      setTurnstileToken("");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || !content) {
    return (
      <section className="text-gray-300 min-h-screen py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="animate-pulse space-y-10">
            <div className="h-64 rounded-3xl bg-[#1E1E1E]" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="h-96 rounded-2xl bg-[#1E1E1E] lg:col-span-7" />
              <div className="flex h-full flex-col gap-6 lg:col-span-5">
                <div className="h-64 rounded-2xl bg-[#1E1E1E]" />
                <div className="h-48 rounded-2xl bg-[#1E1E1E]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { hero, form, contactInfo, consultation } = content;

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
              <span className="text-blue-500">{hero.title}</span> {hero.titleHighlight}
            </h1>


            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {hero.description}
            </p>

            <Button variant="primary" href={hero.ctaHref}>{hero.ctaText}</Button>

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
                src={hero.imageSrc}
                alt={hero.imageAlt}
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
              {form.heading}
            </h2>

 <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
               <input
                 type="hidden"
                 name={HONEYPOT_FIELD}
                 className="hidden"
                 tabIndex={-1}
                 autoComplete="off"
                 aria-hidden="true"
               />

               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                 <div>
                   <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-300">
                     First Name <span className="text-red-500">*</span>
                   </label>
                   <input
                     id="firstName"
                     name="firstName"
                     type="text"
                     required
                     placeholder="First Name"
                     aria-invalid={!!errors.firstName}
                     aria-describedby={errors.firstName ? "firstName-error" : undefined}
                     className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600"
                   />
                   {errors.firstName && (
                     <span id="firstName-error" className="mt-1 block text-xs text-red-500" role="alert">
                       {errors.firstName}
                     </span>
                   )}
                 </div>

                 <div>
                   <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-300">
                     Last Name <span className="text-red-500">*</span>
                   </label>
                   <input
                     id="lastName"
                     name="lastName"
                     type="text"
                     required
                     placeholder="Last Name"
                     aria-invalid={!!errors.lastName}
                     aria-describedby={errors.lastName ? "lastName-error" : undefined}
                     className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600"
                   />
                   {errors.lastName && (
                     <span id="lastName-error" className="mt-1 block text-xs text-red-500" role="alert">
                       {errors.lastName}
                     </span>
                   )}
                 </div>
               </div>

               <div>
                 <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
                   Email <span className="text-red-500">*</span>
                 </label>
                 <input
                   id="email"
                   name="email"
                   type="email"
                   required
                   placeholder="Email"
                   aria-invalid={!!errors.email}
                   aria-describedby={errors.email ? "email-error" : undefined}
                   className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600"
                 />
                 {errors.email && (
                   <span id="email-error" className="mt-1 block text-xs text-red-500" role="alert">
                     {errors.email}
                   </span>
                 )}
               </div>

               <div>
                 <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-300">
                   Company
                 </label>
                 <input
                   id="company"
                   name="company"
                   type="text"
                   placeholder="Company"
                   className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600"
                 />
               </div>

               <div>
                 <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-300">
                   Phone Number
                 </label>
                 <input
                   id="phone"
                   name="phone"
                   type="tel"
                   placeholder="Phone Number"
                   className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600"
                 />
               </div>

               <div>
                 <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-300">
                   Message <span className="text-red-500">*</span>
                 </label>
                 <textarea
                   id="message"
                   name="message"
                   rows={4}
                   required
                   placeholder="Message"
                   aria-invalid={!!errors.message}
                   aria-describedby={errors.message ? "message-error" : undefined}
                   className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-600 resize-none"
                 />
                 {errors.message && (
                   <span id="message-error" className="mt-1 block text-xs text-red-500" role="alert">
                     {errors.message}
                   </span>
                 )}
               </div>

<div className="flex justify-center py-2">
                  {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                    <Turnstile
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                      onVerify={setTurnstileToken}
                      theme="dark"
                      size="normal"
                    />
                  )}
                </div>

               <Button
                 variant="secondary"
                 type="submit"
                 disabled={isSubmitting}
                 className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm"
               >
                 {isSubmitting ? form.submittingLabel : form.submitLabel}
               </Button>
             </form>

          </div>

          {/* Right Side */}
          {/* <div className="flex h-full flex-col gap-6 lg:col-span-5">

            <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">

              <h2 className="mb-6 text-lg font-semibold text-white">
                Contact Information
              </h2>

              <div className="space-y-5">

                <div>
                  <h4 className="text-sm font-semibold text-white">Email</h4>
                  <p className="text-xs text-gray-400">{contactInfo.email}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">Phone</h4>
                  <p className="text-xs text-gray-400">{contactInfo.phone}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">Office</h4>
                  <p className="text-xs text-gray-400 whitespace-pre-line">
                    {contactInfo.office}
                  </p>
                </div>

              </div>

            </div>

            <div className="flex flex-1 flex-col justify-between space-y-5 rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">

              <h2 className="text-lg font-semibold text-white">
                {consultation.heading}
              </h2>

              <p className="text-xs leading-relaxed text-gray-400">
                {consultation.description}
              </p>

              <Button
                variant="primary"
                href={consultation.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl py-3 text-sm"
              >
                {consultation.ctaText}
              </Button>

            </div>

          </div> */}

{/* Right Side */}
<div className="flex h-full flex-col lg:col-span-5">
  {/* Contact Information */}
  <div className="flex-1 rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">
    <h2 className="mb-6 text-lg font-semibold text-white">
      Contact Information
    </h2>

    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-white">Email</h4>
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-xs text-gray-400 transition-colors hover:text-white"
        >
          {contactInfo.email}
        </a>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">Phone</h4>
        <a
          href={`tel:${contactInfo.phone}`}
          className="text-xs text-gray-400 transition-colors hover:text-white"
        >
          {contactInfo.phone}
        </a>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">Office</h4>
        <p className="whitespace-pre-line text-xs text-gray-400">
          {contactInfo.office}
        </p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h4 className="text-sm font-semibold text-white">
          Response Time
        </h4>

        <p className="mt-1 text-xs leading-relaxed text-gray-400">
          We typically respond to all inquiries within{" "}
          <span className="font-medium text-white">
            24–48 business hours.
          </span>
        </p>
      </div>

      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
        <p className="text-sm font-medium text-emerald-400">
          🟢 Currently Accepting New Projects
        </p>

        <p className="mt-2 text-xs leading-relaxed text-gray-400">
          We're available for startups, businesses, and long-term
          development partnerships.
        </p>
      </div>
    </div>
  </div>

  {/* Consultation */}
  <div className="mt-6 rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">
    <h2 className="mb-4 text-lg font-semibold text-white">
      {consultation.heading}
    </h2>

    <p className="mb-6 text-xs leading-relaxed text-gray-400">
      {consultation.description}
    </p>

    <Button
      variant="primary"
      href={consultation.ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-xl py-3 text-sm"
    >
      {consultation.ctaText}
    </Button>
  </div>
</div>

        </div>

      </div>
    </section>
  );
}
