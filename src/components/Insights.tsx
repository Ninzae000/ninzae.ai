import React from 'react';
import { Calendar, ArrowRight, TrendingUp, Users } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      title: "The Rise of AI-Powered Development Tools",
      excerpt: "Exploring how AI is transforming the way developers write, test, and deploy code in 2025.",
      date: "Jan 15, 2025",
      category: "AI & Development",
      readTime: "5 min read",
      engagement: "234 likes"
    },
    {
      title: "Micro-Frontends: Architecture for Scale",
      excerpt: "Breaking down monolithic frontends into manageable, scalable micro-frontend architectures.",
      date: "Jan 12, 2025", 
      category: "Architecture",
      readTime: "8 min read",
      engagement: "189 likes"
    },
    {
      title: "WebAssembly in Production: Real-World Cases",
      excerpt: "How major companies are leveraging WebAssembly for performance-critical web applications.",
      date: "Jan 10, 2025",
      category: "Performance",
      readTime: "6 min read",
      engagement: "156 likes"
    },
    {
      title: "Sustainable Software Development Practices",
      excerpt: "Building environmentally conscious applications and reducing the carbon footprint of software.",
      date: "Jan 8, 2025",
      category: "Sustainability",
      readTime: "7 min read",
      engagement: "203 likes"
    },
    {
      title: "The Future of Cloud-Native Development",
      excerpt: "Trends and technologies shaping the next generation of cloud-native applications.",
      date: "Jan 5, 2025",
      category: "Cloud Computing",
      readTime: "9 min read",
      engagement: "278 likes"
    },
    {
      title: "Building Accessible Web Apps by Default",
      excerpt: "Practical strategies for making accessibility a core part of your development workflow.",
      date: "Jan 3, 2025",
      category: "Accessibility",
      readTime: "6 min read",
      engagement: "145 likes"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Development': 'bg-purple-100 text-purple-800',
      'Architecture': 'bg-blue-100 text-blue-800',
      'Performance': 'bg-green-100 text-green-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800',
      'Cloud Computing': 'bg-sky-100 text-sky-800',
      'Accessibility': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const handleInsightClick = () => {
    window.open('https://www.linkedin.com/company/ninzae/?viewAsMember=true', '_blank');
  };

  return (
    <section id="insights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our daily tech insights, industry analysis, 
            and practical development tips shared across our platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <article
              key={index}
              onClick={handleInsightClick}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(insight.category)}`}>
                    {insight.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {insight.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span>{insight.readTime}</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>{insight.engagement}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Daily Tech Updates</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get fresh insights, tutorials, and industry news delivered to your LinkedIn feed. 
              Join our community of tech enthusiasts and never miss an update.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Daily Posts</h4>
              <p className="text-sm text-gray-600">Fresh content every single day</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Community</h4>
              <p className="text-sm text-gray-600">400+ engaged followers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Impact</h4>
              <p className="text-sm text-gray-600">1,000+ monthly impressions</p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://www.linkedin.com/company/ninzae/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Follow on LinkedIn
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;