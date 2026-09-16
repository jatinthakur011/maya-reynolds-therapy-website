const tags = [
  "anxiety",
  "panic",
  "trauma",
  "EMDR",
  "burnout",
  "perfectionism",
  "stress",
  "mindfulness",
  "body-oriented work",
  "self-worth",
];

export default function Expertise() {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">
        <p className="text-sand/70 text-sm tracking-wide">Areas of focus</p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-display italic text-xl lg:text-2xl text-cream"
            >
              {tag}
            </span>
          ))}
          <span className="font-display italic text-xl lg:text-2xl text-cream/50">
            &hellip; and more.
          </span>
        </div>
      </div>
    </section>
  );
}
