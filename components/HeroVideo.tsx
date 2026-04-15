'use client';

import Link from 'next/link';

interface HeroVideoProps {
  videoUrl: string;
  headline: string;
  supportingText?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export default function HeroVideo({
  videoUrl,
  headline,
  supportingText,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroVideoProps) {
  const hasVideo = Boolean(videoUrl);
  const mobileVideo = '/media/hero-loop-small.mp4';

  const scrollToContactSmooth = () => {
    const target = document.getElementById('contact');
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const duration = 900;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, start + (end - start) * ease);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#2C2C2C]">
      {/* Background video with graceful fallback */}
      {hasVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/media/hero-loop-small.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src={videoUrl} type="video/mp4" media="(min-width: 768px)" />
        </video>
      )}
      {/* Gradient overlay stays above video, below content */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/85 via-[#2C2C2C]/80 to-[#252525]/90" />
      
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 py-16 md:py-24">
        <div className="w-full max-w-3xl lg:max-w-4xl mx-auto md:mx-0">
          <h1 className="hero-heading mb-7 md:mb-9 text-center md:text-left">
            {headline}
          </h1>
          {supportingText && (
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg md:mb-12 lg:text-xl lg:leading-relaxed text-center md:text-left mx-auto md:mx-0">
              {supportingText}
            </p>
          )}
          <div className="mt-6 flex flex-row flex-wrap items-center gap-3 justify-center md:justify-start">
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center justify-center rounded-[12px] border border-[#f3e7d3] bg-[#f3e7d3] px-6 py-2.5 text-sm md:text-base font-medium text-[#1f1f1f] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90"
            >
              {primaryButtonText}
            </Link>
            <button
              type="button"
              onClick={scrollToContactSmooth}
              data-target={secondaryButtonLink}
              className="inline-flex items-center justify-center rounded-[12px] border-2 border-white bg-[#3f6b4b] px-6 py-2.5 text-sm md:text-base font-medium text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90"
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
