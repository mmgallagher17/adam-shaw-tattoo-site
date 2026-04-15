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
  fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
  lineHeight: 1.05,
  letterSpacing: '-0.01em',
};

const barlowH4: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(1.25rem, 2vw, 2rem)',
  lineHeight: 1.05,
  letterSpacing: '-0.01em',
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
  lineHeight: 1.6,
};

const ImagePlaceholder = ({ className = '' }: { className?: string }) => (
  <div className={`overflow-hidden rounded-lg bg-gray-300 flex items-center justify-center ${className}`}>
    {/* TODO: Replace with actual aftercare/tattoo photo */}
    <svg className="h-12 w-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

export default function AftercarePage() {
  return (
    <div className="bg-[#f6eee0]">

      {/* ── Hero ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex max-w-3xl flex-col gap-5">
            <h1 className="uppercase text-[#1F1F1F]" style={barlowH1}>
              Tattoo Aftercare Essentials
            </h1>
            <p className="text-[#1F1F1F]" style={{ ...bodyText, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
              Proper aftercare is what keeps your tattoo looking sharp for years. Here's everything you need to know.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ── First steps section ── */}
      <RevealSection className="bg-[#f6eee0] px-6 pb-20 pt-0 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">

            {/* Text */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <p
                  className="text-sm font-semibold uppercase tracking-widest text-[#1F1F1F]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Care
                </p>
                <h2 className="uppercase text-[#1F1F1F]" style={barlowH2}>
                  Essential Tattoo Aftercare for Your New Ink
                </h2>
                <p className="text-[#1F1F1F]" style={bodyText}>
                  The first few days after your tattoo are the most critical. Following these steps consistently will keep your ink vibrant and help the skin heal cleanly.
                </p>
              </div>

              {/* Inline timeline */}
              <div className="flex flex-col gap-6 border-t border-[#1F1F1F]/20 pt-6 sm:flex-row sm:gap-10">
                <div className="flex flex-col gap-2">
                  <h3 className="uppercase text-[#1F1F1F]" style={barlowH3}>
                    First 24 Hours
                  </h3>
                  <p className="text-[#1F1F1F]" style={bodyText}>
                    Keep your tattoo covered and avoid direct sunlight. Do not touch it with unwashed hands.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="uppercase text-[#1F1F1F]" style={barlowH3}>
                    Days 2–5
                  </h3>
                  <p className="text-[#1F1F1F]" style={bodyText}>
                    Gently wash with fragrance-free soap and apply a thin layer of recommended ointment 2–3 times daily.
                  </p>
                </div>
              </div>

              <div>
                <ContactButton
                  className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#1F1F1F] bg-transparent px-5 py-2 text-[#1F1F1F] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
                >
                  Questions? Contact
                </ContactButton>
              </div>
            </div>

            {/* Image */}
            <ImagePlaceholder className="aspect-[600/640] w-full" />

          </div>
        </div>
      </RevealSection>

      {/* ── Healing guidelines ── */}
      <RevealSection className="bg-[#2F2F2F] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">

            {/* Image — left on desktop */}
            <ImagePlaceholder className="aspect-[600/640] w-full" />

            {/* Text — right on desktop */}
            <div className="flex flex-col gap-8">
              {/* Healing icon */}
              <svg className="h-16 w-16 text-[#f6eee0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>

              <div className="flex flex-col gap-5">
                <h2 className="uppercase text-[#f6eee0]" style={barlowH2}>
                  Healing Guidelines
                </h2>
                <p className="text-[#f6eee0]/85" style={bodyText}>
                  To ensure your tattoo heals beautifully, there are a few things to avoid during the healing process — typically 2 to 4 weeks depending on the size and your skin.
                </p>
                <ul className="flex flex-col gap-2 text-[#f6eee0]/85" style={bodyText}>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6eee0]/60" />No swimming pools, hot tubs, or open water until fully healed.</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6eee0]/60" />Avoid prolonged direct sun exposure. Once healed, always use SPF.</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6eee0]/60" />Don't pick, scratch, or peel the skin — let it flake naturally.</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6eee0]/60" />Keep the area moisturized but avoid over-saturating it.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <ContactButton
                  className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#f6eee0] bg-transparent px-5 py-2 text-[#f6eee0] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
                >
                  Questions? Contact
                </ContactButton>
              </div>
            </div>

          </div>
        </div>
      </RevealSection>

      {/* ── Three tips ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 flex flex-col gap-5">
            <p
              className="text-sm font-semibold uppercase tracking-widest text-[#1F1F1F]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Care
            </p>
            <h2 className="uppercase text-[#1F1F1F]" style={barlowH2}>
              Essential Tips for Tattoo Aftercare
            </h2>
            <p className="max-w-2xl text-[#1F1F1F]" style={bodyText}>
              Follow these practices consistently throughout the healing period to maintain the integrity of your new ink.
            </p>
          </div>

          {/* 3-column tips */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

            <div className="flex flex-col gap-5">
              {/* Wash icon */}
              <svg className="h-12 w-12 text-[#1F1F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h2.5a1 1 0 011 1v1h9V4a1 1 0 011-1H20a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7H4a1 1 0 01-1-1V4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 11v5M12 10v6M15 11v5" />
              </svg>
              <h3 className="uppercase text-[#1F1F1F]" style={barlowH4}>
                Keep Your Tattoo Clean
              </h3>
              <p className="text-[#1F1F1F]" style={bodyText}>
                Gently wash your tattoo once or twice daily with lukewarm water and a fragrance-free, gentle soap. Pat dry with a clean paper towel — never rub.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Healing/heart icon */}
              <svg className="h-12 w-12 text-[#1F1F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="uppercase text-[#1F1F1F]" style={barlowH4}>
                Moisturize Regularly
              </h3>
              <p className="text-[#1F1F1F]" style={bodyText}>
                Apply a thin layer of fragrance-free, unscented moisturizer 2–3 times daily. Less is more — a light coat is enough to keep the skin hydrated without suffocating it.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              {/* Warning icon */}
              <svg className="h-12 w-12 text-[#1F1F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <h3 className="uppercase text-[#1F1F1F]" style={barlowH4}>
                Watch for Signs of Infection
              </h3>
              <p className="text-[#1F1F1F]" style={bodyText}>
                Some redness and tenderness in the first 24–48 hours is normal. If you notice excessive swelling, unusual discharge, or increasing pain after day 3, consult a medical professional.
              </p>
            </div>

          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <ContactButton
              className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#1F1F1F] bg-transparent px-5 py-2 text-[#1F1F1F] transition-opacity hover:opacity-70"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
            >
              Questions? Contact
            </ContactButton>
          </div>
        </div>
      </RevealSection>

      {/* ── Contact ── */}
      <ContactSection subtitle="Reach out with any questions or to book your next piece." />
    </div>
  );
}
