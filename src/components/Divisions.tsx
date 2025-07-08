import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import beautyImage from "@/assets/beauty-category.jpg";
import homeImage from "@/assets/home-category.jpg";
import fashionImage from "@/assets/fashion-category.jpg";

const Divisions = () => {
  const categories = [
    {
      title: "Beauty",
      description: "We distribute beauty products from a wide range of premium brands. This includes fragrances, make-up, and personal care products.",
      image: beautyImage,
      alt: "Beauty products including fragrances and make-up"
    },
    {
      title: "Home & Living",
      description: "Premium home decor, furniture, and living accessories from trusted suppliers worldwide for sophisticated interiors.",
      image: homeImage,
      alt: "Home and living products and decor"
    },
    {
      title: "Fashion",
      description: "High-quality fashion items, accessories, and lifestyle products from renowned brands for discerning customers.",
      image: fashionImage,
      alt: "Fashion and lifestyle products"
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Broad choices, seamless trade
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our product catalog features a wide range of premium products from the beauty, 
            home & living, and fashion categories.
          </p>
          <div className="mt-8">
            <Button variant="cta" size="lg">
              Discover Our Divisions
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
              Ready to start your global trade journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with our team to discuss your sourcing and distribution needs.
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