import { Stethoscope, Scissors, ChefHat, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TargetAudience = () => {
  const businesses = [
    {
      icon: Stethoscope,
      title: "Healthcare Providers",
      description: "Doctors, dentists, and clinics managing patient appointments with ease",
      features: ["Patient scheduling", "Medical history tracking", "Appointment reminders"]
    },
    {
      icon: Scissors,
      title: "Beauty & Wellness",
      description: "Salons, barbershops, and spas streamlining their booking process",
      features: ["Service booking", "Staff scheduling", "Customer preferences"]
    },
    {
      icon: ChefHat,
      title: "Restaurants",
      description: "Food businesses taking orders and managing table reservations",
      features: ["Table reservations", "Order management", "Menu updates"]
    },
    {
      icon: Store,
      title: "Small Businesses",
      description: "Any business that takes appointments or orders via phone or social media",
      features: ["Custom services", "Flexible scheduling", "Business branding"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perfect for Every Ghanaian Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a doctor in Accra or a barber in Kumasi, our system adapts to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((business, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-none bg-card">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <business.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {business.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {business.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {business.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full font-medium">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            Over 500 businesses already trust our platform
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;