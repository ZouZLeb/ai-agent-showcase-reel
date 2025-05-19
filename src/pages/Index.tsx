
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AgentSection from "@/components/AgentSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import agentsData from "@/data/agents.json";

const Index = () => {
  // Add some animations when the page loads
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <HeroSection 
        title={agentsData.hero.title} 
        subtitle={agentsData.hero.subtitle} 
        cta={agentsData.hero.cta} 
      />

      <div id="agents-section">
        <Navigation 
          agents={agentsData.agents.map(agent => ({ id: agent.id, name: agent.name }))} 
        />
        
        {agentsData.agents.map((agent) => (
          <AgentSection
            key={agent.id}
            id={agent.id}
            name={agent.name}
            image={agent.image}
            description={agent.description}
            capabilities={agent.capabilities}
            videos={agent.videos}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
