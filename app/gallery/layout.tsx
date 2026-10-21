import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos of the children, programs and events at the Children's Right Advocate Foundation.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
