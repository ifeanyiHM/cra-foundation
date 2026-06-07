import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children:   ReactNode;
  hover?:     boolean;
  padding?:   'sm' | 'md' | 'lg';
  style?:     CSSProperties;
  className?: string;
}

const padMap = { sm: '1rem', md: '1.5rem', lg: '2.5rem' };

export default function Card({ children, hover = false, padding = 'md', style, className = '' }: CardProps) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`} style={{ padding: padMap[padding], ...style }}>
      {children}
    </div>
  );
}
