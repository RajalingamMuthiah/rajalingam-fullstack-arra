import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Machine Learning in 2024',
      excerpt: 'A comprehensive guide to beginning your journey in machine learning, covering essential concepts, tools, and resources.',
      content: 'Full blog content here...',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['Machine Learning', 'Tutorial', 'Beginners'],
      author: 'Your Name',
    },
    {
      id: 2,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and patterns for creating maintainable and scalable React applications in production.',
      content: 'Full blog content here...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      date: 'March 10, 2024',
      readTime: '12 min read',
      tags: ['React', 'Web Development', 'Best Practices'],
      author: 'Your Name',
    },
    {
      id: 3,
      title: 'Understanding Neural Networks',
      excerpt: 'Deep dive into neural networks, their architecture, and how they learn from data.',
      content: 'Full blog content here...',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
      date: 'March 5, 2024',
      readTime: '10 min read',
      tags: ['AI', 'Deep Learning', 'Neural Networks'],
      author: 'Your Name',
    },
    {
      id: 4,
      title: 'The Future of AI in Healthcare',
      excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare and medical diagnostics.',
      content: 'Full blog content here...',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      date: 'February 28, 2024',
      readTime: '7 min read',
      tags: ['AI', 'Healthcare', 'Innovation'],
      author: 'Your Name',
    },
    {
      id: 5,
      title: 'Optimizing React Performance',
      excerpt: 'Techniques and strategies to improve React application performance and user experience.',
      content: 'Full blog content here...',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      date: 'February 20, 2024',
      readTime: '9 min read',
      tags: ['React', 'Performance', 'Optimization'],
      author: 'Your Name',
    },
    {
      id: 6,
      title: 'Introduction to Computer Vision',
      excerpt: 'Learn the fundamentals of computer vision and how machines perceive visual information.',
      content: 'Full blog content here...',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      date: 'February 15, 2024',
      readTime: '11 min read',
      tags: ['Computer Vision', 'OpenCV', 'Tutorial'],
      author: 'Your Name',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Blog & Articles"
            subtitle="Thoughts, tutorials, and insights on AI, ML, and web development"
          />

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Card glow hover className="overflow-hidden cursor-pointer group">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="relative h-64 lg:h-auto -m-6 lg:m-0 lg:-ml-6 lg:rounded-l-2xl overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>
                
                <div className="py-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-neon-blue transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="primary" icon={ArrowRight}>
                    Read Article
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card glow hover className="h-full cursor-pointer group">
                  <div className="relative h-48 -m-6 mb-4 overflow-hidden rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60" />
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-neon-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
