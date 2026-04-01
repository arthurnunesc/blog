import { GitBranch, Globe } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  url?: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    githubUrl: "https://github.com/placeholder/project-one",
    technologies: (
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-zinc-500 px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Technology
        </span>
        <span className="rounded-full bg-zinc-500 px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Framework
        </span>
      </div>
    ),
  },
  {
    name: "Project Two",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    githubUrl: "https://github.com/placeholder/project-two",
    technologies: (
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-zinc-500 px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Technology
        </span>
        <span className="rounded-full bg-zinc-500 px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Framework
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 dark:divide-zinc-500 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-400">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        {url && (
          <a
            href={url}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
          >
            <Globe strokeWidth={1.4} className="size-5" /> Visit website
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.githubUrl} {...project} />
        ))}
      </div>
    </>
  );
}
