export interface PortfolioItem {
  id?: string;
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    imageSrc: "/projects/ticketly.png",
    title: "Ticketly",
    description:
      "Ticketly is a comprehensive event management platform that helps you create, manage, and sell tickets for your events. Whether you're organizing a small workshop or a large conference, we've got you covered.",
    tags: [
      "SaaS Platform",
      "Online Ticketing",
      "Payment Integration",
      "Admin Dashboard",
      "Web Application",
    ],
    link: "https://preview.themeforest.net/item/venuex-event-ticketing-management-saas-dashboard-html-template/full_screen_preview/61427808",
  },
  {
    imageSrc: "/projects/SavvyFi.png",
    title: "SavvyFi",
    description:
      "A modern gamified finance and savings dashboard that helps users track expenses, manage budgets, monitor financial goals, and gain actionable insights through interactive analytics and intuitive visualizations.",
    tags: [
      "Personal Finance",
      "Savings Tracker",
      "Budget Management",
      "Analytics Dashboard",
      "Web Application",
    ],
    link: "https://preview.themeforest.net/item/savvyfi-gamified-finance-savings-dashboard-html-template/full_screen_preview/61010279",
  },
  {
    imageSrc: "/projects/creatorx.png",
    title: "CreatorX",
    description:
      "A modern YouTube creator analytics dashboard designed to track channel performance, monitor audience growth, analyze video metrics, and manage content through an intuitive, data-driven interface.",
    tags: [
      "YouTube Analytics",
      "Creator Dashboard",
      "Audience Insights",
      "Content Management",
      "Web Application",
    ],
    link: "https://preview.themeforest.net/item/creatorx-youtube-creator-analytics-dashboard-html-template/full_screen_preview/62070859",
  },
  {
    imageSrc: "/projects/ayvoice.webp",
    title: "AY Voice",
    description:
      "A cloud-based bulk SMS and voice calling platform that enables businesses to manage campaigns, contacts, and communication efficiently.",
    tags: [
      "Cloud Infrastructure",
      "Bulk SMS Platform",
      "Voice Calling",
      "Campaign Management",
      "Web Application",
    ],
    link: "https://ayvoice.com",
  },
];

