
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@wholebeauty.com",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Beauty District Plaza",
      description: "Los Angeles, CA 90028"
    },
    {
      icon: Globe,
      title: "Global Beauty Network",
      content: "Worldwide Beauty Distribution",
      description: "Serving beauty retailers globally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your beauty business journey? Contact our cosmetics experts today to discuss 
            your premium beauty products sourcing and distribution needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Let's Build Beauty Together
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              Whether you're a beauty brand looking to expand globally or a retailer 
              seeking premium cosmetics, we're here to help you succeed in the beauty industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 hover:bg-background transition-colors duration-300">
                <div className="flex-shrink-0 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-sm font-medium text-primary mb-1">{info.content}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
