"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ExperienceCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  pointers?: readonly string[];
  isLast?: boolean;
}

export const ExperienceCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  pointers,
  isLast = false,
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description || (pointers && pointers.length > 0)) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="relative pl-6 sm:pl-8 group">
      {/* Continuous vertical timeline spine */}
      {!isLast && (
        <span
          className="absolute left-[11px] sm:left-[15px] top-5 -bottom-3 w-px bg-border/80 group-hover:bg-foreground/20 transition-colors"
          aria-hidden="true"
        />
      )}

      {/* Timeline Node - Consistent neutral node with subtle emerald hover effect */}
      <div
        className="absolute left-[7px] sm:left-[11px] top-5 -translate-y-1/2 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="size-2.5 rounded-full border-2 border-border bg-background group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-colors duration-200" />
      </div>

      <Link
        href={href || "#"}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className="block cursor-pointer pb-5"
        onClick={handleClick}
      >
        <Card className="flex flex-col p-4 sm:p-5 rounded-2xl border border-border/60 hover:border-border transition-all duration-300 bg-card/50 hover:bg-card/90 hover:shadow-sm">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-none">
              <Avatar className="border size-11 sm:size-12 rounded-xl bg-muted dark:bg-muted/40 p-1">
                <AvatarImage
                  src={logoUrl}
                  alt={altText}
                  className="object-contain"
                />
                <AvatarFallback className="rounded-xl">{altText[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-grow min-w-0">
              <CardHeader className="p-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-base">
                  <h3 className="inline-flex items-center gap-1.5 font-semibold text-sm sm:text-base text-foreground leading-snug">
                    <span>{title}</span>
                    {badges && badges.length > 0 && (
                      <span className="inline-flex gap-x-1">
                        {badges.map((badge, index) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={index}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    )}
                    {(description || (pointers && pointers.length > 0)) && (
                      <ChevronRightIcon
                        className={cn(
                          "size-4 text-muted-foreground transition-all duration-300 ease-out",
                          "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 max-sm:opacity-50",
                          isExpanded ? "rotate-90" : "rotate-0"
                        )}
                      />
                    )}
                  </h3>
                  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground font-medium sm:text-right whitespace-nowrap">
                    {period}
                  </div>
                </div>
                {subtitle && (
                  <div className="font-sans text-xs sm:text-sm text-muted-foreground/90 font-normal mt-0.5">
                    {subtitle}
                  </div>
                )}
              </CardHeader>
              {description && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 pt-3 border-t border-border/40 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              )}
              {isExpanded && pointers && pointers.length > 0 && (
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
                  {pointers.map((pointer, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-emerald-500 dark:text-emerald-400 mt-1.5 size-1.5 rounded-full bg-current flex-shrink-0" />
                      <span>{pointer}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};
