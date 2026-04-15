import ContactSection from '@/components/ContactSection';
import RevealSection from '@/components/RevealSection';

// TODO: Replace with actual portfolio images and real style tags
const galleryItems = [
  { id: 1, style: 'American Traditional' },
  { id: 2, style: 'Japanese' },
  { id: 3, style: 'American Traditional' },
  { id: 4, style: 'Japanese' },
  { id: 5, style: 'American Traditional' },
  { id: 6, style: 'Japanese' },
  { id: 7, style: 'American Traditional' },
  { id: 8, style: 'Japanese' },
  { id: 9, style: 'American Traditional' },
  { id: 10, style: 'Japanese' },
  { id: 11, style: 'American Traditional' },
  { id: 12, style: 'Japanese' },
];

export default function PortfolioPage() {
  return (
    <div>

      {/* ── Hero — text overlaid on image ── */}
      <section className="relative flex min-h-[80vh] flex-col justify-end bg-[#2F2F2F]">
        {/* TODO: Replace with Next.js Image using actual hero/banner tattoo photo */}
        <div className="absolute inset-0 bg-gray-700" />

        {/* Bottom gradient so text is readable over any image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Text overlay */}
        <div className="relative px-6 pb-16 md:pb-24 lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            <h1
              className="mb-4 max-w-[768px] uppercase leading-none text-[#f6eee0]"
              style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(2.5rem, 6vw, 5.25rem)',
                letterSpacing: '-0.01em',
                textShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
            >
              See the Work. Feel the Craft.
            </h1>
            <p
              className="max-w-[560px] text-[#f6eee0]/80"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                lineHeight: 1.6,
              }}
            >
              American Traditional and Japanese tattooing — bold flash to intricate full-scale
              pieces, each built for precision, heritage, and the long haul.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery grid ── */}
      <RevealSection className="bg-[#2F2F2F] px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative aspect-square overflow-hidden rounded-lg bg-[#3a3a3a]">
                {/* TODO: Replace div with Next.js Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-10 w-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Style label */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <div className="bg-black/70 px-4 py-3 backdrop-blur-sm">
                    <span
                      className="text-xs uppercase tracking-widest text-[#f6eee0]/80"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.style}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <ContactSection subtitle="Every tattoo tells a story. Let's start yours today." />
    </div>
  );
}
