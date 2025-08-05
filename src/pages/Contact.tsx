import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-brand-dark-gray leading-relaxed">
                Ready to transform your business? Get in touch with our expert team to discuss 
                your goals and discover how StratNex Consulting can help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+255 XXX XXX XXX" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agri">StratNex Agri</SelectItem>
                          <SelectItem value="properties">StratNex Properties</SelectItem>
                          <SelectItem value="digital">StratNex Digital</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project or how we can help you..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-8 w-8 text-brand-navy mr-3" />
                      <h3 className="text-lg font-bold text-brand-navy">Our Location</h3>
                    </div>
                    <p className="text-brand-dark-gray mb-4">
                      StratNex Consulting<br />
                      Dar es Salaam, Tanzania<br />
                      East Africa
                    </p>
                    <p className="text-brand-dark-gray text-sm">
                      Strategically located in Tanzania's commercial capital, serving clients 
                      across East Africa and international markets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="h-8 w-8 text-brand-navy mr-3" />
                      <h3 className="text-lg font-bold text-brand-navy">Phone & WhatsApp</h3>
                    </div>
                    <p className="text-brand-dark-gray mb-2">
                      <strong>Phone:</strong> +255 XXX XXX XXX
                    </p>
                    <p className="text-brand-dark-gray mb-4">
                      <strong>WhatsApp:</strong> +255 XXX XXX XXX
                    </p>
                    <p className="text-brand-dark-gray text-sm">
                      Available for urgent consultations and quick inquiries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-8 w-8 text-brand-navy mr-3" />
                      <h3 className="text-lg font-bold text-brand-navy">Email</h3>
                    </div>
                    <p className="text-brand-dark-gray mb-2">
                      <strong>General:</strong> info@stratnex.co.tz
                    </p>
                    <p className="text-brand-dark-gray mb-2">
                      <strong>Agribusiness:</strong> agri@stratnex.co.tz
                    </p>
                    <p className="text-brand-dark-gray mb-2">
                      <strong>Real Estate:</strong> properties@stratnex.co.tz
                    </p>
                    <p className="text-brand-dark-gray mb-4">
                      <strong>Digital:</strong> digital@stratnex.co.tz
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="h-8 w-8 text-brand-navy mr-3" />
                      <h3 className="text-lg font-bold text-brand-navy">Business Hours</h3>
                    </div>
                    <p className="text-brand-dark-gray mb-2">
                      <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-brand-dark-gray mb-2">
                      <strong>Saturday:</strong> 9:00 AM - 2:00 PM
                    </p>
                    <p className="text-brand-dark-gray mb-4">
                      <strong>Sunday:</strong> Closed
                    </p>
                    <p className="text-brand-dark-gray text-sm">
                      East Africa Time (EAT) - UTC+3
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
                <p className="text-brand-dark-gray">Quick answers to common questions about our services</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-3">
                      What industries do you serve?
                    </h3>
                    <p className="text-brand-dark-gray text-sm">
                      We specialize in agribusiness, real estate, and digital marketing sectors, 
                      with expertise spanning across various industries within these domains.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-3">
                      Do you work with international clients?
                    </h3>
                    <p className="text-brand-dark-gray text-sm">
                      Yes, we serve both local Tanzanian businesses and international investors 
                      looking to enter or expand in East African markets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-3">
                      What is your typical project timeline?
                    </h3>
                    <p className="text-brand-dark-gray text-sm">
                      Project timelines vary based on scope and complexity, ranging from 
                      2-4 weeks for consulting engagements to several months for comprehensive projects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-3">
                      How do you ensure project success?
                    </h3>
                    <p className="text-brand-dark-gray text-sm">
                      We follow a proven methodology combining local market expertise with 
                      international best practices, ensuring measurable results and ongoing support.
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

export default Contact;