'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  showDots?: boolean;
  showArrows?: boolean;
  arrowClassName?: string;
  dotActiveClassName?: string;
  dotInactiveClassName?: string;
  desktopSlidesPerView?: 1 | 2;
  controlsPosition?: 'sides' | 'bottom';
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function Carousel({
  children,
  showDots = true,
  showArrows = true,
  arrowClassName = 'rounded-full bg-white/95 shadow-lg backdrop-blur-sm hover:bg-white hover:shadow-xl',
  dotActiveClassName = 'bg-[#1F1F1F] w-8',
  dotInactiveClassName = 'bg-[#4A4A4A]/40 hover:bg-[#4A4A4A]/60',
  desktopSlidesPerView = 1,
  controlsPosition = 'sides',
  autoplay = false,
  autoplayDelay = 4000,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!autoplay || !emblaApi || isPaused) return;
    const id = setInterval(() => emblaApi.scrollNext(), autoplayDelay);
    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, emblaApi, isPaused]);

  const ArrowPrev = () => (
    <button
      onClick={scrollPrev}
      className={`p-3 transition-all ${arrowClassName}`}
      aria-label="Previous slide"
    >
      <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const ArrowNext = () => (
    <button
      onClick={scrollNext}
      className={`p-3 transition-all ${arrowClassName}`}
      aria-label="Next slide"
    >
      <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const Dots = () => (
    <>
      {children.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={`h-2.5 w-2.5 rounded-full transition-all ${
            index === selectedIndex ? dotActiveClassName : dotInactiveClassName
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </>
  );

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative">
        {controlsPosition === 'sides' && showArrows && (
          <>
            <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2 md:left-8">
              <ArrowPrev />
            </div>
            <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 md:right-8">
              <ArrowNext />
            </div>
          </>
        )}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {children.map((child, index) => (
              <div
                key={index}
                className={`min-w-0 ${
                  controlsPosition === 'sides' ? 'px-14 md:px-16' : 'px-2 md:px-4'
                } ${
                  desktopSlidesPerView === 2
                    ? 'flex-[0_0_100%] md:flex-[0_0_50%]'
                    : 'flex-[0_0_100%]'
                }`}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls row — dots + arrows when controlsPosition is 'bottom' */}
      {controlsPosition === 'bottom' ? (
        <div className="mt-8 flex items-center justify-between">
          {showDots ? (
            <div className="flex gap-2">
              <Dots />
            </div>
          ) : <div />}
          {showArrows && (
            <div className="flex gap-3">
              <ArrowPrev />
              <ArrowNext />
            </div>
          )}
        </div>
      ) : showDots ? (
        <div className="mt-6 flex justify-center gap-2 md:mt-8">
          <Dots />
        </div>
      ) : null}
    </div>
  );
}
