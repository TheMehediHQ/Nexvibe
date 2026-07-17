"use client";

import { useState, useRef } from "react";
import { UploadCloud, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Application submitted for " + jobTitle);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            First Name
          </label>
          <input className={fieldClass} placeholder="Jane" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Last Name
          </label>
          <input className={fieldClass} placeholder="Doe" required />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            className={fieldClass}
            placeholder="jane@email.com"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Phone Number
          </label>
          <input className={fieldClass} placeholder="+1 555 000 0000" required />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Headline <span className="text-slate-500">(optional)</span>
        </label>
        <input
          className={fieldClass}
          placeholder="e.g. Senior Product Designer"
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
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      </div>

      {/* CAPTCHA placeholder */}
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#141414] px-4 py-4">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4 accent-blue-600"
            required
          />
          <span className="text-sm text-slate-300">I&apos;m not a robot</span>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-xs text-slate-500">
          CAPTCHA
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <Button variant="primary" className="px-10">
          Submit Application
        </Button>
      </div>
    </form>
  );
}
