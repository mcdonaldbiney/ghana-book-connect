import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business-owners.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Simplify
              <span className="block text-secondary"> Appointments</span>
              for Ghanaian Businesses
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-lg">
              Replace phone calls and social media messages with a professional booking system. 
              Perfect for doctors, salons, barbers, restaurants, and small businesses across Ghana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline-white" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-white/80">Businesses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-white/80">SMS Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">GH₵20</div>
                <div className="text-white/80">Per Month</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Ghanaian business owners using modern appointment booking technology"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-soft">
              <div className="text-sm text-muted-foreground">New Booking</div>
              <div className="font-semibold text-foreground">Dr. Asante - 2:00 PM</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-secondary p-4 rounded-xl shadow-soft">
              <div className="text-sm text-foreground/80">SMS Sent</div>
              <div className="font-semibold text-foreground">Appointment Confirmed ✓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;