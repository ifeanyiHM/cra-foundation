"use client";

import Image from "next/image";
import { useState } from "react";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

const FALLBACK_IMAGE =
  "https://i.pinimg.com/1200x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg";

interface BoardImageProps {
  name: string;
  className?: string;
  width: number;
  height: number;
}

export default function BoardImage({
  name,
  className,
  width,
  height,
}: BoardImageProps) {
  const [extIdx, setExtIdx] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  const isWebp = !useFallback && EXTENSIONS[extIdx] === "webp";

  const imageSrc = useFallback
    ? FALLBACK_IMAGE
    : `/images/board/${name}.${EXTENSIONS[extIdx]}`;

  return (
    <Image
      src={imageSrc}
      alt={name}
      width={width}
      height={height}
      className={`rounded-full object-cover ${!isWebp ? "translate-y-3" : ""} ${className ?? ""}`}
      onError={() => {
        if (extIdx < EXTENSIONS.length - 1) {
          setExtIdx((i) => i + 1);
        } else {
          setUseFallback(true);
        }
      }}
    />
  );
}

// "use client";
// import Image from "next/image";
// import { useState } from "react";

// const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

// interface BoardImageProps {
//   name: string;
//   className?: string;
//   width: number;
//   height: number;
// }

// export default function BoardImage({
//   name,
//   className,
//   width,
//   height,
// }: BoardImageProps) {
//   const [extIdx, setExtIdx] = useState(0);

//   // If all extensions fail, show initials fallback
//   if (extIdx >= EXTENSIONS.length) {
//     return (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           background: "var(--neutral-100)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "2rem",
//           fontWeight: 800,
//           color: "var(--neutral-400)",
//           letterSpacing: "-.02em",
//         }}
//       >
//         {name.charAt(0)}
//       </div>
//     );
//   }

//   return (
//     <Image
//       src={`/images/board/${name}.${EXTENSIONS[extIdx]}`}
//       alt={name}
//       width={width}
//       height={height}
//       className={className}
//       onError={() => setExtIdx((i) => i + 1)}
//     />
//   );
// }
