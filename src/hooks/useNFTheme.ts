import { useState, useEffect, useCallback } from 'react';

export type NFTheme = 'light' | 'dark';

const THEME_KEY = 'nf-theme';
const THEME_EVENT = 'nf-theme-change';

/**
 * Reads the current theme preference from localStorage or system setting.
 * Defaults to 'light' to preserve institutional branding clarity.
 */
export function getStoredTheme(): NFTheme {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    // Fall back to system color scheme if not explicitly set
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }
  return 'light';
}

/**
 * Applies the given theme classes and CSS properties to document.documentElement.
 */
export function applyTheme(theme: NFTheme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
    root.style.colorScheme = 'dark';
    if (document.body) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
    if (document.body) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Ignore storage write errors
  }
}

/**
 * Universal theme hook for NFVS website.
 * Keeps theme in sync across React state, localStorage, document classes, and cross-tab/cross-page navigation.
 */
export function useNFTheme() {
  const [theme, setThemeState] = useState<NFTheme>(getStoredTheme);

  // Apply theme immediately on mount to prevent any desync
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Listen for custom theme change events and storage events
  useEffect(() => {
    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<NFTheme>;
      if (customEvent.detail && (customEvent.detail === 'dark' || customEvent.detail === 'light')) {
        setThemeState(customEvent.detail);
        applyTheme(customEvent.detail);
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
        setThemeState(e.newValue);
        applyTheme(e.newValue);
      }
    };

    window.addEventListener(THEME_EVENT, handleCustomChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(THEME_EVENT, handleCustomChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const setTheme = useCallback((newTheme: NFTheme | ((prev: NFTheme) => NFTheme)) => {
    setThemeState((current) => {
      const next = typeof newTheme === 'function' ? newTheme(current) : newTheme;
      applyTheme(next);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: next }));
      }
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
  };
}
