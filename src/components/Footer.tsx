
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">AI Agents Demo</h2>
            <p className="text-gray-400 mt-2">Showcasing the future of AI technology</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <a href="#" className="text-gray-400 hover:text-white block">info@ai-agents-demo.com</a>
              <a href="#" className="text-gray-400 hover:text-white block">+1 (123) 456-7890</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <a href="#" className="text-gray-400 hover:text-white block">About Us</a>
              <a href="#" className="text-gray-400 hover:text-white block">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white block">Terms of Service</a>
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
