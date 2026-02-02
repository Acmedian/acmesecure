import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, BarChart3, Check, ChevronRight, ArrowRight, Users, Smartphone } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "AcmeSecure Resilience",
      tagline: "Well-being Assessment Platform",
      description: "A survey-based well-being and risk assessment platform designed for enterprises and government programs. Resilience enables organizations to understand the mental, physical, stress, and financial well-being of their workforce through structured assessments.",
      href: "/products/resilience",
      logo: "https://customer-assets.emergentagent.com/job_220fc9ab-b016-4ce4-812c-78cce458c17b/artifacts/37ruae2w_resilience.png",
      icon: BarChart3,
      capabilities: [
        "Structured surveys covering mental, physical, stress, and financial well-being",
        "Response categorization into Severe, Moderate, and Mild levels",
        "Aggregated dashboards for organizational visibility",
        "Clear reporting for workforce program management",
        "Designed for enterprise HR and government well-being initiatives",
        "Professional, non-medical assessment approach",
      ],
      audience: "Enterprise HR, Government Program Managers, Workforce Well-being Teams",
    },
    {
      name: "AcmeSecure Aegis",
      tagline: "Mobile Security Enforcement Platform",
      description: "An automated mobile security policy enforcement platform that protects smartphones from malware, phishing, fraud, and unauthorized applications. Aegis enables centralized management of security policies based on industry and government advisories.",
      href: "/products/aegis",
      logo: "https://customer-assets.emergentagent.com/job_220fc9ab-b016-4ce4-812c-78cce458c17b/artifacts/txjx7h1z_aegis.png",
      icon: Shield,
      capabilities: [
        "Centralized management of restricted apps and websites",
        "Security policy enforcement based on industry advisories",
        "Detection of spam and scam call indicators",
        "Operating system policy management",
        "Administrative reporting and historical analysis",
        "Privacy-focused enforcement through managed connections",
      ],
      audience: "IT Security Teams, Enterprise Mobility Managers, Government IT Administrators",
    },
  ];

  return (
    <div data-testid="products-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="products-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Two Platforms. Complete Coverage.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              AcmeSecure delivers enterprise value through two independent platforms: Resilience for workforce well-being assessment, and Aegis for mobile security policy enforcement. Each platform stands alone while offering complementary organizational benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Products Comparison */}
      <section className="bg-white py-24 grid-texture" data-testid="products-comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card 
                key={product.name}
                className="bg-white border-slate-100 shadow-lg overflow-hidden group"
                data-testid={`product-card-${product.href.split('/').pop()}`}
              >
                <CardContent className="p-0">
                  <div className="bg-slate-900 p-8">
                    <img 
                      src={product.logo} 
                      alt={product.name} 
                      className="h-12 w-auto mb-4 brightness-0 invert"
                    />
                    <p className="text-sky-400 font-medium text-sm uppercase tracking-wider">
                      {product.tagline}
                    </p>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    <h3 className="font-heading font-semibold text-slate-900 mb-4">
                      Core Capabilities
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {product.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                          <Check className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                          {capability}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-slate-50 -mx-8 -mb-8 p-6 border-t border-slate-100">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Built For</p>
                      <p className="text-sm text-slate-700 mb-4">{product.audience}</p>
                      <Link 
                        to={product.href}
                        className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors"
                        data-testid={`learn-more-${product.href.split('/').pop()}`}
                      >
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Better Together Section */}
      <section className="bg-slate-50 py-24" data-testid="platform-integration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Better Together
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Resilience and Aegis are independent platforms that deliver standalone value. Together, they provide organizations with combined visibility into workforce well-being and mobile device security—two critical dimensions of organizational governance.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-slate-100">
                <Users className="h-8 w-8 text-sky-500 mb-4" />
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Human Well-being</h3>
                <p className="text-sm text-slate-600">Resilience addresses the human dimension—understanding workforce well-being through structured assessment and clear categorization.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100">
                <Smartphone className="h-8 w-8 text-sky-500 mb-4" />
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Device Security</h3>
                <p className="text-sm text-slate-600">Aegis addresses the technology dimension—protecting mobile devices through policy enforcement and security controls.</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-8">
              Organizations can deploy either platform independently or together based on their specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="products-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Find the Right Platform for Your Organization
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team can help you determine which platform—or combination—best addresses your organizational requirements.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="products-demo-btn">
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
