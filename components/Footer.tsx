export default function Footer() {
  return (
    <footer className="bg-forest-dark text-sand/70">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-lg text-cream">
              Dr. Maya Reynolds, PsyD
            </p>
            <p className="mt-2 text-sm">Licensed Clinical Psychologist</p>
          </div>

          <div>
            <p className="text-sm tracking-wide text-cream/80">Navigate</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              <a href="#about" className="hover:text-cream">
                About
              </a>
              <a href="#services" className="hover:text-cream">
                Services
              </a>
              <a href="#office" className="hover:text-cream">
                Our Office
              </a>
              <a href="#contact" className="hover:text-cream">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm tracking-wide text-cream/80">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <span>123th Street 45 W</span>
              <span>Santa Monica, CA 90401</span>
              <a
                href="mailto:hello@mayareynoldstherapy.com"
                className="hover:text-cream"
              >
                hello@mayareynoldstherapy.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sand/10 text-xs text-sand/50">
          Dr. Maya Reynolds is a fictional therapist profile used for
          demonstration purposes.
        </div>
      </div>
    </footer>
  );
}
