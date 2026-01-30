import { Link } from "react-router-dom";
import { Shield, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "Device Shield", href: "/products/device-shield" },
      { name: "Risk Intelligence", href: "/products/risk-intelligence" },
      { name: "Compliance & Audit", href: "/products/compliance-audit" },
      { name: "Threat Response", href: "/products/threat-response" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Solutions", href: "/solutions" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Blog", href: "/blog" },
    ],
    resources: [
      { name: "Contact Us", href: "/contact" },
      { name: "Request a Demo", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-400" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4" data-testid="footer-logo">
              <Shield className="h-8 w-8 text-sky-500" />
              <span className="font-heading text-xl font-bold text-white">AcmeSecure</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Continuously reduce cyber risk across devices, users, and environments with enterprise-grade security solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-sky-400 transition-colors"
                    data-testid={`footer-link-${link.href.split('/').pop()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-sky-400 transition-colors"
                    data-testid={`footer-link-${link.href.split('/').pop()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AcmeSecure. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:text-sky-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
