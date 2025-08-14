import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import QuoteRequestForm from "./QuoteRequestForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 md:bg-background/95 sm:bg-transparent">
      <div className="container mx-auto px-3 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/9f6cc1c8-a6ed-4432-beb6-6b24541598c0.png" 
              alt="StratNex Consulting" 
              className="h-6 w-auto sm:h-8 md:h-10 hidden sm:block"
            />
            <img 
              src="/lovable-uploads/7a43af95-d2ae-4020-a9e6-93b1d7873b67.png" 
              alt="StratNex Consulting" 
              className="h-8 w-auto sm:hidden"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-navy ${
                  isActive(item.href)
                    ? "text-brand-navy border-b-2 border-brand-navy"
                    : "text-brand-dark-gray"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <QuoteRequestForm>
              <Button variant="hero" size="sm">
                Get Quote
              </Button>
            </QuoteRequestForm>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 sm:p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-brand-navy" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-brand-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 pt-3 border-t border-border bg-background/95 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-navy py-1 ${
                    isActive(item.href)
                      ? "text-brand-navy"
                      : "text-brand-dark-gray"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <QuoteRequestForm>
                <Button variant="hero" size="sm" className="self-start mt-2 text-xs px-3 py-1">
                  Get Quote
                </Button>
              </QuoteRequestForm>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;