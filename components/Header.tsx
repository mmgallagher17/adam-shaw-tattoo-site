'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { scrollToContact as _scrollToContact } from '@/lib/scrollToContact';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFlashDropdownOpen, setIsFlashDropdownOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // Hide header on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      // Never hide while mobile menu is open
      if (isMobileMenuOpen) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const close = () => setIsMobileMenuOpen(false);

  const scrollToContact = () => { close(); _scrollToContact(); };

  const navLinks = [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About Adam' },
    { href: '/on-the-road', label: 'On the Road' },
  ];

  const flashGalleryLinks = [
    { href: '/flash', label: 'All Flash' },
    { href: '/traditional', label: 'Traditional' },
    { href: '/japanese', label: 'Japanese' },
  ];

  const tattooInfoLinks = [
    { href: '/info', label: 'Info' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/policies', label: 'Policies' },
    { href: '/aftercare', label: 'Tattoo Aftercare' },
  ];

  return (
    <>
      {/* ── Desktop / mobile bar ─────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-[#F4E7D6] border-b border-[#E8D9C4] shadow-sm transition-transform duration-300 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={close}>
              <Image
                src="/brand/adam-shaw-tattoo-logo-horizontal-black.png"
                alt="Adam Shaw Tattoo"
                width={440}
                height={110}
                className="w-[220px] md:w-[300px] h-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                    pathname === link.href ? 'text-[#1F1F1F]' : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Flash Gallery dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsFlashDropdownOpen(true)}
                onMouseLeave={() => setIsFlashDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    flashGalleryLinks.some((l) => pathname === l.href)
                      ? 'text-[#1F1F1F]'
                      : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                  }`}
                >
                  Flash Gallery
                  <svg className={`h-3 w-3 opacity-60 transition-transform duration-200 ${isFlashDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isFlashDropdownOpen && (
                  <div className="absolute left-0 top-full w-44 pt-1">
                    <div className="rounded-md border border-[#E8D9C4] bg-[#F4E7D6] shadow-[0_4px_16px_rgba(0,0,0,0.10)] overflow-hidden">
                      {flashGalleryLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block border-b border-[#E8D9C4] px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors last:border-b-0 ${
                            pathname === link.href
                              ? 'bg-[#EAD9C2] text-[#1F1F1F]'
                              : 'text-[#4A4A4A] hover:bg-[#EAD9C2] hover:text-[#1F1F1F]'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tattoo Info dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    tattooInfoLinks.some((l) => pathname === l.href)
                      ? 'text-[#1F1F1F]'
                      : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                  }`}
                >
                  Tattoo Info
                  <svg className={`h-3 w-3 opacity-60 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full w-52 pt-1">
                    <div className="rounded-md border border-[#E8D9C4] bg-[#F4E7D6] shadow-[0_4px_16px_rgba(0,0,0,0.10)] overflow-hidden">
                      {tattooInfoLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block border-b border-[#E8D9C4] px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors last:border-b-0 ${
                            pathname === link.href
                              ? 'bg-[#EAD9C2] text-[#1F1F1F]'
                              : 'text-[#4A4A4A] hover:bg-[#EAD9C2] hover:text-[#1F1F1F]'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center rounded-[12px] border border-black bg-[#3f6b4b] px-5 py-2 text-xs font-medium uppercase tracking-wide text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90 focus-visible:outline-none"
              >
                Contact
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6 text-[#1F1F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ────────────────────────────────── */}
      {/* Rendered OUTSIDE <header> so CSS transform on header doesn't   */}
      {/* break `position: fixed` for this element.                       */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#F4E7D6] md:hidden">
          {/* Top bar */}
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#E8D9C4] px-4">
            <Link href="/" onClick={close}>
              <Image
                src="/brand/adam-shaw-tattoo-logo-horizontal-black.png"
                alt="Adam Shaw Tattoo"
                width={440}
                height={110}
                className="w-[220px] h-auto"
                priority
              />
            </Link>
            <button
              onClick={close}
              aria-label="Close menu"
              className="p-1 text-sm font-semibold uppercase tracking-wider text-[#1F1F1F]"
            >
              Close
            </button>
          </div>

          {/* Scrollable nav area */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            {/* Main links */}
            <ul className="mb-6 flex flex-col divide-y divide-[#E8D9C4]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`block py-4 text-lg font-semibold uppercase tracking-wide transition-colors ${
                      pathname === link.href ? 'text-[#1F1F1F]' : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Flash Gallery group */}
            <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[#4A4A4A]">
              Flash Gallery
            </p>
            <ul className="mb-8 flex flex-col divide-y divide-[#E8D9C4]">
              {flashGalleryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`block py-3.5 text-base font-medium uppercase tracking-wide transition-colors ${
                      pathname === link.href ? 'text-[#1F1F1F]' : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Tattoo Info group */}
            <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-[#4A4A4A]">
              Tattoo Info
            </p>
            <ul className="mb-8 flex flex-col divide-y divide-[#E8D9C4]">
              {tattooInfoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`block py-3.5 text-base font-medium uppercase tracking-wide transition-colors ${
                      pathname === link.href ? 'text-[#1F1F1F]' : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full rounded-[12px] border border-black bg-[#3f6b4b] py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
