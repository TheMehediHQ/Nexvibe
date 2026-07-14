'use client';

import Link from 'next/link';
import { FiCalendar, FiChevronDown, FiMonitor } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { type KeyboardEvent, type MouseEvent, type RefObject, useEffect, useRef, useState } from 'react';
import { ABOUT_ITEMS, INDUSTRY_ITEMS, MORE_ITEMS, NAV_LINKS } from '../constants';
import type { ThemePreference } from '@/lib/useTheme';

type DesktopNavProps = {
  pathname: string;
  themeMode: ThemePreference;
  isDropdownOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement | null>;
  onSelectTheme: (theme: ThemePreference) => void;
  onLinkHover: (event: MouseEvent<HTMLAnchorElement>) => void;
  onLinkHoverEnd: (event: MouseEvent<HTMLAnchorElement>) => void;
  onOpenDropdown: () => void;
  onCloseDropdownWithDelay: () => void;
  onToggleDropdownLock: () => void;
  onCloseDropdown: () => void;
  onOpenBookingModal: () => void;
};

const THEME_OPTIONS: ThemePreference[] = ['light', 'dark', 'system'];
const DROPDOWN_TOP_MARGIN_CLASS = 'mt-2';
const TOGGLE_WRAPPER_CLASS = 'relative h-9';

export default function DesktopNav({
  pathname,
  themeMode,
  isDropdownOpen,
  dropdownRef,
  onSelectTheme,
  onLinkHover,
  onLinkHoverEnd,
  onOpenDropdown,
  onCloseDropdownWithDelay,
  onToggleDropdownLock,
  onCloseDropdown,
  onOpenBookingModal,
}: DesktopNavProps) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAboutDropdownLocked, setIsAboutDropdownLocked] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [isIndustryDropdownLocked, setIsIndustryDropdownLocked] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const themeTriggerRef = useRef<HTMLButtonElement>(null);
  const moreTriggerRef = useRef<HTMLButtonElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const aboutTriggerRef = useRef<HTMLButtonElement>(null);
  const aboutDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const industryTriggerRef = useRef<HTMLButtonElement>(null);
  const industryDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    themeMode === 'light' ? <FaSun size={16} /> : themeMode === 'dark' ? <FaMoon size={16} /> : <FiMonitor size={16} />;

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

  const focusMoreItem = (index: number) => {
    if (!dropdownRef.current) return;
    const items = Array.from(
      dropdownRef.current.querySelectorAll<HTMLAnchorElement>('[data-more-menu-item]')
    );
    if (!items.length) return;

    const safeIndex = ((index % items.length) + items.length) % items.length;
    items[safeIndex]?.focus();
  };

  const openMoreMenuAndFocus = (index: number) => {
    onOpenDropdown();
    requestAnimationFrame(() => {
      focusMoreItem(index);
    });
  };

  const handleMoreTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openMoreMenuAndFocus(0);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      openMoreMenuAndFocus(MORE_ITEMS.length - 1);
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (isDropdownOpen) {
        onCloseDropdown();
      } else {
        openMoreMenuAndFocus(0);
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      onCloseDropdown();
    }
  };

  const handleMoreItemKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusMoreItem(index + 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusMoreItem(index - 1);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusMoreItem(0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusMoreItem(MORE_ITEMS.length - 1);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      onCloseDropdown();
      moreTriggerRef.current?.focus();
    }
  };

  const focusAboutItem = (index: number) => {
    if (!aboutDropdownRef.current) return;
    const items = Array.from(
      aboutDropdownRef.current.querySelectorAll<HTMLAnchorElement>('[data-about-menu-item]')
    );
    if (!items.length) return;

    const safeIndex = ((index % items.length) + items.length) % items.length;
    items[safeIndex]?.focus();
  };

  const openAboutMenuAndFocus = (index: number) => {
    setIsAboutDropdownOpen(true);
    requestAnimationFrame(() => {
      focusAboutItem(index);
    });
  };

  const handleAboutTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openAboutMenuAndFocus(0);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      openAboutMenuAndFocus(ABOUT_ITEMS.length - 1);
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (isAboutDropdownOpen) {
        setIsAboutDropdownOpen(false);
      } else {
        openAboutMenuAndFocus(0);
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsAboutDropdownOpen(false);
    }
  };

  const handleAboutItemKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusAboutItem(index + 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusAboutItem(index - 1);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusAboutItem(0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusAboutItem(ABOUT_ITEMS.length - 1);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsAboutDropdownOpen(false);
      aboutTriggerRef.current?.focus();
    }
  };

  const clearAboutDropdownCloseTimeout = () => {
    if (aboutDropdownTimeoutRef.current) {
      clearTimeout(aboutDropdownTimeoutRef.current);
      aboutDropdownTimeoutRef.current = null;
    }
  };

  const openAboutDropdown = () => {
    clearAboutDropdownCloseTimeout();
    setIsAboutDropdownOpen(true);
  };

  const closeAboutDropdownWithDelay = () => {
    if (isAboutDropdownLocked) {
      return;
    }

    clearAboutDropdownCloseTimeout();
    aboutDropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
      aboutDropdownTimeoutRef.current = null;
    }, 180);
  };

  const toggleAboutDropdownLock = () => {
    clearAboutDropdownCloseTimeout();
    setIsAboutDropdownLocked((prev) => {
      const nextLocked = !prev;
      setIsAboutDropdownOpen(nextLocked);
      return nextLocked;
    });
  };

  const closeAboutDropdown = () => {
    clearAboutDropdownCloseTimeout();
    setIsAboutDropdownOpen(false);
    setIsAboutDropdownLocked(false);
  };

  const focusIndustryItem = (index: number) => {
    if (!industryDropdownRef.current) return;
    const items = Array.from(
      industryDropdownRef.current.querySelectorAll<HTMLAnchorElement>('[data-industry-menu-item]')
    );
    if (!items.length) return;

    const safeIndex = ((index % items.length) + items.length) % items.length;
    items[safeIndex]?.focus();
  };

  const openIndustryMenuAndFocus = (index: number) => {
    setIsIndustryDropdownOpen(true);
    requestAnimationFrame(() => {
      focusIndustryItem(index);
    });
  };

  const handleIndustryTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openIndustryMenuAndFocus(0);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      openIndustryMenuAndFocus(INDUSTRY_ITEMS.length - 1);
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (isIndustryDropdownOpen) {
        closeIndustryDropdown();
      } else {
        openIndustryMenuAndFocus(0);
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeIndustryDropdown();
    }
  };

  const handleIndustryItemKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusIndustryItem(index + 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusIndustryItem(index - 1);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusIndustryItem(0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusIndustryItem(INDUSTRY_ITEMS.length - 1);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsIndustryDropdownOpen(false);
      industryTriggerRef.current?.focus();
    }
  };

  const clearIndustryDropdownCloseTimeout = () => {
    if (industryDropdownTimeoutRef.current) {
      clearTimeout(industryDropdownTimeoutRef.current);
      industryDropdownTimeoutRef.current = null;
    }
  };

  const openIndustryDropdown = () => {
    clearIndustryDropdownCloseTimeout();
    setIsIndustryDropdownOpen(true);
  };

  const closeIndustryDropdownWithDelay = () => {
    if (isIndustryDropdownLocked) {
      return;
    }

    clearIndustryDropdownCloseTimeout();
    industryDropdownTimeoutRef.current = setTimeout(() => {
      setIsIndustryDropdownOpen(false);
      industryDropdownTimeoutRef.current = null;
    }, 180);
  };

  const toggleIndustryDropdownLock = () => {
    clearIndustryDropdownCloseTimeout();
    setIsIndustryDropdownLocked((prev) => {
      const nextLocked = !prev;
      setIsIndustryDropdownOpen(nextLocked);
      return nextLocked;
    });
  };

  const closeIndustryDropdown = () => {
    clearIndustryDropdownCloseTimeout();
    setIsIndustryDropdownOpen(false);
    setIsIndustryDropdownLocked(false);
  };

  return (
    <div className="hidden shrink-0 items-center rounded-full border border-[rgba(var(--accent-rgb),0.15)] bg-[rgba(var(--accent-rgb),0.08)] py-1.5 backdrop-blur-[10px] lg:flex lg:gap-3 lg:px-3 xl:gap-4 xl:px-4">
      <div ref={themeMenuRef} className={TOGGLE_WRAPPER_CLASS}>
        <button
          ref={themeTriggerRef}
          type="button"
          onClick={() => setIsThemeMenuOpen((prev) => !prev)}
          onKeyDown={handleThemeTriggerKeyDown}
          aria-controls="desktop-theme-menu"
          aria-label="Theme options"
          title="Theme options"
          aria-haspopup="menu"
          aria-expanded={isThemeMenuOpen}
          data-theme-toggle-btn
          className={`flex h-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium tracking-[0.025em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${isThemeMenuOpen
              ? 'bg-[rgba(var(--accent-rgb),0.14)] text-(--accent) shadow-[0_0_14px_rgba(var(--accent-rgb),0.2)] focus-visible:ring-[rgba(var(--accent-rgb),0.55)]'
              : 'text-[var(--text)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent) focus-visible:ring-[rgba(var(--accent-rgb),0.45)]'
            }`}
        >
          {themeIcon}
          <span className={`inline-block transition-transform duration-200 ${isThemeMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
            <FiChevronDown size={14} />
          </span>
        </button>

        <div
          id="desktop-theme-menu"
          role="menu"
          aria-label="Theme options"
          onBlur={(event) => {
            if (!themeMenuRef.current?.contains(event.relatedTarget as Node)) {
              setIsThemeMenuOpen(false);
            }
          }}
          className={`absolute left-0 top-full ${DROPDOWN_TOP_MARGIN_CLASS} w-36 origin-top rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[var(--bg)] shadow-[0_14px_30px_rgba(var(--accent-rgb),0.16)] transition-all duration-200 ${isThemeMenuOpen
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-1 scale-[0.98] opacity-0'
            }`}
        >
          {THEME_OPTIONS.map((option, index) => {
            const isLastOption = index === THEME_OPTIONS.length - 1;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onSelectTheme(option);
                  setIsThemeMenuOpen(false);
                  themeTriggerRef.current?.focus();
                }}
                onKeyDown={(event) => handleThemeItemKeyDown(event, index)}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm capitalize transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--accent-rgb),0.5)] focus-visible:ring-inset ${isLastOption ? 'border-none' : 'border-b border-[rgba(var(--accent-rgb),0.1)]'
                  } ${themeMode === option
                    ? 'text-(--accent)'
                    : 'text-[var(--text)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent)'
                  }`}
                role="menuitemradio"
                aria-checked={themeMode === option}
                tabIndex={isThemeMenuOpen ? 0 : -1}
                data-theme-menu-item
              >
                {option}
                {themeMode === option ? (
                  <span className="inline-block h-1 w-1 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="h-6 w-px bg-[rgba(var(--accent-rgb),0.2)]" />

      <Link
        href="/"
        onMouseEnter={onLinkHover}
        onMouseLeave={onLinkHoverEnd}
        className={`relative cursor-pointer whitespace-nowrap text-sm font-medium tracking-[0.025em] transition-all duration-300 ${pathname === '/' ? 'text-(--accent)' : 'text-[var(--text)]'
          }`}
      >
        Home
        {pathname === '/' ? (
          <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
        ) : null}
      </Link>

      <div
        ref={aboutDropdownRef}
        className={TOGGLE_WRAPPER_CLASS}
        onMouseEnter={openAboutDropdown}
        onMouseLeave={closeAboutDropdownWithDelay}
      >
        <button
          ref={aboutTriggerRef}
          type="button"
          aria-haspopup="true"
          aria-expanded={isAboutDropdownOpen}
          aria-controls="desktop-about-menu"
          onKeyDown={handleAboutTriggerKeyDown}
          className={`flex h-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium tracking-[0.025em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${isAboutDropdownOpen
              ? 'bg-[rgba(var(--accent-rgb),0.14)] text-(--accent) shadow-[0_0_14px_rgba(var(--accent-rgb),0.2)] focus-visible:ring-[rgba(var(--accent-rgb),0.55)]'
              : 'text-[var(--text)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent) focus-visible:ring-[rgba(var(--accent-rgb),0.45)]'
            }`}
          onClick={toggleAboutDropdownLock}
          onFocus={openAboutDropdown}
        >
          About
          <span
            aria-hidden
            className={`inline-block transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
          >
            <FiChevronDown size={16} />
          </span>
        </button>

        <div
          id="desktop-about-menu"
          role="menu"
          aria-label="About navigation"
          onBlur={(event) => {
            if (!aboutDropdownRef.current?.contains(event.relatedTarget as Node)) {
              closeAboutDropdown();
            }
          }}
          onMouseEnter={openAboutDropdown}
          onMouseLeave={closeAboutDropdownWithDelay}
          className={`absolute left-0 top-full ${DROPDOWN_TOP_MARGIN_CLASS} w-52 origin-top rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[var(--bg)] shadow-[0_14px_30px_rgba(var(--accent-rgb),0.16)] transition-all duration-200 ${isAboutDropdownOpen
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-1 scale-[0.98] opacity-0'
            }`}
        >
          {ABOUT_ITEMS.map((item, idx) => {
            const isLastItem = idx === ABOUT_ITEMS.length - 1;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                tabIndex={isAboutDropdownOpen ? 0 : -1}
                data-about-menu-item
                onKeyDown={(event) => handleAboutItemKeyDown(event, idx)}
                className={`block w-full cursor-pointer bg-transparent px-4 py-3 text-left text-sm transition-colors duration-200 hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[rgba(var(--accent-rgb),0.5)] ${isLastItem ? 'border-none' : 'border-b border-[rgba(var(--accent-rgb),0.1)]'
                  } ${isActive ? 'bg-[rgba(var(--accent-rgb),0.1)] text-(--accent)' : 'text-[var(--text)]'}`}
                onClick={closeAboutDropdown}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {isActive ? (
                    <span className="inline-block h-1 w-1 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        ref={industryDropdownRef}
        className={TOGGLE_WRAPPER_CLASS}
        onMouseEnter={openIndustryDropdown}
        onMouseLeave={closeIndustryDropdownWithDelay}
      >
        <button
          ref={industryTriggerRef}
          type="button"
          aria-haspopup="true"
          aria-expanded={isIndustryDropdownOpen}
          aria-controls="desktop-industry-menu"
          onKeyDown={handleIndustryTriggerKeyDown}
          className={`flex h-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium tracking-[0.025em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${isIndustryDropdownOpen
              ? 'bg-[rgba(var(--accent-rgb),0.14)] text-(--accent) shadow-[0_0_14px_rgba(var(--accent-rgb),0.2)] focus-visible:ring-[rgba(var(--accent-rgb),0.55)]'
              : 'text-[var(--text)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent) focus-visible:ring-[rgba(var(--accent-rgb),0.45)]'
            }`}
          onClick={toggleIndustryDropdownLock}
          onFocus={openIndustryDropdown}
        >
          Industry
          <span
            aria-hidden
            className={`inline-block transition-transform duration-200 ${isIndustryDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
          >
            <FiChevronDown size={16} />
          </span>
        </button>

        <div
          id="desktop-industry-menu"
          role="menu"
          aria-label="Industry navigation"
          onBlur={(event) => {
            if (!industryDropdownRef.current?.contains(event.relatedTarget as Node)) {
              closeIndustryDropdown();
            }
          }}
          onMouseEnter={openIndustryDropdown}
          onMouseLeave={closeIndustryDropdownWithDelay}
          className={`absolute left-0 top-full ${DROPDOWN_TOP_MARGIN_CLASS} w-52 origin-top rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[var(--bg)] shadow-[0_14px_30px_rgba(var(--accent-rgb),0.16)] transition-all duration-200 ${isIndustryDropdownOpen
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-1 scale-[0.98] opacity-0'
            }`}
        >
          {INDUSTRY_ITEMS.map((item, idx) => {
            const isLastItem = idx === INDUSTRY_ITEMS.length - 1;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                tabIndex={isIndustryDropdownOpen ? 0 : -1}
                data-industry-menu-item
                onKeyDown={(event) => handleIndustryItemKeyDown(event, idx)}
                className={`block w-full cursor-pointer bg-transparent px-4 py-3 text-left text-sm transition-colors duration-200 hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[rgba(var(--accent-rgb),0.5)] ${isLastItem ? 'border-none' : 'border-b border-[rgba(var(--accent-rgb),0.1)]'
                  } ${isActive ? 'bg-[rgba(var(--accent-rgb),0.1)] text-(--accent)' : 'text-[var(--text)]'}`}
                onClick={closeIndustryDropdown}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {isActive ? (
                    <span className="inline-block h-1 w-1 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        ref={dropdownRef}
        className={TOGGLE_WRAPPER_CLASS}
        onMouseEnter={onOpenDropdown}
        onMouseLeave={onCloseDropdownWithDelay}
      >
        <button
          ref={moreTriggerRef}
          type="button"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          aria-controls="desktop-more-menu"
          onKeyDown={handleMoreTriggerKeyDown}
          className={`flex h-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium tracking-[0.025em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${isDropdownOpen
              ? 'bg-[rgba(var(--accent-rgb),0.14)] text-(--accent) shadow-[0_0_14px_rgba(var(--accent-rgb),0.2)] focus-visible:ring-[rgba(var(--accent-rgb),0.55)]'
              : 'text-[var(--text)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent) focus-visible:ring-[rgba(var(--accent-rgb),0.45)]'
            }`}
          onClick={onToggleDropdownLock}
          onFocus={onOpenDropdown}
        >
          Services
          <span
            aria-hidden
            className={`inline-block transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
          >
            <FiChevronDown size={16} />
          </span>
        </button>

        <div
          id="desktop-more-menu"
          role="menu"
          aria-label="More navigation"
          onBlur={(event) => {
            if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
              onCloseDropdown();
            }
          }}
          onMouseEnter={onOpenDropdown}
          onMouseLeave={onCloseDropdownWithDelay}
          className={`absolute left-0 top-full ${DROPDOWN_TOP_MARGIN_CLASS} w-52 origin-top rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[var(--bg)] shadow-[0_14px_30px_rgba(var(--accent-rgb),0.16)] transition-all duration-200 ${isDropdownOpen
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-1 scale-[0.98] opacity-0'
            }`}
        >
          {MORE_ITEMS.map((item, idx) => {
            const isLastItem = idx === MORE_ITEMS.length - 1;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                tabIndex={isDropdownOpen ? 0 : -1}
                data-more-menu-item
                onKeyDown={(event) => handleMoreItemKeyDown(event, idx)}
                className={`block w-full cursor-pointer bg-transparent px-4 py-3 text-left text-sm transition-colors duration-200 hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[rgba(var(--accent-rgb),0.5)] ${isLastItem ? 'border-none' : 'border-b border-[rgba(var(--accent-rgb),0.1)]'
                  } ${isActive ? 'bg-[rgba(var(--accent-rgb),0.1)] text-(--accent)' : 'text-[var(--text)]'}`}
                onClick={onCloseDropdown}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {isActive ? (
                    <span className="inline-block h-1 w-1 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <Link
        href="/blog"
        onMouseEnter={onLinkHover}
        onMouseLeave={onLinkHoverEnd}
        className={`relative cursor-pointer whitespace-nowrap text-sm font-medium tracking-[0.025em] transition-all duration-300 ${pathname === '/blog' ? 'text-(--accent)' : 'text-[var(--text)]'
          }`}
      >
        Blog
        {pathname === '/blog' ? (
          <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
        ) : null}
      </Link>

      <Link
        href="/portfolio"
        onMouseEnter={onLinkHover}
        onMouseLeave={onLinkHoverEnd}
        className={`relative cursor-pointer whitespace-nowrap text-sm font-medium tracking-[0.025em] transition-all duration-300 ${pathname === '/portfolio' ? 'text-(--accent)' : 'text-[var(--text)]'
          }`}
      >
        Portfolio
        {pathname === '/portfolio' ? (
          <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
        ) : null}
      </Link>

      <div className="h-6 w-px bg-[rgba(var(--accent-rgb),0.2)]" />

      <button
        onClick={onOpenBookingModal}
        className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[var(--accent)] px-5 py-1.5 text-sm font-semibold text-[var(--bg)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <FiCalendar
          size={18}
          className="shrink-0 transition-all duration-300 group-hover:scale-[1.15] group-hover:-rotate-20"
        />
        Book a Call
      </button>
    </div>
  );
}
