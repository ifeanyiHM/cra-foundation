type Variant = 'red' | 'green' | 'blue' | 'amber' | 'violet' | 'gray';

export default function Badge({ children, variant = 'gray' }: { children: React.ReactNode; variant?: Variant }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
