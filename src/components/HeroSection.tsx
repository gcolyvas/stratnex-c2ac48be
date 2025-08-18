import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Building2, Wheat, Smartphone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="StratNex Consulting - Tanzania's Leading Business Solutions Partner in Dar es Salaam" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Professional Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-navy/20 rounded-full animate-pulse-soft backdrop-blur-sm border border-brand-white/10">
          <Building2 className="w-8 h-8 text-brand-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-brand-navy/20 rounded-full animate-pulse-soft backdrop-blur-sm border border-brand-white/10" style={{animationDelay: '1s'}}>
          <Wheat className="w-6 h-6 text-brand-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-40 left-20 w-18 h-18 bg-brand-navy/20 rounded-full animate-pulse-soft backdrop-blur-sm border border-brand-white/10" style={{animationDelay: '2s'}}>
          <Smartphone className="w-7 h-7 text-brand-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-20 max-w-7xl">
        <div className="space-y-10 animate-fade-in-up">
          {/* Tanzania Context Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-white/10 backdrop-blur-md border border-brand-white/20 rounded-full px-6 py-2 text-brand-white/90 text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Proudly Serving Tanzania & East Africa
          </div>

          {/* Main Heading with SEO Keywords */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-brand-white leading-tight tracking-tight">
            Tanzania's Premier
            <span className="block bg-gradient-to-r from-brand-white via-brand-light-gray to-brand-white bg-clip-text text-transparent mt-2">
              Consulting Partner
            </span>
          </h1>

          {/* Subtitle with Local SEO Keywords */}
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-white/90 max-w-5xl mx-auto leading-relaxed font-light">
            Expert <strong>business consulting in Tanzania</strong> - Driving excellence across <strong>Real Estate</strong>, <strong>Agribusiness</strong> & <strong>Digital Marketing</strong> in Dar es Salaam, Zanzibar, Pemba & mainland Tanzania.
          </p>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-brand-white text-brand-navy hover:bg-brand-white/90 px-12 py-5 text-lg font-semibold rounded-full shadow-luxury hover:shadow-elegant transition-elegant animate-bounce-in group"
              >
                Work With Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg" 
              className="border-brand-white/30 text-brand-white bg-brand-white/10 hover:bg-brand-white/20 backdrop-blur-md px-12 py-5 text-lg font-semibold rounded-full transition-elegant"
            >
              Explore Services
            </Button>
          </div>

          {/* Enhanced Stats with Tanzania Context */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-brand-white mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-brand-white/80 text-base lg:text-lg font-medium">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-brand-white mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-brand-white/80 text-base lg:text-lg font-medium">Expert Divisions</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-brand-white mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-brand-white/80 text-base lg:text-lg font-medium">Client Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-brand-white mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-brand-white/80 text-base lg:text-lg font-medium">Years in Tanzania</div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="p-3 rounded-full bg-brand-white/10 backdrop-blur-md border border-brand-white/20 text-brand-white/70 hover:text-brand-white hover:bg-brand-white/20 transition-elegant group"
          aria-label="Scroll to services"
        >
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;