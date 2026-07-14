import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/landing/BrandMark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Find Jobs", href: "#jobs" },
  { label: "Career Tools", href: "#career-tools" },
  { label: "For Employers", href: "#employers" },
  { label: "Resources", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const topSection = document.querySelector("#top");

    if (!topSection || !("IntersectionObserver" in window)) {
      setIsScrolled(window.scrollY > 24);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setIsScrolled(!entry?.isIntersecting), {
      threshold: 0.82,
    });

    observer.observe(topSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = ["#top", ...navLinks.map((link) => link.href)]
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0.18, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`navbar-enter mustqbil-dark sticky top-0 z-50 border-b border-[#f6ca14]/20 before:absolute before:left-0 before:top-0 before:h-1 before:bg-[#f6ca14] before:transition-[width] before:duration-[var(--motion-ui)] ${
        isScrolled ? "shadow-[0_14px_40px_rgba(0,0,0,0.22)] before:w-full" : "before:w-1/5"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="Mustqbil home">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#d8d0c1] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-sm transition-colors hover:text-[#f6ca14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ca14] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#f6ca14] after:transition-[width] after:duration-[var(--motion-ui)] ${
                activeHref === link.href ? "text-[#f6ca14] after:w-full" : "after:w-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="ghost"
            className="border border-white/15 bg-transparent px-5 font-semibold text-[#d8d0c1] hover:bg-white/10 hover:text-white"
          >
            <a href="#signin">Sign In</a>
          </Button>
          <Button
            asChild
            className="mustqbil-yellow px-6 font-semibold shadow-none hover:bg-[#ffd91f]"
          >
            <a href="#create-profile">Create Profile</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="text-[#f6f0e4] hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="mustqbil-dark border-white/10">
            <SheetHeader className="text-left">
              <SheetTitle className="text-[#f6f0e4]">
                <BrandMark />
              </SheetTitle>
              <SheetDescription className="text-[#c8beaa]">
                Navigate Mustqbil careers and employer tools.
              </SheetDescription>
            </SheetHeader>
            <nav className="mobile-menu-items mt-8 grid gap-3">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className={`rounded-md px-2 py-3 text-base font-medium transition-colors hover:bg-white/10 hover:text-[#f6ca14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ca14] ${
                      activeHref === link.href ? "text-[#f6ca14]" : "text-[#d8d0c1]"
                    }`}
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 grid gap-3">
              <SheetClose asChild>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/15 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="#signin">Sign In</a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="mustqbil-yellow font-semibold hover:bg-[#ffd91f]">
                  <a href="#create-profile">Create Profile</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
