"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="block cursor-pointer h-full group"
      onClick={handleClick}
    >
      <Card className="flex flex-col h-full p-4 rounded-2xl border border-border/60 hover:border-border transition-all duration-300 bg-card/50 hover:bg-card/90 hover:shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-3">
          <Avatar className="border size-10 rounded-xl bg-muted dark:bg-muted/40 p-1">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback className="rounded-xl text-xs">{altText[0]}</AvatarFallback>
          </Avatar>
          <span className="text-[11px] sm:text-xs tabular-nums text-muted-foreground font-medium px-2 py-0.5 rounded-full bg-secondary/80 border border-border/30 whitespace-nowrap">
            {period}
          </span>
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="font-semibold text-sm sm:text-base text-foreground leading-snug group-hover:text-foreground">
            {title}
          </h3>
          {subtitle && (
            <div className="text-xs sm:text-sm text-muted-foreground/90 mt-1.5 leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>

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
            <p className="mt-2.5 pt-2 border-t border-border/40 text-xs text-muted-foreground/90 leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </Card>
    </Link>
  );
};
