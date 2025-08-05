import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Share2, Monitor, Smartphone, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import digitalIcon from "@/assets/digital-icon.png";

const StratNexDigital = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-hero p-4 rounded-lg w-fit mx-auto mb-6">
                <img src={digitalIcon} alt="StratNex Digital" className="h-12 w-12 brightness-0 invert" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
                StratNex Digital
              </h1>
              <p className="text-xl text-brand-dark-gray leading-relaxed mb-8">
                Cutting-edge digital marketing solutions that help businesses establish 
                strong online presence and drive growth through strategic digital initiatives.
              </p>
              <Link to="/services">
                <Button variant="outline" className="mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Our Digital Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Search className="h-8 w-8 text-brand-blue mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Search Engine Optimization</h3>
                  <p className="text-brand-dark-gray">Boost your online visibility and drive organic traffic to your website.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Share2 className="h-8 w-8 text-brand-blue mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Social Media Marketing</h3>
                  <p className="text-brand-dark-gray">Comprehensive social media strategy and management across all platforms.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Monitor className="h-8 w-8 text-brand-blue mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Website Development</h3>
                  <p className="text-brand-dark-gray">Modern, responsive websites designed to convert visitors into customers.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Smartphone className="h-8 w-8 text-brand-blue mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">SaaS Platform Development</h3>
                  <p className="text-brand-dark-gray">Custom software solutions and SaaS platforms for your business needs.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Zap className="h-8 w-8 text-brand-blue mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Digital Advertising</h3>
                  <p className="text-brand-dark-gray">Targeted advertising campaigns across Google, Facebook, and other platforms.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <BarChart3 className="h-8 w-8 text-brand-blue mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Analytics & Tracking</h3>
                  <p className="text-brand-dark-gray">Comprehensive analytics and performance tracking for data-driven decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Why Choose StratNex Digital?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Latest Technologies</h3>
                  <p className="text-brand-dark-gray">We use cutting-edge tools and technologies to deliver superior results.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Data-Driven Approach</h3>
                  <p className="text-brand-dark-gray">All strategies are backed by comprehensive data analysis and insights.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">ROI Focus</h3>
                  <p className="text-brand-dark-gray">Every campaign is designed to maximize your return on investment.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Full-Service Support</h3>
                  <p className="text-brand-dark-gray">From strategy to execution, we handle all aspects of your digital presence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-hero rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-brand-white mb-4">
                Ready to Dominate the Digital Space?
              </h2>
              <p className="text-brand-light-gray mb-8 text-lg">
                Let's create a digital strategy that drives real business growth.
              </p>
              <Link to="/contact">
                <Button variant="services" size="lg" className="bg-brand-white text-brand-navy hover:bg-brand-light-gray">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StratNexDigital;