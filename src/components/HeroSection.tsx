import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import churchHero from "@/assets/church-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={churchHero}
          alt="Southbay Community Baptist Church Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-church-navy/80 via-church-navy/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Vision Statement Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">Vision Statement</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building a Healthy Church
            <span className="block text-church-blue-light">to Reach Our Community</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us as we grow together in faith, fellowship, and service to God and our neighbors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg shadow-medium"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Live Stream
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white bg-white/20 hover:bg-white hover:text-church-navy px-8 py-3 text-lg backdrop-blur-sm font-semibold"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;