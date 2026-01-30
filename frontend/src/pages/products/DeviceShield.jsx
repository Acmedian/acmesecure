import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Check, Monitor, Wifi, Settings, Eye, ArrowRight, ChevronRight } from "lucide-react";

const DeviceShield = () => {
  const capabilities = [
    {
      title: "Device Posture Monitoring",
      description: "Continuously assess the security posture of every device in your network, including patch levels, security software status, and configuration compliance.",
      icon: Monitor,
    },
    {
      title: "Unauthorized Device Detection",
      description: "Automatically identify and alert on unauthorized devices attempting to connect to your network, with customizable response policies.",
      icon: Wifi,
    },
    {
      title: "Configuration Drift Tracking",
      description: "Monitor and detect when device configurations deviate from your security baselines, enabling rapid remediation of policy violations.",
      icon: Settings,
    },
    {
      title: "Endpoint Visibility",
      description: "Gain complete visibility into your endpoint landscape with real-time inventory, status tracking, and comprehensive reporting.",
      icon: Eye,
    },
  ];

  const audiences = [
    "Enterprise IT Security Teams",
    "Endpoint Security Administrators",
    "Security Operations Centers",
    "Compliance and Audit Teams",
    "Network Security Managers",
  ];

  return (
    <div data-testid="device-shield-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="device-shield-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 mb-6">
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Device Shield</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-sky-500 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                AcmeSecure Device Shield
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Comprehensive endpoint and device-level protection that provides continuous posture monitoring, unauthorized device detection, and configuration drift tracking across your entire device fleet.
              </p>
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
                <Link to="/contact" data-testid="device-shield-demo-btn">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Device Security"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-white py-24 grid-texture" data-testid="device-shield-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Device Shield provides comprehensive protection through these core capabilities.
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
      <section className="bg-slate-50 py-24" data-testid="device-shield-audience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                Who It's For
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Device Shield is designed for organizations that need comprehensive endpoint protection and visibility across their device landscape.
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
                Deployment Options
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Cloud-hosted SaaS deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>On-premises installation available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Hybrid deployment models supported</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Air-gapped environment support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="device-shield-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Secure Your Devices?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            See Device Shield in action with a personalized demo tailored to your organization's needs.
          </p>
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow px-8">
            <Link to="/contact" data-testid="device-shield-final-demo-btn">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DeviceShield;
