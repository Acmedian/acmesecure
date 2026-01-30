import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Check, BarChart3, TrendingUp, AlertTriangle, LayoutDashboard, ArrowRight, ChevronRight } from "lucide-react";

const RiskIntelligence = () => {
  const capabilities = [
    {
      title: "Centralized Risk Scoring",
      description: "Aggregate and normalize risk data from across your security tools into a unified risk score for every asset, user, and business unit.",
      icon: BarChart3,
    },
    {
      title: "Exposure Tracking Across Assets",
      description: "Track vulnerabilities, misconfigurations, and security gaps across your entire asset inventory with continuous monitoring.",
      icon: TrendingUp,
    },
    {
      title: "Prioritized Remediation Insights",
      description: "Get actionable recommendations prioritized by risk impact, exploitability, and business criticality to focus resources effectively.",
      icon: AlertTriangle,
    },
    {
      title: "Executive-Ready Dashboards",
      description: "Present security posture and risk trends to leadership with clear, customizable dashboards designed for executive communication.",
      icon: LayoutDashboard,
    },
  ];

  const audiences = [
    "Chief Information Security Officers",
    "Security Governance Teams",
    "Risk Management Professionals",
    "Board and Executive Leadership",
    "Security Analysts and Engineers",
  ];

  return (
    <div data-testid="risk-intelligence-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="risk-intelligence-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 mb-6">
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Risk Intelligence</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-sky-500 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                AcmeSecure Risk Intelligence
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Gain continuous visibility into your organization's cyber risk posture with centralized risk scoring, exposure tracking, and executive-ready reporting across all your assets and environments.
              </p>
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
                <Link to="/contact" data-testid="risk-intelligence-demo-btn">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1739054730201-4b6463484e3c?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Risk Intelligence Dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-white py-24 grid-texture" data-testid="risk-intelligence-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Risk Intelligence provides comprehensive visibility and actionable insights through these core capabilities.
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

      {/* Who It's For */}
      <section className="bg-slate-50 py-24" data-testid="risk-intelligence-audience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                Who It's For
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Risk Intelligence serves security leaders and teams who need to understand, communicate, and reduce organizational cyber risk.
              </p>
              <ul className="space-y-4">
                {audiences.map((audience, index) => (
                  <li key={index} className="flex items-center gap-3" data-testid={`audience-${index + 1}`}>
                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-sky-500" />
                    </div>
                    <span className="text-slate-700">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Data Integrations
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Vulnerability scanners and SAST tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Cloud security posture management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Identity and access management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Asset management and CMDB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="risk-intelligence-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready for Complete Risk Visibility?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how Risk Intelligence can transform your security program with a personalized demo.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="risk-intelligence-final-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RiskIntelligence;
