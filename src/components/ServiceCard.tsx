import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  className?: string;
}

const getServiceRoute = (title: string) => {
  switch (title) {
    case "StratNex Agri":
      return "/services/stratnex-agri";
    case "StratNex Properties":
      return "/services/stratnex-properties";
    case "StratNex Digital":
      return "/services/stratnex-digital";
    default:
      return "/services";
  }
};

const ServiceCard = ({ title, description, icon, features, className }: ServiceCardProps) => {
  return (
    <Card className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <CardContent className="p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="bg-gradient-hero p-3 rounded-lg flex-shrink-0">
            <img src={icon} alt={title} className="h-8 w-8 brightness-0 invert" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-brand-navy text-center sm:text-left">{title}</h3>
        </div>
        
        <p className="text-brand-dark-gray mb-6 leading-relaxed text-center sm:text-left text-sm sm:text-base">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6 text-center sm:text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-brand-dark-gray">
              <div className="h-1.5 w-1.5 bg-brand-navy rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span className="break-words">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to={getServiceRoute(title)}>
          <Button 
            variant="services" 
            className="group-hover:shadow-lg transition-all duration-300 w-full"
          >
            Learn More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;