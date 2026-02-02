import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Check, 
  Smartphone, 
  Settings, 
  AlertTriangle, 
  Ban,
  FileText,
  Lock,
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

const Aegis = () => {
  const capabilities = [
    {
      title: "Restricted App Management",
      description: "Centralized definition and management of restricted applications based on industry and government advisories, with automated detection and notifications.",
      icon: Ban,
    },
    {
      title: "Website Policy Enforcement",
      description: "Manage access to restricted websites and domains, protecting users from phishing, fraud, and other web-based threats.",
      icon: Settings,
    },
    {
      title: "Spam & Scam Call Detection",
      description: "Identify and flag spam and scam call indicators to protect users from phone-based fraud and social engineering attempts.",
      icon: AlertTriangle,
    },
    {
      title: "Operating System Policies",
      description: "Define and enforce policies related to operating system configurations, ensuring devices meet organizational security requirements.",
      icon: Smartphone,
    },
    {
      title: "Administrative Reporting",
      description: "Comprehensive dashboards and reports for security administrators, including historical analysis and trend tracking.",
      icon: FileText,
    },
    {
      title: "Privacy-Focused Enforcement",
      description: "Where permitted through managed device connections, enforce security policies while maintaining user privacy and data integrity.",
      icon: Lock,
    },
  ];

  const problems = [
    "Smartphones storing sensitive personal and organizational data",
    "Exposure to malware, phishing, and fraud through mobile devices",
    "Unauthorized apps and services compromising security",
    "Scam calls and social engineering targeting mobile users",
    "No centralized visibility into mobile security posture",
    "Difficulty enforcing security policies across device fleets",
  ];

  const audiences = [
    {
      role: "IT Security Teams",
      benefit: "Centralized mobile security policy management and enforcement",
    },
    {
      role: "Enterprise Mobility Managers",
      benefit: "Device fleet security oversight and compliance",
    },
    {
      role: "Government IT Administrators",
      benefit: "Policy enforcement based on government advisories",
    },
    {
      role: "Security Operations",
      benefit: "Mobile threat detection and response capabilities",
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
              <img 
                src="https://customer-assets.emergentagent.com/job_220fc9ab-b016-4ce4-812c-78cce458c17b/artifacts/txjx7h1z_aegis.png" 
                alt="AcmeSecure Aegis" 
                className="h-14 w-auto mb-6"
              />
              <p className="text-sky-400 font-medium text-sm uppercase tracking-wider mb-6">
                Mobile Security Enforcement Platform
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Smartphones store sensitive personal, financial, and operational data—and are constantly exposed to malware, phishing, fraud, scam calls, and unauthorized applications. Aegis enables automated enforcement of security policies on user smartphones based on industry and government advisories, with centralized management and reporting.
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
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Mobile Security"
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
                Mobile devices represent a significant attack surface for organizations. Aegis addresses these security challenges through policy enforcement and centralized management.
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
                The Aegis Approach
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Prevention and enforcement, not just detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Policies based on industry and government advisories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Centralized management with clear reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Privacy-focused with data integrity safeguards</span>
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
              Aegis provides comprehensive mobile security policy enforcement capabilities for enterprises and government organizations.
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
              Aegis serves organizations that need to protect mobile devices and enforce security policies at scale.
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

      {/* Key Emphasis */}
      <section className="bg-slate-50 py-24" data-testid="aegis-emphasis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Privacy, Integrity, Confidentiality
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Aegis is designed with strong emphasis on user privacy, data integrity, and confidentiality. Security enforcement is implemented through managed connections where permitted, ensuring organizational security without compromising individual privacy.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-100">
                <Lock className="h-8 w-8 text-sky-500 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Privacy</h3>
                <p className="text-sm text-slate-600">User privacy protected through policy design</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100">
                <Shield className="h-8 w-8 text-sky-500 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Integrity</h3>
                <p className="text-sm text-slate-600">Data integrity maintained throughout</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100">
                <Check className="h-8 w-8 text-sky-500 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-slate-900 mb-2">Confidentiality</h3>
                <p className="text-sm text-slate-600">Information confidentiality assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="aegis-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Secure Mobile Devices?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how Aegis can help your organization enforce mobile security policies with centralized management and clear reporting.
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
