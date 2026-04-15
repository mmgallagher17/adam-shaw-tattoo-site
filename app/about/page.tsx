import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import ContactButton from '@/components/ContactButton';
import ContactSection from '@/components/ContactSection';
import RevealSection from '@/components/RevealSection';

const barlowH1: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(2.5rem, 6vw, 5.25rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
};

const barlowH2: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(2rem, 4vw, 3.75rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
};

const barlowH3: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(1.75rem, 3vw, 3rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
  lineHeight: 1.6,
};

const testimonials = [
  {
    quote:
      '"Adam\'s attention to detail and creativity made my tattoo experience unforgettable. I couldn\'t be happier with the final result!"',
    name: 'Sarah K.',
  },
  {
    quote:
      '"Working with Adam was a true pleasure. His passion for tattooing shines through in every piece he creates."',
    name: 'Mike T.',
  },
];

const testimonialSlides = testimonials.map((t) => (
  <div key={t.name} className="flex flex-col items-center gap-6 px-4 text-center md:px-16">
    {/* Stars */}
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 fill-[#1F1F1F]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    {/* Quote */}
    <p
      className="max-w-2xl uppercase text-[#1F1F1F]"
      style={{
        fontFamily: "'Barlow Semi Condensed', sans-serif",
        fontWeight: 500,
        fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
      }}
    >
      {t.quote}
    </p>
    <p
      className="font-semibold text-[#1F1F1F]"
      style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}
    >
      {t.name}
    </p>
  </div>
));

export default function AboutPage() {
  return (
    <div className="bg-[#f6eee0]">

      {/* ── Hero + From Tattoo Flash (combined 2-col section) ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-20">

            {/* Left: text stack — on mobile, comes after image */}
            <div className="order-2 md:order-1 flex flex-col gap-8">
              <div>
                <h1 className="uppercase text-[#1F1F1F]" style={barlowH1}>
                  Meet Adam Shaw
                </h1>
                <p
                  className="mt-2 uppercase text-[#1F1F1F]"
                  style={{ ...barlowH3, fontSize: 'clamp(1.1rem, 2vw, 1.75rem)' }}
                >
                  Traditional &amp; Japanese Tattoo Artist in Winnipeg
                </p>
              </div>
              <div>
                <h2 className="mb-4 uppercase text-[#1F1F1F]" style={barlowH3}>
                  From Tattoo Flash to Tattoo Machine
                </h2>
                <p className="text-[#1F1F1F]" style={bodyText}>
                  Adam's roots are in painting tattoo flash inspired by Traditional and Japanese
                  styles. Years of sketching and refining classic motifs deepened his respect for
                  tattoo history and symbolism. That foundation led him to pursue tattooing
                  professionally through an apprenticeship at Kapala Tattoo, where he brought his
                  designs from paper to skin and honed the discipline of the craft.
                </p>
              </div>
            </div>

            {/* Right: Adam's portrait — on mobile, comes first */}
            <div className="order-1 md:order-2 relative aspect-[600/640] w-full overflow-hidden rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
              <Image
                src="/about/adam-shaw-portrait.jpg"
                alt="Adam Shaw, tattoo artist at Kapala Tattoo in Winnipeg"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

          </div>
        </div>
      </RevealSection>

      {/* ── Committed to Craft and Learning ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
            {/* Image — left on desktop, top on mobile (subject faces right, into the text) */}
            <div className="relative aspect-[600/640] w-full overflow-hidden rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
              <Image
                src="/about/adam-shaw-at-work.jpg"
                alt="Adam Shaw tattooing a client at Kapala Tattoo"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Text — right on desktop, bottom on mobile */}
            <div className="flex flex-col gap-8">
              <h2 className="uppercase text-[#1F1F1F]" style={barlowH2}>
                Committed to Craft and Learning
              </h2>
              <div className="flex flex-col gap-4 text-[#1F1F1F]" style={bodyText}>
                <p>
                  Tattooing is a lifelong practice. Adam continues to study composition, line
                  weight, color saturation, and large-scale flow while learning from fellow artists
                  across Canada. His focus is simple: clean execution, strong design, and tattoos
                  that hold up for decades.
                </p>
                <p>Precision first — solid lines, smooth shading, deliberate color.</p>
                <p>Client-centered — collaborative consults to dial in idea, size, and placement.</p>
                <p>Built to last — designs planned around how tattoos heal and age.</p>
              </div>
              <div>
                <ContactButton
                  className="inline-flex items-center justify-center rounded-[12px] border border-black bg-[#3f6b4b] px-5 py-2 text-white transition-opacity hover:opacity-90"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
                >
                  Contact
                </ContactButton>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Honouring Tradition, Making it Yours ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
            {/* Image placeholder — left on desktop */}
            {/* TODO: Replace with Next.js Image using actual tattoo work photo */}
            <div className="order-2 md:order-1 aspect-[600/640] w-full overflow-hidden rounded-lg bg-gray-300 flex items-center justify-center">
              <svg className="h-12 w-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Text */}
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <h2 className="uppercase text-[#1F1F1F]" style={barlowH3}>
                Honouring Tradition, Making it Yours
              </h2>
              <div className="flex flex-col gap-4 text-[#1F1F1F]" style={bodyText}>
                <p>
                  Adam respects the heritage behind American Traditional and Japanese styles while
                  tailoring each piece to the wearer.
                </p>
                <p>
                  Traditional: bold outlines, classic imagery (eagles, daggers, ships, roses) with
                  confident color and clarity from across the room.
                </p>
                <p>
                  Japanese: flowing compositions (koi, dragons, tigers, peonies) with wind, waves,
                  and seasonal elements that carry layered meaning.
                </p>
                <p>
                  Your story guides the final design — whether you want a faithful classic, a modern
                  twist, or a hybrid of the two.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── The Studio ── */}
      <RevealSection className="bg-[#2F2F2F] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-20">

            {/* Left: text + info blocks */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="mb-6 uppercase text-[#f6eee0]" style={barlowH2}>
                  The Studio
                </h2>
                <p style={{ ...bodyText, color: '#f6eee0', opacity: 0.85 }}>
                  You'll find Adam at Kapala Tattoo in Winnipeg, Manitoba — a clean, welcoming shop
                  where first-timers and seasoned collectors are equally at home.
                </p>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 gap-6 border-t border-[#f6eee0]/20 pt-8 sm:grid-cols-2">
                <div>
                  <p
                    className="mb-1 text-xs uppercase tracking-widest text-[#f6eee0]/50"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Location
                  </p>
                  <p style={{ ...bodyText, fontSize: '1rem', color: '#f6eee0' }}>
                    Kapala Tattoo<br />
                    71 St Anne's Rd<br />
                    Winnipeg, MB R2M 2Y6
                  </p>
                </div>
                <div>
                  <p
                    className="mb-1 text-xs uppercase tracking-widest text-[#f6eee0]/50"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Booking
                  </p>
                  <p style={{ ...bodyText, fontSize: '1rem', color: '#f6eee0' }}>
                    Start with a brief consult — idea, size, placement. Adam prepares your design
                    and sets your appointment from there.
                  </p>
                </div>
              </div>

              <p style={{ ...bodyText, fontSize: '0.95rem', color: '#f6eee0', opacity: 0.7 }}>
                Catching him on the road?{' '}
                <Link
                  href="/on-the-road"
                  className="text-[#f6eee0] underline underline-offset-2 hover:opacity-100 opacity-80 transition-opacity"
                >
                  Check Conventions &amp; Guest Spots
                </Link>{' '}
                for upcoming cities and dates.
              </p>
            </div>

            {/* Right: map */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="/maps/map_desktop.png"
                alt="Kapala Tattoo location in Winnipeg"
                className="hidden md:block w-full h-auto object-cover"
              />
              <img
                src="/maps/map_mobile.png"
                alt="Kapala Tattoo location in Winnipeg"
                className="block md:hidden w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>
      </RevealSection>

      {/* ── Testimonials ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Carousel
            showArrows={true}
            showDots={true}
            controlsPosition="sides"
            arrowClassName="bg-[#f3e7d3] border-2 border-[#1F1F1F] rounded-lg p-3 hover:bg-white transition-colors"
            dotActiveClassName="bg-[#1F1F1F] w-2.5"
            dotInactiveClassName="bg-[#1F1F1F]/30 hover:bg-[#1F1F1F]/50"
          >
            {testimonialSlides}
          </Carousel>
        </div>
      </RevealSection>

      {/* ── Contact ── */}
      <ContactSection subtitle="Work with Adam to create something timeless and personal." />
    </div>
  );
}
