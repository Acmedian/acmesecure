import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

// Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/layout/LiveChat";

// Pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Resilience from "@/pages/products/Resilience";
import Aegis from "@/pages/products/Aegis";
import Solutions from "@/pages/Solutions";
import HowItWorks from "@/pages/HowItWorks";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/resilience" element={<Resilience />} />
            <Route path="/products/aegis" element={<Aegis />} />
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
