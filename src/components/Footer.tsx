import { FaTwitter, FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";

export default function Footer() {
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MB</span>
              </div>
              <span className="text-xl font-bold text-gray-900">My Blog</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              A personal blog about web development, programming, and technology. 
              Sharing knowledge and experiences in the ever-evolving world of Technology.
            </p>
              <div className="flex space-x-4">
      {/* Twitter */}
      <a
        href="https://twitter.com/blessedbc11"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
      >
        <span className="sr-only">Twitter</span>
        <FaTwitter className="w-6 h-6" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/blessedbc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-black transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
      >
        <span className="sr-only">GitHub</span>
        <FaGithub className="w-6 h-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ikenna-nwaka-bb2a27328"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-700 transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
      >
        <span className="sr-only">LinkedIn</span>
        <FaLinkedin className="w-6 h-6" />
      </a>

      {/* Reddit */}
      <a
        href="https://www.reddit.com/user/No_Weekend5948"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-orange-600 transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
      >
        <span className="sr-only">Reddit</span>
        <FaReddit className="w-6 h-6" />
      </a>
    </div>
          </div>          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Programming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
               <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                 
               </a>
             </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2025 My Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 