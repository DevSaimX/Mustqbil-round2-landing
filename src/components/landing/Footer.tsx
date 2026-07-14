import { ArrowRight, Facebook, Github, Linkedin, Twitter } from "lucide-react";

import { BrandMark } from "@/components/landing/BrandMark";
import { Button } from "@/components/ui/button";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Find Jobs", href: "#jobs" },
      { label: "Career Tools", href: "#career-tools" },
      { label: "Application Tracker", href: "#career-tools" },
    ],
  },
  {
    title: "Employers",
    links: [
      { label: "Post a Job", href: "#post-job" },
      { label: "Candidate Screening", href: "#employers" },
      { label: "Shortlists", href: "#employers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Support", href: "mailto:hello@mustqbil.example" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "GitHub", href: "https://github.com", icon: Github },
];

export function Footer() {
  return (
    <footer className="mustqbil-dark">
      <section id="create-profile" className="border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <span id="signin" className="block scroll-mt-24" aria-hidden="true" />
        <div className="cta-ambient mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden border border-[#f6ca14]/25 bg-[#f6ca14]/10 p-6 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[#f6ca14]">Start smarter</p>
            <h2 className="font-display mt-3 max-w-2xl text-4xl font-extrabold leading-tight text-[#f6f0e4] sm:text-5xl">
              Build your profile once. Let Mustqbil find better opportunities daily.
            </h2>
          </div>
          <Button className="mustqbil-yellow ambient-pulse rounded-none font-semibold transition-transform hover:bg-[#ffd91f] active:scale-[0.98]">
            Create Profile
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#c8beaa]">
            AI-powered careers and job matching for ambitious job seekers and growing teams.
          </p>
          <div className="mt-6 flex gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="grid h-9 w-9 place-items-center border border-white/10 text-[#d8d0c1] transition-colors hover:bg-[#f6ca14] hover:text-[#07140f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ca14]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <nav className="stagger-children grid gap-8 sm:grid-cols-3" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-[#f6f0e4]">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#c8beaa] transition-colors hover:text-[#f6ca14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ca14]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-sm text-[#9f947f] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Mustqbil. All rights reserved.</p>
          <p>Demo landing page for the Round 2 AI-First Developer Bootcamp assessment.</p>
        </div>
      </div>
    </footer>
  );
}
