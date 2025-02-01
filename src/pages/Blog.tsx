import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Public-Private Partnerships in Infrastructure",
    excerpt: "Exploring innovative approaches to infrastructure development through strategic partnerships.",
    content: "In an era of increasing infrastructure demands and constrained public resources, public-private partnerships (P3s) have emerged as a crucial tool for delivering essential projects...",
    author: "Ty Cratic",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    category: "Infrastructure"
  },
  {
    id: 2,
    title: "Navigating Policy Changes in Energy Markets",
    excerpt: "Understanding the impact of recent policy shifts on energy sector development.",
    content: "The energy sector stands at a crossroads as new policies reshape market dynamics and investment opportunities...",
    author: "Sarah Chen",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
    category: "Energy Policy"
  },
  {
    id: 3,
    title: "Strategic Planning in an Era of Uncertainty",
    excerpt: "How organizations can build resilient strategies in today's dynamic environment.",
    content: "In today's rapidly evolving business and policy landscape, traditional approaches to strategic planning must adapt...",
    author: "Michael Rodriguez",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    category: "Strategy"
  }
];

export default function Blog() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const nextPost = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentPostIndex((prev) => (prev + 1) % blogPosts.length);
      setFadeIn(true);
    }, 300);
  };

  const previousPost = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentPostIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
      setFadeIn(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextPost, 10000); // Auto-rotate every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const currentPost = blogPosts[currentPostIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Insights & Perspectives</h1>

        {/* Featured Article Carousel */}
        <div className="mb-16 relative">
          <div className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[400px]">
                <img
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-2">
                    <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                      {currentPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{currentPost.title}</h2>
                  <p className="text-lg mb-4">{currentPost.excerpt}</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{currentPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{currentPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={previousPost}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextPost}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setFadeIn(false);
                  setTimeout(() => {
                    setCurrentPostIndex(index);
                    setFadeIn(true);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPostIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Recent Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-blue-600">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}