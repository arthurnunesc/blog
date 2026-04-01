export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <article>
        <p>
          I was born and raised in <a href="https://en.wikipedia.org/wiki/Fortaleza">Fortaleza</a> 🇧🇷<br></br>
          Dropped out of college to come to <a href="https://en.wikipedia.org/wiki/Barcelona">Barcelona</a> and found work as a dev before finding a university that wanted to accept me.<br></br>
          I now have deep roots here and work at
          Centric Software building web scrapers for fashion and retail sites.
          I also studied at {" "}
          <a href="https://42barcelona.com">42 Barcelona</a>, <a href="https://www.lavanguardia.com/vida/20230629/9071363/asi-42-campus-barcelona-unico-mundo-mejor-decision-mi-vida-brl.html" target="_blank">see if you can find me in this article</a>.
        </p>
        <p>
          I like to ride my bike. I was a Strava local legend on a segment
          near my place for a bit and will probably be mentioning it for a while.<br></br>
          At some point I got tired of routing apps
          having wrong surface data, so I started working on{" "}
          <a href="https://github.com/arthurnunesc/gravel-sync">Gravel Sync</a>
          , a mobile app for updating OpenStreetMap road conditions while
          you&apos;re out riding. It's not out yet.
        </p>
        <p>
          I run a small homelab at home. Two Fujitsu Futro S720s in a Proxmox
          cluster, Dell Wyse as quorum. One node has HomeAssistant with
          lighting, motion, and door automations. The other has a Debian LXC with
          Docker for self-hosting and messing around. WireGuard to reach it
          remotely. The whole thing only draws around 30W which is nice.
        </p>
        <p>
          I spend a lot of time with AI dev tools. Cursor at work, Claude Code
          and Gemini CLI at home, plus a bunch of others. This blog is mostly me writing about that stuff.
        </p>
        <p>
          Find me on {" "}
          <a href="https://x.com/arthurnunesc" target="_blank">Twitter</a> or
          email me at{" "}
          <a href="mailto:arthurnunesc@proton.me">arthurnunesc@proton.me</a>.
        </p>
      </article>
    </>
  );
}
