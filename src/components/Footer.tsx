import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ninzae
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering tech enthusiasts with daily knowledge, open-source contributions, 
              and comprehensive learning roadmaps. Join our growing community of developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ninzae000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ninzae/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:umar.iqbal.ninzae000@gmail.com"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#roadmaps" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Roadmaps
                </a>
              </li>
              <li>
                <a href="#insights" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Ninzae000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ninzae/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Daily Content
                </a>
              </li>
              <li>
                <a href="#roadmaps" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Collaboration
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p className="flex items-center gap-1">
                © {currentYear} Ninzae. Made with <Heart className="h-4 w-4 text-red-500" /> for the developer community.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>400+ LinkedIn Followers</span>
              <span>•</span>
              <span>1,000+ Monthly Impressions</span>
              <span>•</span>
              <span>Daily Tech Content</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;