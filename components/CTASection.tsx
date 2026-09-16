export default function CTASection() {
  return (
    <section id="contact" className="bg-sand">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl lg:text-4xl text-forest leading-snug">
              A free 15-minute consult, no pressure either way.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed max-w-lg">
              Reaching out is often the hardest part. This call is just a
              chance to ask questions, share a little about what&rsquo;s
              going on, and see if working together feels like a fit.
            </p>
            <a
              href="mailto:hello@mayareynoldstherapy.com"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-ochre px-7 py-3.5 text-cream hover:bg-ochre-light transition-colors"
            >
              Schedule a Free Consult
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src="/images/cta-photo.jpg"
                alt="A calm coastal scene near Santa Monica"
                className="w-full h-[340px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
