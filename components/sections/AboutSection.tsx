'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [counters, setCounters] = useState({ experience: 0, projects: 0, clients: 0 });

  const skills = [
    { name: 'React/Next.js', level: 95, icon: Code },
    { name: 'UI/UX Design', level: 90, icon: Palette },
    { name: 'Mobile Dev', level: 85, icon: Smartphone },
    { name: 'Performance', level: 92, icon: Zap },
  ];

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Figma',
    'Tailwind CSS', 'Framer Motion', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker'
  ];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCounters(prev => ({
            experience: prev.experience < 5 ? prev.experience + 1 : 5,
            projects: prev.projects < 150 ? prev.projects + 5 : 150,
            clients: prev.clients < 50 ? prev.clients + 2 : 50,
          }));
        }, 50);

        setTimeout(() => clearInterval(interval), 2000);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Section-specific Stars */}
      <div className="section-stars">
        {Array.from({ length: 200 }).map((_, i) => (
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

      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating Planets */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32'][i % 4]}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 15px ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32'][i % 4]}`,
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
            About <span className="cosmic-gradient-text">Me</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            I'm a passionate developer and designer who loves creating digital experiences 
            that make a difference. With a keen eye for detail and a love for clean code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto rounded-full cosmic-glass overflow-hidden cosmic-float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500" />
                </div>
              </motion.div>
              
              {/* Floating Tech Stack */}
              {techStack.slice(0, 6).map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute cosmic-glass px-3 py-1 rounded-full text-sm font-medium text-white/80"
                  style={{
                    top: `${20 + Math.sin(index) * 60}%`,
                    left: `${20 + Math.cos(index) * 60}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <div className="text-3xl font-bold cosmic-gradient-text">{counters.experience}+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold cosmic-gradient-text">{counters.projects}+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold cosmic-gradient-text">{counters.clients}+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon size={20} className="text-yellow-400" />
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 cosmic-glass rounded-full text-sm font-medium border border-yellow-500/30 hover:border-yellow-500/50 transition-colors interactive text-white/80 hover:text-yellow-400"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button className="group interactive bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400">
                Download My Resume
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}