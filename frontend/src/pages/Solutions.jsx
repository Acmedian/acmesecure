import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Landmark, 
  Building2, 
  Heart, 
  Factory, 
  Building,
  Shield,
  Check,
  ArrowRight
} from "lucide-react";

const Solutions = () => {
  const industries = [
    {
      name: "Government & Defense",
      icon: Landmark,
      challenges: [
        "Complex regulatory compliance requirements",
        "Nation-state threat actors targeting critical systems",
        "Air-gapped and classified network environments",
        "Multi-agency coordination challenges",
      ],
      solutions: [
        "FedRAMP-compliant deployment options",
        "Support for classified and air-gapped environments",
        "Continuous ATO compliance monitoring",
        "Cross-agency visibility and reporting",
      ],
    },
    {
      name: "Banking & Financial Services",
      icon: Building2,
      challenges: [
        "Evolving regulatory landscape (SOX, PCI-DSS, GLBA)",
        "Sophisticated financial fraud and cyber attacks",
        "Legacy system integration requirements",
        "Third-party vendor risk management",
      ],
      solutions: [
        "Real-time transaction monitoring integration",
        "Multi-framework compliance reporting",
        "Legacy system compatibility",
        "Third-party risk assessment capabilities",
      ],
    },
    {
      name: "Healthcare",
      icon: Heart,
      challenges: [
        "HIPAA compliance and patient data protection",
        "Connected medical device security",
        "Ransomware targeting healthcare systems",
        "Complex multi-site environments",
      ],
      solutions: [
        "HIPAA compliance automation",
        "Medical device inventory and monitoring",
        "Healthcare-specific threat intelligence",
        "Multi-facility visibility and control",
      ],
    },
    {
      name: "Manufacturing",
      icon: Factory,
      challenges: [
        "OT/IT convergence security gaps",
        "Supply chain cyber risk exposure",
        "Legacy industrial control systems",
        "Operational continuity requirements",
      ],
      solutions: [
        "OT/IT unified visibility",
        "Supply chain risk monitoring",
        "Industrial protocol support",
        "Minimal operational disruption deployment",
      ],
    },
    {
      name: "Large Enterprises",
      icon: Building,
      challenges: [
        "Complex, global IT environments",
        "Multiple security tool consolidation",
        "Board-level security reporting needs",
        "M&A security integration challenges",
      ],
      solutions: [
        "Enterprise-scale deployment",
        "Unified security data platform",
        "Executive-ready reporting and dashboards",
        "Rapid M&A security assessment",
      ],
    },
  ];

  return (
    <div data-testid="solutions-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="solutions-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Industry Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              AcmeSecure addresses the unique security challenges of the most demanding and regulated industries with tailored solutions and specialized support.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-24" data-testid="industries-detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div 
                key={industry.name}
                className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                data-testid={`industry-section-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center">
                      <industry.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-slate-900">
                      {industry.name}
                    </h2>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-4">
                      Key Challenges
                    </h3>
                    <ul className="space-y-3">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Card className={`bg-slate-50 border-slate-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardContent className="p-8">
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-sky-500" />
                      How AcmeSecure Helps
                    </h3>
                    <ul className="space-y-4">
                      {industry.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-4 w-4 text-sky-500" />
                          </div>
                          <span className="text-slate-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 bg-sky-500 hover:bg-sky-600 text-white">
                      <Link to="/contact" data-testid={`industry-cta-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        Talk to an Expert
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="solutions-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            AcmeSecure works with organizations across all sectors. Contact us to discuss how we can address your specific security challenges.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="solutions-demo-btn">
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
