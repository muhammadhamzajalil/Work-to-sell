import React from 'react';
import { getOptimizedImageUrl, getBlogFallbackImage } from '../utils';

interface OptimizedImageProps {
  url: any; // The primary image URL (can be Unsplash, local import string, or dynamic module asset)
  width?: number; // Target display width for optimization
  quality?: number; // Target quality (e.g. 75)
  category?: string; // Optional blog category for fallback
  sizes?: string; // HTML sizes attribute
  alt?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  fetchPriority?: 'high' | 'low' | 'auto';
  [key: string]: any; // Catch-all for other img tag attributes
}

export default function OptimizedImage({
  url,
  width,
  quality = 75,
  category,
  sizes,
  alt = '',
  loading = 'lazy',
  className = '',
  onError,
  fetchPriority,
  ...props
}: OptimizedImageProps) {
  // Resolve URL dynamically to handle string, module default, or other asset formats safely
  let resolvedUrl = '';
  if (typeof url === 'string') {
    resolvedUrl = url;
  } else if (url && typeof url === 'object') {
    resolvedUrl = url.default || url.src || String(url);
  } else {
    resolvedUrl = String(url || '');
  }

  // Determine if it is an Unsplash URL
  const isUnsplash = resolvedUrl && resolvedUrl.includes('unsplash.com');

  // Set up base optimized URL
  const baseSrc = getOptimizedImageUrl(resolvedUrl, width, quality, category);

  // Set up responsive srcSet if Unsplash
  let srcSet: string | undefined = undefined;
  if (isUnsplash) {
    const widths = [320, 480, 640, 800, 1024, 1200, 1600];
    srcSet = widths
      .map((w) => `${getOptimizedImageUrl(resolvedUrl, w, quality, category)} ${w}w`)
      .join(', ');
  }

  // Handle image load error securely with the matching categorical fallback image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = getBlogFallbackImage(category);
    e.currentTarget.removeAttribute('srcset');
    if (onError) {
      onError(e);
    }
  };

  // If no sizes are defined, but a target width is given, provide standard responsive matching sizes
  const resolvedSizes = sizes || (isUnsplash && width ? `(max-width: ${width}px) 100vw, ${width}px` : undefined);

  return (
    <img
      src={baseSrc}
      srcSet={srcSet}
      sizes={resolvedSizes}
      alt={alt}
      loading={loading}
      className={className}
      onError={handleImageError}
      referrerPolicy="no-referrer"
      {...(fetchPriority ? { fetchPriority } : {})}
      {...props}
    />
  );
}
