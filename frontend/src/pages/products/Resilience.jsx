import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Check, 
  Heart, 
  Brain, 
  Activity, 
  Wallet,
  Users,
  FileText,
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

const Resilience = () => {
  const capabilities = [
    {
      title: "Mental Well-being Assessment",
      description: "Structured surveys to understand mental health indicators across your workforce, with responses categorized by severity level for appropriate follow-up.",
      icon: Brain,
    },
    {
      title: "Physical Well-being Assessment",
      description: "Evaluate physical health awareness and lifestyle factors through targeted questionnaires designed for enterprise well-being programs.",
      icon: Heart,
    },
    {
      title: "Stress Level Evaluation",
      description: "Measure workplace and personal stress indicators to identify areas requiring organizational attention and support.",
      icon: Activity,
    },
    {
      title: "Financial Well-being Assessment",
      description: "Understand financial wellness factors that impact employee productivity and overall well-being, enabling targeted support programs.",
      icon: Wallet,
    },
    {
      title: "Aggregated Reporting",
      description: "Clear dashboards providing organizational visibility into workforce well-being trends, with appropriate privacy safeguards.",
      icon: FileText,
    },
    {
      title: "Enterprise Administration",
      description: "Centralized management of assessment programs, user groups, and reporting for HR and program administrators.",
      icon: Users,
    },
  ];

  const problems = [
    "Limited visibility into workforce well-being at scale",
    "No structured approach to assess employee mental and physical health",
    "Difficulty categorizing and prioritizing support needs",
    "Lack of aggregated insights for program planning",
    "Manual processes for well-being program management",
    "Disconnected data across multiple assessment tools",
  ];

  const audiences = [
    {
      role: "Enterprise HR Teams",
      benefit: "Structured workforce well-being assessment and reporting",
    },
    {
      role: "Government Program Managers",
      benefit: "Scalable well-being initiatives for public sector programs",
    },
    {
      role: "Corporate Wellness Teams",
      benefit: "Data-driven insights for wellness program design",
    },
    {
      role: "People Operations",
      benefit: "Employee support prioritization and resource allocation",
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
              <img                 
                src="https://customer-assets.emergentagent.com/job_220fc9ab-b016-4ce4-812c-78cce458c17b/artifacts/37ruae2w_resilience.png" 
                alt="AcmeSecure Resilience" 
                className="h-14 w-auto mb-6"
              />
              <p className="text-sky-400 font-medium text-sm uppercase tracking-wider mb-6">
                Well-being Assessment Platform
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                A survey-based well-being and risk assessment platform designed for enterprises and government programs. Resilience enables organizations to understand workforce well-being through structured surveys covering mental, physical, stress, and financial dimensions—with responses categorized into Severe, Moderate, and Mild levels.
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
                // src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&q=85"
                src="/acmesecure/images/resilience.jpg"
                alt="Workforce Well-being"
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
                Organizations need structured approaches to understand and support workforce well-being. Resilience provides the framework for assessment, categorization, and reporting at enterprise scale.
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
                The Resilience Approach
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Structured surveys, not ad-hoc questionnaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Clear categorization: Severe, Moderate, Mild</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Aggregated insights, not individual exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Professional assessment, non-medical approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
                                {/* Admin & User Gallery Section */}
<section className="bg-slate-50 py-24" data-testid="aegis-admin-user-gallery">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
        Resilience Platform Experience
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Powerful administrative control with seamless end-user protection.
      </p>
    </div>

    <div className="relative grid lg:grid-cols-2 gap-12 items-start">
      
      {/* Vertical Divider */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

      {/* ================= ADMIN SIDE ================= */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-slate-900 text-center">
          Admin Console
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <img
              src="/acmesecure/images/admin-d1.png"
              alt="Admin Dashboard"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg group">
            <img
              src="/acmesecure/images/admin-d2.png"
              alt="Admin Dashboard"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-center pt-4">
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Admin Login
          </a> */}
          <Button
            type="button"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3"
            >
              Admin Login
          </Button>
        </div>
      </div>

      {/* ================= USER SIDE ================= */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-slate-900 text-center">
          User Experience
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg group">
            <img
              src="/acmesecure/images/user-1.png"
              alt="User Mobile App"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg group">
            <img
              src="/acmesecure/images/user-2.png"
              alt="Mobile Protection"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-center pt-4">
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            User Login
          </a> */}
          <Button
            type="button"
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3"
            >
              User Login
            </Button>
        </div>
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
              Resilience provides comprehensive well-being assessment capabilities for enterprise and government programs.
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
              Resilience serves organizations that need structured, scalable approaches to workforce well-being assessment.
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
            Ready to Assess Workforce Well-being?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See how Resilience can help your organization understand and support workforce well-being with structured assessment and clear reporting.
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
