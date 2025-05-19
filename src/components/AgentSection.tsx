
import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

interface AgentProps {
  id: string;
  name: string;
  image: string;
  description: string;
  capabilities: string[];
  videos: Video[];
}

const AgentSection = ({ id, name, image, description, capabilities, videos }: AgentProps) => {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <section id={id} className="py-20 bg-gray-900 border-b border-gray-800 relative overflow-hidden">
      {/* Neon accent */}
      <div className="absolute top-0 left-1/3 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Agent Profile */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-purple-700/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">{name}</h2>
                <p className="text-lg text-gray-300 mb-6">{description}</p>
                
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Capabilities</h3>
                  <ul className="space-y-2">
                    {capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 shadow-[0_0_5px_rgba(168,85,247,0.7)]"></span>
                        <span className="text-gray-300">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Video Gallery */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all hover:translate-y-[-5px] cursor-pointer group"
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-52 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-purple-900/80 rounded-full p-3 shadow-[0_0_15px_rgba(168,85,247,0.5)] transform group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2 text-blue-300">{video.title}</h3>
                        <p className="text-gray-400">{video.description}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[850px] p-0 bg-black border border-purple-900/50">
                    <div className="aspect-video">
                      <iframe 
                        src={`${video.videoUrl.replace('watch?v=', 'embed/')}?autoplay=1`} 
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
