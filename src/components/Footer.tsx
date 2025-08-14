import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-brand-navy text-brand-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/7a43af95-d2ae-4020-a9e6-93b1d7873b67.png" alt="StratNex Consulting" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-brand-light-gray text-sm">
              Connecting business opportunities across Tanzania through strategic
              consulting in agribusiness, real estate, and digital marketing.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-brand-light-gray">
              <li>
                <Link to="/services" className="hover:text-brand-white transition-colors">
                  StratNex Agri
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-white transition-colors">
                  StratNex Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-white transition-colors">
                  StratNex Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-brand-light-gray">
              <li>
                <Link to="/about" className="hover:text-brand-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-brand-light-gray">
                     <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm break-words">House No. 1 Makumbusho, Bagamoyo Rd, Dar es Salaam</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+255 744 400 200</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@stratnexconsulting.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.linkedin.com/company/stratnexconsulting/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-light-gray hover:text-brand-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/StratNexConsult" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-light-gray hover:text-brand-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/stratnexofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-light-gray hover:text-brand-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-dark-gray pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-brand-light-gray">
            <p>© 2025 StratNex Consulting. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-brand-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-brand-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;