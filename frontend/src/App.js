import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/layout/LiveChat";

// Pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import DeviceShield from "@/pages/products/DeviceShield";
import RiskIntelligence from "@/pages/products/RiskIntelligence";
import ComplianceAudit from "@/pages/products/ComplianceAudit";
import ThreatResponse from "@/pages/products/ThreatResponse";
import Solutions from "@/pages/Solutions";
import HowItWorks from "@/pages/HowItWorks";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/device-shield" element={<DeviceShield />} />
            <Route path="/products/risk-intelligence" element={<RiskIntelligence />} />
            <Route path="/products/compliance-audit" element={<ComplianceAudit />} />
            <Route path="/products/threat-response" element={<ThreatResponse />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <LiveChat />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
