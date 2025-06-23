import React from 'react';
import { Github, BookOpen, Users, Clock } from 'lucide-react';

const Roadmaps = () => {
  const roadmaps = [
    {
      title: "Frontend Development Roadmap",
      description: "Complete guide from HTML/CSS basics to advanced React and modern frontend frameworks.",
      duration: "6-8 months",
      students: "2.1K",
      topics: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Testing"],
      difficulty: "Beginner to Advanced",
      githubUrl: "https://github.com/Ninzae000"
    },
    {
      title: "Backend Development Roadmap", 
      description: "Master server-side development with Node.js, databases, APIs, and cloud deployment.",
      duration: "8-10 months",
      students: "1.8K",
      topics: ["Node.js", "Express", "Databases", "API Design", "Cloud"],
      difficulty: "Intermediate",
      githubUrl: "https://github.com/Ninzae000"
    },
    {
      title: "DevOps Engineering Roadmap",
      description: "Learn infrastructure automation, containerization, CI/CD, and cloud platforms.",
      duration: "10-12 months", 
      students: "1.3K",
      topics: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
      difficulty: "Intermediate to Advanced",
      githubUrl: "https://github.com/Ninzae000"
    },
    {
      title: "Data Science Roadmap",
      description: "From statistics and Python to machine learning and data visualization mastery.",
      duration: "12-15 months",
      students: "1.6K",
      topics: ["Python", "Statistics", "ML", "Data Viz", "Deep Learning"],
      difficulty: "Beginner to Advanced",
      githubUrl: "https://github.com/Ninzae000"
    },
    {
      title: "Mobile Development Roadmap",
      description: "Build native and cross-platform mobile apps with React Native and Flutter.",
      duration: "8-10 months",
      students: "1.1K", 
      topics: ["React Native", "Flutter", "Mobile UI", "App Store", "Testing"],
      difficulty: "Intermediate",
      githubUrl: "https://github.com/Ninzae000"
    },
    {
      title: "Cybersecurity Roadmap",
      description: "Comprehensive path to becoming a cybersecurity professional with hands-on labs.",
      duration: "12-18 months",
      students: "890",
      topics: ["Network Security", "Ethical Hacking", "Compliance", "Incident Response", "Cryptography"],
      difficulty: "Intermediate to Advanced",
      githubUrl: "https://github.com/Ninzae000"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Beginner')) return 'text-green-600 bg-green-100';
    if (difficulty.includes('Advanced')) return 'text-red-600 bg-red-100';
    return 'text-yellow-600 bg-yellow-100';
  };

  return (
    <section id="roadmaps" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Roadmaps</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning paths designed to take you from zero to hero in your chosen tech domain. 
            Each roadmap includes resources, projects, and milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((roadmap, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {roadmap.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(roadmap.difficulty)}`}>
                    {roadmap.difficulty.split(' ')[0]}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {roadmap.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{roadmap.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{roadmap.students} students</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {roadmap.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={roadmap.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Can't Find Your Path?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're constantly creating new roadmaps based on industry trends and community feedback. 
            Suggest a new learning path or request a custom roadmap for your team.
          </p>
          <a
            href="mailto:umar.iqbal.ninzae000@gmail.com?subject=Custom Roadmap Request&body=Hi Ninzae team,%0D%0A%0D%0AI would like to request a custom learning roadmap for:%0D%0A%0D%0A[Please describe your requirements here]%0D%0A%0D%0AThank you!"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Request Custom Roadmap
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmaps;