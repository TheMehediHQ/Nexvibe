import { Palette, Smartphone, LayoutGrid, Briefcase } from "lucide-react";
import type { ComponentType } from "react";

export interface Job {
  id: string;
  title: string;
  icon: ComponentType<{ size?: number | string }>;
  department: string;
  jobType: string;
  workplaceType: string;
  experienceLevel: string;
  salaryMin: string;
  salaryMax: string;
  experience: string;
  deadline: string;
  skills: string;
  description?: string[];
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  openings?: number;
}

export const JOBS: Job[] = [
  
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    icon: LayoutGrid,
    department: "Marketing",
    jobType: "Internship",
    workplaceType: "Remote",
    experienceLevel: "Entry Level",
    salaryMin: "Negotiable",
    salaryMax: "Based on skills and performance",
    experience: "No prior experience required",
    deadline: "2026-08-15T23:59:59+06:00",
    openings: 5,
    skills:
      "SEO fundamentals, Social Media Marketing, Content Creation, Google Analytics, Meta Business Suite, Canva, Communication Skills.",
    description: [
      "NexVibe is looking for a passionate and motivated Digital Marketing Intern to join our remote team. This internship offers hands-on experience working on real-world projects while learning modern digital marketing strategies.",
      "You'll collaborate with experienced professionals, contribute to marketing campaigns, and develop practical skills in SEO, social media marketing, content creation, analytics, and paid advertising.",
    ],
    responsibilities: [
      "Assist in planning and executing digital marketing campaigns.",
      "Conduct keyword research and support SEO optimization efforts.",
      "Create and schedule engaging social media content.",
      "Assist with Meta Ads and Google Ads campaign management.",
      "Monitor campaign performance and prepare basic reports.",
      "Research competitors and industry trends.",
      "Support content marketing and email marketing initiatives.",
      "Collaborate with designers and developers on marketing projects.",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Marketing, Business, or a related field.",
      "Basic understanding of digital marketing concepts.",
      "Strong communication and organizational skills.",
      "Willingness to learn new tools and technologies.",
      "Self-motivated and able to work independently in a remote environment.",
      "Experience with Canva, Google Workspace, or Microsoft Office is a plus.",
    ],
    benefits: [
      "Remote-first work environment.",
      "Flexible working hours.",
      "Hands-on experience with real client projects.",
      "Mentorship from experienced marketing professionals.",
      "Certificate of Internship upon successful completion.",
      "Opportunity for a full-time role based on performance.",
      "Continuous learning and professional development support.",
      "Friendly, collaborative, and growth-focused team culture.",
    ],
  }
  
];

export function getJobById(id: string): Job | undefined {
  return JOBS.find((job) => job.id === id);
}

export function isDeadlinePassed(deadline: string | undefined): boolean {
  if (!deadline) {
    return true;
  }
  try {
    const deadlineDate = new Date(deadline);
    if (isNaN(deadlineDate.getTime())) {
      return true;
    }
    return deadlineDate.getTime() <= Date.now();
  } catch {
    return true;
  }
}

export function getDaysUntilDeadline(deadline: string | undefined): number {
  if (!deadline) {
    return 0;
  }
  try {
    const deadlineDate = new Date(deadline);
    if (isNaN(deadlineDate.getTime())) {
      return 0;
    }
    const diff = deadlineDate.getTime() - Date.now();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  } catch {
    return 0;
  }
}

export function formatDeadlineForDisplay(deadline: string | undefined): string {
  if (!deadline) {
    return "No deadline";
  }
  try {
    const deadlineDate = new Date(deadline);
    if (isNaN(deadlineDate.getTime())) {
      return "Invalid deadline";
    }
    return deadlineDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "Invalid deadline";
  }
}

export function isJobDeadlinePassed(jobId: string): boolean {
  const job = getJobById(jobId);
  return isDeadlinePassed(job?.deadline);
}