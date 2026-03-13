'use client';

import { FiCalendar, FiMenu, FiMonitor, FiX } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { type KeyboardEvent, useEffect, useRef, useState } from 'react';
import type { ThemePreference } from '@/lib/useTheme';

type MobileControlsProps = {
  themeMode: ThemePreference;
  isOpen: boolean;
  onOpenBookingModal: () => void;
  onSelectTheme: (theme: ThemePreference) => void;
  onToggleMenu: () => void;
};

const THEME_OPTIONS: ThemePreference[] = ['light', 'dark', 'system'];

export default function MobileControls({
  themeMode,
  isOpen,
  onOpenBookingModal,
  onSelectTheme,
  onToggleMenu,
}: MobileControlsProps) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const themeTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIcon =
    themeMode === 'light' ? <FaSun size={18} /> : themeMode === 'dark' ? <FaMoon size={18} /> : <FiMonitor size={18} />;

  const focusThemeItem = (index: number) => {
    if (!themeMenuRef.current) return;
    const items = Array.from(
      themeMenuRef.current.querySelectorAll<HTMLButtonElement>('[data-theme-menu-item]')
    );
    if (!items.length) return;

    const safeIndex = ((index % items.length) + items.length) % items.length;
    items[safeIndex]?.focus();
  };

  const openThemeMenuAndFocus = (index: number) => {
    setIsThemeMenuOpen(true);
    requestAnimationFrame(() => {
      focusThemeItem(index);
    });
  };

  const selectedThemeIndex = THEME_OPTIONS.indexOf(themeMode);

  const handleThemeTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openThemeMenuAndFocus(selectedThemeIndex >= 0 ? selectedThemeIndex : 0);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      openThemeMenuAndFocus(selectedThemeIndex >= 0 ? selectedThemeIndex : THEME_OPTIONS.length - 1);
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openThemeMenuAndFocus(selectedThemeIndex >= 0 ? selectedThemeIndex : 0);
      return;
    }

    if (event.key === 'Escape') {
      setIsThemeMenuOpen(false);
    }
  };

  const handleThemeItemKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusThemeItem(index + 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusThemeItem(index - 1);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusThemeItem(0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusThemeItem(THEME_OPTIONS.length - 1);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsThemeMenuOpen(false);
      themeTriggerRef.current?.focus();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelectTheme(THEME_OPTIONS[index]);
      setIsThemeMenuOpen(false);
      themeTriggerRef.current?.focus();
    }
  };

  return (
    <div className="flex items-center gap-1.5 lg:hidden sm:gap-2">
      <button
        onClick={onOpenBookingModal}
        className="rounded-full bg-[rgba(var(--accent-rgb),0.2)] p-1.5 text-[var(--accent)] transition-all duration-300 hover:scale-110 sm:p-2"
        aria-label="Book a call"
      >
        <FiCalendar size={18} />
      </button>

      <div ref={themeMenuRef} className="relative">
        <button
          ref={themeTriggerRef}
          type="button"
          onClick={() => setIsThemeMenuOpen((prev) => !prev)}
          onKeyDown={handleThemeTriggerKeyDown}
          className={`rounded-full bg-[rgba(var(--accent-rgb),0.1)] p-1.5 text-[var(--accent)] transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--accent-rgb),0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:p-2 ${
            isThemeMenuOpen ? 'ring-1 ring-[rgba(var(--accent-rgb),0.35)]' : ''
          }`}
          aria-controls="mobile-theme-menu"
          aria-label="Theme options"
          title="Theme options"
          aria-haspopup="menu"
          aria-expanded={isThemeMenuOpen}
          data-theme-toggle-btn
        >
          {themeIcon}
        </button>

        <div
          id="mobile-theme-menu"
          role="menu"
          aria-label="Theme options"
          onBlur={(event) => {
            if (!themeMenuRef.current?.contains(event.relatedTarget as Node)) {
              setIsThemeMenuOpen(false);
            }
          }}
          className={`absolute right-0 top-full z-50 mt-2 w-32 rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[var(--bg)] p-1 shadow-[0_14px_30px_rgba(var(--accent-rgb),0.16)] transition-all duration-200 ${
            isThemeMenuOpen
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-1 scale-[0.98] opacity-0'
          }`}
        >
          {THEME_OPTIONS.map((option, index) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onSelectTheme(option);
                setIsThemeMenuOpen(false);
                themeTriggerRef.current?.focus();
              }}
              onKeyDown={(event) => handleThemeItemKeyDown(event, index)}
              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--accent-rgb),0.5)] focus-visible:ring-inset ${
                themeMode === option
                  ? 'bg-[rgba(var(--accent-rgb),0.12)] text-[var(--accent)]'
                  : 'text-[var(--text)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-[var(--accent)]'
              }`}
              role="menuitemradio"
              aria-checked={themeMode === option}
              tabIndex={isThemeMenuOpen ? 0 : -1}
              data-theme-menu-item
            >
              {option}
              {themeMode === option ? <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> : null}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onToggleMenu}
        className="rounded-full bg-[rgba(var(--accent-rgb),0.1)] p-1.5 text-[var(--accent)] transition-all duration-300 hover:scale-110 sm:p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>
    </div>
  );
}
