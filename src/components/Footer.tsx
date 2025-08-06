
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Products", href: "#products" },
    ],
    services: [
      { name: "Buy From Us", href: "#buy-from-us" },
      { name: "Supply To Us", href: "#supply-to-us" },
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">WB</span>
              </div>
              <span className="text-xl font-bold">WholeBeauty</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your global partner for sourcing and distributing premium cosmetics and beauty products 
              worldwide with professional quality standards and industry expertise.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">info@wholebeauty.com</p>
              <p className="text-sm text-primary-foreground/80">+1 (555) 123-4567</p>
              <p className="text-sm text-primary-foreground/80">Los Angeles, CA 90028</p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2024 WholeBeauty. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-primary-foreground/80" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
