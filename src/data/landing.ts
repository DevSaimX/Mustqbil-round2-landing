import type {
  CareerTool,
  FAQItem,
  Job,
  JobCategory,
  Stat,
  Step,
  Testimonial,
} from "@/types/landing";

export const jobCategories: Array<JobCategory | "All"> = [
  "All",
  "Engineering",
  "Data",
  "Product",
  "Design",
  "Marketing",
  "Customer Success",
];

export const jobs: Job[] = [
  {
    id: "job-ai-frontend-dev",
    company: "ByteBridge Labs",
    title: "AI Frontend Developer",
    location: "Lahore",
    salary: "PKR 220k - 320k",
    type: "Full-time",
    postedDate: "Posted 2 days ago",
    matchPercentage: 94,
    category: "Engineering",
    remote: false,
    highlights: ["React", "TypeScript", "LLM UI"],
  },
  {
    id: "job-data-analyst",
    company: "Kinetic Commerce",
    title: "Data Analyst",
    location: "Karachi",
    salary: "PKR 160k - 240k",
    type: "Full-time",
    postedDate: "Posted today",
    matchPercentage: 88,
    category: "Data",
    remote: false,
    highlights: ["SQL", "Power BI", "Forecasting"],
  },
  {
    id: "job-product-manager",
    company: "NayaPay Studio",
    title: "Associate Product Manager",
    location: "Islamabad",
    salary: "PKR 180k - 280k",
    type: "Full-time",
    postedDate: "Posted 4 days ago",
    matchPercentage: 91,
    category: "Product",
    remote: false,
    highlights: ["Roadmaps", "Research", "Fintech"],
  },
  {
    id: "job-ux-designer",
    company: "Crafted Digital",
    title: "Product Designer",
    location: "Remote Pakistan",
    salary: "PKR 190k - 300k",
    type: "Contract",
    postedDate: "Posted 1 week ago",
    matchPercentage: 86,
    category: "Design",
    remote: true,
    highlights: ["Figma", "Design systems", "SaaS"],
  },
  {
    id: "job-growth-marketer",
    company: "MedIQ Health",
    title: "Growth Marketing Specialist",
    location: "Rawalpindi",
    salary: "PKR 140k - 220k",
    type: "Full-time",
    postedDate: "Posted 3 days ago",
    matchPercentage: 83,
    category: "Marketing",
    remote: false,
    highlights: ["Lifecycle", "Analytics", "Content"],
  },
  {
    id: "job-ml-engineer",
    company: "TensorStack AI",
    title: "Machine Learning Engineer",
    location: "Remote",
    salary: "PKR 300k - 480k",
    type: "Full-time",
    postedDate: "Posted 5 days ago",
    matchPercentage: 96,
    category: "Engineering",
    remote: true,
    highlights: ["Python", "RAG", "MLOps"],
  },
  {
    id: "job-customer-success",
    company: "Sukoon Cloud",
    title: "Customer Success Manager",
    location: "Faisalabad",
    salary: "PKR 130k - 210k",
    type: "Full-time",
    postedDate: "Posted 6 days ago",
    matchPercentage: 79,
    category: "Customer Success",
    remote: false,
    highlights: ["Onboarding", "B2B SaaS", "Retention"],
  },
  {
    id: "job-data-intern",
    company: "Orbit Analytics",
    title: "AI Data Intern",
    location: "Peshawar",
    salary: "PKR 45k - 70k",
    type: "Internship",
    postedDate: "Posted yesterday",
    matchPercentage: 81,
    category: "Data",
    remote: false,
    highlights: ["Python", "Dashboards", "Research"],
  },
];

export const stats: Stat[] = [
  { value: "18,400+", label: "Active jobs", detail: "Demo listings across Pakistan" },
  { value: "2,750+", label: "Registered employers", detail: "Startups, agencies, and enterprises" },
  { value: "61,000+", label: "Successful applications", detail: "Tracked through smart workflows" },
  { value: "120k+", label: "Job seekers supported", detail: "Profiles improved with AI guidance" },
];

export const careerTools: CareerTool[] = [
  {
    title: "AI Resume Builder",
    description: "Create polished resumes tailored to Pakistani and remote-first hiring standards.",
    icon: "file",
  },
  {
    title: "Resume Match Analysis",
    description: "Compare your resume against job descriptions and fix gaps before applying.",
    icon: "scan",
  },
  {
    title: "Personalized Job Recommendations",
    description:
      "See roles ranked by skills, goals, work style, salary expectations, and location.",
    icon: "sparkles",
  },
  {
    title: "Interview Preparation",
    description: "Practice likely questions with role-specific prompts and feedback loops.",
    icon: "messages",
  },
  {
    title: "Application Tracker",
    description: "Keep every application, deadline, note, and follow-up in one calm workspace.",
    icon: "kanban",
  },
  {
    title: "Career Copilot",
    description:
      "Get next-step guidance for switching careers, leveling up, or negotiating offers.",
    icon: "bot",
  },
];

export const howItWorks: Step[] = [
  {
    title: "Create your profile",
    description:
      "Add your skills, experience, salary goals, preferred cities, and remote preferences.",
  },
  {
    title: "Get smart matches",
    description:
      "Mustqbil ranks jobs by fit, not just keyword overlap, so stronger roles surface faster.",
  },
  {
    title: "Apply confidently",
    description:
      "Use resume insights and AI-written application notes to make every submission sharper.",
  },
  {
    title: "Track your progress",
    description: "Monitor applications, interviews, saved jobs, and follow-ups from one dashboard.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mustqbil helped me understand why certain roles were a fit and which resume bullets needed work. I landed interviews within two weeks.",
    name: "Ayesha Khan",
    role: "Frontend Developer",
    location: "Lahore",
  },
  {
    quote:
      "The match score was surprisingly practical. It pushed remote data roles I would not have found through normal job boards.",
    name: "Bilal Ahmed",
    role: "Data Analyst",
    location: "Karachi",
  },
  {
    quote:
      "As a fresh graduate, the interview prep and tracker gave me a clear routine instead of a messy spreadsheet.",
    name: "Hira Siddiqui",
    role: "Associate Product Manager",
    location: "Islamabad",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How does Mustqbil calculate AI match percentages?",
    answer:
      "The demo score combines skills, experience level, location preference, salary range, and role signals from the job description. In a production product, users would be able to review and improve the inputs behind each score.",
  },
  {
    question: "Can I use Mustqbil for remote jobs?",
    answer:
      "Yes. The experience supports city-based roles, hybrid roles, and remote-first jobs across Pakistan and international teams hiring locally.",
  },
  {
    question: "Does the resume builder replace human review?",
    answer:
      "No. It gives structured suggestions, stronger wording, and role alignment checks, but users should still review the final resume for accuracy and personal voice.",
  },
  {
    question: "Is this landing page using real job listings?",
    answer:
      "No. The job listings and numbers are realistic demo data created for the Round 2 assessment experience.",
  },
  {
    question: "What can employers do with Mustqbil?",
    answer:
      "Employers can draft stronger job descriptions, screen applicants, view ranked shortlists, and manage hiring pipelines from a single workspace.",
  },
  {
    question: "Are saved jobs kept after refreshing the page?",
    answer:
      "Yes. Bookmarked jobs are stored safely in localStorage when the browser supports it, and the UI still works if storage is unavailable.",
  },
];
