import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Check, 
  Monitor, 
  Settings, 
  AlertTriangle, 
  Workflow,
  Plug,
  Lock,
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

const Aegis = () => {
  const capabilities = [
    {
      title: "Device & Endpoint Protection",
      description: "Continuous posture monitoring across your device fleet. Detect unauthorized devices, track configuration compliance, and maintain endpoint visibility at scale.",
      icon: Monitor,
    },
    {
      title: "Policy Enforcement",
      description: "Enforce security policies and detect configuration drift in real-time. Ensure devices and systems remain compliant with your security baselines.",
      icon: Settings,
    },
    {
      title: "Risk-Driven Remediation",
      description: "Prioritized remediation guidance based on risk intelligence. Focus operational efforts on the exposures that matter most to your organization.",
      icon: AlertTriangle,
    },
    {
      title: "Incident Response Enablement",
      description: "Detect potential incidents early with correlated security events. Risk-based prioritization helps your SOC focus on genuine threats.",
      icon: Workflow,
    },
    {
      title: "Integration Architecture",
      description: "Connect with your existing security stack including SIEM, SOAR, EDR, and ticketing systems. Aegis fits into your operational workflows.",
      icon: Plug,
    },
    {
      title: "Operational Execution",
      description: "Translate risk intelligence into protective action across distributed environments. From policy enforcement to incident response, Aegis operationalizes security.",
      icon: Lock,
    },
  ];

  const problems = [
    "Endpoints and devices with unknown security posture",
    "Configuration drift going undetected until audits",
    "No clear prioritization for security operations",
    "Disconnected tools requiring manual correlation",
    "Slow response times due to alert overload",
    "Difficulty enforcing policies at enterprise scale",
  ];

  const audiences = [
    {
      role: "Security Operations Teams",
      benefit: "Risk-prioritized alerts and response workflows",
    },
    {
      role: "IT Security Administrators",
      benefit: "Device protection and policy enforcement at scale",
    },
    {
      role: "SOC Analysts",
      benefit: "Correlated events with business context",
    },
    {
      role: "Operations Teams",
      benefit: "Integrated remediation and ticketing workflows",
    },
  ];

  return (
    <div data-testid="aegis-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="aegis-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 mb-6">
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Aegis</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-sky-500 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                AcmeSecure Aegis
              </h1>
              <p className="text-sky-400 font-medium text-sm uppercase tracking-wider mb-6">
                Protect and Respond
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                A protection, enforcement, and response platform that operationalizes risk reduction. Aegis translates risk intelligence into action, providing the tools security teams need to protect assets, enforce policies, and respond to threats.
              </p>
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
                <Link to="/contact" data-testid="aegis-demo-btn">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Security Operations"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Problems It Solves */}
      <section className="bg-white py-24 grid-texture" data-testid="aegis-problems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                What Problems Aegis Solves
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Security operations teams struggle to protect expanding attack surfaces while managing alert fatigue and tool sprawl. Aegis addresses these operational challenges.
              </p>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`problem-${index + 1}`}>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-slate-600">{index + 1}</span>
                    </div>
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                The Aegis Difference
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Risk-driven prioritization, not equal-weight alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Continuous enforcement, not periodic remediation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Integration-ready, not another silo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Operational focus, not just detection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-slate-50 py-24" data-testid="aegis-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Aegis provides the operational capabilities to protect your organization and respond to threats effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={capability.title}
                className="bg-white border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`capability-${index + 1}`}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-6">
                    <capability.icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-24 grid-texture" data-testid="aegis-audience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Who Aegis Is For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Aegis serves security operations and IT teams who need to protect assets, enforce policies, and respond to threats at enterprise scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <Card 
                key={audience.role}
                className="bg-white border-slate-100 shadow-lg"
                data-testid={`audience-${index + 1}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-slate-900 mb-2">
                    {audience.role}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {audience.benefit}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="bg-slate-50 py-24" data-testid="aegis-integrations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Built to Integrate
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Aegis connects with your existing security infrastructure to enhance—not replace—your operational capabilities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["SIEM Platforms", "SOAR Solutions", "EDR/XDR Tools", "Ticketing Systems", "Threat Intel Feeds", "Cloud Security"].map((integration, index) => (
                <div 
                  key={integration}
                  className="bg-white p-4 rounded-lg border border-slate-100 flex items-center gap-3"
                >
                  <Plug className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="aegis-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Operationalize Risk Reduction?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how Aegis can transform your security operations with risk-driven protection and response capabilities.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="aegis-final-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Aegis;
