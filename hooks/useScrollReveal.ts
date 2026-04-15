'use client';

import { useEffect, useRef } from 'react';

/**
 * Attach this ref to any element and it will fade + slide up into view
 * once it enters the viewport. Uses IntersectionObserver — no library needed.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <section ref={ref} ...>
 *
 * The element needs the `reveal` class in globals.css for the initial state.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el); // animate once only
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
