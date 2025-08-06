import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive beauty distribution solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Buy From Us */}
          <Card id="buy-from-us" className="shadow-elegant border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Buy From Us</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Wholebeauty, we recognize the complexities beauty retailers face in managing procurement and supply chains. Our mission is to streamline these processes, enabling you to concentrate on core business priorities—driving revenue and strategic growth.
                </p>
                <p>
                  By partnering with us, you gain a trusted ally dedicated to optimizing your procurement operations. We take care of the logistical challenges so you can allocate resources more effectively and focus on scaling your business.
                </p>
                <p>
                  Wholebeauty connects leading beauty brands and cosmetics manufacturers with international retailers. Through professional distribution services, rigorous quality assurance, and an expansive global network, we ensure seamless access to high-quality products across markets.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Supply To Us */}
          <Card id="supply-to-us" className="shadow-elegant border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Supply To Us</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Wholebeauty, we specialize in optimizing distribution for beauty brands and suppliers across global markets. With a proven track record of successful partnerships, we help streamline procurement and supply processes—empowering our partners to focus on performance, profitability, and long-term growth.
                </p>
                <p>
                  As an opportunity-focused organization, we are always open to reviewing high-potential offers and forging new strategic alliances.
                </p>
                <p>
                  Please don't hesitate to get in touch—we welcome the opportunity to explore how we can add value to your business.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;