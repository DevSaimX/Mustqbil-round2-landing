export type JobCategory =
  "Engineering" | "Design" | "Data" | "Marketing" | "Product" | "Customer Success";

export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  salary: string;
  type: "Full-time" | "Contract" | "Part-time" | "Internship";
  postedDate: string;
  matchPercentage: number;
  category: JobCategory;
  remote: boolean;
  highlights: string[];
}

export interface Stat {
  label: string;
  value: string;
  detail: string;
}

export interface CareerTool {
  title: string;
  description: string;
  icon: "file" | "scan" | "sparkles" | "messages" | "kanban" | "bot";
}

export interface Step {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
