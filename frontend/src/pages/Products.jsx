import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Activity, Check, Target, ChevronRight, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "AcmeSecure Device Shield",
      description: "Comprehensive endpoint and device-level protection with continuous posture monitoring, unauthorized device detection, and configuration drift tracking.",
      href: "/products/device-shield",
      icon: Shield,
      features: [
        "Device posture monitoring",
        "Unauthorized device detection",
        "Configuration drift tracking",
        "Real-time endpoint visibility",
      ],
    },
    {
      name: "AcmeSecure Risk Intelligence",
      description: "Centralized risk scoring and exposure tracking across all your assets, with executive-ready dashboards and prioritized remediation insights.",
      href: "/products/risk-intelligence",
      icon: Activity,
      features: [
        "Centralized risk scoring",
        "Exposure tracking",
        "Prioritized remediation",
        "Executive dashboards",
      ],
    },
    {
      name: "AcmeSecure Compliance & Audit",
      description: "Continuous compliance monitoring with audit-ready reporting, policy alignment support, and integration with your internal controls framework.",
      href: "/products/compliance-audit",
      icon: Check,
      features: [
        "Continuous monitoring",
        "Audit-ready reports",
        "Policy alignment",
        "Controls integration",
      ],
    },
    {
      name: "AcmeSecure Threat Response",
      description: "Incident detection support with risk-based prioritization, response workflow enablement, and integration-ready architecture for your security stack.",
      href: "/products/threat-response",
      icon: Target,
      features: [
        "Incident detection",
        "Risk-based prioritization",
        "Response workflows",
        "Integration-ready",
      ],
    },
  ];

  return (
    <div data-testid="products-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="products-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Enterprise Security Products
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              A modular suite of security solutions designed to work together for comprehensive risk identification, measurement, and reduction across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-24 grid-texture" data-testid="products-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card 
                key={product.name}
                className="bg-white border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                data-testid={`product-card-${product.href.split('/').pop()}`}
              >
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                      <product.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="font-heading text-2xl font-semibold text-slate-900 mb-4">
                      {product.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className="h-4 w-4 text-sky-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 py-4 bg-slate-50 border-t border-slate-100">
                    <Link 
                      to={product.href}
                      className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors"
                      data-testid={`learn-more-${product.href.split('/').pop()}`}
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="products-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Find the Right Solution for Your Organization
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team can help you identify which products best address your security challenges and compliance requirements.
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
