import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Check, 
  Eye, 
  Activity, 
  TrendingUp, 
  LayoutDashboard,
  FileCheck,
  Users,
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

const Resilience = () => {
  const capabilities = [
    {
      title: "Asset & Risk Identification",
      description: "Automatically discover and inventory all devices, users, applications, and access points across your environment. Understand what you have before you can protect it.",
      icon: Eye,
    },
    {
      title: "Continuous Exposure Measurement",
      description: "Real-time assessment of vulnerabilities, misconfigurations, and security gaps. Track your exposure as it changes, not just at point-in-time assessments.",
      icon: Activity,
    },
    {
      title: "Centralized Risk Scoring",
      description: "Aggregate and normalize risk data across your security tools into unified risk scores. Prioritize based on business impact, exploitability, and asset criticality.",
      icon: TrendingUp,
    },
    {
      title: "Executive-Ready Visibility",
      description: "Present security posture and risk trends to leadership with clear, customizable dashboards designed for board-level and CISO communication.",
      icon: LayoutDashboard,
    },
    {
      title: "Compliance Posture Tracking",
      description: "Monitor compliance status across multiple frameworks simultaneously. Identify gaps and track progress toward regulatory requirements.",
      icon: FileCheck,
    },
    {
      title: "Risk Intelligence Sharing",
      description: "Export prioritized risk intelligence to operational teams and integrate with Aegis for automated remediation and policy enforcement.",
      icon: Users,
    },
  ];

  const problems = [
    "Lack of visibility into true organizational risk posture",
    "Siloed security data across multiple tools and teams",
    "Difficulty communicating security status to leadership",
    "Point-in-time assessments that miss evolving threats",
    "No clear prioritization for remediation efforts",
    "Compliance reporting that consumes significant resources",
  ];

  const audiences = [
    {
      role: "CISOs & Security Leadership",
      benefit: "Board-ready risk reporting and strategic security visibility",
    },
    {
      role: "Risk Management Teams",
      benefit: "Centralized risk scoring and exposure tracking",
    },
    {
      role: "Compliance Officers",
      benefit: "Continuous compliance monitoring and audit preparation",
    },
    {
      role: "Security Architects",
      benefit: "Environment-wide security posture assessment",
    },
  ];

  return (
    <div data-testid="resilience-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="resilience-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 mb-6">
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Resilience</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-sky-500 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                AcmeSecure Resilience
              </h1>
              <p className="text-sky-400 font-medium text-sm uppercase tracking-wider mb-6">
                Understand and Manage Risk
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                A continuous cyber risk and exposure management platform designed for enterprise and regulated environments. Resilience provides the visibility and intelligence security leaders need to understand their organization's risk posture and make informed decisions.
              </p>
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
                <Link to="/contact" data-testid="resilience-demo-btn">
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

      {/* What Problems It Solves */}
      <section className="bg-white py-24 grid-texture" data-testid="resilience-problems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                What Problems Resilience Solves
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Security teams face increasing pressure to demonstrate risk reduction while managing sprawling environments and evolving threats. Resilience addresses these challenges directly.
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
                The Resilience Difference
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Continuous visibility, not periodic snapshots</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Business-context prioritization, not just CVSS scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Executive-ready reporting, not raw data exports</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Actionable intelligence, not alert fatigue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-slate-50 py-24" data-testid="resilience-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Resilience provides the foundation for understanding and managing cyber risk across your organization.
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
      <section className="bg-white py-24 grid-texture" data-testid="resilience-audience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Who Resilience Is For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Resilience serves security leaders and teams who need to understand, communicate, and strategically manage organizational cyber risk.
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

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="resilience-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready for Complete Risk Visibility?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how Resilience can transform your security program with continuous risk intelligence and executive-ready visibility.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="resilience-final-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resilience;
