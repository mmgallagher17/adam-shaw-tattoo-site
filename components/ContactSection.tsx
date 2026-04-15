'use client';

import { FormEvent, useState } from 'react';

interface ContactSectionProps {
  subtitle?: string;
  variant?: 'green' | 'japanese';
}

export default function ContactSection({
  subtitle = 'Book your next tattoo in Winnipeg with Adam Shaw',
  variant = 'green',
}: ContactSectionProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // ============================================
  // FORMSPREE CONFIGURATION
  // Replace YOUR_FORM_ID with your actual Formspree form ID.
  // Get one at https://formspree.io
  // ============================================
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Your message has been sent.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const isJapanese = variant === 'japanese';

  // Theme tokens
  const sectionBg   = isJapanese ? '#a52a2a' : '#3f6b4b';
  const innerBg     = isJapanese ? '#000000' : '#3f6b4b';
  const headingColor = isJapanese ? '#a52a2a' : '#f6eee0';
  const subtitleColor = isJapanese ? '#a52a2a' : '#f6eee0';
  const inputBorderColor = '#f6eee0';
  const inputTextColor   = '#f6eee0';
  const btnBg   = isJapanese ? '#ffffff' : '#f3e7d3';
  const btnText = isJapanese ? '#000000' : '#1F1F1F';
  const btnBorder = btnBg;

  const inputBase = `w-full bg-transparent border-0 border-b-2 py-3 placeholder-white/50 outline-none transition-colors focus:border-white`;

  return (
    <section
      id="contact"
      className={`relative overflow-hidden scroll-mt-16 ${isJapanese ? 'flex flex-col min-h-screen px-6 py-10 md:px-10 md:py-16' : ''}`}
      style={{ backgroundColor: sectionBg }}
    >
      <div
        className={`flex flex-col items-center justify-center px-4 py-20 md:py-28 ${isJapanese ? 'flex-1 rounded-[8px] overflow-hidden' : 'min-h-screen'}`}
        style={{ backgroundColor: innerBg }}
      >
        {/* Decorative "CONTACT" heading */}
        <div className="w-full select-none text-center">
          <p
            className="whitespace-nowrap uppercase leading-none"
            style={{
              fontFamily: "'Holtwood One SC', serif",
              fontSize: 'clamp(2rem, 15.3vw, 13.75rem)',
              letterSpacing: '-0.01em',
              textShadow: '0 4px 4px rgba(0,0,0,0.25)',
              color: headingColor,
            }}
          >
            Contact
          </p>
        </div>

        {/* Subtitle */}
        <p
          className="mb-12 mt-4 max-w-2xl text-center text-base font-bold uppercase tracking-widest md:text-lg"
          style={{
            fontFamily: "'Inter', sans-serif",
            textShadow: '0 4px 4px rgba(0,0,0,0.25)',
            color: subtitleColor,
          }}
        >
          {subtitle}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[560px] flex-col gap-6"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif", color: inputTextColor }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputBase}
              style={{ borderColor: inputBorderColor, color: inputTextColor }}
              placeholder=""
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif", color: inputTextColor }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputBase}
              style={{ borderColor: inputBorderColor, color: inputTextColor }}
              placeholder=""
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif", color: inputTextColor }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={`${inputBase} resize-none`}
              style={{ borderColor: inputBorderColor, color: inputTextColor }}
              placeholder="Send your ideas, size, and placement details to start your custom piece."
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-[12px] border px-8 py-2.5 text-base font-bold uppercase tracking-wide transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: btnBg,
                borderColor: btnBorder,
                color: btnText,
              }}
            >
              {status === 'loading' ? 'Sending…' : 'Send'}
            </button>

            {message && (
              <p
                className={`text-center text-sm font-medium ${
                  status === 'success' ? 'text-[#f6eee0]' : 'text-red-300'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
