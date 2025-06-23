import React from 'react';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Learning Roadmap",
      description: "Comprehensive guide to mastering artificial intelligence and machine learning concepts.",
      tags: ["AI", "Machine Learning", "Python", "Deep Learning"],
      github: "https://github.com/Ninzae000",
      stars: 142,
      forks: 38,
      language: "Python"
    },
    {
      title: "Web Development Bootcamp",
      description: "Complete full-stack web development curriculum with hands-on projects.",
      tags: ["Web Dev", "React", "Node.js", "MongoDB"],
      github: "https://github.com/Ninzae000",
      stars: 89,
      forks: 22,
      language: "JavaScript"
    },
    {
      title: "Open Source Toolkit",
      description: "Collection of useful tools and utilities for developers and contributors.",
      tags: ["Open Source", "DevTools", "Automation", "CLI"],
      github: "https://github.com/Ninzae000",
      stars: 67,
      forks: 15,
      language: "TypeScript"
    },
    {
      title: "Data Science Pipeline",
      description: "End-to-end data science workflow with best practices and templates.",
      tags: ["Data Science", "Analytics", "Visualization", "Python"],
      github: "https://github.com/Ninzae000",
      stars: 95,
      forks: 28,
      language: "Python"
    },
    {
      title: "DevOps Automation",
      description: "Infrastructure as code templates and CI/CD pipeline configurations.",
      tags: ["DevOps", "Docker", "Kubernetes", "CI/CD"],
      github: "https://github.com/Ninzae000",
      stars: 73,
      forks: 19,
      language: "Shell"
    },
    {
      title: "Mobile App Starter Kit",
      description: "Cross-platform mobile app development templates and best practices.",
      tags: ["Mobile", "React Native", "Flutter", "Cross-Platform"],
      github: "https://github.com/Ninzae000",
      stars: 56,
      forks: 12,
      language: "Dart"
    }
  ];

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-600',
      'Shell': 'bg-green-500',
      'Dart': 'bg-cyan-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our open-source contributions and learning resources that have helped 
            thousands of developers enhance their skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                      <span>{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="h-4 w-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ninzae000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;