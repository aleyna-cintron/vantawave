"use client";

import { useState } from "react";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className ?? ""}`}
        style={{ minHeight: "200px" }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  );
}
