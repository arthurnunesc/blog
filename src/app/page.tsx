import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { CopyButton } from "./components/CopyButton";

interface Link {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
  copyable?: boolean;
  copyText?: string;
}

const externalLinks: Link[] = [
  {
    name: "LinkedIn",
    description: "see what I've been up to",
    url: "https://linkedin.com/in/arthurnunesc",
    icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />,
  },
  {
    name: "GitHub",
    description: "judge my commits",
    url: "https://github.com/arthurnunesc",
    icon: <SiGithub />,
  },
  {
    name: "X (Twitter)",
    description: "read my hot takes",
    url: "https://x.com/arthurnunesc",
    icon: <SiX className="fill-zinc-950 dark:fill-zinc-200" />,
  },
  {
    name: "Email - arthurnunesc@proton.me",
    description: "say hello",
    url: "mailto:arthurnunesc@proton.me",
    icon: (
      <Mail
        strokeWidth={1.4}
        className="size-5 text-zinc-800 dark:text-zinc-200"
      />
    ),
    copyable: true,
    copyText: "arthurnunesc@proton.me",
  },
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="text-zinc-500 opacity-0 transition-transform max-sm:hidden sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <span className="flex items-center">
        {link.copyable && link.copyText && <CopyButton text={link.copyText} />}
        <ArrowUpRight
          strokeWidth={1.4}
          className="size-5 shrink-0 text-zinc-800 transition-transform sm:group-hover:rotate-45 dark:text-zinc-200"
        />
      </span>
    </a>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm">
        Brazilian software engineer based in Barcelona. I work on the Data
        Collection team at Centric Software, building and maintaining fashion
        web scrapers. Studied at 42 Barcelona.
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link: Link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
      <a
        href="/arthur-nunes-cv.pdf"
        download="Arthur-Nunes-CV.pdf"
        className="mx-auto flex w-1/2 flex-row items-center justify-center gap-3 rounded bg-sky-300 p-4 text-sky-800 ring-1 ring-sky-500 transition-transform sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:sm:dark:hover:bg-zinc-800"
      >
        <span className="text-nowrap">Download my CV</span>
        <Download strokeWidth={1.4} className="size-5 max-sm:hidden" />
      </a>
    </div>
  );
}
