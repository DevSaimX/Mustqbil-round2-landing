import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing/LandingPage";

const pageTitle = "Mustqbil \u2014 AI-Powered Careers and Job Matching";
const pageDescription =
  "Discover AI-powered job matching, resume tools, interview preparation, and employer hiring workflows built for Pakistan's modern career market.";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: pageTitle },
      {
        name: "description",
        content: pageDescription,
      },
      {
        property: "og:title",
        content: pageTitle,
      },
      {
        property: "og:description",
        content: pageDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mustqbil" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
  }),
});
