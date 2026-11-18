"use client";

import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { FileText, Home } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Base interactive styles with restrained 1.06 scale, smooth 200ms ease-out transitions, and reduced-motion support
  const navItemClass =
    "group flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs transition-all duration-200 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-1.5 focus-visible:ring-ring hover:scale-[1.06] focus-visible:scale-[1.06] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100 motion-reduce:transition-none text-muted-foreground hover:text-foreground hover:bg-muted/70 dark:hover:bg-muted/50 font-medium";

  return (
    <div className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 mx-auto flex justify-center pointer-events-none px-3">
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 rounded-full border border-border/70 bg-background/85 dark:bg-card/80 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/25 ring-1 ring-border/20 transition-all duration-300"
      >
        {/* 1. Home */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              onClick={handleHomeClick}
              className={navItemClass}
            >
              <Home className="size-3.5 sm:size-4 flex-shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:group-hover:translate-y-0" />
              <span className="text-[11px] sm:text-xs transition-all duration-200 group-hover:font-semibold group-focus-visible:font-semibold">
                Home
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10}>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>

        {/* 2. GitHub */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className={navItemClass}
            >
              <Icons.github className="size-3.5 sm:size-4 flex-shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:group-hover:translate-y-0" />
              <span className="text-[11px] sm:text-xs transition-all duration-200 group-hover:font-semibold group-focus-visible:font-semibold">
                GitHub
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10}>
            <p>GitHub Profile</p>
          </TooltipContent>
        </Tooltip>

        {/* 3. LinkedIn */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={navItemClass}
            >
              <Icons.linkedin className="size-3.5 sm:size-4 flex-shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:group-hover:translate-y-0" />
              <span className="text-[11px] sm:text-xs transition-all duration-200 group-hover:font-semibold group-focus-visible:font-semibold">
                LinkedIn
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10}>
            <p>LinkedIn Profile</p>
          </TooltipContent>
        </Tooltip>

        {/* 4. Resume */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/Kaushik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={navItemClass}
            >
              <FileText className="size-3.5 sm:size-4 flex-shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:group-hover:translate-y-0" />
              <span className="text-[11px] sm:text-xs transition-all duration-200 group-hover:font-semibold group-focus-visible:font-semibold">
                Resume
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10}>
            <p>View Resume (PDF)</p>
          </TooltipContent>
        </Tooltip>

        {/* Subtle Separator */}
        <div
          className="h-4 w-px bg-border/60 mx-0.5 sm:mx-1 flex-shrink-0"
          aria-hidden="true"
        />

        {/* 5. Dark Mode Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group size-7 sm:size-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/70 dark:hover:bg-muted/50 hover:scale-[1.08] focus-visible:scale-[1.08] active:scale-[0.96] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-1.5 focus-visible:ring-ring cursor-pointer select-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100 motion-reduce:transition-none"
              aria-label="Toggle theme"
            >
              <SunIcon className="size-3.5 sm:size-4 text-foreground/80 dark:hidden transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:group-hover:translate-y-0" />
              <MoonIcon className="size-3.5 sm:size-4 text-foreground/80 hidden dark:block transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:group-hover:translate-y-0" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10}>
            <p>Toggle Theme</p>
          </TooltipContent>
        </Tooltip>
      </nav>
    </div>
  );
}
