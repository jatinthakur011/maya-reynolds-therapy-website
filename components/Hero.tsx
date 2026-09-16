export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm tracking-wide text-ochre font-medium">
              In-person in Santa Monica &amp; telehealth across California
            </p>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-forest">
              Anxiety &amp; trauma therapy in Santa Monica for people who
              feel like they should be handling it better.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
              You don&rsquo;t have to keep pushing through it alone. I help
              high-achieving adults move past anxiety, burnout, and the
              weight of past experiences &mdash; using warm, evidence-based
              therapy that meets you where you are.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ochre px-7 py-3.5 text-cream hover:bg-ochre-light transition-colors"
              >
                Schedule a Free Consult
              </a>
              <a
                href="#services"
                className="text-sm text-forest underline underline-offset-4 decoration-forest/30 hover:decoration-forest"
              >
                See how I can help
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-[2rem] overflow-hidden shadow-sm">
              <img
                src="/images/hero-portrait.jpg"
                alt="Dr. Maya Reynolds, PsyD, in her Santa Monica office"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-40 rounded-2xl overflow-hidden shadow-md border-4 border-cream">
              <img
                src="/images/hero-secondary.jpg"
                alt="A calm, plant-filled corner of the therapy office"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
