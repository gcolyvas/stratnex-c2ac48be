import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Users, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import agriIcon from "@/assets/agri-icon.png";

const StratNexAgri = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-hero p-4 rounded-lg w-fit mx-auto mb-6">
                <img src={agriIcon} alt="StratNex Agri" className="h-12 w-12 brightness-0 invert" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
                StratNex Agri
              </h1>
              <p className="text-xl text-brand-dark-gray leading-relaxed mb-8">
                Comprehensive agricultural consulting services that connect Tanzanian farmers 
                and agribusinesses with global markets.
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
              <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Our Agricultural Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <CheckCircle className="h-8 w-8 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Agricultural Product Sourcing</h3>
                  <p className="text-brand-dark-gray">Quality assurance and sourcing of premium agricultural products for export markets.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Globe className="h-8 w-8 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Export Documentation</h3>
                  <p className="text-brand-dark-gray">Complete logistics support and documentation for international trade.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <TrendingUp className="h-8 w-8 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Farm Optimization</h3>
                  <p className="text-brand-dark-gray">Strategic planning to maximize farm productivity and profitability.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Users className="h-8 w-8 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Market Analysis</h3>
                  <p className="text-brand-dark-gray">Comprehensive market research and price forecasting services.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <CheckCircle className="h-8 w-8 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Sustainable Farming</h3>
                  <p className="text-brand-dark-gray">Implementation of eco-friendly and sustainable agricultural practices.</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card">
                  <Globe className="h-8 w-8 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-navy mb-3">Supply Chain Management</h3>
                  <p className="text-brand-dark-gray">End-to-end supply chain optimization and management solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Why Choose StratNex Agri?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Local Expertise</h3>
                  <p className="text-brand-dark-gray">Deep understanding of Tanzania's agricultural landscape and market dynamics.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Global Connections</h3>
                  <p className="text-brand-dark-gray">Established networks with international buyers and export partners.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Quality Assurance</h3>
                  <p className="text-brand-dark-gray">Rigorous quality control processes to meet international standards.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-brand-navy mb-4">Sustainable Practices</h3>
                  <p className="text-brand-dark-gray">Commitment to environmentally responsible and sustainable farming methods.</p>
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
                Ready to Grow Your Agricultural Business?
              </h2>
              <p className="text-brand-light-gray mb-8 text-lg">
                Let's discuss how StratNex Agri can help you reach global markets.
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

export default StratNexAgri;