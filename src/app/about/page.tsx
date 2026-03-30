export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <article>
        <p>
          I&apos;m a Brazilian software engineer based in Barcelona, Spain. I
          work on the Data Collection team at Centric Software, where I build
          and maintain web scraping pipelines across thousands of retail and
          fashion websites, feeding data into pricing intelligence, trend
          forecasting, and competitor monitoring products.
        </p>
        <p>
          I learned to code at{" "}
          <a href="https://42barcelona.com">42 Barcelona</a>, which shaped how
          I approach problems: hands-on, collaborative, and always digging into
          how things actually work.
        </p>
        <p>
          At Centric, I own scrapers end to end — from building new ones to
          maintaining and optimizing existing pipelines. I&apos;ve brought
          multiple spiders&apos; running costs down from hundreds of dollars to
          under $10 by rethinking proxy strategies and request flows, and
          achieved 10x+ speed improvements on several spiders.
        </p>
        <p>
          I deal with anti-bot challenges daily, finding the right balance
          between reliability, speed, and cost — whether through Scrapy, API
          reverse engineering, or headless solutions.
        </p>
        <p>
          I am AI-curious and like to keep up with the news. I use it daily,
          either at work or on my personal projects.
        </p>
        <p>
          Send me an email at{" "}
          <a href="mailto:arthurnunesc@proton.me">arthurnunesc@proton.me</a>.
        </p>
        <p>
          Best,
          <br />
          Arthur
        </p>
      </article>
    </>
  );
}
