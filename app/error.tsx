// error.tsx
"use client";
import { useEffect } from "react";
import Link from "next/link";
import { RiErrorWarningLine } from "react-icons/ri";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <style>{`
        .err-root { min-height: 100svh; display: flex; align-items: center; justify-content: center; background: var(--neutral-50); padding: 2rem; padding-top: 5rem; }
        .err-inner { text-align: center; max-width: 28rem; }
        .err-icon-wrap { width: 3.5rem; height: 3.5rem; border-radius: var(--radius-xl); background: var(--brand-50); border: 1px solid var(--brand-100); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
        .err-icon { width: 1.5rem; height: 1.5rem; color: var(--brand-600); }
        .err-title { margin-bottom: .75rem; }
        .err-sub { color: var(--neutral-500); font-size: .9375rem; margin-bottom: 2rem; line-height: 1.7; }
        .err-btns { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }

        @media (min-width: 1440px) {
          .err-inner { max-width: 32rem; }
          .err-icon-wrap { width: 3.75rem; height: 3.75rem; margin: 0 auto 1.625rem; }
          .err-icon { width: 1.625rem; height: 1.625rem; }
          .err-sub { font-size: .975rem; margin-bottom: 2.125rem; }
          .err-btns { gap: .825rem; }
        }
        @media (min-width: 1536px) {
          .err-inner { max-width: 36rem; }
          .err-icon-wrap { width: 4.25rem; height: 4.25rem; margin: 0 auto 1.875rem; }
          .err-icon { width: 1.875rem; height: 1.875rem; }
          .err-sub { font-size: 1.075rem; margin-bottom: 2.375rem; }
          .err-btns { gap: .9rem; }
        }
        @media (min-width: 1680px) {
          .err-inner { max-width: 40rem; }
          .err-icon-wrap { width: 4.75rem; height: 4.75rem; margin: 0 auto 2.125rem; }
          .err-icon { width: 2.1rem; height: 2.1rem; }
          .err-sub { font-size: 1.175rem; margin-bottom: 2.625rem; }
          .err-btns { gap: 1rem; }
        }
        @media (min-width: 1920px) {
          .err-inner { max-width: 48rem; }
          .err-icon-wrap { width: 5.5rem; height: 5.5rem; margin: 0 auto 2.5rem; }
          .err-icon { width: 2.5rem; height: 2.5rem; }
          .err-sub { font-size: 1.35rem; margin-bottom: 3rem; }
          .err-btns { gap: 1.25rem; }
        }
      `}</style>

      <div className="err-root">
        <div className="err-inner">
          <div className="err-icon-wrap">
            <RiErrorWarningLine className="err-icon" />
          </div>
          <h2 className="err-title">Something went wrong</h2>
          <p className="err-sub">
            An unexpected error occurred. Please try again or contact us if the
            issue persists.
          </p>
          <div className="err-btns">
            <button onClick={reset} className="btn btn-primary">
              Try Again
            </button>
            <Link href="/" className="btn btn-secondary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
