'use client';

import RevealSection from '@/components/RevealSection';
import ContactSection from '@/components/ContactSection';
import type React from 'react';

// ── Colour tokens ──────────────────────────────────────────────────────────
const black = '#000000';
const brown = '#a52a2a';   // CSS named colour "brown" — the Figma accent
const cream = '#f6eee0';

// ── Typography ────────────────────────────────────────────────────────────
// Key differentiator vs Traditional: headings are *italic* Barlow Semi Condensed
const h1Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: 'clamp(2.5rem, 6vw, 5.25rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
  color: '#ffffff',
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: 'clamp(2rem, 4vw, 4rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
  color: '#ffffff',
};

const h3Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: 'clamp(1.75rem, 3vw, 3.75rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
  color: brown,
};

const CameraIcon = ({ muted = false }: { muted?: boolean }) => (
  <svg
    className={`h-12 w-12 ${muted ? 'text-white/15' : 'text-white/30'}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function JapanesePage() {
  return (
    <div style={{ backgroundColor: black }}>

      {/* ── 1. Hero banner — dark overlay image, italic H1 ──────────────── */}
      {/* TODO: swap bg-[#1a1a1a] for a real image with 50% overlay        */}
      <RevealSection>
        <section
          className="relative flex min-h-[40vh] items-end px-6 py-12 lg:px-16 lg:py-28"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          {/* Image placeholder — replace with <Image> + overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <CameraIcon muted />
          </div>
          {/* 50% dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative mx-auto w-full max-w-[1280px]">
            <div className="max-w-[768px]">
              <h1 style={h1Style} className="mb-6">
                Japanese Tattoo Art
              </h1>
              <p className="text-[1.1rem] leading-relaxed text-white/90">
                Discover the beauty of Irezumi, where rich symbolism meets flowing,
                intricate designs.
              </p>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── 2. Editorial — italic heading + text left, tall image right ──── */}
      <RevealSection delay={100}>
        <section
          className="px-6 py-12 lg:px-16 lg:py-28"
          style={{ backgroundColor: black }}
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">

              {/* Text — left */}
              <div>
                <h2 style={h2Style} className="mb-8">
                  Timeless Art with Deep Meaning
                </h2>
                <div
                  className="flex flex-col gap-5 text-[1rem] leading-relaxed"
                  style={{ color: `${cream}cc` }}
                >
                  <p>
                    Japanese tattoos, known as Irezumi, are one of the most iconic and respected
                    styles in the tattoo world. Rooted in centuries of tradition, these designs
                    are rich with symbolism, history, and craftsmanship. Originating from
                    Japan&apos;s Edo period, Irezumi was often used to tell stories, honour
                    legends, and protect the wearer with powerful imagery.
                  </p>
                  <p>
                    A hallmark of Japanese tattooing is its bold yet harmonious composition —
                    large, flowing designs that work with the body&apos;s shape and movement.
                    Common motifs include koi fish for perseverance, dragons for strength, tigers
                    for courage, and cherry blossoms for the fleeting beauty of life. Each element
                    carries meaning, and the way they are combined creates a narrative unique to
                    the wearer.
                  </p>
                  <p>
                    Adam has a deep respect for Japanese tattoo traditions and the skill it takes
                    to execute them. His passion lies in creating custom Japanese pieces that
                    honour the style&apos;s heritage while bringing fresh, personal touches to
                    each design. From full sleeves and back pieces to smaller, standalone works,
                    Adam&apos;s goal is to create tattoos that are as meaningful as they are
                    visually striking.
                  </p>
                </div>
              </div>

              {/* Image — right, tall portrait */}
              {/* TODO: replace with actual Japanese tattoo image */}
              <div
                className="flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-[8px] md:min-h-[700px]"
                style={{ backgroundColor: '#1a1a1a' }}
              >
                <CameraIcon />
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── 3. Flash Gallery — italic brown headings, black bg ───────────── */}
      <RevealSection delay={100}>
        <section
          className="px-6 py-12 lg:px-16 lg:py-28"
          style={{ backgroundColor: black }}
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 text-center">
              <h2 style={h3Style} className="mb-4">
                Flash Gallery
              </h2>
              <p
                className="mx-auto max-w-xl text-[1.05rem] italic leading-relaxed"
                style={{ color: `${brown}cc` }}
              >
                Explore our stunning Japanese flash tattoo designs.
              </p>
            </div>
            {/* TODO: replace placeholders with actual Japanese flash images */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[8px]"
                  style={{ backgroundColor: '#1a1a1a' }}
                >
                  <CameraIcon />
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── 4. Contact — brown outer / black inner ───────────────────────── */}
      <ContactSection
        variant="japanese"
        subtitle="BOOK A CUSTOM PIECE INSPIRED BY THE ARTISTRY OF JAPANESE TRADITION."
      />
    </div>
  );
}
