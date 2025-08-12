import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface QuoteRequestFormProps {
  children: React.ReactNode;
}

const QuoteRequestForm = ({ children }: QuoteRequestFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    projectDetails: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.projectDetails) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Quote request submitted:", formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours!",
    });
    
    // Reset form and close dialog
    setFormData({
      name: "",
      email: "",
      service: "",
      projectDetails: "",
    });
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-navy">
            Request a Quote
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-brand-dark-gray font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="border-brand-light-gray focus:border-brand-navy"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand-dark-gray font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                className="border-brand-light-gray focus:border-brand-navy"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-brand-dark-gray font-medium">
              Service Required *
            </Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger className="border-brand-light-gray focus:border-brand-navy focus:ring-brand-navy">
                <SelectValue placeholder="Select the service you need" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stratnex-agri">StratNex Agri - Agricultural Consulting</SelectItem>
                <SelectItem value="stratnex-properties">StratNex Properties - Real Estate Services</SelectItem>
                <SelectItem value="stratnex-digital">StratNex Digital - Digital Marketing</SelectItem>
                <SelectItem value="multiple">Multiple Services</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>


          <div className="space-y-2">
            <Label htmlFor="projectDetails" className="text-brand-dark-gray font-medium">
              Project Details *
            </Label>
            <Textarea
              id="projectDetails"
              value={formData.projectDetails}
              onChange={(e) => handleInputChange("projectDetails", e.target.value)}
              placeholder="Please describe your project requirements, timeline, and any specific needs..."
              className="border-brand-light-gray focus:border-brand-navy min-h-[120px] resize-none"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-brand-light-gray text-brand-dark-gray hover:bg-brand-light-gray/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-brand-navy hover:bg-brand-navy/90 text-brand-white font-medium transition-all duration-300 hover:shadow-elegant transform hover:-translate-y-0.5"
            >
              Submit Quote Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestForm;