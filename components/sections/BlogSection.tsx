'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BlogSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Web Development',
      tags: ['React', 'AI', 'PWA'],
    },
    {
      id: 2,
      title: 'Designing for Accessibility: A Comprehensive Guide',
      excerpt: 'Learn how to create inclusive designs that work for everyone, with practical tips and real-world examples.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Design',
      tags: ['UX', 'Accessibility', 'Design'],
    },
    {
      id: 3,
      title: 'Optimizing React Performance: Advanced Techniques',
      excerpt: 'Deep dive into React optimization techniques that will make your applications faster and more efficient.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Development',
      tags: ['React', 'Performance', 'JavaScript'],
    },
    {
      id: 4,
      title: 'The Art of Micro-Interactions in Modern UI',
      excerpt: 'How subtle animations and interactions can dramatically improve user experience and engagement.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'UI/UX',
      tags: ['Animation', 'UI', 'Framer Motion'],
    },
    {
      id: 5,
      title: 'Building Scalable APIs with Node.js and GraphQL',
      excerpt: 'A comprehensive guide to creating robust, scalable APIs that can grow with your application.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-20',
      readTime: '10 min read',
      category: 'Backend',
      tags: ['Node.js', 'GraphQL', 'API'],
    },
    {
      id: 6,
      title: 'Modern CSS Techniques for Better Layouts',
      excerpt: 'Discover the latest CSS features and techniques for creating beautiful, responsive layouts.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-15',
      readTime: '7 min read',
      category: 'CSS',
      tags: ['CSS', 'Grid', 'Flexbox'],
    },
  ];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Section-specific Stars */}
      <div className="section-stars">
        {Array.from({ length: 350 }).map((_, i) => (
          <div
            key={i}
            className="section-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-36 h-36 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-44 h-44 bg-magenta-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-1/4 w-28 h-28 bg-yellow-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating Planets */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32', '#FF4500'][i % 5]}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 15px ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32', '#FF4500'][i % 5]}`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Energy Waves */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="energy-wave"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Latest <span className="cosmic-gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative group cosmic-glass rounded-3xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 cosmic-card-hover">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <motion.img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-white/60">
                    {blogPosts[0].category}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-white/60 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button className="w-fit interactive bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400">
                  Read Full Article
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Moving Blog Cards */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: hoveredPost ? 0 : [-20, -1000],
            }}
            transition={{
              x: {
                repeat: hoveredPost ? 0 : Infinity,
                repeatType: "reverse",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: 'max-content' }}
          >
            {/* Duplicate the array to create seamless loop */}
            {[...blogPosts.slice(1), ...blogPosts.slice(1)].map((post, index) => (
              <motion.article
                key={`${post.id}-${index}`}
                className="group cosmic-glass rounded-2xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 cosmic-card-hover interactive flex-shrink-0 w-80"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={hoveredPost === post.id ? { scale: 1.1, rotate: 5 } : {}}
                  >
                    <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white">
                      {post.category}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3 text-xs text-white/60">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold mb-2 line-clamp-2 text-white group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 rounded text-xs font-medium text-white/80"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-white/10 rounded text-xs font-medium text-white/80">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <motion.div
                    className="flex items-center text-sm font-medium text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={hoveredPost === post.id ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Read More <ArrowRight size={14} className="ml-1" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* View All Posts Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" variant="outline" className="interactive border-yellow-500/50 text-white hover:bg-yellow-500/10">
            <Tag size={16} className="mr-2" />
            View All Posts
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}