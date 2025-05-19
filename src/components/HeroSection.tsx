
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
      {/* Dark background with neon effects */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Neon glow elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-700/20 blur-3xl animate-pulse" 
             style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse"
             style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-pink-600/10 blur-3xl animate-pulse"
             style={{ animationDuration: '8s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            {title}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Button 
          onClick={scrollToAgents}
          size="lg" 
          className="bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-900/20 hover:scale-105 transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        >
          {cta} <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
