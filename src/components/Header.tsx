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
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/services", label: "Divisions", submenu: [
      { href: "/services/stratnex-agri", label: "StratNex Agri" },
      { href: "/services/stratnex-properties", label: "StratNex Properties" },
      { href: "/services/stratnex-digital", label: "StratNex Digital" }
    ]},
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/30 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-500 hover:bg-background/40">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10">
            <div className="relative">
              <img 
                src="/lovable-uploads/7a43af95-d2ae-4020-a9e6-93b1d7873b67.png" 
                alt="StratNex Consulting" 
                className="h-7 w-auto sm:h-8 md:h-9 lg:h-10 transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden ${
                  isActive(item.href)
                    ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                    : "text-foreground/90 hover:text-primary hover:bg-white/10"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 animate-scale-in rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <QuoteRequestForm>
              <Button 
                variant="default" 
                size="sm"
                className="relative bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:via-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-5 py-2 rounded-full font-medium text-sm group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Get Quote
                  <div className="w-3 h-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Button>
            </QuoteRequestForm>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
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
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-3 space-y-1 bg-background/20 backdrop-blur-xl rounded-2xl mt-2 mb-2 border border-white/10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 rounded-2xl"></div>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative block mx-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl group overflow-hidden ${
                  isActive(item.href)
                    ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                    : "text-foreground/90 hover:text-primary hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-xl"></div>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 animate-scale-in rounded-xl"></div>
                )}
              </Link>
            ))}
            <div className="px-4 pt-2 pb-1">
              <QuoteRequestForm>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full relative bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:via-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-3 rounded-xl font-medium text-sm group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    Get Quote
                    <div className="w-3 h-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
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