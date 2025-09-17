import { ArrowRight, Smartphone, Calendar, Bell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Set Up Your Profile",
      description: "Create your business profile in minutes. Add your services, hours, and contact information.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Share Your Booking Link",
      description: "Get a simple link to share with customers via WhatsApp, Facebook, or SMS.",
      color: "text-secondary"
    },
    {
      icon: Bell,
      title: "Automatic Notifications",
      description: "Both you and your customers receive SMS confirmations and reminders automatically.",
      color: "text-success"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Setup, Immediate Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start accepting online bookings in less than 10 minutes. No technical knowledge required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${step.color} bg-current/10`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-24 -right-2 items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-2xl">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to modernize your business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join hundreds of Ghanaian businesses who have already simplified their booking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-hero-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-strong transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;