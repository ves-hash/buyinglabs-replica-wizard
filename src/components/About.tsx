import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                About us
              </h2>
              <div className="w-12 h-1 bg-primary mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong team, a growth mindset, and a global network of suppliers and customers, 
              we achieve extraordinary results. Buying Labs connects suppliers of premium consumer 
              goods to a wide range of international customers.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From boutique retailers and niche online stores to industry giants in retail and 
              e-commerce, they all trust us as their partner. We operate and fulfill worldwide, 
              making sure that every product is distributed in the most efficient and professional manner.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              All of this is supported by our own warehousing facilities, quality control, 
              and financing if needed.
            </p>

            <div className="pt-4">
              <Button variant="cta" size="lg">
                More About Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={aboutImage}
                alt="Team member in a meeting for sourcing and distributing premium consumer goods"
                className="w-full h-[400px] sm:h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;