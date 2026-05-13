'use client';

import { usePathname } from 'next/navigation';
import BookingModal from './BookingModal';
import { useTheme } from '../../lib/useTheme';
import DesktopNav from '@/app/features/navbar/components/DesktopNav';
import LogoBrand from '@/app/features/navbar/components/LogoBrand';
import MobileControls from '@/app/features/navbar/components/MobileControls';
import MobileMenuOverlay from '@/app/features/navbar/components/MobileMenuOverlay';
import { useNavbarController } from '@/app/features/navbar/hooks/useNavbarController';

export default function Navbar() {
  const pathname = usePathname() ?? '/';
  return <NavbarContent pathname={pathname} />;
}

type NavbarContentProps = {
  pathname: string;
};

function NavbarContent({ pathname }: NavbarContentProps) {
  const { theme, setTheme } = useTheme();

  const {
    navRef,
    mobileMenuRef,
    dropdownRef,
    isOpen,
    isDropdownOpen,
    isMobileMoreOpen,
    isMobileAboutOpen,
    isBookingModalOpen,
    setIsMobileMoreOpen,
    setIsMobileAboutOpen,
    setIsBookingModalOpen,
    openDropdown,
    closeDropdownWithDelay,
    toggleDropdownLock,
    closeDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    handleLinkHover,
    handleLinkHoverEnd,
    scrollToTop,
  } = useNavbarController({ pathname });

  return (
    <>
      <nav
        ref={navRef}
        className="fixed left-0 right-0 top-2 z-40 [font-family:'Graphik',-apple-system,sans-serif]"
        style={{
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container flex h-full items-center justify-between px-4 md:px-6">
          <LogoBrand onClick={scrollToTop} />

          <DesktopNav
            pathname={pathname}
            themeMode={theme}
            isDropdownOpen={isDropdownOpen}
            dropdownRef={dropdownRef}
            onSelectTheme={setTheme}
            onLinkHover={handleLinkHover}
            onLinkHoverEnd={handleLinkHoverEnd}
            onOpenDropdown={openDropdown}
            onCloseDropdownWithDelay={closeDropdownWithDelay}
            onToggleDropdownLock={toggleDropdownLock}
            onCloseDropdown={closeDropdown}
            onOpenBookingModal={() => setIsBookingModalOpen(true)}
          />

          <MobileControls
            themeMode={theme}
            isOpen={isOpen}
            onOpenBookingModal={() => setIsBookingModalOpen(true)}
            onSelectTheme={setTheme}
            onToggleMenu={toggleMobileMenu}
          />
        </div>
      </nav>

      <MobileMenuOverlay
        pathname={pathname}
        isOpen={isOpen}
        isMobileMoreOpen={isMobileMoreOpen}
        isMobileAboutOpen={isMobileAboutOpen}
        menuRef={mobileMenuRef}
        onClose={closeMobileMenu}
        onToggleMore={() => setIsMobileMoreOpen((prev) => !prev)}
        onToggleAbout={() => setIsMobileAboutOpen((prev) => !prev)}
      />

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
}
