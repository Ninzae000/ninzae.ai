import React from 'react';
import { Users, Target, Lightbulb, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Ninzae</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of tech enthusiasts dedicated to sharing knowledge, 
            building open-source solutions, and empowering the developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Ninzae, we believe that knowledge should be accessible to everyone. 
              Our mission is to democratize tech education by sharing daily insights, 
              creating comprehensive learning roadmaps, and contributing to open-source projects 
              that benefit the entire developer community.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through our active presence on LinkedIn and GitHub, we've built a thriving 
              community where developers can learn, grow, and collaborate on meaningful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Community First</h4>
              <p className="text-gray-600 text-sm">
                Building a supportive community of learners and contributors.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <Target className="h-8 w-8 text-purple-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Goal Oriented</h4>
              <p className="text-gray-600 text-sm">
                Focused on practical learning and real-world applications.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <Lightbulb className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">
                Embracing cutting-edge technologies and methodologies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <Github className="h-8 w-8 text-orange-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Open Source</h4>
              <p className="text-gray-600 text-sm">
                Contributing to and maintaining open-source projects.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with us on LinkedIn for daily tech insights and explore our GitHub 
            for open-source projects and learning resources.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/ninzae/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Community
            </a>
            <a
              href="https://github.com/Ninzae000"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              GitHub Organization
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;