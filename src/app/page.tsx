import { ExperienceCard } from "@/components/experience-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;


const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    name: "Databases",
    skills: ["MongoDB"],
  },
  {
    name: "Cloud & Development Tools",
    skills: [
      "Git",
      "GitLab",
      "Docker",
      "Google Cloud Storage (GCS)",
      "Kubernetes",
      "Microsoft Azure",
      "Postman",
      "VS Code",
    ],
  },
] as const;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      {/* Hero Section: 55/45 Editorial Split */}
      <section id="hero" className="pt-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 flex flex-col space-y-3">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground"
              yOffset={8}
              text={
                <>
                  Hi, I&apos;m {DATA.name.split(" ")[0]}{" "}
                  <span className="wave-hand">👋</span>
                </>
              }
            />
            <BlurFadeText
              className="text-muted-foreground text-base sm:text-lg leading-relaxed pt-1"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group">
                <div
                  className="absolute -inset-1.5 rounded-3xl border border-border/40 -z-10 group-hover:border-foreground/20 transition-colors"
                  aria-hidden="true"
                />
                <div className="relative w-48 sm:w-56 aspect-[4/5] rounded-2xl overflow-hidden border border-border/80 shadow-lg bg-card/80">
                  <Image
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 192px, 224px"
                  />
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section: Framed Narrative Card */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8 backdrop-blur-sm shadow-xs space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground">About</h2>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm sm:text-base leading-relaxed text-muted-foreground/90 dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </div>
        </BlurFade>
      </section>

      {/* Work Experience Section: Continuous Timeline */}
      <section id="work" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-1">Work Experience</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col pt-1">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ExperienceCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                pointers={work.pointers}
                isLast={id === DATA.work.length - 1}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education Section: Responsive Compact Cards */}
      <section id="education" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-1">Education</h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              className="h-full"
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills Section: Equal-Height 2x2 Category Matrix */}
      <section id="skills" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-1">Skills</h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {SKILL_CATEGORIES.map((category, catId) => (
            <BlurFade
              key={category.name}
              delay={BLUR_FADE_DELAY * 10 + catId * 0.05}
              className="h-full flex flex-col"
            >
              <div className="flex flex-col h-full rounded-2xl border border-border/60 bg-card/40 p-4 sm:p-5 hover:border-border transition-colors">
                <div className="text-xs font-semibold text-foreground tracking-wide border-b border-border/40 pb-2 mb-3 flex items-center justify-between">
                  <span>{category.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 content-start">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-normal px-2.5 py-1 rounded-md bg-secondary/80 hover:bg-secondary text-secondary-foreground border border-border/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Projects Section: Flagship Showcase + KarmC + Pair */}
      <section id="projects" className="space-y-6 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11} className="w-full">
          <div className="flex flex-col space-y-2 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Projects
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed w-full">
              A collection of projects showcasing my experience in full-stack development, from interactive user interfaces to backend systems, API integrations, and data-driven applications. Here are some of the projects I&apos;ve worked on.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-4 pt-2">
          {/* 1. Flagship Showcase: Soil Health Card (SHC) */}
          {DATA.projects.slice(0, 1).map((project) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                featured={true}
              />
            </BlurFade>
          ))}

          {/* 2. Secondary Spotlight: KarmC */}
          {DATA.projects.slice(1, 2).map((project) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 13}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                featured={true}
              />
            </BlurFade>
          ))}

          {/* 3 & 4. Balanced Pair: API Documentation Tool & Expense App */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.projects.slice(2, 4).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section: Invitation Card */}
      <section id="contact" className="pt-2">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="rounded-3xl border border-border/70 bg-gradient-to-b from-card via-card to-muted/20 p-8 sm:p-12 text-center space-y-5 shadow-xs">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[500px] text-muted-foreground text-sm sm:text-base leading-relaxed">
                Want to Connect? Just leave me a text on,
              </p>
            </div>

            <div className="pt-1">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-card hover:bg-accent hover:border-emerald-500/60 text-foreground font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm group hover:scale-[1.02]"
              >
                <MailIcon className="size-4 text-emerald-500" />
                <span>{DATA.contact.email}</span>
              </a>
            </div>

            {/* Quick connection links verified from DATA.contact.social */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/40">
              <Link
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted"
              >
                GitHub
              </Link>
              <span className="text-border">·</span>
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
