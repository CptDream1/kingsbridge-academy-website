import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoStacked from "@/assets/logo-stacked.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Apply", path: "/apply" },
  { label: "Policies", path: "/policies" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg">
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Horizontal on desktop, stacked/crest on mobile */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoHorizontal}
              alt="KCA – Kingsbridge Communication Academy"
              className="hidden md:block h-14 w-auto"
            />
            <img
              src={logoStacked}
              alt="Kingsbridge Communication Academy"
              className="md:hidden h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-gold"
                    : "text-off-white hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-off-white hover:text-gold transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 border-t border-navy-light">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-gold"
                      : "text-off-white hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
