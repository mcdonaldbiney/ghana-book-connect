import { Calendar, MessageSquare, Clock, Users } from "lucide-react";
import featuresImage from "@/assets/features-illustration.jpg";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Easy online booking that syncs with your existing calendar. No more double bookings or missed appointments."
    },
    {
      icon: MessageSquare,
      title: "SMS Integration",
      description: "Automatic SMS confirmations and reminders in English and local languages. Keep customers informed."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Customers can book anytime, even when you're closed. Capture more business around the clock."
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Track customer history, preferences, and contact details. Build stronger relationships with your clients."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for Ghanaian businesses. Simple to use, powerful features, 
            and designed to work with how you already operate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={featuresImage} 
                alt="SMS notifications and calendar appointments for businesses"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;