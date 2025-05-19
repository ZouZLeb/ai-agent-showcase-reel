
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  agents: {
    id: string;
    name: string;
  }[];
}

const Navigation = ({ agents }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all agent sections
    agents.forEach((agent) => {
      const element = document.getElementById(agent.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [agents]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg font-bold text-purple-900">AI Agents</span>
          </div>
          <ul className="hidden md:flex space-x-8">
            {agents.map((agent) => (
              <li key={agent.id}>
                <button
                  onClick={() => scrollToSection(agent.id)}
                  className={cn(
                    "text-gray-600 hover:text-purple-700 transition-colors",
                    activeSection === agent.id && "text-purple-700 font-medium"
                  )}
                >
                  {agent.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            {/* Mobile menu - simplified for this demo */}
            <select
              onChange={(e) => scrollToSection(e.target.value)}
              className="bg-transparent border border-gray-300 rounded p-1"
              value={activeSection}
            >
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
