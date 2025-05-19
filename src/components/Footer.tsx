
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-purple-900/30 relative overflow-hidden">
      {/* Neon effect elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-32 rounded-full bg-blue-600/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">AI Agents Demo</h2>
            <p className="text-gray-400 mt-2">Showcasing the future of AI technology</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Contact</h3>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors block">info@ai-agents-demo.com</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors block">+1 (123) 456-7890</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Links</h3>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors block">About Us</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors block">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors block">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} AI Agents Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
