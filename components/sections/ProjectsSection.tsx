'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      tech: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with advanced features',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'AI Dashboard',
      description: 'Analytics dashboard with AI-powered insights and real-time data visualization',
      image: 'https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UI/UX Design',
      tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Modern social platform with real-time messaging and content sharing',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      tech: ['Vue.js', 'Firebase', 'Socket.io', 'PWA'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Cross-platform fitness app with workout tracking and social features',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      tech: ['Flutter', 'Firebase', 'Maps API', 'Health Kit'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Design System',
      description: 'Comprehensive design system and component library for enterprise products',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UI/UX Design',
      tech: ['Figma', 'Storybook', 'React', 'Styled Components'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Section-specific Stars */}
      <div className="section-stars">
        {Array.from({ length: 400 }).map((_, i) => (
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
        <div className="absolute top-10 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Planets */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32', '#FF4500', '#9370DB'][i % 6]}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 18px ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32', '#FF4500', '#9370DB'][i % 6]}`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              rotate: [0, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Cosmic Vortex */}
        <div className="cosmic-vortex" style={{ top: '20%', right: '10%' }} />
        <div className="cosmic-vortex" style={{ bottom: '30%', left: '15%', animationDelay: '3s' }} />
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
            Featured <span className="cosmic-gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and creative implementations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all interactive ${
                filter === category
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white cosmic-glow'
                  : 'cosmic-glass text-white/80 hover:text-yellow-400 border border-yellow-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={16} className="inline mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cosmic-glass rounded-2xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/50 cosmic-card-hover interactive"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors interactive text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors interactive text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-yellow-400 font-medium">
                      {project.category}
                    </span>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded text-xs font-medium text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button size="sm" className="flex-1 interactive bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400">
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 interactive border-yellow-500/50 text-white hover:bg-yellow-500/10">
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" variant="outline" className="interactive border-yellow-500/50 text-white hover:bg-yellow-500/10">
            View All Projects
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