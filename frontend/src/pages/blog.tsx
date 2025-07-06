import React from 'react';
import { ArrowRight } from 'lucide-react';
import blog1 from '../assets/photos/blog1.png';
import blog2 from '../assets/photos/blog2.png';
import blog3 from '../assets/photos/blog3.png';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  gradient: string;
}

const BlogInsights: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Summer Edition: Events, Pride and Growth!',
      date: 'Jun 12, 2025',
      category: 'General',
      image: blog1,
      gradient: 'from-gray-900 to-gray-600'
    },
    {
      id: '2',
      title: 'May Newsletter - Get ready for an event packed summer!',
      date: 'May 5 2025',
      category: 'Classic',
      image: blog2,
      gradient: 'from-slate-900 to-slate-700'
    },
    {
      id: '3',
      title: 'From Pixel to Code, We\'ve Got You!',
      date: 'Sept 10 2024',
      category: 'Event',
      image: blog3,
      gradient: 'from-amber-100 to-stone-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 mb-5 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Latest Insights.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Dive into our blog for quick design tips, tech insights, and fresh inspiration. Curated by organizers, made for curious minds.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 text-lg font-medium">
            <ArrowRight className="w-5 h-5 mr-2" />
            View articles
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                {/* Background Image */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`}></div>
                
                {/* Arrow overlay */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white group-hover:bg-red-600 transition-colors duration-200">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use for Free Button */}
        <div className="fixed bottom-6 right-6">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2 shadow-lg">
            <span className="text-sm font-medium">📥 Use for Free</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogInsights;