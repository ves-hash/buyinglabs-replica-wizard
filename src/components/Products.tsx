
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import beautyImage from "@/assets/beauty-category.jpg";
import skincareImage from "@/assets/skincare-category.jpg";

const Products = () => {
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
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Wholesale Cosmetics Supplier
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Wholebeauty, we offer a wide range of beauty products, including makeup, skincare, and body care items. We work with both well-known international brands and niche products, such as Korean cosmetics, to meet the diverse needs of our customers.
          </p>
          <div className="mt-8">
            <Button variant="cta" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact us today to request our wholesale price list
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose Us?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-3">Authentic Brand Selection</h4>
              <p className="text-muted-foreground leading-relaxed">
                We supply original beauty products from well-known international brands, as well as innovative items from emerging niche labels. This gives you access to both trusted names and fresh, unique products for your store.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-3">Competitive Pricing</h4>
              <p className="text-muted-foreground leading-relaxed">
                Thanks to our strong relationships with suppliers, we're able to offer great prices on skincare, makeup, and body care items—helping you stay competitive without sacrificing quality.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-3">Global Shipping</h4>
              <p className="text-muted-foreground leading-relaxed">
                Our in-house warehouse team ensures fast and efficient order processing. We ship worldwide, and our logistics experts make sure your deliveries clear customs smoothly, in line with local regulations.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-3">Trust</h4>
              <p className="text-muted-foreground leading-relaxed">
                We are working in close relationships with our suppliers and customers, our professional experience is based on trust and mutual respect with our partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
