import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Eye, 
  Activity, 
  Target, 
  Building2, 
  Landmark, 
  Heart, 
  Factory,
  ChevronRight,
  Check,
  ArrowRight,
  BarChart3,
  Lock
} from "lucide-react";

const Home = () => {
  const processSteps = [
    {
      step: "01",
      title: "Identify Risk",
      description: "Discover all devices, users, configurations, and access points across your environment.",
      icon: Eye,
    },
    {
      step: "02",
      title: "Measure Exposure",
      description: "Real-time visibility into vulnerabilities, misconfigurations, and security posture.",
      icon: Activity,
    },
    {
      step: "03",
      title: "Reduce Risk",
      description: "Actionable remediation guidance and automated policy enforcement.",
      icon: Target,
    },
  ];

  const products = [
    {
      name: "AcmeSecure Resilience",
      tagline: "Continuous cyber risk and exposure management for enterprise environments.",
      href: "/products/resilience",
      icon: BarChart3,
      capabilities: [
        "Asset, device, and user risk identification",
        "Continuous exposure measurement",
        "Centralized risk scoring and prioritization",
        "Executive-ready security posture visibility",
      ],
      cta: "Explore Resilience",
    },
    {
      name: "AcmeSecure Aegis",
      tagline: "Protection, enforcement, and response that operationalizes risk reduction.",
      href: "/products/aegis",
      icon: Shield,
      capabilities: [
        "Device and endpoint protection",
        "Policy enforcement and configuration control",
        "Risk-driven remediation guidance",
        "Incident detection and response enablement",
      ],
      cta: "Explore Aegis",
    },
  ];

  const whyPoints = [
    "Built for large-scale enterprise environments",
    "Designed for regulated and high-security sectors",
    "Fast deployment with minimal operational overhead",
    "Actionable insights, not just alerts",
  ];

  const industries = [
    { name: "Government & Defense", icon: Landmark },
    { name: "Banking & Financial Services", icon: Building2 },
    { name: "Healthcare", icon: Heart },
    { name: "Manufacturing", icon: Factory },
    { name: "Large Enterprises", icon: Building2 },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative bg-slate-950 overflow-hidden" data-testid="hero-section">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1628939824352-baa1cdddeb6b?crop=entropy&cs=srgb&fm=jpg&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Continuously Reduce Cyber Risk Across Devices, Users, and Environments
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              AcmeSecure helps enterprises identify, measure, and reduce cyber exposure with continuous risk intelligence and targeted controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
                <Link to="/contact" data-testid="hero-demo-btn">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                <Link to="/contact" data-testid="hero-expert-btn">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24 grid-texture" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              How AcmeSecure Reduces Risk
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A continuous, three-step approach to identifying, measuring, and reducing your organization's cyber exposure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={step.title} 
                className="bg-white border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`process-step-${index + 1}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-4xl font-bold text-sky-500/20">{step.step}</span>
                    <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-sky-500" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - 2 Platform Strategy */}
      <section className="bg-slate-50 py-24" data-testid="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Two Platforms. Complete Coverage.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A unified approach to enterprise security: understand your risk with Resilience, then protect and respond with Aegis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link 
                key={product.name} 
                to={product.href}
                className="group"
                data-testid={`product-card-${product.href.split('/').pop()}`}
              >
                <Card className="h-full bg-white border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group-hover:border-sky-200">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                      <product.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {product.tagline}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {product.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                          <Check className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-sm font-medium text-sky-500 group-hover:text-sky-600">
                      {product.cta}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-slate-300 hover:border-slate-400">
              <Link to="/products" data-testid="explore-products-btn">
                Compare Platforms
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why AcmeSecure Section */}
      <section className="bg-white py-24 grid-texture" data-testid="why-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                Why Choose AcmeSecure
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Built from the ground up to address the unique security challenges of large-scale enterprise and regulated environments.
              </p>
              <ul className="space-y-4">
                {whyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`why-point-${index + 1}`}>
                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-sky-500" />
                    </div>
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Secure Data Center"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-heading font-semibold text-sky-400 text-sm uppercase tracking-wider mb-2">
                  Enterprise Ready
                </p>
                <p className="text-sm text-slate-300">
                  Deployed across Fortune 500 companies and government agencies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate-50 py-24" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by organizations in the most demanding and regulated sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <Card 
                key={industry.name} 
                className="bg-white border-slate-100 hover:border-sky-200 transition-colors"
                data-testid={`industry-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="font-heading font-medium text-slate-900 text-sm">
                    {industry.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-slate-300 hover:border-slate-400">
              <Link to="/solutions" data-testid="see-solutions-btn">
                See Industry Solutions
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Reduce Your Cyber Risk?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how AcmeSecure can help your organization achieve continuous risk reduction with a personalized demo.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="final-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
