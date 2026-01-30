import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Lock, Users, ArrowRight, Check } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Security First",
      description: "We build products with security at their core, not as an afterthought. Every decision we make prioritizes the protection of our customers.",
      icon: Shield,
    },
    {
      title: "Enterprise Focus",
      description: "We design for scale, complexity, and the rigorous requirements of large organizations and regulated industries.",
      icon: Target,
    },
    {
      title: "Trust & Reliability",
      description: "Our customers trust us with their most critical security operations. We earn that trust through consistent, reliable performance.",
      icon: Lock,
    },
    {
      title: "Customer Partnership",
      description: "We work alongside our customers as partners, understanding their unique challenges and evolving our solutions to meet their needs.",
      icon: Users,
    },
  ];

  const commitments = [
    "Continuous innovation driven by customer feedback",
    "Transparent communication and honest assessments",
    "Long-term partnerships over short-term transactions",
    "Actionable insights over overwhelming data",
    "Deployment flexibility to meet your requirements",
    "Dedicated support from security experts",
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
                We exist to help enterprises continuously reduce cyber risk. Founded on the belief that security should be measurable, actionable, and achievable at any scale.
              </p>
              <p className="text-slate-400 leading-relaxed">
                AcmeSecure was built by security practitioners who understand the challenges of protecting large, complex environments. We've channeled that experience into solutions that deliver real risk reduction, not just more alerts.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7108268/pexels-photo-7108268.jpeg"
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
              To empower enterprises to continuously identify, measure, and reduce cyber risk across their entire digital environment—enabling them to operate with confidence in an increasingly hostile threat landscape.
            </p>
            <div className="bg-slate-900 rounded-xl p-8 text-left">
              <p className="text-sky-400 font-heading font-semibold text-sm uppercase tracking-wider mb-3">
                What Drives Us
              </p>
              <p className="text-white text-lg leading-relaxed">
                "Security teams are overwhelmed with alerts but starved for actionable insight. We're changing that by delivering continuous risk intelligence that enables real, measurable risk reduction."
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
                src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Enterprise Security"
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
            Join Us in Reducing Cyber Risk
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us or explore how AcmeSecure can help your organization, we'd love to hear from you.
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
