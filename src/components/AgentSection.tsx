
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
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Agent Profile */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-purple-200">
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{name}</h2>
                <p className="text-lg text-gray-700 mb-6">{description}</p>
                
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Capabilities</h3>
                  <ul className="space-y-2">
                    {capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">{capability}</span>
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
                      className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] cursor-pointer group"
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-52 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-purple-700" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{video.title}</h3>
                        <p className="text-gray-600">{video.description}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[850px] p-0 bg-black">
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
