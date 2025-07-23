import Link from "next/link";
// Components
import { Logo } from ".";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
              Your premium destination for the latest technology. Experience
              innovation with Apple-quality design and service.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/social/twitter"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="/social/instagram"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.246 7.052 7.756 8.349 7.756s2.448.49 3.324 1.297c.876.807 1.366 1.958 1.366 3.255s-.49 2.448-1.297 3.324c-.876.876-2.027 1.366-3.324 1.366z" />
                </svg>
              </Link>
              <Link
                href="/social/linkedin"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground tracking-wide">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections/smartphones"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Smartphones
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/laptops"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/accessories"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/gaming"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Gaming
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/sale"
                  className="text-sm text-accent hover:text-accent/80 transition-colors duration-200 tracking-wide"
                >
                  Sale Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground tracking-wide">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/support/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/support/shipping"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/support/returns"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/support/warranty"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/support/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-neutral-200/50">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-sm font-medium text-foreground tracking-wide">
                Stay Updated
              </h3>
              <p className="mt-1 text-sm text-muted-foreground tracking-wide">
                Get the latest product releases and exclusive offers.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-8">
              <div className="flex max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm bg-white border border-neutral-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                />
                <button className="px-6 py-2 bg-accent text-white text-sm font-normal rounded-r-lg hover:bg-accent/90 transition-colors duration-200 tracking-wide">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-200/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground tracking-wide">
            © 2024 TechHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
