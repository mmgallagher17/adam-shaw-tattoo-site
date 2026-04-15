'use client';

import { useState } from 'react';
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
  lineHeight: 1,
  letterSpacing: '-0.01em',
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
  lineHeight: 1.6,
};

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer:
      "Booking is straightforward — reach out through the contact form on this site or send a message on Instagram. Include your idea, rough size, and preferred placement. Adam will get back to you to set up a consultation and finalize the details before scheduling your session.",
  },
  {
    question: 'What is the tattoo process like?',
    answer:
      "It starts with a consultation — either in person or via message — where you and Adam discuss the design, placement, and sizing. Once everything is dialled in, Adam prepares your custom design and you book your appointment. On the day, he'll walk you through the stencil placement and make sure you're comfortable before getting started.",
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      "Arrive well-rested and hydrated. Eat a solid meal beforehand — low blood sugar makes long sessions harder. Avoid alcohol for at least 24 hours before your appointment. Wear or bring loose clothing that allows easy access to the area being tattooed. If it's a longer piece, bringing snacks and a drink is a good idea.",
  },
  {
    question: 'Is a deposit required?',
    answer:
      "Yes. A deposit is required to secure your appointment slot and will be put toward the final cost of your tattoo. The deposit amount depends on the scope of the piece. If you need to reschedule, please give as much notice as possible — deposits are non-refundable for no-shows or last-minute cancellations.",
  },
  {
    question: 'Can I make changes to my design?',
    answer:
      "Absolutely. The consultation is specifically for working through the design together. Minor adjustments on the day of your appointment are also normal. Major redesigns after the deposit is placed may require a new consultation. Adam's priority is that you're happy with what goes on your skin.",
  },
  {
    question: 'What about aftercare?',
    answer:
      "Proper aftercare is what keeps your tattoo looking sharp for years. Adam will walk you through everything at the end of your session. In short: keep it clean, keep it moisturized, stay out of the sun, and don't pick at it while it heals. Full aftercare instructions are on the Aftercare page.",
  },
  {
    question: 'Do you do walk-ins?',
    answer:
      "Walk-ins are welcome when Adam has availability, and flash designs are the best fit for a same-day visit. That said, most clients book in advance — especially for custom work. Check Instagram for walk-in availability announcements or send a message to ask.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t-2 border-[#1F1F1F]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-opacity hover:opacity-70"
        aria-expanded={isOpen}
      >
        <span
          className="font-bold text-[#1F1F1F]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
        >
          {question}
        </span>
        {/* Chevron icon */}
        <svg
          className={`h-6 w-6 shrink-0 text-[#1F1F1F] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-[#1F1F1F]" style={bodyText}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-[#f6eee0]">

      {/* ── Hero ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center gap-6 text-center">
            <p
              className="text-sm font-semibold uppercase tracking-widest text-[#1F1F1F]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Questions
            </p>
            <h1 className="uppercase text-[#1F1F1F]" style={barlowH1}>
              Frequently Asked Questions
            </h1>
            <p
              className="max-w-2xl text-[#1F1F1F]"
              style={{ ...bodyText, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
            >
              Answers to the most common questions about the process, booking, and what to expect.
            </p>
            <div className="mt-2 flex gap-4">
              <ContactButton className="inline-flex items-center justify-center rounded-[12px] bg-[#1F1F1F] px-5 py-2 text-[#f6eee0] transition-opacity hover:opacity-80" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '1rem' }}>
                Contact
              </ContactButton>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Accordion FAQ list ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-0 pb-20 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="uppercase text-[#1F1F1F]" style={barlowH2}>
              FAQs
            </h2>
            <p className="max-w-lg text-[#1F1F1F]" style={bodyText}>
              Here are answers to the most common tattoo-related questions.
            </p>
          </div>

          {/* Accordion */}
          <div className="border-b-2 border-[#1F1F1F]">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── Still have questions? (with Adam's studio photo) ── */}
      <RevealSection className="bg-[#f6eee0] px-6 py-20 md:py-28 lg:px-16">
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

            {/* Text + CTA */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="uppercase text-[#1F1F1F]" style={barlowH3}>
                  Still have questions?
                </h2>
                <p className="text-[#1F1F1F]" style={bodyText}>
                  If something wasn't covered above, Adam's happy to chat. Whether you're a first-timer
                  trying to figure out where to start or a collector with a specific project in mind —
                  just reach out.
                </p>
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

      {/* ── Contact ── */}
      <ContactSection subtitle="Ask away — reach out to book or with any questions." />
    </div>
  );
}
