import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tanzania's Agricultural Export Opportunities: A Guide for Maize Suppliers",
      excerpt: "Discover the growing demand for Tanzanian agricultural products in international markets and how StratNex Agri can help you navigate export opportunities.",
      category: "Agriculture",
      readTime: "5 min read",
      date: "2024-01-15",
      tags: ["Agriculture Export", "Maize Suppliers", "Tanzania Business"],
      featured: true
    },
    {
      id: 2,
      title: "Real Estate Investment Trends in Dar es Salaam 2024",
      excerpt: "Analysis of the property market in Tanzania's commercial capital and emerging opportunities for investors in the residential and commercial sectors.",
      category: "Real Estate",
      readTime: "7 min read",
      date: "2024-01-10",
      tags: ["Real Estate Tanzania", "Property Investment", "Dar es Salaam"],
      featured: true
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for Tanzanian Businesses",
      excerpt: "How local businesses can leverage digital platforms to reach customers across Tanzania, from Zanzibar to mainland markets.",
      category: "Digital Marketing",
      readTime: "6 min read",
      date: "2024-01-08",
      tags: ["Digital Marketing", "Tanzania Business", "Marketing Company"],
      featured: false
    },
    {
      id: 4,
      title: "Property Development Opportunities in Zanzibar and Pemba",
      excerpt: "Exploring the tourism-driven real estate boom in Tanzania's island regions and strategic investment considerations.",
      category: "Real Estate",
      readTime: "8 min read",
      date: "2024-01-05",
      tags: ["Zanzibar Real Estate", "Pemba Property", "Tourism Investment"],
      featured: false
    },
    {
      id: 5,
      title: "Finding the Best Consulting Company Near Me in Tanzania",
      excerpt: "A comprehensive guide to selecting the right business consultant for your needs in Tanzania's diverse business landscape.",
      category: "Business Consulting",
      readTime: "4 min read",
      date: "2024-01-03",
      tags: ["Consulting Company", "Business Advice", "Tanzania Consultants"],
      featured: false
    },
    {
      id: 6,
      title: "Agribusiness Success Stories: From Farm to Market in Tanzania",
      excerpt: "Case studies of successful agricultural ventures and how strategic consulting can transform traditional farming into profitable enterprises.",
      category: "Agriculture",
      readTime: "9 min read",
      date: "2024-01-01",
      tags: ["Agribusiness Tanzania", "Farm Success", "Agricultural Consulting"],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-elegant">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-professional text-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Business Insights & Tanzania Market Trends
            </h1>
            <p className="text-xl md:text-2xl text-brand-white/90 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Expert analysis, market insights, and business strategies for success in Tanzania's dynamic economy
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Input 
                type="text"
                placeholder="Search articles about real estate, agriculture, digital marketing..."
                className="w-full pl-12 pr-4 py-4 text-lg bg-brand-white/10 border-brand-white/20 text-brand-white placeholder:text-brand-white/60 rounded-full backdrop-blur-md"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className="group hover:shadow-luxury transition-elegant animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="secondary" className="bg-brand-navy text-brand-white">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-brand-dark-gray text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-brand-dark-gray text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-brand-navy transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-brand-dark-gray mb-4 text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-brand-navy">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-brand-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-card transition-elegant animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-brand-navy text-brand-navy">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-brand-dark-gray text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-brand-navy transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-dark-gray mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-brand-dark-gray text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-semibold text-brand-navy">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-professional text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Tanzania Business Insights
            </h2>
            <p className="text-xl text-brand-white/90 mb-8">
              Get the latest trends in real estate, agriculture, and digital marketing delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-brand-white/10 border-brand-white/20 text-brand-white placeholder:text-brand-white/60"
              />
              <Button className="bg-brand-white text-brand-navy hover:bg-brand-white/90 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;