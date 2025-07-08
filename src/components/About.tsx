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
              With a passionate team, beauty expertise, and a global network of cosmetics suppliers and retailers, 
              we achieve extraordinary results. WholeBeauty connects premium beauty brands and cosmetics 
              manufacturers to a wide range of international beauty retailers and distributors.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From boutique beauty stores and specialized online cosmetics retailers to major beauty chains 
              and e-commerce platforms, they all trust us as their beauty distribution partner. We operate 
              and fulfill worldwide, ensuring every beauty product reaches its destination with the highest 
              quality standards and professional care.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              All of this is supported by our specialized beauty warehousing facilities, cosmetics quality control, 
              regulatory compliance expertise, and financing solutions tailored for the beauty industry.
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