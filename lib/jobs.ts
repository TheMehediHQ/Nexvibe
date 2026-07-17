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
}

export const JOBS: Job[] = [
  {
    id: "web-designer",
    title: "Web Designer",
    icon: Palette,
    department: "Design",
    jobType: "Full-time",
    workplaceType: "Remote",
    experienceLevel: "1-3 years",
    salaryMin: "$45,000",
    salaryMax: "$60,000 per year",
    experience: "1+ year",
    deadline: "30/09/2025",
    skills:
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
    description: [
      "We are looking for a passionate Web Designer to craft visually stunning, user-centric digital experiences for our global client base. You will collaborate closely with developers and strategists to translate brand goals into pixel-perfect interfaces.",
      "This is a fully remote role where you will own the visual direction of multiple projects, from early wireframes to polished production-ready designs, while mentoring junior designers and shaping our design system.",
      "If you live and breathe typography, whitespace, and motion, and you care deeply about accessibility and performance, this is the role for you.",
    ],
    responsibilities: [
      "Design responsive websites, landing pages, and dashboards that meet brand and accessibility standards.",
      "Build and maintain a reusable component library within our design system.",
      "Collaborate with developers to ensure faithful implementation of designs.",
      "Present concepts to stakeholders and incorporate feedback iteratively.",
      "Conduct usability testing and apply insights to improve experiences.",
    ],
    requirements: [
      "1+ year of professional web or product design experience.",
      "Strong portfolio demonstrating UI/UX and visual design skills.",
      "Proficiency with Adobe Creative Suite and Figma.",
      "Solid understanding of HTML/CSS and responsive design principles.",
      "Excellent communication and time-management skills.",
    ],
    benefits: [
      "Fully remote work with flexible hours and a worldwide team.",
      "Competitive salary, annual reviews, and performance bonuses.",
      "Learning budget, latest hardware, and paid time off.",
    ],
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    icon: Smartphone,
    department: "Engineering",
    jobType: "Full-time",
    workplaceType: "Hybrid",
    experienceLevel: "2+ years",
    salaryMin: "$55,000",
    salaryMax: "$75,000 per year",
    experience: "2+ years",
    deadline: "15/10/2025",
    skills:
      "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
    description: [
      "Join our engineering team as a Mobile App Developer and build high-quality native apps that delight millions of users. You will work across the full lifecycle, from architecture to release on the App Store and Play Store.",
      "This hybrid role blends autonomy with close collaboration. You will pair with designers and backend engineers to ship features quickly without compromising on quality or performance.",
    ],
    responsibilities: [
      "Design and build advanced native applications for iOS and Android.",
      "Collaborate with cross-functional teams to define and ship features.",
      "Write clean, maintainable, and well-tested code.",
      "Troubleshoot, debug, and optimize app performance.",
      "Stay up to date with mobile platform best practices and trends.",
    ],
    requirements: [
      "2+ years of mobile development experience (Swift, Kotlin, or React Native).",
      "Strong understanding of mobile design patterns and architecture.",
      "Experience with REST APIs and offline-first data sync.",
      "Familiarity with automated testing and CI/CD pipelines.",
      "Solid problem-solving and communication skills.",
    ],
    benefits: [
      "Hybrid schedule with remote-friendly flexibility.",
      "Health coverage, retirement plan, and wellness stipend.",
      "Conference budget and continuous learning opportunities.",
    ],
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    icon: LayoutGrid,
    department: "Marketing",
    jobType: "Full-time",
    workplaceType: "Remote",
    experienceLevel: "3-5 years",
    salaryMin: "$50,000",
    salaryMax: "$65,000 per year",
    experience: "3+ years",
    deadline: "20/11/2025",
    skills:
      "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
    description: [
      "We are hiring a Digital Marketing Specialist to grow our clients' online presence through data-driven campaigns. You will own channel strategy across search, social, and paid media.",
      "In this remote role you will analyze performance, run experiments, and partner with creative teams to produce compelling campaigns that convert.",
    ],
    responsibilities: [
      "Plan and execute SEO, SEM, and social media marketing campaigns.",
      "Monitor KPIs and report on campaign performance with actionable insights.",
      "Manage paid acquisition budgets across multiple platforms.",
      "Collaborate on content strategy and marketing copy.",
      "Run A/B tests to optimize funnels and conversion rates.",
    ],
    requirements: [
      "3+ years of digital marketing experience.",
      "Hands-on experience with Google Analytics and ad platforms.",
      "Strong understanding of SEO and content marketing.",
      "Analytical mindset with comfort in data interpretation.",
      "Excellent written and verbal communication.",
    ],
    benefits: [
      "Fully remote with a flexible, results-oriented culture.",
      "Competitive pay and performance-based incentives.",
      "Home office stipend and professional development budget.",
    ],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    icon: Briefcase,
    department: "Human Resources",
    jobType: "Full-time",
    workplaceType: "On-site",
    experienceLevel: "5+ years",
    salaryMin: "$60,000",
    salaryMax: "$80,000 per year",
    experience: "5+ years",
    deadline: "05/12/2025",
    skills:
      "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
    description: [
      "We are seeking an experienced Project Manager to lead cross-functional teams and deliver complex digital products on time and on budget. You will be the connective tissue between clients, designers, and engineers.",
      "This on-site role requires a calm, organized operator who can balance scope, quality, and speed while keeping stakeholders aligned.",
    ],
    responsibilities: [
      "Define project scope, goals, and deliverables with stakeholders.",
      "Create and manage detailed project plans and timelines.",
      "Coordinate resources across design, engineering, and QA.",
      "Track progress, manage risks, and report status consistently.",
      "Facilitate Agile ceremonies and remove team blockers.",
    ],
    requirements: [
      "5+ years of project management experience in tech or agency settings.",
      "Proven track record delivering software products successfully.",
      "Strong knowledge of Agile/Scrum methodologies.",
      "Excellent organizational and stakeholder communication skills.",
      "Familiarity with tools like Jira, Asana, or Linear.",
    ],
    benefits: [
      "On-site collaboration in a modern, vibrant studio.",
      "Comprehensive benefits and quarterly team retreats.",
      "Clear career growth path into program management.",
    ],
  },
];

export function getJobById(id: string): Job | undefined {
  return JOBS.find((job) => job.id === id);
}
