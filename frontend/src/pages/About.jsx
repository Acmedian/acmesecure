import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Lock, Users, ArrowRight, Check } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Security First",
      description: "We build platforms with security and privacy at their core, not as an afterthought. Every decision prioritizes the protection of our customers.",
      icon: Shield,
    },
    {
      title: "Enterprise Focus",
      description: "We design for scale, complexity, and the rigorous requirements of large organizations and government programs.",
      icon: Target,
    },
    {
      title: "Trust & Reliability",
      description: "Our customers trust us with sensitive organizational data. We earn that trust through consistent, reliable performance.",
      icon: Lock,
    },
    {
      title: "Customer Partnership",
      description: "We work alongside our customers as partners, understanding their unique challenges and evolving our platforms to meet their needs.",
      icon: Users,
    },
  ];

  const commitments = [
    "Continuous improvement driven by customer feedback",
    "Transparent communication and honest assessments",
    "Long-term partnerships over short-term transactions",
    "Actionable insights over overwhelming data",
    "Deployment flexibility to meet your requirements",
    "Dedicated support from domain experts",
  ];

  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                About AcmeSecure
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                We exist to help organizations assess workforce well-being and enforce mobile security policies. Founded on the belief that both human welfare and digital security require structured, scalable approaches.
              </p>
              <p className="text-slate-400 leading-relaxed">
                AcmeSecure was built by professionals who understand the challenges of managing well-being programs and securing mobile devices at enterprise scale. We've channeled that experience into platforms that deliver clear insights and measurable results.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="AcmeSecure Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24 grid-texture" data-testid="about-mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              To empower organizations with structured approaches to workforce well-being assessment and mobile security enforcement—enabling them to support their people and protect their digital assets with clarity and confidence.
            </p>
            <div className="bg-slate-900 rounded-xl p-8 text-left">
              <p className="text-sky-400 font-heading font-semibold text-sm uppercase tracking-wider mb-3">
                What Drives Us
              </p>
              <p className="text-white text-lg leading-relaxed">
                "Organizations need clear frameworks for understanding workforce well-being and enforcing mobile security. We're providing those frameworks through platforms that deliver structured assessment, clear categorization, and actionable insights."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-24" data-testid="about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we build and every interaction we have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="bg-white border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid={`value-${index + 1}`}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-white py-24 grid-texture" data-testid="about-commitments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                Our Commitments
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We hold ourselves to a high standard in everything we do. These commitments reflect how we operate and what our customers can expect from us.
              </p>
              <ul className="space-y-4">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`commitment-${index + 1}`}>
                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-sky-500" />
                    </div>
                    <span className="text-slate-700">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Office Environment"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24" data-testid="about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to explore how AcmeSecure can help your organization or discuss partnership opportunities, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
              <Link to="/contact" data-testid="about-demo-btn">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              <Link to="/contact" data-testid="about-contact-btn">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
