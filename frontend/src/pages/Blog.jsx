import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowRight, Clock, User, ChevronRight, BookOpen, Video, Download } from "lucide-react";

const Blog = () => {
  // Placeholder blog posts
  const posts = [
    {
      title: "Understanding Continuous Exposure Management",
      excerpt: "Learn how continuous exposure management differs from traditional vulnerability management and why it matters for enterprise security.",
      category: "Best Practices",
      author: "Security Team",
      readTime: "8 min read",
      date: "Coming Soon",
    },
    {
      title: "The State of Enterprise Cyber Risk in 2025",
      excerpt: "An analysis of the evolving threat landscape and what enterprise security teams need to prioritize this year.",
      category: "Industry Trends",
      author: "Security Team",
      readTime: "12 min read",
      date: "Coming Soon",
    },
    {
      title: "Device Security Best Practices for Large Organizations",
      excerpt: "Practical guidance for securing device fleets across distributed enterprise environments.",
      category: "Technical Guide",
      author: "Security Team",
      readTime: "10 min read",
      date: "Coming Soon",
    },
  ];

  const resourceTypes = [
    {
      title: "Whitepapers",
      description: "In-depth research and analysis on enterprise security topics.",
      icon: FileText,
      count: "Coming Soon",
    },
    {
      title: "Case Studies",
      description: "Real-world examples of how organizations reduce cyber risk.",
      icon: BookOpen,
      count: "Coming Soon",
    },
    {
      title: "Webinars",
      description: "Expert-led sessions on security best practices and trends.",
      icon: Video,
      count: "Coming Soon",
    },
    {
      title: "Guides",
      description: "Step-by-step resources for implementing security controls.",
      icon: Download,
      count: "Coming Soon",
    },
  ];

  return (
    <div data-testid="blog-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="blog-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Resources & Insights
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Stay informed with the latest research, best practices, and insights from the AcmeSecure security team.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="bg-white py-24 grid-texture" data-testid="resource-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Resource Library
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our growing collection of security resources designed for enterprise security professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceTypes.map((resource, index) => (
              <Card 
                key={resource.title}
                className="bg-white border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`resource-type-${index + 1}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-7 w-7 text-slate-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {resource.description}
                  </p>
                  <span className="text-xs font-medium text-sky-500 uppercase tracking-wider">
                    {resource.count}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-slate-50 py-24" data-testid="blog-posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-slate-900">
              Latest Articles
            </h2>
            <span className="text-sm font-medium text-sky-500 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={post.title}
                className="bg-white border-slate-100 shadow-lg overflow-hidden group"
                data-testid={`blog-post-${index + 1}`}
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-slate-200 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-sky-500 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3 group-hover:text-sky-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate-900 py-24" data-testid="blog-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our resource library is coming soon. In the meantime, request a demo to learn more about how AcmeSecure can help your organization.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="blog-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
