import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Landmark, 
  Building2, 
  Heart, 
  GraduationCap,
  Building,
  Shield,
  Check,
  ArrowRight
} from "lucide-react";

const Solutions = () => {
  const industries = [
    {
      name: "IT / ITES / Software Companies",
      icon: Building2,
      challenges: [
        "High-stress work environments impacting employee well-being",
        "Large mobile workforces with BYOD policies",
        "Sensitive client data on employee devices",
        "Need for scalable well-being programs",
      ],
      capabilities: [
        "Structured well-being assessments for tech workforce",
        "Mobile security policy enforcement for BYOD",
        "Aggregated insights for HR and leadership",
        "Scalable deployment across distributed teams",
      ],
    },
    {
      name: "Large Enterprises / Corporates",
      icon: Building,
      challenges: [
        "Workforce well-being at scale across multiple locations",
        "Corporate mobile devices requiring security governance",
        "Employee support prioritization across departments",
        "Compliance with internal well-being mandates",
      ],
      capabilities: [
        "Enterprise-scale well-being assessment programs",
        "Centralized mobile security policy management",
        "Department-level and organization-wide reporting",
        "Integration with existing HR systems",
      ],
    },
    {
      name: "Government / PSU",
      icon: Landmark,
      challenges: [
        "Public sector well-being program requirements",
        "Government advisory compliance for mobile security",
        "Large-scale deployment across departments",
        "Data sovereignty and privacy requirements",
      ],
      capabilities: [
        "Well-being assessment for government employees",
        "Policy enforcement based on government advisories",
        "Secure deployment meeting public sector requirements",
        "Comprehensive audit and reporting capabilities",
      ],
    },
    {
      name: "BFSI",
      icon: Heart,
      challenges: [
        "High-pressure work environments in financial services",
        "Strict security requirements for mobile devices",
        "Regulatory expectations for employee welfare",
        "Fraud and scam protection for mobile banking access",
      ],
      capabilities: [
        "Stress and financial well-being assessment",
        "Enhanced mobile security for financial data protection",
        "Scam call and phishing protection",
        "Comprehensive security reporting",
      ],
    },
    {
      name: "Education",
      icon: GraduationCap,
      challenges: [
        "Faculty and staff well-being assessment needs",
        "Mobile device security for educational institutions",
        "Limited IT resources for security management",
        "Budget-conscious deployment requirements",
      ],
      capabilities: [
        "Well-being assessment for educational staff",
        "Simple mobile security policy enforcement",
        "Easy administration with minimal IT overhead",
        "Cost-effective deployment models",
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
              AcmeSecure platforms address the unique requirements of organizations across sectors—from workforce well-being assessment to mobile security enforcement.
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
                      {industry.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-4 w-4 text-sky-500" />
                          </div>
                          <span className="text-slate-700">{capability}</span>
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
            AcmeSecure works with organizations across sectors. Contact us to discuss how our platforms can address your specific requirements.
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
