import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export default function PageSection({ children, className = '' }: PageSectionProps) {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}



