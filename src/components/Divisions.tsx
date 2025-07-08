import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import beautyImage from "@/assets/beauty-category.jpg";
import skincareImage from "@/assets/skincare-category.jpg";
import fragranceImage from "@/assets/fragrance-category.jpg";

const Divisions = () => {
  const categories = [
    {
      title: "Makeup & Color Cosmetics",
      description: "Complete range of color cosmetics including foundations, lipsticks, eyeshadows, mascaras, and makeup tools from leading beauty brands worldwide.",
      image: beautyImage,
      alt: "Makeup and color cosmetics including foundations and lipsticks"
    },
    {
      title: "Skincare & Treatments",
      description: "Premium skincare solutions including serums, moisturizers, cleansers, anti-aging treatments, and specialized skincare products for all skin types.",
      image: skincareImage,
      alt: "Skincare products and treatments"
    },
    {
      title: "Fragrances & Personal Care",
      description: "Luxury fragrances, perfumes, colognes, and personal care products from renowned beauty houses and emerging niche fragrance brands.",
      image: fragranceImage,
      alt: "Fragrances and personal care products"
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Complete beauty solutions, seamless global distribution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive beauty catalog features premium cosmetics across makeup, skincare, 
            and fragrance categories from trusted beauty brands worldwide.
          </p>
          <div className="mt-8">
            <Button variant="cta" size="lg">
              Discover Our Beauty Categories
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={category.title} className="group hover:shadow-elegant transition-all duration-500 overflow-hidden border-0 shadow-card">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-hover p-0 h-auto font-medium"
                  >
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-elegant rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to expand your beauty business globally?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with our beauty experts to discuss your cosmetics sourcing and distribution needs.
            </p>
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisions;