import { ReactNode } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white' | 'outline-white' | 'danger';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children:   ReactNode;
  variant?:   Variant;
  size?:      Size;
  href?:      string;
  external?:  boolean;
  disabled?:  boolean;
  loading?:   boolean;
  fullWidth?: boolean;
  onClick?:   () => void;
  type?:      'button' | 'submit' | 'reset';
  className?: string;
}

const sizeMap: Record<Size, string> = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

export default function Button({
  children, variant = 'primary', size = 'md', href, external,
  disabled, loading, fullWidth, onClick, type = 'button', className = '',
}: ButtonProps) {
  const cls = `btn btn-${variant} ${sizeMap[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim();

  const content = loading ? (
    <span style={{ display:'flex', alignItems:'center', gap:'.4rem' }}>
      <svg style={{ width:'1rem', height:'1rem', animation:'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
        <circle style={{ opacity:.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path style={{ opacity:.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
      Loading…
    </span>
  ) : children;

  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noreferrer" className={cls}>{content}</a>
      : <Link href={href} className={cls}>{content}</Link>;
  }
  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
