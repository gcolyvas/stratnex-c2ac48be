import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="StratNex Consulting - Tanzanian Business Excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-brand-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-brand-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6 leading-tight">
            Connecting Business 
            <span className="block text-brand-light-gray">Opportunities</span>
            <span className="block text-3xl md:text-4xl font-normal mt-2">in Tanzania</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-brand-light-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Strategic consulting across agribusiness, real estate, and digital marketing. 
            Local expertise meets global standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
            >
              Our Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="services" 
              size="lg" 
              className="text-lg px-8 py-4 bg-brand-white/20 border-brand-white hover:bg-brand-white"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-white mb-2">50+</div>
              <div className="text-brand-light-gray">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-white mb-2">3</div>
              <div className="text-brand-light-gray">Service Divisions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-white mb-2">100%</div>
              <div className="text-brand-light-gray">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-brand-white hover:text-brand-light-gray transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;