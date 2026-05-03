import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GitBranch, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "StarScout Extension | Arthur Nunes",
  description:
    "A browser extension that shows heuristic suspected non-legit star signals on public GitHub repositories.",
};

export default function StarScoutExtensionPage() {
  return (
    <article>
      <header className="mt-4 space-y-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Project / browser extension
        </p>
        <h1 className="text-5xl leading-tight max-sm:text-4xl">
          StarScout Extension
        </h1>
        <p>
          StarScout shows heuristic suspected non-legit star signals on public
          GitHub repository pages. It adds a small badge near GitHub&apos;s native
          star count and opens a popover with aggregate metrics and dataset
          attribution.
        </p>
        <p>
          Results are bounded by the StarScout dataset cutoff, currently
          <code>2025-01-01</code>.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2">
        <a
          href="https://github.com/arthurnunesc/starscout-extension"
          target="_blank"
          className="group flex items-center justify-between rounded p-4 ring-1 ring-zinc-400 transition-transform sm:hover:bg-zinc-100 dark:ring-zinc-500 sm:dark:hover:bg-zinc-800"
        >
          <span className="flex items-center gap-3">
            <GitBranch strokeWidth={1.4} className="size-5" /> View code
          </span>
          <ArrowUpRight
            strokeWidth={1.4}
            className="size-5 transition-transform sm:group-hover:rotate-45"
          />
        </a>
        <Link
          href="/projects/starscout-extension/privacy"
          className="group flex items-center justify-between rounded p-4 ring-1 ring-zinc-400 transition-transform sm:hover:bg-zinc-100 dark:ring-zinc-500 sm:dark:hover:bg-zinc-800"
        >
          <span className="flex items-center gap-3">
            <ShieldCheck strokeWidth={1.4} className="size-5" /> Privacy policy
          </span>
          <ArrowUpRight
            strokeWidth={1.4}
            className="size-5 transition-transform sm:group-hover:rotate-45"
          />
        </Link>
      </section>

      <section>
        <h2>What it does</h2>
        <ul>
          <li>Detects public GitHub repository pages.</li>
          <li>Sends only the public owner/repo identifier to the API.</li>
          <li>Shows aggregate suspected non-legit star metrics when available.</li>
          <li>Shows a neutral not-analyzed state when the dataset has no row.</li>
        </ul>
      </section>

      <section>
        <h2>What it does NOT do</h2>
        <ul>
          <li>Prove that stars are fake.</li>
          <li>Prove that remaining stars are legitimate.</li>
          <li>Claim that users or repositories are fake.</li>
          <li>Expose actor-level stargazer identities.</li>
          <li>Treat results as definitive evidence.</li>
        </ul>
      </section>

      <section>
        <h2>What the popover shows</h2>
        <ul>
          <li>Current GitHub stars.</li>
          <li>Suspected non-legit stars.</li>
          <li>Estimated legitimate stars.</li>
          <li>Low-activity, lockstep, and overlap breakdowns.</li>
          <li>Dataset cutoff date and attribution.</li>
        </ul>
      </section>

      <section>
        <h2>Scope</h2>
        <ul>
          <li>Supports public <code>github.com/owner/repo</code> pages.</li>
          <li>Does not support private repositories.</li>
          <li>Does not support GitHub Enterprise Server.</li>
          <li>
            Shows missing StarScout aggregate data as not analyzed, not as zero
            suspected stars.
          </li>
        </ul>
      </section>

      <section>
        <h2>Privacy posture</h2>
        <p>
          The extension does not collect GitHub credentials, GitHub account
          identity, extension-specific user IDs, or private repository data.
        </p>
        <p>
          See the <Link href="/projects/starscout-extension/privacy">privacy policy</Link>{" "}
          for the full details.
        </p>
      </section>

      <section>
        <h2>Attribution</h2>
        <p>
          This project uses StarScout-derived data and methodology. StarScout is
          an academic research project by Hao He, Haoqin Yang, Philipp
          Burckhardt, Alexandros Kapravelos, Bogdan Vasilescu, and Christian
          Kaestner.
        </p>
        <ul>
          <li>
            StarScout repository: {" "}
            <a href="https://github.com/hehao98/StarScout" target="_blank">
              github.com/hehao98/StarScout
            </a>
          </li>
          <li>
            Zenodo replication package DOI: {" "}
            <a href="https://doi.org/10.5281/zenodo.17009694" target="_blank">
              10.5281/zenodo.17009694
            </a>
          </li>
          <li>
            Paper: Six Million (Suspected) Fake Stars on GitHub: A Growing
            Spiral of Popularity Contests, Spam, and Malware. ICSE 2026.
          </li>
        </ul>
      </section>

    </article>
  );
}
