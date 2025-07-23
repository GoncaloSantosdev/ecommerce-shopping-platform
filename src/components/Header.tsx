"use client";
import { useState } from "react";
import Link from "next/link";
// Components
import { Logo } from ".";
// Icons
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo showText={false} className="sm:hidden" />
            <Logo showText={true} className="hidden sm:flex" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/collections/smartphones"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-normal text-sm relative group tracking-wide"
            >
              Smartphones
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/collections/laptops"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-normal text-sm relative group tracking-wide"
            >
              Laptops
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/collections/accessories"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-normal text-sm relative group tracking-wide"
            >
              Accessories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/collections/gaming"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-normal text-sm relative group tracking-wide"
            >
              Gaming
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/collections/sale"
              className="text-accent hover:text-accent/80 transition-colors duration-200 font-normal text-sm relative group tracking-wide"
            >
              Sale
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent/50 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-lg transition-all duration-200 transform hover:scale-105"
              aria-label="Shopping cart"
            >
              <ShoppingBagIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                2
              </span>
            </Link>

            {/* Apple-style Login Button */}
            <Link
              href="/login"
              className="hidden sm:flex items-center px-4 py-1.5 bg-accent text-white font-normal text-sm rounded-full hover:bg-accent/90 transition-all duration-200 transform hover:scale-105 active:scale-95 tracking-wide"
            >
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-lg transition-all duration-200 transform hover:scale-105"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5 transform transition-transform duration-200 rotate-180" />
              ) : (
                <Bars3Icon className="w-5 h-5 transform transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 border-t border-neutral-200/50"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl">
            <div className="px-2 pt-4 pb-6 space-y-1">
              <Link
                href="/collections/smartphones"
                className="block px-3 py-3 text-foreground font-normal hover:bg-neutral-100 rounded-xl transition-all duration-200 transform hover:translate-x-1 tracking-wide"
                onClick={toggleMobileMenu}
              >
                Smartphones
              </Link>
              <Link
                href="/collections/laptops"
                className="block px-3 py-3 text-foreground font-normal hover:bg-neutral-100 rounded-xl transition-all duration-200 transform hover:translate-x-1 tracking-wide"
                onClick={toggleMobileMenu}
              >
                Laptops
              </Link>
              <Link
                href="/collections/accessories"
                className="block px-3 py-3 text-foreground font-normal hover:bg-neutral-100 rounded-xl transition-all duration-200 transform hover:translate-x-1 tracking-wide"
                onClick={toggleMobileMenu}
              >
                Accessories
              </Link>
              <Link
                href="/collections/gaming"
                className="block px-3 py-3 text-foreground font-normal hover:bg-neutral-100 rounded-xl transition-all duration-200 transform hover:translate-x-1 tracking-wide"
                onClick={toggleMobileMenu}
              >
                Gaming
              </Link>
              <Link
                href="/collections/sale"
                className="block px-3 py-3 text-accent font-normal hover:bg-accent/5 rounded-xl transition-all duration-200 transform hover:translate-x-1 tracking-wide"
                onClick={toggleMobileMenu}
              >
                Sale
              </Link>

              <div className="border-t border-neutral-200/50 pt-4 mt-4 space-y-1">
                <Link
                  href="/login"
                  className="flex items-center justify-center px-3 py-2.5 text-white font-normal bg-accent hover:bg-accent/90 rounded-full transition-all duration-200 transform hover:translate-x-1 tracking-wide"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
