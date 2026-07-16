"use client";

import { Palette, Smartphone, LayoutGrid, Briefcase } from "lucide-react";

type Job = {
  id: string;
  title: string;
  icon: React.ElementType;
  salaryMin: string;
  salaryMax: string;
  experience: string;
  deadline: string;
  skills: string;
};

const JOBS: Job[] = [
  {
    id: "web-designer",
    title: "Web Designer",
    icon: Palette,
    salaryMin: "$45,000",
    salaryMax: "$60,000 per year",
    experience: "1+ year",
    deadline: "30/09/2025",
    skills:
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    icon: Smartphone,
    salaryMin: "$55,000",
    salaryMax: "$75,000 per year",
    experience: "2+ years",
    deadline: "15/10/2025",
    skills:
      "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    icon: LayoutGrid,
    salaryMin: "$50,000",
    salaryMax: "$65,000 per year",
    experience: "3+ years",
    deadline: "20/11/2025",
    skills:
      "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    icon: Briefcase,
    salaryMin: "$60,000",
    salaryMax: "$80,000 per year",
    experience: "5+ years",
    deadline: "05/12/2025",
    skills:
      "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
  },
];

function JobCard({ job }: { job: Job }) {
  const Icon = job.icon;

  return (
    <div className="rounded-2xl bg-[#141414]  border border-white/10 p-6 flex flex-col gap-5">
      {/* Title */}
      <div className="flex items-center gap-3 ">
        <div className="flex h-9  items-center justify-center rounded-lg bg-white/4 text-blue-500 p-2">
          <Icon size={18} />
        </div>
        <h3 className="text-white font-semibold tracking-wide uppercase text-sm md:text-base">
          {job.title}
        </h3>
      </div>

      {/* Meta pills */}
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300">
          Salary · {job.salaryMin} - {job.salaryMax}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 -mt-3">
        <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300">
          Experience · {job.experience}
        </span>
        <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300">
          Deadline · {job.deadline}
        </span>
      </div>

      {/* Skills */}
      <div>
        <h4 className="text-white text-sm font-semibold mb-1">Skills</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{job.skills}</p>
      </div>

      {/* CTA */}
      <button className="mt-auto rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold py-3">
        Apply Now
      </button>
    </div>
  );
}

export default function JobListings() {
  return (
    <div className="space-y-8 mx-auto max-w-5xl mt-5">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
        Open Positions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}