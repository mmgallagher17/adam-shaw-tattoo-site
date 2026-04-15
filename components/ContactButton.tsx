'use client';

import { ReactNode } from 'react';
import { scrollToContact } from '@/lib/scrollToContact';

interface ContactButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export default function ContactButton({ className, style, children }: ContactButtonProps) {
  return (
    <button type="button" onClick={scrollToContact} className={className} style={style}>
      {children}
    </button>
  );
}
