import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import agriIcon from "@/assets/agri-icon.png";
import realestateIcon from "@/assets/realestate-icon.png";
import digitalIcon from "@/assets/digital-icon.png";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "StratNex Agri",
      description: "Comprehensive agricultural consulting services that connect Tanzanian farmers and agribusinesses with global markets. We specialize in crop sourcing, export facilitation, and sustainable farming practices.",
      icon: agriIcon,
      features: [
        "Agricultural product sourcing and quality assurance",
        "Export documentation and logistics support",
        "Farm planning and optimization strategies",
        "Market analysis and price forecasting",
        "Sustainable farming practice implementation",
        "Supply chain management solutions"
      ]
    },
    {
      title: "StratNex Properties",
      description: "Expert real estate services covering land acquisition, property development, and mining opportunities. We help clients navigate Tanzania's property market with confidence and strategic insight.",
      icon: realestateIcon,
      features: [
        "Land acquisition and due diligence",
        "Property valuation and market analysis",
        "Real estate brokerage services",
        "Mining rights consultation",
        "Investment property advisory",
        "Legal compliance and documentation"
      ]
    },
    {
      title: "StratNex Digital",
      description: "Cutting-edge digital marketing solutions that help businesses establish strong online presence and drive growth through strategic digital initiatives and innovative technology platforms.",
      icon: digitalIcon,
      features: [
        "Search Engine Optimization (SEO)",
        "Social media marketing and management",
        "Website design and development",
        "SaaS platform development",
        "Digital advertising campaigns",
        "Analytics and performance tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl text-brand-dark-gray leading-relaxed px-4">
                Three specialized divisions working in harmony to deliver comprehensive 
                business solutions across Tanzania's most dynamic sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
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

        {/* Process Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Process</h2>
                <p className="text-brand-dark-gray">How we deliver exceptional results for our clients</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="bg-brand-navy text-brand-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Discovery</h3>
                  <p className="text-brand-dark-gray text-sm">
                    We understand your business goals and challenges
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-brand-navy text-brand-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Strategy</h3>
                  <p className="text-brand-dark-gray text-sm">
                    We develop a customized approach for your unique needs
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-brand-navy text-brand-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Implementation</h3>
                  <p className="text-brand-dark-gray text-sm">
                    We execute the plan with precision and expertise
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-brand-navy text-brand-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Results</h3>
                  <p className="text-brand-dark-gray text-sm">
                    We deliver measurable outcomes and ongoing support
                  </p>
                </div>
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
                Let's discuss how StratNex Consulting can help you achieve your goals.
              </p>
              <Button 
                variant="services" 
                size="lg" 
                className="bg-brand-white text-brand-navy hover:bg-brand-light-gray"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;