import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  className?: string;
}

const ServiceCard = ({ title, description, icon, features, className }: ServiceCardProps) => {
  return (
    <Card className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-gradient-hero p-3 rounded-lg">
            <img src={icon} alt={title} className="h-8 w-8 brightness-0 invert" />
          </div>
          <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
        </div>
        
        <p className="text-brand-dark-gray mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-brand-dark-gray">
              <div className="h-1.5 w-1.5 bg-brand-navy rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          variant="services" 
          className="group-hover:shadow-lg transition-all duration-300"
        >
          Learn More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;