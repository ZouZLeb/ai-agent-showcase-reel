
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
}

const HeroSection = ({ title, subtitle, cta }: HeroProps) => {
  const scrollToAgents = () => {
    const firstAgent = document.getElementById("agents-section");
    if (firstAgent) {
      firstAgent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 opacity-90">
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full bg-white/10 backdrop-blur-3xl",
                "animate-pulse"
              )}
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 8 + 4}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Button 
          onClick={scrollToAgents}
          size="lg" 
          className="bg-white text-purple-900 hover:bg-white/90 hover:scale-105 transition-all"
        >
          {cta} <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
