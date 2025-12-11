import { ReactNode } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
}

const ScrollReveal = ({ children, className, direction = 'up', delay = 0 }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const hiddenClass = {
    up: 'scroll-hidden',
    left: 'scroll-hidden-left',
    right: 'scroll-hidden-right',
    scale: 'scroll-hidden-scale',
  }[direction];

  const visibleClass = {
    up: 'scroll-visible',
    left: 'scroll-visible-left',
    right: 'scroll-visible-right',
    scale: 'scroll-visible-scale',
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(hiddenClass, isVisible && visibleClass, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
