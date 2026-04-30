'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
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

const galleryImages = [
  { src: '/flash/flash-sheet-sun-panther.jpg', alt: 'Traditional flash sheet with sun, panther, and dagger-heart by Adam Shaw' },
  { src: '/flash/flash-sheet-skulls.jpg', alt: 'Traditional flash sheet featuring six skull designs by Adam Shaw' },
  { src: '/flash/flash-sheet-angel-nurse.jpg', alt: 'Traditional flash sheet with angel, nurse, and rose by Adam Shaw' },
  { src: '/flash/flash-sheet-gypsy-butterfly.jpg', alt: 'Traditional flash sheet featuring gypsy, butterfly, and roses by Adam Shaw' },
  { src: '/flash/flash-sheet-playing-cards.jpg', alt: 'Traditional flash sheet with playing card faces and dagger by Adam Shaw' },
  { src: '/flash/flash-sheet-cobra-skull.jpg', alt: 'Traditional flash sheet featuring cobra, skull, and flames by Adam Shaw' },
  { src: '/flash/flash-sheet-hannya-dragon.jpg', alt: 'Flash sheet featuring a geisha, hannya mask, peony, and dragon by Adam Shaw' },
  { src: '/flash/flash-sheet-bonsai-snake.jpg', alt: 'Flash sheet featuring a bonsai tree, snake with flower, and lantern by Adam Shaw' },
  { src: '/flash/flash-sheet-geisha-tiger.jpg', alt: 'Flash sheet featuring a geisha, chrysanthemum, and tiger by Adam Shaw' },
];

export default function TraditionalPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null),
    []
  );

  const next = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % galleryImages.length : null),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, prev, next, closeLightbox]);

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
              <div className="relative aspect-[600/640] w-full overflow-hidden rounded-[8px]">
                <Image
                  src="/flash/flash-sheet-eagles.jpg"
                  alt="Traditional flash sheet featuring three eagle designs by Adam Shaw"
                  fill
                  className="object-cover scale-[1.3]"
                  priority
                />
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
                <div className="relative aspect-square w-full overflow-hidden rounded-[8px]">
                  <Image
                    src="/flash/flash-sheet-gypsy-panther.jpg"
                    alt="Traditional flash sheet featuring a gypsy, panther, and rose by Adam Shaw"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-[8px]">
                  <Image
                    src="/flash/flash-sheet-tiger-monkey.jpg"
                    alt="Traditional flash sheet featuring a tiger, spider woman, and geisha by Adam Shaw"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 3. Flash Gallery — 3-col grid with lightbox */}
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map(({ src, alt }, index) => (
                <button
                  key={src}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-square w-full overflow-hidden rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1f]"
                  aria-label={`View full size: ${alt}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 4. Contact */}
      <ContactSection subtitle="BOOK A TIMELESS PIECE ROOTED IN BOLD TRADITION." />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={closeLightbox}
        >
          {/* Image container — stops click propagation so clicking image doesn't close */}
          <div
            className="relative flex h-full w-full items-center justify-center p-4 md:p-12"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative max-h-[85vh] max-w-[85vw] aspect-auto w-full h-full">
              <Image
                key={galleryImages[lightboxIndex].src}
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="85vw"
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium tracking-widest text-white/60 select-none">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus:outline-none"
              aria-label="Previous image"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus:outline-none"
              aria-label="Next image"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white focus:outline-none"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
