'use client';

import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import ContactSection from '@/components/ContactSection';
import { scrollToContact } from '@/lib/scrollToContact';
import type React from 'react';

const h1Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(2.5rem, 6vw, 5.25rem)',
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

const CheckIcon = () => (
  <svg className="mt-1 h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8.5l3.5 3.5L13 4.5"
      stroke="#1f1f1f"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-4">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <CheckIcon />
        <span className="text-[1rem] leading-relaxed text-[#1f1f1f]">{item}</span>
      </li>
    ))}
  </ul>
);

// Shared camera icon for placeholders
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

export default function FlashPage() {
  return (
    <div className="bg-[#f6eee0]">

      {/* 1. Hero — tall image fills top, two-column content row below */}
      <RevealSection>
        <section className="flex flex-col bg-[#f6eee0]">
          {/* Full-width image — takes up most of the section height */}
          {/* TODO: replace with actual hero image */}
          <div className="flex min-h-[55vh] w-full items-center justify-center bg-[#c9bdb0]">
            <CameraIcon />
          </div>

          {/* Content row beneath the image */}
          <div className="px-6 py-12 lg:px-16 lg:py-28">
            <div className="mx-auto max-w-[1280px]">
              <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
                <h1 style={h1Style} className="text-[#1f1f1f]">
                  Explore Adam&apos;s Unique Flash Tattoo Designs
                </h1>
                <div className="flex flex-col items-start gap-8">
                  <p className="text-[1.05rem] leading-relaxed text-[#1f1f1f]">
                    Discover a stunning collection of custom flash tattoos that blend Traditional and
                    Japanese styles. Each design reflects Adam&apos;s artistic vision, offering
                    something special for every tattoo enthusiast.
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center rounded-[12px] bg-[#1f1f1f] border border-[#1f1f1f] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[#f6eee0] transition-colors hover:bg-[#3f6b4b] hover:border-[#3f6b4b]"
                  >
                    Book a Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 2. Traditional Flash — text left, full-bleed image right */}
      <RevealSection delay={100}>
        <section className="flex min-h-[750px] flex-col md:flex-row">
          {/* Text — left */}
          <div className="flex flex-1 items-center bg-[#f6eee0] px-6 py-12 md:pr-20 lg:pl-16 lg:py-28">
            <div className="max-w-[560px]">
              <h2 style={h2Style} className="mb-6 text-[#1f1f1f]">
                Explore Traditional Flash Designs: Bold, Timeless, and Unique
              </h2>
              <p className="mb-6 text-[1.05rem] leading-relaxed text-[#1f1f1f]">
                Adam&apos;s Traditional Flash Designs showcase the beauty of bold lines and classic
                imagery. Each piece is crafted to embody the essence of timeless tattoo artistry.
              </p>
              <div className="mb-8">
                <BulletList
                  items={[
                    'Experience the artistry of traditional tattoo designs.',
                    'Discover unique pieces that tell your story.',
                    'Elevate your style with our curated flash collection.',
                  ]}
                />
              </div>
              <Link
                href="/traditional"
                className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#1f1f1f] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[#1f1f1f] transition-colors hover:bg-[#1f1f1f] hover:text-[#f6eee0]"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image — right, full-bleed edge to edge */}
          {/* TODO: replace with actual Traditional flash image */}
          <div className="flex flex-1 items-center justify-center bg-[#c9bdb0] min-h-[400px]">
            <CameraIcon />
          </div>
        </section>
      </RevealSection>

      {/* 3. Japanese Flash — full-bleed image left, text right */}
      <RevealSection delay={100}>
        <section className="flex min-h-[780px] flex-col md:flex-row">
          {/* Image — left, full-bleed (below text on mobile) */}
          {/* TODO: replace with actual Japanese flash image */}
          <div className="flex flex-1 items-center justify-center bg-[#c9bdb0] min-h-[400px] order-last md:order-first">
            <CameraIcon />
          </div>

          {/* Text — right */}
          <div className="flex flex-1 items-center bg-[#f6eee0] px-6 py-12 md:pl-20 lg:pr-16 lg:py-28 order-first md:order-last">
            <div className="max-w-[560px]">
              <h2 style={h2Style} className="mb-6 text-[#1f1f1f]">
                Explore the Art of Japanese Flash Designs
              </h2>
              <p className="mb-6 text-[1.05rem] leading-relaxed text-[#1f1f1f]">
                Japanese flash designs are steeped in rich symbolism, showcasing the beauty of
                Japanese tattoo artistry. Each piece flows seamlessly, telling a story that
                resonates with the wearer.
              </p>
              <div className="mb-8">
                <BulletList
                  items={[
                    'Experience the depth of Japanese tattoo culture.',
                    'Transform your vision into a stunning tattoo.',
                    'Discover unique designs that inspire and captivate.',
                  ]}
                />
              </div>
              <Link
                href="/japanese"
                className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#1f1f1f] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[#1f1f1f] transition-colors hover:bg-[#1f1f1f] hover:text-[#f6eee0]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 4. Contact */}
      <ContactSection subtitle="FROM CLASSIC FLASH TO FULL JAPANESE COMPOSITIONS, LET'S CREATE YOUR NEXT PIECE." />
    </div>
  );
}
