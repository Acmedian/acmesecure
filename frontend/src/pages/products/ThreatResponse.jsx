import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Check, AlertCircle, BarChart2, Workflow, Plug, ArrowRight, ChevronRight } from "lucide-react";

const ThreatResponse = () => {
  const capabilities = [
    {
      title: "Incident Detection Support",
      description: "Correlate security events and alerts across your environment to identify potential incidents early and reduce detection time.",
      icon: AlertCircle,
    },
    {
      title: "Risk-Based Prioritization",
      description: "Prioritize security incidents based on business impact, asset criticality, and threat intelligence to focus on what matters most.",
      icon: BarChart2,
    },
    {
      title: "Response Workflow Enablement",
      description: "Streamline your incident response process with predefined playbooks, automated actions, and collaborative investigation tools.",
      icon: Workflow,
    },
    {
      title: "Integration-Ready Architecture",
      description: "Connect with your existing security stack including SIEM, SOAR, EDR, and ticketing systems for unified threat response.",
      icon: Plug,
    },
  ];

  const integrations = [
    "SIEM Platforms",
    "SOAR Solutions",
    "EDR/XDR Tools",
    "Ticketing Systems",
    "Threat Intelligence Feeds",
    "Cloud Security Tools",
  ];

  return (
    <div data-testid="threat-response-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="threat-response-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 mb-6">
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Threat Response</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-sky-500 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                AcmeSecure Threat Response
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Accelerate your threat response with risk-based prioritization, streamlined workflows, and seamless integration with your existing security infrastructure.
              </p>
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
                <Link to="/contact" data-testid="threat-response-demo-btn">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1628939824352-baa1cdddeb6b?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Threat Response"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-white py-24 grid-texture" data-testid="threat-response-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Threat Response empowers your security team with these essential capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-slate-50 py-24" data-testid="threat-response-integrations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                Seamless Integrations
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Threat Response connects with your existing security infrastructure to provide a unified view of threats and streamlined response capabilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={integration} 
                    className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-100"
                    data-testid={`integration-${index + 1}`}
                  >
                    <Plug className="h-5 w-5 text-sky-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Response Acceleration
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Reduce mean time to detect (MTTD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Reduce mean time to respond (MTTR)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Automated playbook execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Cross-team collaboration tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="threat-response-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Accelerate Threat Response?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how Threat Response can transform your security operations with a personalized demo.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="threat-response-final-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ThreatResponse;
