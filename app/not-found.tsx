// not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style>{`
        .nf-root { min-height: 100svh; background: var(--neutral-950); display: flex; align-items: center; justify-content: center; padding: 2rem; }
        .nf-inner { text-align: center; max-width: 32rem; }
        .nf-404 { font-size: clamp(6rem,18vw,12rem); font-weight: 800; color: rgba(255,255,255,.04); line-height: 1; letter-spacing: -.05em; margin-bottom: -1rem; user-select: none; }
        .nf-sub { color: rgba(255,255,255,.45); font-size: .9375rem; line-height: 1.75; margin-bottom: 2.5rem; }
        .nf-btns { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }

        @media (min-width: 1440px) {
          .nf-inner { max-width: 36rem; }
          .nf-sub { font-size: .975rem; margin-bottom: 2.75rem; }
          .nf-btns { gap: .825rem; }
        }
        @media (min-width: 1536px) {
          .nf-inner { max-width: 40rem; }
          .nf-sub { font-size: 1.075rem; margin-bottom: 3rem; }
          .nf-btns { gap: .9rem; }
        }
        @media (min-width: 1680px) {
          .nf-inner { max-width: 44rem; }
          .nf-sub { font-size: 1.175rem; margin-bottom: 3.25rem; }
          .nf-btns { gap: 1rem; }
        }
        @media (min-width: 1920px) {
          .nf-inner { max-width: 52rem; }
          .nf-sub { font-size: 1.35rem; margin-bottom: 3.75rem; }
          .nf-btns { gap: 1.25rem; }
        }
      `}</style>

      <div className="nf-root">
        <div className="nf-inner">
          <div className="nf-404">404</div>
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
            Page not found
          </h2>
          <p className="nf-sub">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            There are children whose dreams still need nurturing — let&apos;s
            get you back on track.
          </p>
          <div className="nf-btns">
            <Link href="/" className="btn btn-white btn-lg">
              ← Back to Home
            </Link>
            <Link href="/donate" className="btn btn-outline-white btn-lg">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
