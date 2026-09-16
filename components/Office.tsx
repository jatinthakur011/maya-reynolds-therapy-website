export default function Office() {
  return (
    <section id="office" className="bg-forest">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl lg:text-4xl text-cream">
            A calm space to land
          </h2>
          <p className="mt-4 text-sand/80 leading-relaxed">
            My office is a quiet, private space in Santa Monica &mdash;
            designed to feel calm and grounding, with natural light and a
            comfortable, uncluttered environment. Clients often tell me the
            space itself helps them feel more at ease before we even begin.
            If getting to Santa Monica isn&rsquo;t easy, secure telehealth
            sessions are available anywhere in California.
          </p>
          <p className="mt-4 text-sand/60 text-sm">
            123th Street 45 W, Santa Monica, CA 90401
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/office-1.jpg"
              alt="Living-room-style seating area in Dr. Reynolds's office, with tall windows and natural light"
              className="w-full h-full min-h-[280px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/office-2.jpg"
              alt="A quiet reading corner in the office with a bookshelf and plants"
              className="w-full h-full min-h-[280px] object-cover"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm text-sand/80">
          <span>In-person &amp; CA telehealth</span>
          <span>Private, uncluttered space</span>
          <span>Easy Santa Monica parking nearby</span>
        </div>
      </div>
    </section>
  );
}
