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
  salaryMin: "৳45,000",
  salaryMax: "৳65,000 per month",
  experience: "1+ year",
  deadline: "30/09/2025",
  skills:
    "Figma, Adobe Creative Suite, UI/UX fundamentals, responsive design, component-based design system.",
  description: [
    "We are looking for a creative Web Designer to join our remote-first Bangladeshi startup. You will design modern, conversion-focused interfaces for SaaS dashboards, landing pages, and mobile-first experiences.",
    "You will collaborate with developers and product teams through async communication, Loom walkthroughs, and weekly remote standups.",
    "If you love clean layouts, typography, and solving real user problems through design, this role is perfect for you.",
  ],
  responsibilities: [
    "Design responsive web interfaces, dashboards, and landing pages.",
    "Create reusable components and maintain our design system.",
    "Collaborate with remote frontend developers for pixel-perfect implementation.",
    "Conduct user research and usability testing.",
    "Present concepts via Figma prototypes and async video walkthroughs.",
  ],
  requirements: [
    "1+ year of experience in web or product design.",
    "Strong portfolio showcasing UI/UX work.",
    "Proficiency in Figma and Adobe Creative Suite.",
    "Understanding of HTML/CSS and responsive design.",
    "Comfortable working in a remote-first environment.",
  ],
  benefits: [
    "Fully remote work with flexible hours.",
    "Competitive salary with yearly increments.",
    "Festival bonus and remote team-building events.",
    "Learning budget and access to premium design tools.",
  ],
}
,
  {
  id: "mobile-app-developer",
  title: "Mobile App Developer",
  icon: Smartphone,
  department: "Engineering",
  jobType: "Full-time",
  workplaceType: "Remote",
  experienceLevel: "2+ years",
  salaryMin: "৳55,000",
  salaryMax: "৳85,000 per month",
  experience: "2+ years",
  deadline: "15/10/2025",
  skills:
    "Swift, Kotlin, React Native, REST APIs, mobile architecture, debugging.",
  description: [
    "Join our remote engineering team and build high-performance apps used by thousands of Bangladeshi users. You will work on new features, optimize performance, and collaborate with designers through async communication.",
    "We value clean code, ownership, and the ability to ship fast without compromising quality.",
  ],
  responsibilities: [
    "Build and maintain iOS/Android applications.",
    "Collaborate with designers and backend engineers remotely.",
    "Write clean, testable, and maintainable code.",
    "Optimize app performance and fix bugs.",
    "Participate in remote standups and sprint planning.",
  ],
  requirements: [
    "2+ years of experience in mobile development.",
    "Strong knowledge of Swift/Kotlin or React Native.",
    "Experience integrating REST APIs.",
    "Understanding of mobile UI/UX patterns.",
    "Ability to work independently in a remote setup.",
  ],
  benefits: [
    "Fully remote role with flexible working hours.",
    "Health insurance, festival bonus, and paid leave.",
    "Performance bonus and yearly salary review.",
    "Training budget and conference opportunities.",
  ],
}
,
  {
  id: "digital-marketing-specialist",
  title: "Digital Marketing Specialist",
  icon: LayoutGrid,
  department: "Marketing",
  jobType: "Full-time",
  workplaceType: "Remote",
  experienceLevel: "3-5 years",
  salaryMin: "৳50,000",
  salaryMax: "৳75,000 per month",
  experience: "3+ years",
  deadline: "20/11/2025",
  skills:
    "SEO, SEM, Meta Ads, Google Ads, analytics, content strategy.",
  description: [
    "We are hiring a Digital Marketing Specialist to scale our growth across search, social, and paid channels. You will plan campaigns, analyze performance, and collaborate with creative teams — all remotely.",
    "This role requires strong analytical skills and hands-on experience with digital tools commonly used in Bangladeshi markets.",
  ],
  responsibilities: [
    "Plan and execute SEO, SEM, and paid social campaigns.",
    "Monitor KPIs and optimize campaigns for better ROI.",
    "Manage budgets across Google Ads and Meta Ads.",
    "Collaborate with content and design teams remotely.",
    "Run A/B tests and improve conversion funnels.",
  ],
  requirements: [
    "3+ years of digital marketing experience.",
    "Experience with Google Analytics, Ads Manager, and SEO tools.",
    "Strong understanding of Bangladeshi digital market trends.",
    "Ability to analyze data and make decisions.",
    "Comfortable working fully remote.",
  ],
  benefits: [
    "Fully remote role with flexible hours.",
    "Competitive salary and performance incentives.",
    "Internet allowance and home office support.",
    "Training budget for courses and certifications.",
  ],
}
,
  {
  id: "backend-developer",
  title: "Backend Developer",
  icon: Briefcase,
  department: "Engineering",
  jobType: "Full-time",
  workplaceType: "Remote",
  experienceLevel: "3-5 years",
  salaryMin: "৳60,000",
  salaryMax: "৳95,000 per month",
  experience: "3+ years",
  deadline: "10/12/2025",
  skills:
    "Node.js, Express.js, MongoDB/PostgreSQL, REST APIs, authentication, caching, CI/CD, cloud deployment.",
  description: [
    "We are looking for a skilled Backend Developer to join our remote-first Bangladeshi startup. You will architect and build scalable APIs, optimize database performance, and collaborate with frontend and mobile teams to deliver high-quality digital products.",
    "This role requires strong problem-solving skills, clean coding practices, and the ability to work independently in a remote environment.",
    "If you enjoy building reliable backend systems, improving performance, and working with modern cloud technologies, this role is ideal for you.",
  ],
  responsibilities: [
    "Design, build, and maintain RESTful APIs using Node.js.",
    "Develop scalable backend services with proper logging and monitoring.",
    "Optimize database queries and ensure high availability.",
    "Implement authentication, authorization, and security best practices.",
    "Collaborate with frontend/mobile teams to integrate APIs.",
    "Write clean, maintainable, and well-documented code.",
    "Participate in remote standups, sprint planning, and async communication.",
  ],
  requirements: [
    "3+ years of backend development experience.",
    "Strong proficiency in Node.js and Express.js.",
    "Experience with MongoDB or PostgreSQL.",
    "Understanding of caching (Redis), queues, and microservices.",
    "Experience with Git, CI/CD pipelines, and cloud deployment (AWS/Vercel).",
    "Ability to work independently in a remote-first environment.",
  ],
  benefits: [
    "Fully remote work with flexible hours.",
    "Competitive salary with yearly increments.",
    "Festival bonus, paid leave, and health coverage.",
    "Performance bonus and remote team-building events.",
    "Learning budget for courses, certifications, and conferences.",
  ],
}
,
];

export function getJobById(id: string): Job | undefined {
  return JOBS.find((job) => job.id === id);
}
