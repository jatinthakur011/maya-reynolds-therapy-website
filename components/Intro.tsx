export default function Intro() {
  return (
    <section id="about" className="bg-sand">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src="/images/intro-photo.jpg"
                alt="Santa Monica coastline near Dr. Reynolds's office"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <h2 className="font-display text-3xl lg:text-4xl text-forest leading-snug">
              You&rsquo;re functional on the outside. Inside, you&rsquo;re
              exhausted from carrying it all.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Many of the people I work with are high-achieving, thoughtful,
              and self-aware &mdash; but quietly stuck in overthinking,
              tension, or a sense that they&rsquo;re always bracing for
              something to go wrong. Others are navigating how earlier life
              experiences still shape their relationships and sense of
              safety today.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              I take a warm, collaborative, and grounded approach, blending
              CBT, EMDR, mindfulness, and body-oriented techniques so we can
              work with both the emotional and physiological sides of what
              you&rsquo;re experiencing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
