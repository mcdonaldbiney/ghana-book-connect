import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">BookGhana</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Simplifying appointments and orders for Ghanaian businesses. 
                Join the digital revolution today.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#features" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Features</a>
              <a href="#pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pricing</a>
              <a href="#demo" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Demo</a>
              <a href="#support" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Support</a>
            </div>
          </div>

          {/* Business Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Businesses</h4>
            <div className="space-y-3">
              <a href="#healthcare" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Healthcare</a>
              <a href="#beauty" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Beauty & Wellness</a>
              <a href="#restaurants" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Restaurants</a>
              <a href="#small-business" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Small Businesses</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">Accra, Greater Accra Region</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">hello@bookghana.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 BookGhana. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;