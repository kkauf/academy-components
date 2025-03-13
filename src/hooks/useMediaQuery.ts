import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design - detects if a media query matches
 * @param query - Media query string (e.g., '(min-width: 768px)')
 * @returns Boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is defined (to support SSR)
    if (typeof window === 'undefined') {
      return;
    }
    
    const media = window.matchMedia(query);
    
    // Update matches state initially
    setMatches(media.matches);
    
    // Define listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add listener
    media.addEventListener('change', listener);
    
    // Clean up
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};

/**
 * Predefined responsive breakpoints matching Tailwind defaults
 */
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

/**
 * Custom hooks for specific breakpoints
 */
export const useIsMobile = () => !useMediaQuery(breakpoints.sm);
export const useIsTablet = () => useMediaQuery(breakpoints.md) && !useMediaQuery(breakpoints.lg);
export const useIsDesktop = () => useMediaQuery(breakpoints.lg);
