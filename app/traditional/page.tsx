'use client';

import RevealSection from '@/components/RevealSection';
import ContactSection from '@/components/ContactSection';
import type React from 'react';

const h1Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(2rem, 4vw, 3.75rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
};

const h3Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(1.75rem, 3vw, 3rem)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
};

// Camera icon for image placeholders
const CameraIcon = () => (
  <svg className="h-12 w-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function TraditionalPage() {
  return (
    <div className="bg-[#f6eee0]">

      {/* 1. Hero — heading + intro text left, portrait image right */}
      <RevealSection>
        <section className="bg-[#f6eee0] px-6 py-12 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
              <div>
                <h1 style={h1Style} className="mb-6 text-[#1f1f1f]">
                  The Art and Legacy of Traditional Tattoos
                </h1>
                <p className="text-[1.05rem] leading-relaxed text-[#1f1f1f]">
                  Traditional tattooing is steeped in rich history, symbolising cultural narratives
                  and personal stories. Adam Shaw brings a fresh perspective to this timeless art
                  form, skillfully merging classic designs with the unique visions of his clients.
                </p>
              </div>
              {/* TODO: replace with actual hero image */}
              <div className="flex aspect-[600/640] w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#c9bdb0]">
                <CameraIcon />
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 2. Editorial — two stacked images left, long-form text right (sticky on desktop) */}
      <RevealSection delay={100}>
        <section className="bg-[#f6eee0] px-6 pb-12 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

              {/* Editorial text — first on mobile, right column on desktop */}
              <div className="order-1 md:order-2 md:sticky md:top-28 md:self-start">
                <h2 style={h2Style} className="mb-8 text-[#1f1f1f]">
                  Bold, Iconic, and Built to Last
                </h2>
                <div className="flex flex-col gap-5 text-[1rem] leading-relaxed text-[#1f1f1f]">
                  <p>
                    Traditional tattoos — also called American Traditional or Old School — are
                    instantly recognisable for their bold lines, solid colours, and enduring designs.
                    Originating in the early 20th century, this style was popularised by sailors,
                    soldiers, and adventurers who wore tattoos as marks of identity, remembrance,
                    and rebellion.
                  </p>
                  <p>
                    Traditional tattoos feature a distinct visual language: thick black outlines,
                    a limited but vibrant colour palette, and imagery that stands the test of time.
                    Anchors, eagles, swallows, roses, daggers, and pin-up figures are just some of
                    the classic motifs. The style is prized not only for its nostalgic charm but
                    also for its durability — the boldness ensures the design remains clear and
                    striking for decades.
                  </p>
                  <p>
                    Adam&apos;s love for traditional tattooing comes from its history and its
                    no-nonsense, timeless aesthetic. Every line and colour choice is deliberate,
                    every design built to be as strong in 30 years as it is on day one. Whether
                    you&apos;re after a faithful recreation of a vintage flash piece or a custom
                    design with a modern twist, Adam brings skill, passion, and respect for the
                    craft to every traditional tattoo he creates.
                  </p>
                </div>
              </div>

              {/* Stacked square images — second on mobile, left column on desktop */}
              <div className="order-2 md:order-1 flex flex-col gap-8">
                {/* TODO: replace with actual tattoo images */}
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#c9bdb0]">
                  <CameraIcon />
                </div>
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#c9bdb0]">
                  <CameraIcon />
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 3. Flash Gallery — 3-col grid (no carousel per design system for dedicated gallery pages) */}
      <RevealSection delay={100}>
        <section className="bg-[#f6eee0] px-6 py-12 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 text-center">
              <h2 style={h3Style} className="mb-4 text-[#1f1f1f]">
                Flash Gallery
              </h2>
              <p className="mx-auto max-w-xl text-[1.05rem] leading-relaxed text-[#1f1f1f]">
                Explore our Traditional flash tattoo designs — ready to book as-is or adapted to
                your vision.
              </p>
            </div>
            {/* TODO: replace placeholders with actual flash images */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#c9bdb0]"
                >
                  <CameraIcon />
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 4. Contact */}
      <ContactSection subtitle="BOOK A TIMELESS PIECE ROOTED IN BOLD TRADITION." />
    </div>
  );
}
