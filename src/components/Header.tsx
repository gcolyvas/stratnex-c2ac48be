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
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b border-border/50 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/9f6cc1c8-a6ed-4432-beb6-6b24541598c0.png" 
              alt="StratNex Consulting" 
              className="h-8 w-auto sm:h-10 md:h-12 hidden sm:block transition-transform duration-300 group-hover:scale-105"
            />
            <img 
              src="/lovable-uploads/7a43af95-d2ae-4020-a9e6-93b1d7873b67.png" 
              alt="StratNex Consulting" 
              className="h-8 w-auto sm:hidden transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-accent/50 group ${
                  isActive(item.href)
                    ? "text-primary bg-accent"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full animate-scale-in" />
                )}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <QuoteRequestForm>
              <Button 
                variant="default" 
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 rounded-full font-medium"
              >
                Get Quote
              </Button>
            </QuoteRequestForm>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 rounded-full hover:bg-accent transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-1 bg-background/95 backdrop-blur-sm rounded-2xl mt-2 mb-4 border border-border/50 shadow-xl">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:translate-x-2 ${
                  isActive(item.href)
                    ? "text-primary bg-accent border-r-2 border-primary"
                    : "text-foreground/80"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-4 pb-2">
              <QuoteRequestForm>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-full font-medium"
                >
                  Get Quote
                </Button>
              </QuoteRequestForm>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;