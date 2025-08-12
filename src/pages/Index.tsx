import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import agriIcon from "@/assets/agri-icon.png";
import realestateIcon from "@/assets/realestate-icon.png";
import digitalIcon from "@/assets/digital-icon.png";

const Index = () => {
  const services = [
    {
      title: "StratNex Agri",
      description: "Agricultural consulting services connecting Tanzanian farmers with global markets through strategic sourcing, export facilitation, and sustainable farming practices.",
      icon: agriIcon,
      features: [
        "Agricultural product sourcing",
        "Export documentation support",
        "Farm planning & optimization",
        "Market analysis & forecasting"
      ]
    },
    {
      title: "StratNex Properties",
      description: "Expert real estate services covering land acquisition, property development, and mining opportunities with comprehensive market insight and legal expertise.",
      icon: realestateIcon,
      features: [
        "Land acquisition & due diligence",
        "Property valuation & analysis",
        "Real estate brokerage",
        "Mining rights consultation"
      ]
    },
    {
      title: "StratNex Digital",
      description: "Cutting-edge digital marketing solutions helping businesses establish strong online presence through SEO, social media, and innovative technology platforms.",
      icon: digitalIcon,
      features: [
        "Search Engine Optimization",
        "Social media marketing",
        "Website design & development",
        "SaaS platform development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl text-brand-dark-gray max-w-3xl mx-auto px-4">
                Three specialized divisions delivering comprehensive business solutions 
                across Tanzania's most dynamic and promising sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
                  Why Choose StratNex?
                </h2>
                <p className="text-lg sm:text-xl text-brand-dark-gray px-4">
                  Local expertise meets global standards for exceptional results
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Local Expertise</h3>
                    <p className="text-brand-dark-gray text-sm">
                      Deep understanding of Tanzanian markets and business culture
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Global Standards</h3>
                    <p className="text-brand-dark-gray text-sm">
                      International best practices and quality assurance
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Proven Results</h3>
                    <p className="text-brand-dark-gray text-sm">
                      Track record of successful projects and satisfied clients
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <CheckCircle className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">End-to-End Support</h3>
                    <p className="text-brand-dark-gray text-sm">
                      Comprehensive solutions from strategy to implementation
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
                  Client Success Stories
                </h2>
                <p className="text-lg sm:text-xl text-brand-dark-gray px-4">
                  Hear from businesses we've helped transform and grow
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <blockquote className="text-brand-dark-gray italic mb-6">
                      "StratNex Consulting helped us navigate the complex process of agricultural 
                      export certification. Their expertise opened doors to European markets we 
                      never thought possible."
                    </blockquote>
                    <div className="text-brand-navy font-semibold">
                      - Maria Kinana, Export Manager
                    </div>
                    <div className="text-brand-dark-gray text-sm">
                      Kilimanjaro Agricultural Cooperative
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <blockquote className="text-brand-dark-gray italic mb-6">
                      "The digital marketing strategy StratNex developed increased our online 
                      sales by 300% in just six months. Their team truly understands the local 
                      digital landscape."
                    </blockquote>
                    <div className="text-brand-navy font-semibold">
                      - James Mwenda, CEO
                    </div>
                    <div className="text-brand-dark-gray text-sm">
                      East Africa Trading Company
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-hero rounded-3xl p-6 md:p-12">
              <h2 className="text-3xl font-bold text-brand-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-brand-light-gray mb-8 text-lg">
                Join the growing community of successful businesses that trust StratNex Consulting 
                to unlock their potential in Tanzania's dynamic markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuoteRequestForm>
                  <Button variant="services" size="lg" className="bg-brand-white text-brand-navy hover:bg-brand-light-gray">
                    Get Started Today
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </QuoteRequestForm>
                <Link to="/services">
                  <Button 
                    variant="services" 
                    size="lg" 
                    className="bg-transparent border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-navy"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
