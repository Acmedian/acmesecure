import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ClipboardCheck, FileText, Scale, Settings, ArrowRight, ChevronRight } from "lucide-react";

const ComplianceAudit = () => {
  const capabilities = [
    {
      title: "Continuous Compliance Monitoring",
      description: "Monitor your compliance posture in real-time against multiple frameworks simultaneously, with automated evidence collection and gap analysis.",
      icon: ClipboardCheck,
    },
    {
      title: "Audit-Ready Reporting",
      description: "Generate comprehensive audit reports on demand, with automated evidence mapping and documentation to streamline your audit process.",
      icon: FileText,
    },
    {
      title: "Policy Alignment Support",
      description: "Map your security controls to regulatory requirements and industry standards, ensuring your policies align with compliance obligations.",
      icon: Scale,
    },
    {
      title: "Internal Controls Integration",
      description: "Integrate seamlessly with your existing GRC tools and control frameworks to provide a unified view of compliance status.",
      icon: Settings,
    },
  ];

  const frameworks = [
    "SOC 2 Type I & II",
    "ISO 27001/27002",
    "NIST Cybersecurity Framework",
    "PCI DSS",
    "HIPAA",
    "GDPR",
    "FedRAMP",
    "CIS Controls",
  ];

  return (
    <div data-testid="compliance-audit-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="compliance-audit-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 mb-6">
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Compliance & Audit</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-sky-500 flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                AcmeSecure Compliance & Audit
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Simplify compliance management with continuous monitoring, automated evidence collection, and audit-ready reporting across multiple regulatory frameworks.
              </p>
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
                <Link to="/contact" data-testid="compliance-audit-demo-btn">
                  Talk to Compliance Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/7108268/pexels-photo-7108268.jpeg"
                alt="Compliance Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-white py-24 grid-texture" data-testid="compliance-audit-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compliance & Audit streamlines your compliance journey through these core capabilities.
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

      {/* Supported Frameworks */}
      <section className="bg-slate-50 py-24" data-testid="compliance-audit-frameworks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                Supported Frameworks
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Compliance & Audit supports the most widely adopted security and privacy frameworks, with new frameworks added regularly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.map((framework, index) => (
                  <div 
                    key={framework} 
                    className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-100"
                    data-testid={`framework-${index + 1}`}
                  >
                    <Check className="h-5 w-5 text-sky-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{framework}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Compliance Benefits
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Reduce audit preparation time by up to 70%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Continuous compliance vs. point-in-time assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Automated evidence collection and mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Multi-framework compliance from single source</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="compliance-audit-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Simplify Compliance?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Speak with our compliance experts to see how Compliance & Audit can streamline your compliance program.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="compliance-audit-final-demo-btn">
              Talk to Compliance Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ComplianceAudit;
