import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, MapPin, FileText, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import realestateIcon from "@/assets/realestate-icon.png";

const StratNexProperties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-hero p-4 rounded-lg w-fit mx-auto mb-6">
                <img src={realestateIcon} alt="StratNex Properties" className="h-12 w-12 brightness-0 invert" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
                StratNex Properties
              </h1>
              <p className="text-xl text-brand-dark-gray leading-relaxed mb-8">
                Expert real estate services covering land acquisition, property development, 
                and mining opportunities in Tanzania's dynamic property market.
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
              <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Our Property Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <MapPin className="h-8 w-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Land Acquisition</h3>
                  <p className="text-brand-dark-gray">Comprehensive due diligence and land acquisition services for investors.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <TrendingUp className="h-8 w-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Property Valuation</h3>
                  <p className="text-brand-dark-gray">Professional property valuation and market analysis services.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Building className="h-8 w-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Real Estate Brokerage</h3>
                  <p className="text-brand-dark-gray">Full-service brokerage for buying, selling, and leasing properties.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Shield className="h-8 w-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Mining Rights Consultation</h3>
                  <p className="text-brand-dark-gray">Expert guidance on mining rights and mineral exploration opportunities.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Users className="h-8 w-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Investment Advisory</h3>
                  <p className="text-brand-dark-gray">Strategic advisory services for property investment decisions.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <FileText className="h-8 w-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Legal Compliance</h3>
                  <p className="text-brand-dark-gray">Complete legal compliance and documentation support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Why Choose StratNex Properties?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Market Knowledge</h3>
                  <p className="text-brand-dark-gray">Extensive knowledge of Tanzania's property market trends and regulations.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Professional Network</h3>
                  <p className="text-brand-dark-gray">Strong relationships with legal professionals, surveyors, and government agencies.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Due Diligence</h3>
                  <p className="text-brand-dark-gray">Thorough due diligence processes to protect your investment interests.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">End-to-End Service</h3>
                  <p className="text-brand-dark-gray">Complete service from initial consultation to final transaction completion.</p>
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
                Ready to Invest in Tanzanian Real Estate?
              </h2>
              <p className="text-brand-light-gray mb-8 text-lg">
                Let's explore property opportunities that match your investment goals.
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

export default StratNexProperties;