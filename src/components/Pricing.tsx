import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  const features = [
    "Unlimited appointments & orders",
    "SMS confirmations & reminders",
    "Custom booking page",
    "Customer management",
    "Calendar integration",
    "WhatsApp & Facebook sharing",
    "Mobile-friendly interface",
    "24/7 customer support",
    "Data backup & security",
    "Multi-language support"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Affordable Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One low monthly fee. No setup costs, no hidden charges. 
            Perfect for small businesses across Ghana.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="relative border-2 border-primary/20 shadow-strong">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-secondary text-foreground px-6 py-2 rounded-full font-semibold text-sm">
                Most Popular
              </div>
            </div>
            
            <CardHeader className="text-center p-8 pb-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Complete Business Package
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-extrabold text-primary">GH₵20</span>
                  <div className="text-left">
                    <div className="text-muted-foreground text-sm">per month</div>
                    <div className="text-muted-foreground text-xs">billed monthly</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Everything you need to manage appointments and orders professionally
                </p>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" className="w-full h-12 text-lg">
                Start Free 14-Day Trial
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-2">14 Days</div>
              <div className="text-muted-foreground">Free trial period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-2">No Setup</div>
              <div className="text-muted-foreground">Fees or contracts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-2">Cancel</div>
              <div className="text-muted-foreground">Anytime you want</div>
            </div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-foreground font-medium mb-2">
              💰 Save money by reducing missed appointments
            </p>
            <p className="text-muted-foreground text-sm">
              The average business recovers the monthly cost within the first week by reducing no-shows and capturing more bookings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;