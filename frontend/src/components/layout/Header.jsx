import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Solutions", href: "/solutions" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "Resilience", href: "/products/resilience", description: "Well-being assessment" },
    { name: "Aegis", href: "/products/aegis", description: "Mobile security enforcement" },
  ];

  const isActive = (href) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200" data-testid="header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <img 
              src="https://customer-assets.emergentagent.com/job_220fc9ab-b016-4ce4-812c-78cce458c17b/artifacts/e4y3j6qe_acmesecure.png" 
              alt="AcmeSecure" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-sky-500 ${
                        isActive(item.href) ? "text-sky-500" : "text-slate-600"
                      }`}
                      data-testid="products-dropdown-trigger"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/products" className="w-full" data-testid="products-overview-link">
                        <div>
                          <div className="font-medium">All Products</div>
                          <div className="text-xs text-slate-500">Compare platforms</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    {products.map((product) => (
                      <DropdownMenuItem key={product.name} asChild>
                        <Link to={product.href} className="w-full" data-testid={`product-link-${product.href.split('/').pop()}`}>
                          <div>
                            <div className="font-medium">{product.name}</div>
                            <div className="text-xs text-slate-500">{product.description}</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                    isActive(item.href) ? "text-sky-500" : "text-slate-600"
                  }`}
                  data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white accent-glow">
              <Link to="/contact" data-testid="header-demo-btn">Request a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block text-base font-medium py-2 ${
                      isActive(item.href) ? "text-sky-500" : "text-slate-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-4 flex flex-col gap-2 mt-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="text-sm text-slate-500 hover:text-sky-500 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4 bg-sky-500 hover:bg-sky-600 text-white">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-demo-btn">
                  Request a Demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
