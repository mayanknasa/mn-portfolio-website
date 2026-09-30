import { useState } from "react";

export default function ShimmerImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[var(--surface-hover)] ${wrapperClassName}`}>
      {/* Shimmer Placeholder Skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-[var(--surface-hover)] overflow-hidden"
          aria-hidden="true"
        >
          <div className="w-full h-full animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] bg-[var(--border)]/30" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ease-out`}
        {...props}
      />
    </div>
  );
}
