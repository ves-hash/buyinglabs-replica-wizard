
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg-bright.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium consumer goods including cosmetics, fashion, and luxury accessories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-hero-text mb-6 leading-tight">
          Your Global Partner for 
          <span className="block text-primary-foreground">Beauty Distribution</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-hero-text/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          We link premium beauty brands and cosmetic producers with international retail markets through efficient sourcing, reliable logistics, strict quality assurance, and an expansive global presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            DISCOVER MORE
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-background/10 border-hero-text text-hero-text hover:bg-background/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            CONTACT US
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hero-text/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
