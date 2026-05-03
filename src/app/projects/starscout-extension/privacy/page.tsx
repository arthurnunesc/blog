import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "StarScout Extension Privacy Policy | Arthur Nunes",
  description:
    "Privacy policy for the StarScout browser extension.",
};

export default function StarScoutPrivacyPage() {
  return (
    <article>
      <header className="mt-4 space-y-4">
        <Link href="/projects/starscout-extension" className="inline-flex items-center gap-2">
          <ChevronLeft strokeWidth={1.4} className="size-4" />
          Back to extension landing page
        </Link>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          StarScout Extension
        </p>
        <h1 className="text-5xl leading-tight max-sm:text-4xl">
          Privacy Policy
        </h1>
        <p>
          <strong>Effective date:</strong> 2026-05-02
        </p>
      </header>

      <p>
        This privacy policy describes how the StarScout - See Suspected
        Non-Legit Stars on GitHub repos browser extension (&quot;the
        extension&quot;) handles information.
      </p>

      <section>
        <h2>Data The Extension Collects And Sends</h2>
        <p>
          When you visit a public GitHub repository page that the extension
          recognizes, the extension sends the following information to the
          StarScout API:
        </p>
        <ul>
          <li>
            The public GitHub repository identifier currently being viewed, such
            as <code>owner/repo</code>.
          </li>
          <li>
            Standard browser request metadata automatically sent by the browser
            when calling the API, such as IP address and user agent.
          </li>
        </ul>
      </section>

      <section>
        <h2>Data The Extension Does Not Collect</h2>
        <p>The extension does not collect or send any of the following:</p>
        <ul>
          <li>GitHub credentials, tokens, or passwords.</li>
          <li>GitHub username or account identity.</li>
          <li>Extension-specific user identifiers.</li>
          <li>Private repository contents or private repository names.</li>
          <li>Suspected actor-level stargazer identities.</li>
        </ul>
      </section>

      <section>
        <h2>How The API Uses Data</h2>
        <p>
          The API uses the public <code>owner/repo</code> identifier to return
          aggregate StarScout-derived suspected non-legit star metrics for that
          repository. Responses are repo-level aggregates only and do not expose
          suspected actor lists.
        </p>
        <p>
          The API may also fetch current public repository metadata from GitHub,
          such as the current <code>stargazers_count</code>, to compute the
          displayed percentage denominator.
        </p>
      </section>

      <section>
        <h2>Logs And Retention</h2>
        <p>
          The backend logs operational data to support availability, debugging,
          abuse prevention, and rate limiting. Because the repository name is
          part of the API path, access logs from the API host, reverse proxy, or
          container platform may contain public <code>owner/repo</code> paths.
        </p>
        <p>
          Operational logs are retained only as long as necessary for the
          purposes described above. The project does not intentionally retain
          long-lived per-user browsing history.
        </p>
      </section>

      <section>
        <h2>Sharing And Sale</h2>
        <p>
          This project does not sell user data. The API is designed to return
          aggregate public-repository metrics and does not require accounts,
          login, or payment. User data is not shared with third parties.
        </p>
      </section>

      <section>
        <h2>Scope And Limitations</h2>
        <ul>
          <li>
            The extension supports public <code>github.com/owner/repo</code>
            repository pages.
          </li>
          <li>Private repositories and GitHub Enterprise Server are not supported.</li>
          <li>
            Missing StarScout aggregate data is shown as not analyzed, not as
            zero suspected stars.
          </li>
          <li>
            Results are heuristic signals, not definitive claims that stars,
            users, or repositories are fake.
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact And Support</h2>
        <p>
          For support or privacy questions, open a GitHub Issue in the project
          repository: {" "}
          <a
            href="https://github.com/arthurnunesc/starscout-extension/issues"
            target="_blank"
          >
            github.com/arthurnunesc/starscout-extension/issues
          </a>
          .
        </p>
      </section>

    </article>
  );
}
