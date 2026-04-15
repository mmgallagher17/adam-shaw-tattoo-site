'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  fontSize: 'clamp(1.75rem, 3vw, 3rem)',
  lineHeight: 1.05,
  letterSpacing: '-0.01em',
};

const barlowH3: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
  lineHeight: 1.05,
  letterSpacing: '-0.01em',
};

const barlowH4: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
  lineHeight: 1.7,
};

const tocItems = [
  { id: 'booking-policy', label: 'Booking Policy', depth: 0 },
  { id: 'deposit-requirements', label: 'Deposit Requirements', depth: 1 },
  { id: 'cancellation-policy', label: 'Cancellation Policy', depth: 1 },
  { id: 'rescheduling-policy', label: 'Rescheduling Policy', depth: 0 },
  { id: 'health-and-safety', label: 'Health & Safety', depth: 0 },
  { id: 'aftercare-instructions', label: 'Aftercare Instructions', depth: 1 },
];

function TableOfContents({ activeId }: { activeId: string }) {
  return (
    <nav aria-label="Table of Contents">
      <h2 className="mb-4 uppercase text-[#1F1F1F]" style={barlowH4}>
        Table of Contents
      </h2>
      <div className="flex flex-col">
        {tocItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`border border-[#1F1F1F] -mt-px py-3 transition-colors ${
                item.depth === 0 ? 'px-4' : item.depth === 1 ? 'px-8' : 'px-12'
              } ${
                isActive
                  ? 'bg-white font-bold text-[#1F1F1F]'
                  : 'bg-transparent font-normal text-[#1F1F1F] hover:bg-white/50'
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function MobileTOC() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8 md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between border border-[#1F1F1F] px-4 py-3"
        aria-expanded={open}
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#1F1F1F' }}>
          Table of Contents
        </span>
        <svg
          className={`h-5 w-5 text-[#1F1F1F] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="flex flex-col border border-t-0 border-[#1F1F1F]">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`border-b border-[#1F1F1F]/20 py-3 text-[#1F1F1F] hover:bg-[#f0e8d6] ${
                item.depth === 0 ? 'px-4 font-bold' : 'px-8 font-normal'
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PoliciesPage() {
  const [activeId, setActiveId] = useState('');

  // Track which section is in view for TOC highlighting
  useEffect(() => {
    const sectionIds = tocItems.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the topmost visible section
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-10% 0px -70% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f6eee0]">

      {/* ── Hero ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex max-w-3xl flex-col gap-5">
            <h1 className="uppercase text-[#1F1F1F]" style={barlowH1}>
              Tattoo Service Policies
            </h1>
            <p className="text-[#1F1F1F]" style={{ ...bodyText, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
              Everything you need to know about booking, deposits, cancellations, and health requirements before your appointment.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ── Document with TOC ── */}
      <section className="bg-[#f6eee0] px-6 pb-24 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">

          {/* Mobile TOC */}
          <MobileTOC />

          <div className="flex flex-col gap-16 md:flex-row md:gap-16 lg:gap-24">

            {/* Sticky TOC — desktop only */}
            <aside className="hidden shrink-0 md:block md:w-[280px] lg:w-[320px]">
              <div className="sticky top-24">
                <TableOfContents activeId={activeId} />
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0 flex-1">

              {/* Booking Policy */}
              <section id="booking-policy" className="scroll-mt-28 pb-12 border-b border-[#1F1F1F]/20">
                <h2 className="mb-4 uppercase text-[#1F1F1F]" style={barlowH2}>
                  Booking Policy
                </h2>
                <p className="mb-4 font-bold text-[#1F1F1F]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)', lineHeight: 1.7 }}>
                  All appointments begin with a consultation — either in person or via message — where you and Adam discuss the design, size, and placement. Custom work requires a deposit before the appointment is confirmed.
                </p>
                <p className="text-[#1F1F1F]" style={bodyText}>
                  Walk-in availability exists for flash designs, but custom pieces are always booked in advance. To start the process, reach out through the contact form or Instagram with your idea, preferred size, and placement. Adam will respond to set up a consult and get things moving from there.
                </p>

                {/* Deposit Requirements */}
                <div id="deposit-requirements" className="scroll-mt-28 mt-10">
                  <h3 className="mb-3 uppercase text-[#1F1F1F]" style={barlowH3}>
                    Deposit Requirements
                  </h3>
                  <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                    A non-refundable deposit is required to secure your appointment slot. The deposit amount is typically $75–$150 depending on the size and complexity of the piece, and will be applied toward the total cost of your tattoo at the end of your session.
                  </p>
                  <p className="text-[#1F1F1F]" style={bodyText}>
                    Deposits protect both you and Adam — it ensures your time is reserved and that design work won't be done without a committed client. If your appointment needs to be rescheduled, the deposit can be transferred once with sufficient notice (minimum 48 hours).
                  </p>
                </div>

                {/* Cancellation Policy */}
                <div id="cancellation-policy" className="scroll-mt-28 mt-10">
                  <h3 className="mb-3 uppercase text-[#1F1F1F]" style={barlowH3}>
                    Cancellation Policy
                  </h3>
                  <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                    Cancellations made with less than 48 hours notice will result in forfeiture of the deposit. No-shows forfeit the deposit in full and may be required to pay a new deposit before another appointment can be booked.
                  </p>
                  <p className="text-[#1F1F1F]" style={bodyText}>
                    Life happens — if something comes up, please reach out as early as possible. Adam appreciates the heads-up and will always do his best to work something out where possible.
                  </p>
                </div>
              </section>

              {/* Rescheduling Policy */}
              <section id="rescheduling-policy" className="scroll-mt-28 py-12 border-b border-[#1F1F1F]/20">
                <h2 className="mb-4 uppercase text-[#1F1F1F]" style={barlowH2}>
                  Rescheduling Policy
                </h2>
                <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                  One reschedule is allowed per deposit, provided a minimum of 48 hours notice is given before the original appointment time. The deposit will be transferred to your new date.
                </p>
                <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                  A second reschedule or last-minute change may result in forfeiture of the deposit, and a new deposit will be required to book again. This policy exists to keep scheduling fair for everyone — Adam's books fill up, and last-minute gaps are difficult to fill.
                </p>
                {/* Blockquote style note */}
                <div className="my-8 flex gap-5">
                  <div className="w-0.5 shrink-0 self-stretch bg-[#1F1F1F]" />
                  <p className="italic text-[#1F1F1F]" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.7 }}>
                    "The more notice you give, the easier it is to keep things moving. When in doubt, reach out early."
                  </p>
                </div>
              </section>

              {/* Health and Safety */}
              <section id="health-and-safety" className="scroll-mt-28 py-12 border-b border-[#1F1F1F]/20">
                <h2 className="mb-4 uppercase text-[#1F1F1F]" style={barlowH2}>
                  Health &amp; Safety
                </h2>
                <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                  Adam works out of Kapala Tattoo, a licensed studio operating under Manitoba health regulations. All equipment is single-use and sterile. Surfaces, chairs, and workstations are sanitized between every client.
                </p>
                <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                  Clients must be 18 years of age or older. Valid government-issued photo ID is required at your appointment. There are no exceptions to the age requirement — this is a legal obligation, not a policy.
                </p>
                <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                  Please disclose any relevant medical conditions, skin conditions, allergies, or medications at your consultation. Certain conditions (including pregnancy, blood thinners, and some skin disorders) may affect whether tattooing is safe for you. When in doubt, consult your doctor first.
                </p>
                <p className="text-[#1F1F1F]" style={bodyText}>
                  Do not come to your appointment under the influence of alcohol or recreational drugs. This is a safety requirement — alcohol thins the blood and affects healing. Anyone who arrives impaired will have their appointment cancelled and forfeit their deposit.
                </p>

                {/* Placeholder image */}
                <div className="my-10 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-300 flex items-center justify-center">
                  {/* TODO: Replace with studio/workspace photo */}
                  <svg className="h-12 w-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Aftercare Instructions */}
                <div id="aftercare-instructions" className="scroll-mt-28 mt-10">
                  <h3 className="mb-3 uppercase text-[#1F1F1F]" style={barlowH3}>
                    Aftercare Instructions
                  </h3>
                  <p className="mb-4 text-[#1F1F1F]" style={bodyText}>
                    Adam will walk you through aftercare at the end of every session. Following these instructions is your responsibility — how you care for your tattoo during the healing period directly affects the final result. Full aftercare guidance is available on the{' '}
                    <Link href="/aftercare" className="underline underline-offset-2 transition-opacity hover:opacity-70">
                      Aftercare page
                    </Link>.
                  </p>
                  <p className="text-[#1F1F1F]" style={bodyText}>
                    If something doesn't look right during healing — unusual redness, swelling, or discharge — contact a medical professional. Touch-ups for issues caused by improper aftercare are not covered as standard.
                  </p>
                </div>
              </section>

              {/* Questions CTA */}
              <div className="pt-12">
                <h2 className="mb-4 uppercase text-[#1F1F1F]" style={barlowH3}>
                  Questions about any of this?
                </h2>
                <p className="mb-6 text-[#1F1F1F]" style={bodyText}>
                  These policies exist to keep the experience smooth for everyone. If anything is unclear or you have a specific situation to discuss, just reach out — Adam's happy to chat it through.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[12px] border border-black bg-[#3f6b4b] px-5 py-2 text-white transition-opacity hover:opacity-90"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
                >
                  Contact
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <ContactSection subtitle="Questions about policies or ready to book? Reach out." />
    </div>
  );
}
