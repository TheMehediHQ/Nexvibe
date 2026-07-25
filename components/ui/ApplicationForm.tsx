"use client";

import { useState, useRef } from "react";
import { UploadCloud, X } from "lucide-react";
import { Turnstile } from "react-turnstile";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import { HONEYPOT_FIELD } from "@/lib/validations";

export default function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file?: File) => {
    if (file) setFileName(file.name);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-600 focus:outline-none transition-colors";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    if (siteKey && !turnstileToken) {
      toast.error("Please complete the CAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("position", jobTitle);
    formData.append("turnstileToken", turnstileToken || "skip");

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Application submitted successfully!", {
          description:
            "We'll review your application and contact you if you're shortlisted.",
        });
        (e.target as HTMLFormElement).reset();
        setTurnstileToken("");
        setFileName(null);
        if (inputRef.current) inputRef.current.value = "";
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="hidden"
        name={HONEYPOT_FIELD}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            First Name
          </label>
          <input
            name="firstName"
            className={fieldClass}
            placeholder="Jane"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Last Name
          </label>
          <input
            name="lastName"
            className={fieldClass}
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={fieldClass}
            placeholder="jane@email.com"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Phone Number
          </label>
          <input
            name="phone"
            className={fieldClass}
            placeholder="+1 555 000 0000"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Headline <span className="text-slate-500">(optional)</span>
        </label>
        <input
          name="headline"
          className={fieldClass}
          placeholder="e.g. Senior Product Designer"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Cover Letter <span className="text-slate-500">(optional)</span>
        </label>
        <textarea
          name="coverLetter"
          rows={4}
          className={fieldClass + " resize-none"}
          placeholder="Tell us why you're interested in this position..."
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Resume / CV
        </label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
            dragActive
              ? "border-blue-600 bg-blue-600/10"
              : "border-white/15 bg-[#141414] hover:border-white/30"
          }`}
        >
          <UploadCloud size={32} className="text-blue-500" />
          <p className="mt-3 text-sm text-slate-300">
            {fileName ? (
              <span className="inline-flex items-center gap-2 text-white">
                {fileName}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFileName(null);
                    if (inputRef.current) inputRef.current.value = "";
                  }}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </span>
            ) : (
              <>
                <span className="font-medium text-white">Click to upload</span>{" "}
                or drag and drop
              </>
            )}
          </p>
          <p className="mt-1 text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
          <input
            ref={inputRef}
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      </div>

      {/* Turnstile CAPTCHA */}
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

      <div className="flex justify-center pt-2">
        <Button
          variant="primary"
          type="submit"
          disabled={isSubmitting}
          className="w-full justify-center px-10 sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
