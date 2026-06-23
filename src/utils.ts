export const DEFAULT_BLOG_FALLBACKS: Record<string, string> = {
  'Visas': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
  'Admissions': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
  'Scholarships': 'https://images.unsplash.com/photo-1523205741223-4012024de1ce?auto=format&fit=crop&q=80&w=800',
  'Student Life': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  'Careers': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  'English Requirements': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
  'default': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800'
};

export function getBlogFallbackImage(category?: string): string {
  if (!category) return DEFAULT_BLOG_FALLBACKS.default;
  return DEFAULT_BLOG_FALLBACKS[category] || DEFAULT_BLOG_FALLBACKS.default;
}

/**
 * Utility tool to dynamically optimize Unsplash and local image assets for high-performance delivery.
 * Sets the format parameter to WebP and applies custom compression quality.
 */
export function getOptimizedImageUrl(url: any, width?: number, quality = 75, category?: string): string {
  if (!url) {
    return getBlogFallbackImage(category);
  }

  // Handle ES module imports or asset objects gracefully
  let resolvedUrl = '';
  if (typeof url === 'string') {
    resolvedUrl = url;
  } else if (url && typeof url === 'object') {
    resolvedUrl = url.default || url.src || String(url);
  } else {
    resolvedUrl = String(url);
  }

  if (!resolvedUrl || resolvedUrl === '[object Object]') {
    return getBlogFallbackImage(category);
  }
  
  // If it's an Unsplash URL, we inject precision CDN variables for format negotiation, quality compression, cropping, and sizing
  if (resolvedUrl.includes('unsplash.com')) {
    try {
      const urlObj = new URL(resolvedUrl);
      
      // auto=format serves WebP/AVIF to compatible browsers, falling back seamlessly.
      // auto=compress applies intelligent compression and strips unnecessary EXIF metadata.
      urlObj.searchParams.set('auto', 'format,compress');
      urlObj.searchParams.set('q', quality.toString());
      
      if (width) {
        urlObj.searchParams.set('w', width.toString());
        // Fit by cropping to avoid loading oversized bounds
        urlObj.searchParams.set('fit', 'crop');
      }
      
      return urlObj.toString();
    } catch {
      return resolvedUrl;
    }
  }
  
  return resolvedUrl;
}
