import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Activity, Target, Check, ArrowRight, ClipboardList, BarChart3, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Assess",
      subtitle: "Structured Evaluation",
      icon: Eye,
      description: "The first step is understanding your organization's current state. For well-being, this means structured surveys covering mental, physical, stress, and financial dimensions. For security, this means evaluating device posture and policy compliance.",
      details: [
        "Structured survey deployment for well-being assessment",
        "Mobile device security posture evaluation",
        "User and device inventory across environments",
        "Baseline establishment for improvement tracking",
        "Privacy-compliant data collection",
      ],
      visual: ClipboardList,
    },
    {
      step: "02",
      title: "Analyze",
      subtitle: "Categorization & Insights",
      icon: Activity,
      description: "Once data is collected, AcmeSecure platforms analyze and categorize findings. Well-being responses are classified as Severe, Moderate, or Mild. Security findings are prioritized based on risk and policy alignment.",
      details: [
        "Response categorization (Severe, Moderate, Mild)",
        "Risk-based prioritization for security findings",
        "Trend analysis and pattern identification",
        "Aggregated dashboards for decision-makers",
        "Clear reporting for program management",
      ],
      visual: BarChart3,
    },
    {
      step: "03",
      title: "Act",
      subtitle: "Intervention & Enforcement",
      icon: Target,
      description: "With clear insights, organizations can take targeted action. For well-being, this means directing support where needed. For security, this means enforcing policies and remediating issues.",
      details: [
        "Targeted well-being support recommendations",
        "Security policy enforcement on devices",
        "Program progress tracking and verification",
        "Continuous improvement through iteration",
        "Audit-ready documentation",
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
              A structured, three-step approach to assessing, analyzing, and acting on organizational well-being and security needs. Simple in concept, powerful in execution.
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
                          {step.title} across your organization
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
              Continuous Improvement
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These three steps form a continuous cycle. As your organization evolves and new challenges emerge, AcmeSecure platforms continuously assess, analyze, and enable action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
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
            Request a personalized demo to see how AcmeSecure's three-step approach can help your organization.
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
