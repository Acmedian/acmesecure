import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, BarChart3, Check, ChevronRight, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "AcmeSecure Resilience",
      tagline: "Understand and Manage Risk",
      description: "A continuous cyber risk and exposure management platform designed for enterprise and regulated environments. Resilience provides the visibility and intelligence security leaders need to understand their organization's risk posture and make informed decisions.",
      href: "/products/resilience",
      icon: BarChart3,
      capabilities: [
        "Asset, device, and user risk identification across all environments",
        "Continuous exposure measurement and security posture tracking",
        "Centralized risk scoring with business context prioritization",
        "Executive-level dashboards and CISO-ready reporting",
        "Compliance posture monitoring across multiple frameworks",
        "Risk trend analysis and improvement tracking",
      ],
      audience: "CISOs, Security Leadership, Risk Management Teams, Compliance Officers",
    },
    {
      name: "AcmeSecure Aegis",
      tagline: "Protect and Respond",
      description: "A protection, enforcement, and response platform that operationalizes risk reduction. Aegis translates risk intelligence into action, providing the tools security teams need to protect assets, enforce policies, and respond to threats.",
      href: "/products/aegis",
      icon: Shield,
      capabilities: [
        "Device and endpoint protection with continuous posture monitoring",
        "Policy enforcement and configuration drift control",
        "Risk-driven remediation guidance and workflow automation",
        "Incident detection support with risk-based prioritization",
        "Response enablement with integration-ready architecture",
        "Operational security execution across distributed environments",
      ],
      audience: "Security Operations, IT Security Teams, SOC Analysts, Operations Teams",
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
              AcmeSecure delivers enterprise security through two integrated platforms: Resilience for risk visibility and decision-making, Aegis for protection and operational response. Together, they provide end-to-end cyber risk reduction.
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
                    <div className="w-14 h-14 rounded-xl bg-sky-500 flex items-center justify-center mb-6">
                      <product.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                      {product.name}
                    </h2>
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
                        Learn More About {product.name.split(' ')[1]}
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

      {/* Platform Integration */}
      <section className="bg-slate-50 py-24" data-testid="platform-integration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Better Together
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              While each platform delivers standalone value, Resilience and Aegis are designed to work together. Risk intelligence from Resilience directly informs protection priorities in Aegis, creating a continuous feedback loop that improves security outcomes over time.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-slate-100">
                <BarChart3 className="h-8 w-8 text-sky-500 mb-4" />
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Resilience Identifies</h3>
                <p className="text-sm text-slate-600">Surfaces the risks and exposures that matter most to your organization</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100">
                <Shield className="h-8 w-8 text-sky-500 mb-4" />
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Aegis Remediates</h3>
                <p className="text-sm text-slate-600">Operationalizes risk reduction through protection and response</p>
              </div>
            </div>
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
            Our team can help you determine which platform—or combination—best addresses your security challenges and compliance requirements.
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
