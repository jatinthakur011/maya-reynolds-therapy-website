const focusAreas = [
  {
    title: "Anxiety & Panic",
    body: "For the constant worry, tension, and racing thoughts that make it hard to switch off, even when things look fine from the outside.",
  },
  {
    title: "Trauma",
    body: "For single-incident and long-standing trauma, paced carefully around safety and stabilization so you feel more regulated day to day.",
  },
  {
    title: "Burnout & Perfectionism",
    body: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress.",
  },
];

export default function HowIHelp() {
  return (
    <section id="how-i-help" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl lg:text-4xl text-forest">
            Who I work with
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            I work with adults in Santa Monica and across California who
            are ready to slow down, understand what&rsquo;s underneath the
            stress, and build a steadier relationship with themselves.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl bg-sand p-8 flex flex-col gap-4"
            >
              <div className="h-56 rounded-xl overflow-hidden">
                <img
                  src="/images/help-adults.jpg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-forest">
                {area.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
