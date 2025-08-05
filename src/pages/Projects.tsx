import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cashew Export Initiative",
      category: "StratNex Agri",
      location: "Mtwara Region",
      date: "2024",
      description: "Facilitated direct export of premium cashew nuts to European markets, increasing farmer income by 40% through quality certification and logistics optimization.",
      impact: "500+ farmers benefited",
      results: ["40% increase in farmer income", "Direct access to EU markets", "Quality certification achieved"],
      status: "Completed"
    },
    {
      title: "Dar es Salaam Commercial Complex",
      category: "StratNex Properties",
      location: "Dar es Salaam",
      date: "2024",
      description: "Strategic advisory for a major commercial development project, including site selection, permit acquisition, and investor relations.",
      impact: "$5M project value",
      results: ["All permits secured", "3 major tenants pre-signed", "Project completed on time"],
      status: "Completed"
    },
    {
      title: "Digital Agriculture Platform",
      category: "StratNex Digital",
      location: "Tanzania",
      date: "2024",
      description: "Developed a comprehensive SaaS platform connecting farmers with buyers, featuring real-time pricing, logistics tracking, and quality verification.",
      impact: "1,000+ users onboarded",
      results: ["Platform launch successful", "1,000+ active users", "30% increase in trade efficiency"],
      status: "Ongoing"
    },
    {
      title: "Mining Rights Advisory",
      category: "StratNex Properties",
      location: "Shinyanga Region",
      date: "2023",
      description: "Comprehensive due diligence and advisory services for gold mining concession acquisition, including environmental compliance and community engagement.",
      impact: "50,000 hectares secured",
      results: ["Mining license obtained", "Environmental clearance", "Community agreements signed"],
      status: "Completed"
    },
    {
      title: "E-commerce Growth Campaign",
      category: "StratNex Digital",
      location: "East Africa",
      date: "2023",
      description: "Multi-channel digital marketing campaign for a regional e-commerce platform, achieving significant growth in user acquisition and sales.",
      impact: "300% sales increase",
      results: ["300% increase in sales", "50,000 new customers", "Enhanced brand visibility"],
      status: "Completed"
    },
    {
      title: "Sustainable Farming Initiative",
      category: "StratNex Agri",
      location: "Arusha Region",
      date: "2023",
      description: "Implementation of sustainable farming practices for coffee cooperatives, focusing on organic certification and premium market access.",
      impact: "200 farmers trained",
      results: ["Organic certification achieved", "Premium pricing secured", "Yield improvement 25%"],
      status: "Completed"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "StratNex Agri":
        return "bg-green-100 text-green-800 border-green-200";
      case "StratNex Properties":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "StratNex Digital":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-brand-dark-gray leading-relaxed">
                Showcasing successful initiatives across agribusiness, real estate, and digital sectors 
                that have created lasting impact for our clients and communities.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-brand-navy mb-2">50+</div>
                <div className="text-brand-dark-gray">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-navy mb-2">$50M+</div>
                <div className="text-brand-dark-gray">Total Project Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-navy mb-2">1,000+</div>
                <div className="text-brand-dark-gray">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-navy mb-2">98%</div>
                <div className="text-brand-dark-gray">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className={`${getCategoryColor(project.category)} border`}>
                          {project.category}
                        </Badge>
                        <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-brand-navy mb-3">
                        {project.title}
                      </h3>

                      <div className="flex items-center space-x-4 text-sm text-brand-dark-gray mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.date}
                        </div>
                      </div>

                      <p className="text-brand-dark-gray mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="bg-gradient-services p-4 rounded-lg mb-4">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-4 w-4 text-brand-navy mr-2" />
                          <span className="font-semibold text-brand-navy">Impact</span>
                        </div>
                        <p className="text-brand-dark-gray font-medium">{project.impact}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-brand-navy mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-sm text-brand-dark-gray">
                              <div className="h-1.5 w-1.5 bg-brand-navy rounded-full mr-3"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-services">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">What Our Clients Say</h2>
              
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-brand-dark-gray italic mb-6">
                    "StratNex Consulting transformed our approach to agricultural exports. Their expertise 
                    in market access and quality standards helped us achieve direct relationships with 
                    European buyers, resulting in significantly better prices for our farmers."
                  </blockquote>
                  <div className="text-brand-navy font-semibold">
                    - Sarah Mwalimu, Cooperative Manager
                  </div>
                  <div className="text-brand-dark-gray text-sm">
                    Mtwara Cashew Farmers Cooperative
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;