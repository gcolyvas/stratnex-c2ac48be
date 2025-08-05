import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
                About StratNex Consulting
              </h1>
              <p className="text-xl text-brand-dark-gray leading-relaxed">
                Founded with a vision to bridge opportunities across Tanzania's most promising sectors,
                StratNex Consulting combines local market knowledge with international best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-brand-navy mb-6" />
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h2>
                  <p className="text-brand-dark-gray leading-relaxed">
                    To empower Tanzanian businesses and international investors by providing 
                    strategic consulting services that unlock sustainable growth opportunities 
                    across agribusiness, real estate, and digital sectors.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-brand-navy mb-6" />
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h2>
                  <p className="text-brand-dark-gray leading-relaxed">
                    To be East Africa's leading multi-sector consulting firm, recognized for 
                    delivering innovative solutions that drive economic development and 
                    create lasting value for our clients and communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Leadership</h2>
                <p className="text-brand-dark-gray">Meet the visionary behind StratNex Consulting</p>
              </div>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="w-48 h-48 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                        <span className="text-6xl font-bold text-brand-white">JC</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">Jamal Colyvas</h3>
                      <p className="text-brand-dark-gray mb-4 font-medium">Founder & CEO</p>
                      <p className="text-brand-dark-gray leading-relaxed mb-4">
                        With over a decade of experience in international business development and 
                        strategic consulting, Jamal brings a unique perspective that combines deep 
                        understanding of African markets with global business expertise.
                      </p>
                      <p className="text-brand-dark-gray leading-relaxed">
                        His vision for StratNex stems from recognizing the immense potential within 
                        Tanzania's key sectors and the need for specialized consulting services that 
                        can bridge local opportunities with international standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Values</h2>
                <p className="text-brand-dark-gray">The principles that guide everything we do</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Excellence</h3>
                    <p className="text-brand-dark-gray text-sm">
                      We deliver exceptional results that exceed client expectations
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Partnership</h3>
                    <p className="text-brand-dark-gray text-sm">
                      We build lasting relationships based on trust and mutual success
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Innovation</h3>
                    <p className="text-brand-dark-gray text-sm">
                      We embrace cutting-edge solutions and creative thinking
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Impact</h3>
                    <p className="text-brand-dark-gray text-sm">
                      We create positive change for businesses and communities
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;