'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'theme';

const getStoredTheme = () => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === 'dark' || stored === 'light' || stored === 'system' ? stored : null;
};

const getSystemPrefersDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const setDOMTheme = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.remove('light-mode');
  } else {
    document.documentElement.classList.add('light-mode');
  }
};

const resolveIsDark = (theme: ThemePreference) => {
  if (theme === 'light') return false;
  if (theme === 'dark') return true;
  return getSystemPrefersDark();
};

const resolveInitialTheme = (): ThemePreference => getStoredTheme() ?? 'system';

const applyThemePreference = (theme: ThemePreference, persistPreference = true) => {
  const dark = resolveIsDark(theme);
  setDOMTheme(dark);

  if (persistPreference) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  return dark;
};

export function useTheme() {
  const [theme, setThemeState] = useState<ThemePreference>('system');
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const themeInitRef = useRef(false);
  const themeSwitchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize theme on mount - sync with DOM to prevent hydration mismatch
  useLayoutEffect(() => {
    if (themeInitRef.current) return;
    themeInitRef.current = true;

    const initialTheme = resolveInitialTheme();
    const shouldBeDark = applyThemePreference(initialTheme, false);

    // Update state on next frame to avoid synchronous setState-in-effect lint issue.
    requestAnimationFrame(() => {
      setThemeState(initialTheme);
      setIsDark(shouldBeDark);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (themeSwitchTimeoutRef.current) {
        clearTimeout(themeSwitchTimeoutRef.current);
      }
      document.documentElement.classList.remove('theme-changing');
    };
  }, []);

  const markThemeChanging = () => {
    document.documentElement.classList.add('theme-changing');
    if (themeSwitchTimeoutRef.current) {
      clearTimeout(themeSwitchTimeoutRef.current);
    }
    themeSwitchTimeoutRef.current = setTimeout(() => {
      document.documentElement.classList.remove('theme-changing');
      themeSwitchTimeoutRef.current = null;
    }, 650);
  };

  const setTheme = (nextTheme: ThemePreference) => {
    if (isDark === null) return;

    const nextIsDark = resolveIsDark(nextTheme);
    setThemeState(nextTheme);
    setIsDark(nextIsDark);
    markThemeChanging();
    applyThemePreference(nextTheme, true);
  };

  useEffect(() => {
    if (theme !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const nextDark = media.matches;
      setIsDark(nextDark);
      setDOMTheme(nextDark);
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange);
    } else {
      media.addListener(handleChange);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, [theme]);

  return {
    theme,
    isDark,
    setTheme,
    isLoading: isDark === null, // Indicate if theme hasn't loaded yet
  };
}
