const services = [
  {
    title: "Anxiety Therapy in Santa Monica",
    body: "Practical, evidence-based anxiety therapy for high-achieving adults who feel constantly on edge, helping you quiet the overthinking and feel steadier day to day.",
    href: "#contact",
  },
  {
    title: "Trauma-Informed Counseling in Santa Monica",
    body: "Trauma-informed counseling using EMDR and body-based techniques to help you process past experiences safely and feel more regulated in daily life.",
    href: "#contact",
  },
  {
    title: "Burnout Therapy in Santa Monica",
    body: "Support for burnout and perfectionism in entrepreneurs and professionals, helping you slow down, reconnect with yourself, and build a more sustainable pace.",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl lg:text-4xl text-forest">
            How we can work together
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Three focus areas I see most often in my Santa Monica practice
            &mdash; each shaped around evidence-based care.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-cream rounded-2xl p-8 flex flex-col gap-4 border border-forest/10"
            >
              <h3 className="font-display text-xl text-forest leading-snug">
                {service.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed flex-1">
                {service.body}
              </p>
              <a
                href={service.href}
                className="text-sm text-forest underline underline-offset-4 decoration-forest/30 hover:decoration-forest"
              >
                Schedule a free consult
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
