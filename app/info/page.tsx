import Link from 'next/link';
import Image from 'next/image';
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

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
  lineHeight: 1.6,
};

const sections = [
  {
    label: 'Questions',
    heading: 'FAQs',
    description:
      'Answers to the most common questions about booking, deposits, the process, and what to expect on the day.',
    href: '/faqs',
    cta: 'Read FAQs',
  },
  {
    label: 'Policies',
    heading: 'Booking & Studio Policies',
    description:
      'Everything you need to know about deposits, cancellations, health requirements, and how appointments work.',
    href: '/policies',
    cta: 'Read Policies',
  },
  {
    label: 'Care',
    heading: 'Tattoo Aftercare',
    description:
      'How to look after your tattoo during the healing period to keep your ink looking sharp for years.',
    href: '/aftercare',
    cta: 'Read Aftercare',
  },
];

const quickFaqs = [
  {
    q: 'How do I book an appointment?',
    a: 'Reach out through the contact form or Instagram with your idea, size, and placement. Adam will get back to you to set up a consult.',
  },
  {
    q: 'Is a deposit required?',
    a: 'Yes. A deposit is required to secure your slot and is applied toward the final cost of your tattoo.',
  },
  {
    q: 'Do you do walk-ins?',
    a: 'Walk-ins are welcome when Adam has availability. Flash designs are the best fit for a same-day visit.',
  },
  {
    q: 'How should I prepare?',
    a: 'Arrive rested, hydrated, and with a good meal beforehand. Avoid alcohol for at least 24 hours before your session.',
  },
  {
    q: 'What about aftercare?',
    a: 'Adam walks you through it at the end of every session. Keep it clean, moisturized, and out of the sun while it heals.',
  },
];

export default function InfoPage() {
  return (
    <div className="bg-[#f6eee0]">

      {/* ── Hero ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex max-w-3xl flex-col gap-5">
            <h1 className="uppercase text-[#1F1F1F]" style={barlowH1}>
              Essential Tattoo Info
            </h1>
            <p className="text-[#1F1F1F]" style={{ ...bodyText, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
              Everything you need to know before, during, and after your tattoo — from booking to healed ink.
            </p>
            <div className="mt-2">
              <ContactButton
                className="inline-flex items-center justify-center rounded-[12px] bg-[#1F1F1F] px-5 py-2 text-[#f6eee0] transition-opacity hover:opacity-80"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
              >
                Contact
              </ContactButton>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Section cards ── */}
      <RevealSection className="bg-[#f6eee0] px-6 pb-20 pt-0 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 divide-y divide-[#1F1F1F]/20 border-y border-[#1F1F1F]/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-5 px-0 py-10 transition-opacity hover:opacity-80 md:px-10 md:py-8 first:md:pl-0 last:md:pr-0"
              >
                <p
                  className="text-sm font-semibold uppercase tracking-widest text-[#1F1F1F]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </p>
                <h2 className="uppercase text-[#1F1F1F]" style={barlowH3}>
                  {s.heading}
                </h2>
                <p className="flex-1 text-[#1F1F1F]" style={bodyText}>
                  {s.description}
                </p>
                <span
                  className="inline-flex items-center gap-2 font-semibold text-[#1F1F1F]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
                >
                  {s.cta}
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── Your Artist ── */}
      <RevealSection className="bg-[#2F2F2F] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">

            {/* Photo */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
              <Image
                src="/about/adam-shaw-studio.jpg"
                alt="Adam Shaw laughing in his studio at Kapala Tattoo, surrounded by tattoo flash art"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <p
                  className="text-sm font-semibold uppercase tracking-widest text-[#f6eee0]/60"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Your Artist
                </p>
                <h2 className="uppercase text-[#f6eee0]" style={barlowH2}>
                  Adam Shaw
                </h2>
                <p className="text-[#f6eee0]/85" style={bodyText}>
                  Adam is a traditional and Japanese tattoo artist based out of Kapala Tattoo in Winnipeg, Manitoba. His work is rooted in bold lines, classic imagery, and designs built to last — from single-session flash to multi-session Japanese sleeves.
                </p>
                <p className="text-[#f6eee0]/85" style={bodyText}>
                  Every piece starts with a consultation. Adam works collaboratively to dial in the design, size, and placement before any ink touches skin.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#f6eee0] bg-transparent px-5 py-2 text-[#f6eee0] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
                >
                  About Adam
                </Link>
                <ContactButton
                  className="inline-flex items-center justify-center rounded-[12px] border border-black bg-[#3f6b4b] px-5 py-2 text-white transition-opacity hover:opacity-90"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}
                >
                  Book a Tattoo
                </ContactButton>
              </div>
            </div>

          </div>
        </div>
      </RevealSection>

      {/* ── Quick FAQ preview ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">

            {/* Left: heading + CTA */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p
                  className="text-sm font-semibold uppercase tracking-widest text-[#1F1F1F]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Questions
                </p>
                <h2 className="uppercase text-[#1F1F1F]" style={barlowH2}>
                  Common Questions
                </h2>
                <p className="text-[#1F1F1F]" style={bodyText}>
                  Quick answers to the questions Adam hears most. The full FAQ page has everything else.
                </p>
              </div>
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 font-semibold text-[#1F1F1F] transition-opacity hover:opacity-70"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
              >
                View all FAQs
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: flat Q&A list */}
            <div className="flex flex-col divide-y divide-[#1F1F1F]/20 border-t border-[#1F1F1F]/20">
              {quickFaqs.map((faq) => (
                <div key={faq.q} className="flex flex-col gap-2 py-5">
                  <p
                    className="font-bold text-[#1F1F1F]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)' }}
                  >
                    {faq.q}
                  </p>
                  <p className="text-[#1F1F1F]" style={{ ...bodyText, fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </RevealSection>

      {/* ── Contact ── */}
      <ContactSection subtitle="Questions or ready to book? Reach out." />
    </div>
  );
}
