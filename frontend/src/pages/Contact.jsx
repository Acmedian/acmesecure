import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Check, Shield, Building2, Clock } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;
const API = `/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    industry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    "CISO / IT Security Head",
    "HR Director / CHRO",
    "IT Director / CIO",
    "Security Manager",
    "HR Manager",
    "Program Manager",
    "Other",
  ];

  const industries = [
    "IT / ITES / Software",
    "Large Enterprises / Corporates",
    "Government / PSU",
    "BFSI",
    "Education",
    "Healthcare",
    "Other",
  ];

  const trustSignals = [
    { text: "Enterprise-grade platforms", icon: Shield },
    { text: "Trusted by organizations", icon: Building2 },
    { text: "Response within 24 hours", icon: Clock },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.role || !formData.industry) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // await axios.post(`${API}/demo-request`, formData);
      await axios.post("/api/request_handle.php", formData);
      setIsSubmitted(true);
      toast.success("Demo request submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div data-testid="contact-page">
        <section className="bg-slate-950 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-8">
                <Check className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-heading text-4xl font-bold text-white mb-6">
                Thank You
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Your demo request has been received. Our team will reach out shortly to schedule a personalized demonstration.
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    company: "",
                    email: "",
                    role: "",
                    industry: "",
                    message: "",
                  });
                }}
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800"
                data-testid="submit-another-btn"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Request a Demo
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                See how AcmeSecure can help your organization with well-being assessment and mobile security enforcement. Fill out the form and our team will reach out to schedule a personalized demo.
              </p>

              {/* Trust Signals */}
              <div className="space-y-4 mb-12">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <signal.icon className="h-5 w-5 text-sky-400" />
                    </div>
                    <span>{signal.text}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <h3 className="font-heading font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:info@acmedian.com" 
                    className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors"
                    data-testid="contact-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span>info@acmedian.com</span>
                  </a>
                  <a 
                    href="tel:+916283534979" 
                    className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors"
                    data-testid="contact-phone"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+91-6283534979</span>
                  </a>
                  <div className="flex items-start gap-3 text-slate-300">
                    <MapPin className="h-5 w-5 mt-0.5" />
                    <span>Chandigarh and Noida, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card className="bg-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="demo-request-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Organization *</Label>
                      <Input
                        id="company"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        required
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.smith@acme.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role *</Label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) => handleChange("role", value)}
                      >
                        <SelectTrigger data-testid="select-role">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => handleChange("industry", value)}
                      >
                        <SelectTrigger data-testid="select-industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements or specific interests..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white accent-glow"
                    size="lg"
                    disabled={isSubmitting}
                    data-testid="submit-demo-btn"
                  >
                    {isSubmitting ? "Submitting..." : "Request a Demo"}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
