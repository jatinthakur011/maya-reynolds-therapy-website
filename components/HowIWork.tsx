export default function HowIWork() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src="/images/how-i-work.jpg"
                alt="A quiet, uncluttered therapy room with natural light"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl lg:text-4xl text-forest leading-snug">
              Structured enough to feel supportive. Open enough for real
              depth.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              I believe therapy works best when you feel respected,
              understood, and actively involved in the process. Sessions
              leave room for reflection while still giving you practical
              tools you can use between visits &mdash; not just talk for
              talk&rsquo;s sake.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              My goal isn&rsquo;t just symptom relief. It&rsquo;s helping
              you develop insight, resilience, and a stronger relationship
              with yourself over time &mdash; even in a fast-paced life
              that doesn&rsquo;t always leave room for that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
