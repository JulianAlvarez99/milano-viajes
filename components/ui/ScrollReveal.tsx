'use client';

import { useEffect, useRef, ReactNode } from 'react';

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideRight';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  animation?: AnimationVariant;
  threshold?: number;
  className?: string;
}

const variantClass: Record<AnimationVariant, string> = {
  fadeUp:     'reveal',
  fadeIn:     'reveal-fade',
  slideRight: 'reveal-right',
};

export function ScrollReveal({
  children,
  delay = 0,
  animation = 'fadeUp',
  threshold = 0.15,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply delay via inline style
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect(); // Fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const baseClass = variantClass[animation];

  return (
    <div ref={ref} className={`${baseClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
