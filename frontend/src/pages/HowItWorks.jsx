import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Activity, Target, Check, ArrowRight, Search, BarChart3, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Identify Risk",
      subtitle: "Discovery & Inventory",
      icon: Eye,
      description: "The first step in reducing cyber risk is understanding your complete attack surface. AcmeSecure automatically discovers and inventories all devices, users, applications, and access points across your environment.",
      details: [
        "Automated asset discovery across networks",
        "User and identity mapping",
        "Application inventory and dependency mapping",
        "Cloud and on-premises environment coverage",
        "Shadow IT identification",
      ],
      visual: Search,
    },
    {
      step: "02",
      title: "Measure Exposure",
      subtitle: "Continuous Assessment",
      icon: Activity,
      description: "Once assets are identified, AcmeSecure continuously assesses their security posture. We measure vulnerabilities, misconfigurations, and security gaps in real-time to give you accurate exposure metrics.",
      details: [
        "Real-time vulnerability scanning",
        "Configuration compliance checking",
        "Risk scoring and prioritization",
        "Trend analysis and reporting",
        "Executive dashboards",
      ],
      visual: BarChart3,
    },
    {
      step: "03",
      title: "Reduce Risk",
      subtitle: "Remediation & Control",
      icon: Target,
      description: "With clear visibility into your exposure, AcmeSecure provides actionable remediation guidance and policy enforcement tools to systematically reduce risk across your organization.",
      details: [
        "Prioritized remediation recommendations",
        "Automated policy enforcement",
        "Integration with ticketing systems",
        "Progress tracking and verification",
        "Continuous improvement metrics",
      ],
      visual: Shield,
    },
  ];

  return (
    <div data-testid="how-it-works-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="how-it-works-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              How AcmeSecure Works
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              A continuous, three-step approach to identifying, measuring, and reducing cyber risk across your organization. Simple in concept, powerful in execution.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-24" data-testid="process-detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative"
                data-testid={`step-${index + 1}`}
              >
                {/* Step Number Background */}
                <div className="absolute -top-8 left-0 font-heading text-[200px] font-bold text-slate-50 leading-none select-none hidden lg:block">
                  {step.step}
                </div>

                <div className="relative grid lg:grid-cols-2 gap-16 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-sky-500 flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-sky-500 uppercase tracking-wider">
                          Step {step.step}
                        </p>
                        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-slate-900">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {step.description}
                    </p>

                    <ul className="space-y-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-4 w-4 text-sky-500" />
                          </div>
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card className={`bg-slate-900 border-slate-800 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <CardContent className="p-12 flex items-center justify-center min-h-[300px]">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-2xl bg-sky-500/20 flex items-center justify-center mx-auto mb-6">
                          <step.visual className="h-12 w-12 text-sky-400" />
                        </div>
                        <p className="font-heading text-xl font-semibold text-white mb-2">
                          {step.subtitle}
                        </p>
                        <p className="text-slate-400 text-sm">
                          Continuous {step.title.toLowerCase()} across your environment
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center py-16">
                    <div className="w-px h-16 bg-slate-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-slate-50 py-24 grid-texture" data-testid="how-it-works-summary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Continuous Cycle
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These three steps form a continuous cycle. As your environment changes and new threats emerge, AcmeSecure continuously identifies, measures, and helps reduce your cyber risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={step.title}
                className="bg-white border-slate-100 shadow-lg text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-sky-500" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {step.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="how-it-works-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            See It in Action
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Request a personalized demo to see how AcmeSecure's three-step approach can transform your security program.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="how-it-works-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
