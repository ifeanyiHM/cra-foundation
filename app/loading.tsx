// loading.tsx
import Image from "next/image";

export default function Loading() {
  return (
    <>
      <style>{`
        .ld-root { min-height: 100svh; display: flex; align-items: center; justify-content: center; background: var(--neutral-50); }
        .ld-logo-wrap { width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; opacity: .9; }
        .ld-logo { width: 60px; filter: hue-rotate(-240deg) saturate(100%) brightness(95%); }
        .ld-dots { display: flex; gap: .3rem; justify-content: center; margin-bottom: .75rem; margin-left: 1rem; }
        .ld-dot { width: .4rem; height: .4rem; border-radius: 50%; background: var(--brand-600); opacity: .7; }

        @media (min-width: 1440px) {
          .ld-logo-wrap { width: 3.25rem; height: 3.25rem; margin: 0 auto 1.075rem; }
          .ld-logo { width: 68px; }
          .ld-dots { gap: .325rem; margin-bottom: .8rem; }
          .ld-dot { width: .425rem; height: .425rem; }
        }
        @media (min-width: 1536px) {
          .ld-logo-wrap { width: 3.625rem; height: 3.625rem; margin: 0 auto 1.2rem; }
          .ld-logo { width: 76px; }
          .ld-dots { gap: .35rem; margin-bottom: .875rem; }
          .ld-dot { width: .475rem; height: .475rem; }
        }
        @media (min-width: 1680px) {
          .ld-logo-wrap { width: 4rem; height: 4rem; margin: 0 auto 1.375rem; }
          .ld-logo { width: 86px; }
          .ld-dots { gap: .375rem; margin-bottom: .925rem; }
          .ld-dot { width: .525rem; height: .525rem; }
        }
        @media (min-width: 1920px) {
          .ld-logo-wrap { width: 4.75rem; height: 4.75rem; margin: 0 auto 1.625rem; }
          .ld-logo { width: 100px; }
          .ld-dots { gap: .425rem; margin-bottom: 1rem; }
          .ld-dot { width: .625rem; height: .625rem; }
        }

        @keyframes bounce {
          0%,80%,100% { transform: translateY(0); }
          40%          { transform: translateY(-6px); }
        }
      `}</style>

      <div className="ld-root">
        <div style={{ textAlign: "center" }}>
          <div className="ld-logo-wrap">
            <Image
              src="/cra-loading.png"
              alt="Children's Right Advocate Foundation"
              width={150}
              height={50}
              priority
              className="ld-logo"
              style={{
                filter: "hue-rotate(-240deg) saturate(100%) brightness(95%)",
              }}
            />
          </div>
          <div className="ld-dots">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="ld-dot"
                style={{ animation: `bounce 1s ${i * 0.15}s infinite` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
