import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  featured = false,
}: Props) {
  // Clean title for browser window title bar (e.g. "Soil Health Card (SHC)" -> "Soil Health Card")
  const cleanTitle = title.replace(/\s*\([^)]*\)/, "").trim();

  if (featured) {
    return (
      <Card
        className={cn(
          "w-full rounded-2xl overflow-hidden transition-all duration-300 ease-out border border-border/60 hover:border-border hover:shadow-md bg-card/50 hover:bg-card/90",
          className
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch">
          {/* Media column with clean browser frame and uncropped 16:9 video */}
          <div className="md:col-span-7 flex flex-col border-b md:border-b-0 md:border-r border-border/50 bg-muted/30 dark:bg-muted/10 overflow-hidden">
            {/* Subtle browser window title bar */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-muted/60 dark:bg-muted/30 border-b border-border/50 select-none">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-red-400/80 inline-block" />
                <span className="size-2 rounded-full bg-yellow-400/80 inline-block" />
                <span className="size-2 rounded-full bg-green-400/80 inline-block" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground/80 font-sans tracking-wide truncate max-w-[220px]">
                {cleanTitle}
              </span>
              <div className="size-2" />
            </div>

            <div className="p-2 sm:p-3 flex-grow flex items-center justify-center">
              <Link
                href={href || "#"}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                className="block cursor-pointer aspect-video w-full overflow-hidden rounded-xl bg-neutral-900/5 dark:bg-black/40 relative shadow-xs"
              >
                {video && (
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pointer-events-none h-full w-full object-contain"
                  />
                )}
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    width={700}
                    height={400}
                    className="h-full w-full object-contain"
                  />
                )}
              </Link>
            </div>
          </div>

          {/* Details column */}
          <div className="md:col-span-5 flex flex-col justify-between p-5 sm:p-6">
            <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                  {title}
                </h3>
                <time className="font-sans text-xs text-muted-foreground/80 block mt-1">
                  {dates}
                </time>
                <Markdown className="prose max-w-full text-pretty font-sans text-xs sm:text-sm text-muted-foreground/90 dark:prose-invert leading-relaxed pt-2.5">
                  {description}
                </Markdown>
            </div>

            <div className="pt-4">
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1 pb-3">
                  {tags?.map((tag) => (
                    <Badge
                      className="px-2 py-0.5 text-[11px] font-normal rounded-md bg-secondary/80 text-secondary-foreground border border-border/30"
                      variant="secondary"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {links && links.length > 0 && (
                <div className="flex flex-row flex-wrap items-center gap-2 pt-2 border-t border-border/40">
                  {links?.map((linkItem, idx) => (
                    <Link
                      href={linkItem?.href}
                      key={idx}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
                      >
                        {linkItem.icon}
                        <span>{linkItem.type}</span>
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out border border-border/60 hover:border-border hover:shadow-md bg-card/50 hover:bg-card/90",
        className
      )}
    >
      {/* Subtle browser window title bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-muted/60 dark:bg-muted/30 border-b border-border/50 select-none">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-400/80 inline-block" />
          <span className="size-2 rounded-full bg-yellow-400/80 inline-block" />
          <span className="size-2 rounded-full bg-green-400/80 inline-block" />
        </div>
        <span className="text-[11px] font-medium text-muted-foreground/80 font-sans tracking-wide truncate max-w-[180px]">
          {cleanTitle}
        </span>
        <div className="size-2" />
      </div>

      <div className="p-2 sm:p-2.5 bg-muted/30 dark:bg-muted/10 border-b border-border/40">
        <Link
          href={href || "#"}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          className="block cursor-pointer overflow-hidden aspect-video rounded-xl bg-neutral-900/5 dark:bg-black/30 relative shadow-xs"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-full w-full object-contain"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-full w-full object-contain"
            />
          )}
        </Link>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="space-y-1">
            <CardTitle className="text-sm sm:text-base font-semibold leading-tight text-foreground">
              {title}
            </CardTitle>
            <time className="font-sans text-[11px] sm:text-xs text-muted-foreground/80 block">{dates}</time>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground/90 dark:prose-invert leading-relaxed pt-1">
              {description}
            </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col p-4 pt-0">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[11px] font-normal rounded-md bg-secondary/80 text-secondary-foreground border border-border/30"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1.5">
            {links?.map((linkItem, idx) => (
              <Link
                href={linkItem?.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  {linkItem.icon}
                  <span>{linkItem.type}</span>
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
