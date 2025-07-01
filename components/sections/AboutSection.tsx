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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="w-80 h-80 mx-auto rounded-full glass overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent" />
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              {techStack.slice(0, 6).map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
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
                <div className="text-3xl font-bold gradient-text">{counters.experience}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">{counters.projects}+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">{counters.clients}+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
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
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
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
                        <skill.icon size={20} className="text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
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
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 transition-colors interactive"
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
              <Button className="group interactive">
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