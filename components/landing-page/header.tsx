"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { useTheme } from "next-themes";
import MobileMenu from "./mobile-menu";
import ContactFormButton from "./contact-form-button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Update header background when scrolled
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page is loaded scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle logo click with theme preservation
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Use router.push instead of Link's default behavior
    router.push("/");
  };

  // Determine which logo to show based on theme
  const logoSrc =
    mounted && resolvedTheme === "dark" ? "/innover.png" : "/innover.png";

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#f2f2f2]/40 dark:bg-[#f2f2f2]/40 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center"
              onClick={handleLogoClick}
            >
              {/* Use a div with the same dimensions during SSR to prevent layout shift */}
              {mounted ? (
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt="Automatic Logo"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              ) : (
                <div className="h-12 w-[200px]" />
              )}
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              {/* <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li className="hidden md:block">
                    <NavDropdown
                      trigger="Resources"
                      items={resourcesDropdownData}
                      columns={2}
                      className={pathname.startsWith("/resources") ? "text-[#7A7FEE] dark:text-[#7A7FEE]" : ""}
                    />
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={`transition-colors ${
                        pathname === "/portfolio"
                          ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/start"
                      className={`transition-colors ${
                        pathname === "/start"
                          ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                      }`}
                    >
                      Start Project
                    </Link>
                  </li>
                </ul>
              </nav> */}

              <ThemeToggle />
              <ContactFormButton />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
