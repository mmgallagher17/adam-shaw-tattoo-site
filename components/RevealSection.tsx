'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'article';
  delay?: 0 | 100 | 200 | 300;
}

export default function RevealSection({
  children,
  className = '',
  as: Tag = 'section',
  delay = 0,
}: RevealSectionProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
