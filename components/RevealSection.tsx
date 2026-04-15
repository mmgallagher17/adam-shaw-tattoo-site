'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300;
}

export default function RevealSection({
  children,
  className = '',
  delay = 0,
}: RevealSectionProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
