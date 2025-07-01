'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number } | null>(null);
  const fullText = 'Creative Developer & UI/UX Designer';

  useEffect(() => {
    // Set window dimensions on client side
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const createParticles = () => {
    if (!windowDimensions) return [];
    
    return Array.from({ length: 50 }, (_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{
          x: Math.random() * windowDimensions.width,
          y: windowDimensions.height + 100,
          opacity: 0.6,
        }}
        animate={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: Math.random() * 3 + 3,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
        style={{
          left: Math.random() * 100 + '%',
        }}
      />
    ));
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background - only render when window dimensions are available */}
      {windowDimensions && (
        <div className="particles">{createParticles()}</div>
      )}

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />

      {/* Morphing Blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 morphing-blob opacity-20"
        style={{
          background: 'linear-gradient(45deg, #00d4ff, #ff00ff)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: mousePosition.x / 20 - 200,
          y: mousePosition.y / 20 - 200,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Alex</span>
            <br />
            <span className="text-white">Johnson</span>
          </motion.h1>
          
          <div className="h-12 flex items-center justify-center">
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {typedText}
              <motion.span
                className="inline-block w-0.5 h-6 bg-primary ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Crafting exceptional digital experiences through innovative design and cutting-edge development. 
          Passionate about creating beautiful, functional, and user-centered solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="magnetic-btn glow-hover px-8 py-6 text-lg interactive">
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="magnetic-btn px-8 py-6 text-lg interactive">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          {[
            { Icon: Github, href: '#' },
            { Icon: Linkedin, href: '#' },
            { Icon: Mail, href: '#' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="p-3 rounded-full glass hover:glow transition-all interactive"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="flex flex-col items-center text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}