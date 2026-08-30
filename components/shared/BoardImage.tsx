"use client";

import Image from "next/image";
import { useState } from "react";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

const FALLBACK_IMAGE =
  "https://i.pinimg.com/1200x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg";

interface BoardImageProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  translateNonWebp?: boolean;
}

export default function BoardImage({
  name,
  className,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  translateNonWebp = false,
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
      {...(fill ? { fill: true } : { width, height })}
      priority={priority}
      sizes={sizes}
      className={`rounded-full object-cover ${translateNonWebp && !isWebp ? "translate-y-2" : ""} ${className ?? ""}`}
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
