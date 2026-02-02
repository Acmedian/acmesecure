import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
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
  Shield,
  GraduationCap
} from "lucide-react";

const Home = () => {
  const processSteps = [
    {
      step: "01",
      title: "Assess",
      description: "Structured surveys and policy checks to understand organizational well-being and security posture.",
      icon: Eye,
    },
    {
      step: "02",
      title: "Analyze",
      description: "Categorize findings by severity and generate actionable insights for decision-makers.",
      icon: Activity,
    },
    {
      step: "03",
      title: "Act",
      description: "Implement targeted interventions and enforce security policies across your organization.",
      icon: Target,
    },
  ];

  const products = [
    {
      name: "AcmeSecure Resilience",
      tagline: "Survey-based well-being and risk assessment for enterprises.",
      href: "/products/resilience",
      logo: "https://customer-assets.emergentagent.com/job_220fc9ab-b016-4ce4-812c-78cce458c17b/artifacts/37ruae2w_resilience.png",
      icon: BarChart3,
      capabilities: [
        "Structured surveys covering mental, physical, stress, and financial well-being",
        "Response categorization: Severe, Moderate, Mild",
        "Aggregated dashboards for workforce insights",
        "Designed for enterprise and government programs",
      ],
      cta: "Explore Resilience",
    },
    {
      name: "AcmeSecure Aegis",
      tagline: "Automated mobile security policy enforcement.",
      href: "/products/aegis",
      logo: "https://customer-assets.emergentagent.com/job_220fc9ab-b016-4ce4-812c-78cce458c17b/artifacts/txjx7h1z_aegis.png",
      icon: Shield,
      capabilities: [
        "Centralized management of restricted apps and websites",
        "Security policy enforcement based on industry advisories",
        "Spam and scam call indicator detection",
        "Administrative reporting and historical analysis",
      ],
      cta: "Explore Aegis",
    },
  ];

  const whyPoints = [
    "Built for large-scale enterprise environments",
    "Designed for regulated and high-security sectors",
    "Fast deployment with minimal operational overhead",
    "Actionable insights with clear reporting",
  ];

  const industries = [
    { name: "IT / ITES / Software", icon: Building2 },
    { name: "Large Enterprises", icon: Building2 },
    { name: "Government / PSU", icon: Landmark },
    { name: "BFSI", icon: Heart },
    { name: "Education", icon: GraduationCap },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative bg-slate-950 overflow-hidden" data-testid="hero-section">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Well-being Assessment & Mobile Security for Enterprises
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              AcmeSecure helps organizations assess workforce well-being and enforce mobile security policies with clarity, precision, and scale.
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
              How AcmeSecure Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach to assessing, analyzing, and acting on organizational well-being and security needs.
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
              Address human well-being with Resilience and mobile device security with Aegis—two independent platforms delivering complementary value.
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
                    <img 
                      src={product.logo} 
                      alt={product.name} 
                      className="h-12 w-auto mb-6"
                    />
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
                Built from the ground up for the unique requirements of large-scale enterprise and government environments.
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Enterprise Team"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-heading font-semibold text-sky-400 text-sm uppercase tracking-wider mb-2">
                  Enterprise Ready
                </p>
                <p className="text-sm text-slate-300">
                  Designed for large organizations and government programs with scale and reliability in mind.
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
              Trusted by organizations across demanding sectors requiring reliable well-being and security solutions.
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how AcmeSecure can help your organization assess well-being and enforce security policies with a personalized demo.
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
