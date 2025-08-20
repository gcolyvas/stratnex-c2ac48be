import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Consulting Services",
      questions: [
        {
          question: "Where can I find a consulting company near me in Dar es Salaam?",
          answer: "StratNex Consulting is headquartered in Dar es Salaam and serves clients across Tanzania. We offer in-person consultations at our offices as well as virtual meetings. Our team of expert consultants provides comprehensive business solutions across multiple industries including real estate, agriculture, and digital marketing."
        },
        {
          question: "What makes StratNex the best consulting company in Tanzania?",
          answer: "StratNex Consulting combines local market expertise with international best practices. Our proven track record of 100+ successful projects, 95% client satisfaction rate, and deep understanding of Tanzania's business landscape makes us the preferred consulting partner for businesses across Dar es Salaam, Zanzibar, Pemba, and mainland Tanzania."
        },
        {
          question: "Do you provide consulting services across all regions of Tanzania?",
          answer: "Yes, StratNex Consulting operates throughout Tanzania including Dar es Salaam, Zanzibar, Pemba, Arusha, Mwanza, and all mainland regions. We have experience working with businesses in both urban centers and rural areas, understanding the unique challenges and opportunities in each market."
        }
      ]
    },
    {
      category: "Real Estate Consulting",
      questions: [
        {
          question: "How can I buy real estate in Tanzania as a foreign investor?",
          answer: "Tanzania welcomes foreign investment in real estate with specific guidelines. Through StratNex Properties, we guide international investors through the legal requirements, including obtaining derivative rights for land ownership, navigating the Tanzania Investment Centre (TIC) processes, and identifying profitable investment opportunities in Dar es Salaam, Zanzibar, and other prime locations."
        },
        {
          question: "Who are the best property consultants in Zanzibar and Pemba?",
          answer: "StratNex Properties specializes in the island real estate markets of Zanzibar and Pemba. Our team has extensive experience in tourism-related property development, beachfront investments, and commercial real estate. We provide comprehensive services from market analysis to project management and regulatory compliance."
        },
        {
          question: "What are the current real estate investment opportunities in Tanzania?",
          answer: "Tanzania's real estate market offers diverse opportunities including residential developments in Dar es Salaam, tourism properties in Zanzibar and Pemba, commercial real estate, and industrial developments. Our market analysis shows strong growth potential in affordable housing, mixed-use developments, and tourism-focused properties."
        }
      ]
    },
    {
      category: "Agribusiness Consulting",
      questions: [
        {
          question: "Who is the best agribusiness consultant in Tanzania?",
          answer: "StratNex Agri is recognized as a leading agribusiness consulting firm in Tanzania, with expertise across the entire agricultural value chain. We specialize in crop optimization, supply chain development, export facilitation, and sustainable farming practices. Our consultants have deep knowledge of Tanzania's agricultural sector and international market requirements."
        },
        {
          question: "How can I become a maize supplier in Tanzania and export agricultural products?",
          answer: "StratNex Agri provides comprehensive support for agricultural suppliers and exporters. We assist with quality certification, export documentation, international market connections, supply chain optimization, and compliance with international food safety standards. Our network includes connections to buyers in regional and international markets."
        },
        {
          question: "What are the requirements for exporting agricultural products from Tanzania?",
          answer: "Agricultural export requires compliance with Tanzania Bureau of Standards (TBS) certification, phytosanitary certificates, export licenses, and destination country requirements. StratNex Agri guides clients through the entire process, ensuring all regulatory requirements are met while optimizing costs and timelines."
        }
      ]
    },
    {
      category: "Digital Marketing Services",
      questions: [
        {
          question: "Which is the top digital marketing company in Tanzania?",
          answer: "StratNex Digital is a leading digital marketing agency in Tanzania, serving businesses across Dar es Salaam and nationwide. We offer comprehensive digital solutions including SEO, social media marketing, web development, e-commerce solutions, and digital advertising campaigns tailored to the Tanzanian market."
        },
        {
          question: "How can I find a marketing agency near me in Dar es Salaam?",
          answer: "StratNex Digital is based in Dar es Salaam and provides both local and nationwide digital marketing services. We offer in-person consultations, local market expertise, and understanding of consumer behavior across Tanzania's diverse markets. Our services include both traditional and digital marketing strategies."
        },
        {
          question: "What digital marketing strategies work best for Tanzanian businesses?",
          answer: "Successful digital marketing in Tanzania requires understanding local consumer behavior, mobile-first strategies (given high mobile penetration), local language content, and culturally relevant messaging. StratNex Digital develops customized strategies that consider Tanzania's unique market dynamics, from urban Dar es Salaam to rural communities."
        }
      ]
    },
    {
      category: "Project Timelines & Processes",
      questions: [
        {
          question: "How long does a typical consulting project take with StratNex?",
          answer: "Project timelines vary based on scope and complexity. Small consulting engagements may take 2-4 weeks, while comprehensive business transformations can take 3-6 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the engagement."
        },
        {
          question: "What is StratNex's methodology for ensuring project success?",
          answer: "Our proven methodology combines international best practices with local market knowledge. We begin with comprehensive assessment, develop customized strategies, implement solutions with continuous monitoring, and provide ongoing support. Our 95% client satisfaction rate reflects our commitment to delivering measurable results."
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer: "Yes, StratNex provides various levels of ongoing support including quarterly reviews, performance monitoring, additional training, and strategic guidance. We believe in building long-term partnerships with our clients to ensure sustained success and continued growth."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-professional text-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-brand-white/90 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Get answers to common questions about our consulting services, processes, and expertise in Tanzania's business landscape
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 animate-fade-in-up" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 pb-2 border-b-2 border-brand-navy/20">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-brand-light-gray/30 rounded-lg px-6 shadow-soft hover:shadow-card transition-elegant"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <h3 className="text-lg font-semibold text-brand-navy pr-4">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-brand-dark-gray leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
<section className="py-16 bg-brand-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Still Have Questions?
        </h2>
        <p className="text-xl text-brand-dark-gray">
          Our team is ready to provide personalized answers and discuss your specific business needs
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Call Us */}
        <Card className="text-center group hover:shadow-card transition-elegant">
          <CardHeader>
            <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-navy/20 transition-colors">
              <Phone className="w-6 h-6 text-brand-navy" />
            </div>
            <CardTitle className="text-lg">Call Us</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Speak directly with our consultants
            </CardDescription>
            <a href="tel:+255744400200">
              <Button variant="outline" size="sm" className="w-full">
                +255 744 400 200
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* WhatsApp */}
        <Card className="text-center group hover:shadow-card transition-elegant">
          <CardHeader>
            <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-navy/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-brand-navy" />
            </div>
            <CardTitle className="text-lg">WhatsApp</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Quick questions and support
            </CardDescription>
            <a href="https://wa.me/255744400200" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="w-full">
                Message Us
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Email */}
        <Card className="text-center group hover:shadow-card transition-elegant">
          <CardHeader>
            <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-navy/20 transition-colors">
              <Mail className="w-6 h-6 text-brand-navy" />
            </div>
            <CardTitle className="text-lg">Email</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Detailed inquiries welcome
            </CardDescription>
            <a href="mailto:info@stratnexconsulting.com">
              <Button variant="outline" size="sm" className="w-full">
                Send Email
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Visit Office */}
        <Card className="text-center group hover:shadow-card transition-elegant">
          <CardHeader>
            <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-navy/20 transition-colors">
              <MapPin className="w-6 h-6 text-brand-navy" />
            </div>
            <CardTitle className="text-lg">Visit Office</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              Meet us in Dar es Salaam
            </CardDescription>
            <a
              href="https://maps.app.goo.gl/KL3zysSmJ5PMBaRT8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="w-full">
                Get Directions
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
