'use client';

import { useState } from 'react';
import RevealSection from '@/components/RevealSection';
import ContactSection from '@/components/ContactSection';
import { scrollToContact } from '@/lib/scrollToContact';
import type React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// UPCOMING STOPS — edit this array to update Adam's schedule.
// Set to an empty array [] when there are no upcoming appearances.
// ─────────────────────────────────────────────────────────────────────────────

type StopType = 'Guest Spot' | 'Convention' | 'Booth Spot';

interface Stop {
  id: string;
  type: StopType;
  venueName: string;
  city: string;
  /** ISO date string for the first day, e.g. "2025-09-03" */
  startDate: string;
  description: string;
  /** Optional link to the event / studio website */
  url?: string;
}

const upcomingStops: Stop[] = [
  {
    id: '1',
    type: 'Guest Spot',
    venueName: "Vandy's Tattoo",
    city: 'Vancouver, BC',
    startDate: '2025-09-03',
    description: "Come see Adam at Vandy's — September 3 to 6, 2025.",
    url: 'https://vandystattoovancouver.com',
  },
  {
    id: '2',
    type: 'Convention',
    venueName: 'Regina Tattoo Convention',
    city: 'Regina, SK',
    startDate: '2026-02-07',
    description: 'Adam at the Regina Tattoo Convention from February 7 to 11, 2026.',
    url: 'https://reginatattoo.ca',
  },
];

// ─────────────────────────────────────────────────────────────────────────────

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

const h5Style: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  // Use noon to avoid any UTC offset flipping the day
  const d = new Date(`${dateStr}T12:00:00`);
  return {
    dayOfWeek: d.toLocaleDateString('en-US', { weekday: 'short' }), // "Sat"
    day: d.getDate().toString(),                                     // "3"
    monthYear: d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), // "Sep 2025"
  };
}

// ── Icons ─────────────────────────────────────────────────────────────────────

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

const ChevronRight = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowLeft = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// ── Stop Card ─────────────────────────────────────────────────────────────────

function StopCard({ stop }: { stop: Stop }) {
  const date = formatDate(stop.startDate);
  return (
    <div className="flex flex-col overflow-hidden rounded-[8px] border-2 border-[#1f1f1f] bg-white">
      {/* Image area */}
      <div className="relative flex aspect-[3/2] w-full items-center justify-center bg-[#c9bdb0]">
        {/* TODO: replace with <Image> when Adam provides photos */}
        <CameraIcon />
        {/* Date badge */}
        <div className="absolute right-4 top-4 flex w-[88px] flex-col items-center overflow-hidden rounded-[8px] bg-white px-1 py-3 text-center text-[#1f1f1f]">
          <span className="text-xs leading-none">{date.dayOfWeek}</span>
          <span
            style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            {date.day}
          </span>
          <span className="mt-0.5 text-xs leading-none">{date.monthYear}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6">
        {/* Type tag */}
        <div>
          <span className="inline-block rounded-[6px] border-2 border-[#1f1f1f] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#1f1f1f]">
            {stop.type}
          </span>
        </div>

        {/* Venue + city + description */}
        <div className="flex flex-col gap-2">
          <div>
            <p style={h5Style} className="text-[#1f1f1f]">{stop.venueName}</p>
            <p className="text-base leading-relaxed text-[#4a4a4a]">{stop.city}</p>
          </div>
          <p className="text-base leading-relaxed text-[#1f1f1f]">{stop.description}</p>
        </div>

        {/* Actions row */}
        <div className="flex items-center gap-4 pt-2">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center rounded-[12px] border border-[#3f6b4b] bg-[#3f6b4b] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90"
          >
            Book Now
          </button>
          {stop.url && (
            <a
              href={stop.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base text-[#1f1f1f] transition-opacity hover:opacity-70"
            >
              View event
              <ChevronRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────

function NoUpcomingStops() {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[8px] border-2 border-dashed border-[#c9bdb0] px-8 py-16 text-center">
      <p
        style={{
          fontFamily: "'Barlow Semi Condensed', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
        }}
        className="mb-3 text-[#1f1f1f]"
      >
        No Upcoming Stops
      </p>
      <p className="max-w-sm text-base leading-relaxed text-[#4a4a4a]">
        Adam doesn&apos;t have any conventions or guest spots scheduled right now — check back
        soon, or reach out to request a session at Kapala Tattoo in Winnipeg.
      </p>
    </div>
  );
}

// ── Stops section — carousel on desktop when >2, grid otherwise ───────────────

function UpcomingStopsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const showCarousel = upcomingStops.length > 2;
  const maxIndex = upcomingStops.length - 2;

  const canGoBack = slideIndex > 0;
  const canGoForward = slideIndex < maxIndex;

  // Visible pair for desktop carousel
  const visibleDesktop = upcomingStops.slice(slideIndex, slideIndex + 2);

  return (
    <RevealSection delay={100}>
      <section className="bg-[#f6eee0] px-6 py-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          {/* Section header */}
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#4a4a4a]">
              Where to find Adam
            </p>
            <h2 style={h2Style} className="text-[#1f1f1f]">
              Upcoming Stops
            </h2>
          </div>

          {upcomingStops.length === 0 ? (
            <NoUpcomingStops />
          ) : (
            <>
              {/* Desktop — 2-up grid or carousel */}
              <div className="hidden md:block">
                {showCarousel ? (
                  <div>
                    <div className="grid grid-cols-2 gap-12">
                      {visibleDesktop.map((stop) => (
                        <StopCard key={stop.id} stop={stop} />
                      ))}
                    </div>
                    {/* Carousel controls */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                      <button
                        onClick={() => setSlideIndex((i) => Math.max(0, i - 1))}
                        disabled={!canGoBack}
                        aria-label="Previous"
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1f1f1f] text-[#1f1f1f] transition-opacity disabled:opacity-30 hover:enabled:opacity-70"
                      >
                        <ArrowLeft />
                      </button>
                      {/* Dot indicators */}
                      <div className="flex gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setSlideIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 w-2 rounded-full transition-colors ${
                              i === slideIndex ? 'bg-[#1f1f1f]' : 'bg-[#c9bdb0]'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => setSlideIndex((i) => Math.min(maxIndex, i + 1))}
                        disabled={!canGoForward}
                        aria-label="Next"
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1f1f1f] text-[#1f1f1f] transition-opacity disabled:opacity-30 hover:enabled:opacity-70"
                      >
                        <ArrowRight />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-12">
                    {upcomingStops.map((stop) => (
                      <StopCard key={stop.id} stop={stop} />
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile — always stacked */}
              <div className="flex flex-col gap-8 md:hidden">
                {upcomingStops.map((stop) => (
                  <StopCard key={stop.id} stop={stop} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </RevealSection>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OnTheRoadPage() {
  return (
    <div className="bg-[#f6eee0]">

      {/* 1. Hero — text left, image right */}
      <RevealSection>
        <section className="bg-[#f6eee0] px-6 py-12 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
              {/* Text */}
              <div className="flex flex-col gap-6">
                <h1 style={h1Style} className="text-[#1f1f1f]">
                  On the Road — Conventions and Guest Spots
                </h1>
                <div className="flex flex-col gap-4 text-[1.05rem] leading-relaxed text-[#1f1f1f]">
                  <p>
                    While Adam&apos;s home base is at Kapala Tattoo in Winnipeg, MB, his passion
                    for tattooing takes him far beyond the shop. Throughout the year, Adam travels
                    to tattoo conventions and guest spots in cities across Canada, meeting new
                    clients, connecting with fellow artists, and sharing his love for the craft.
                  </p>
                  <p>
                    Check back often to see where Adam will be working next — from bustling
                    convention floors to guest chairs in renowned tattoo studios. If he&apos;s
                    visiting your city, don&apos;t miss the chance to book a session and bring your
                    next piece to life.
                  </p>
                </div>
              </div>

              {/* Image */}
              {/* TODO: replace with actual photo */}
              <div className="flex aspect-[600/640] w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#c9bdb0]">
                <CameraIcon />
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 2. Upcoming Stops */}
      <UpcomingStopsSection />

      {/* 3. Contact */}
      <ContactSection subtitle="CATCH ADAM AT HIS NEXT STOP." />
    </div>
  );
}
