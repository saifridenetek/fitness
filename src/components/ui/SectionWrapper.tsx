import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, subtitle, children, className, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("py-12 md:py-16", className)} {...props}>
      <div className="max-w-5xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
