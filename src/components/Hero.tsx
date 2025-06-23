import React from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ninzae
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Empowering Tech Enthusiasts with Daily Knowledge
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Join our growing community of 400+ followers and discover daily tech insights, 
            open-source projects, and comprehensive learning roadmaps.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://www.linkedin.com/company/ninzae/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              Follow Us on LinkedIn
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="https://github.com/Ninzae000"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              Explore Our GitHub
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">400+</div>
              <div className="text-gray-600">LinkedIn Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1,000+</div>
              <div className="text-gray-600">Monthly Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Daily</div>
              <div className="text-gray-600">Tech Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;