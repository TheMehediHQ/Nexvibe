"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import JobCard from "@/components/ui/JobCard";
import { JOBS } from "@/lib/jobs";

// ----------------------
// FILTER CONFIG
// ----------------------
type JobFilterKey = "department" | "experienceLevel" | "jobType" | "workplaceType";

interface FilterConfig {
  key: JobFilterKey;
  label: string;
  options: string[];
}

const FILTERS: FilterConfig[] = [
  { key: "department", label: "Departments", options: ["Engineering", "Design", "Marketing", "Sales", "Human Resources"] },
  { key: "experienceLevel", label: "Experience", options: ["Entry Level", "1-3 years", "3-5 years", "5+ years"] },
  { key: "jobType", label: "Job Type", options: ["Full-time", "Part-time", "Contract", "Internship"] },
  { key: "workplaceType", label: "Workplace Type", options: ["On-site", "Remote", "Hybrid"] },
];

// ----------------------
// DROPDOWN COMPONENT
// ----------------------
interface DropdownProps {
  label: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string | null) => void;
}

function Dropdown({ label, options, selected, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-full bg-[#141414] border border-white/10 text-sm text-slate-200 hover:border-white/20 transition-colors"
      >
        <span className={selected ? "text-white" : "text-slate-400"}>
          {selected || label}
        </span>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-xl bg-[#12141c] border border-white/10 shadow-xl overflow-hidden">
          {selected && (
            <button
              onClick={() => {
                onSelect(null);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm text-slate-500 hover:bg-white/5 hover:text-slate-300 transition-colors"
            >
              Clear
            </button>
          )}

          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                selected === opt ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ----------------------
// MAIN COMPONENT
// ----------------------
export default function JobBoard() {
  const [values, setValues] = useState<Record<JobFilterKey, string | null>>({
    department: null,
    experienceLevel: null,
    jobType: null,
    workplaceType: null,
  });
  const [query, setQuery] = useState("");

  const filteredJobs = JOBS.filter((job) => {
    const q = query.trim().toLowerCase();

    const matchesQuery =
      !q ||
      job.title.toLowerCase().includes(q) ||
      job.skills.toLowerCase().includes(q) ||
      job.department.toLowerCase().includes(q);

    const matchesFilters = Object.entries(values).every(([key, val]) => {
      if (!val) return true;
      return job[key as JobFilterKey] === val;
    });

    return matchesQuery && matchesFilters;
  });

  return (
    <section className="mx-auto mt-5 max-w-7xl space-y-8">
      <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
        Open Positions
      </h2>

      {/* FILTER BAR */}
      <div className="w-full flex items-center justify-center rounded-2xl bg-[#111111]">
        <div className="w-full max-w-7xl flex flex-wrap items-center gap-3 rounded-full">
          {FILTERS.map((f) => (
            <Dropdown
              key={f.key}
              label={f.label}
              options={f.options}
              selected={values[f.key]}
              onSelect={(val) =>
                setValues((prev) => ({ ...prev, [f.key]: val }))
              }
            />
          ))}

          <div className="relative flex-[2] min-w-[220px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keywords..."
              className="w-full pl-4 pr-11 py-3 rounded-full bg-[#141414] border border-white/10 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/25 transition-colors"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors">
              <Search size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* JOB CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} applyHref={`/careers/${job.id}`} />
        ))}
      </div>
    </section>
  );
}
