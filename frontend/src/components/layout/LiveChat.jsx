import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="live-chat">
      {/* Chat Window Placeholder */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeInUp"
          data-testid="live-chat-window"
        >
          {/* Header */}
          <div className="bg-slate-900 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-white text-sm">AcmeSecure Support</h4>
                <p className="text-xs text-slate-400">We typically reply in minutes</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="close-chat-btn"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 bg-slate-50 min-h-[200px] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-sky-500" />
            </div>
            <h5 className="font-heading font-semibold text-slate-900 mb-2">Live Chat Coming Soon</h5>
            <p className="text-sm text-slate-600 mb-4">
              Our team is working on bringing you real-time support. In the meantime, please use our contact form.
            </p>
            <Button 
              asChild 
              size="sm" 
              className="bg-sky-500 hover:bg-sky-600 text-white"
            >
              <a href="/contact" data-testid="chat-contact-link">Contact Us</a>
            </Button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-slate-900 hover:bg-slate-800" 
            : "bg-sky-500 hover:bg-sky-600 pulse-animation"
        }`}
        data-testid="live-chat-toggle"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default LiveChat;
