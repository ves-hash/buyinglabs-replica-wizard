
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
              At WholeBeauty, we deliver exceptional results through a passionate team, deep industry knowledge, and a global network of trusted cosmetics suppliers and retail partners. We connect premium beauty brands and manufacturers with a broad spectrum of international retailers and distributors.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From beauty stores and online retailers to established beauty chains and global e-commerce platforms, our partners rely on us for consistent, high-quality distribution. We manage worldwide fulfillment with precision—ensuring every product arrives on time, in perfect condition, and in full compliance with industry standards.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our operations are backed by dedicated beauty warehousing facilities, rigorous quality control processes, regulatory compliance expertise, and tailored financing solutions designed specifically for the beauty sector.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
              WholeBeauty — your trusted partner in global beauty distribution.
            </p>

            <div className="pt-4">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                More About Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={aboutImage}
                alt="Beauty industry professionals in a meeting discussing cosmetics sourcing and distribution"
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
