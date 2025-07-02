'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Creator', 'Designer', 'Developer', 'Innovator', 'Dreamer'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentRoleText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRoleText.length) {
        setCurrentRole(currentRoleText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentRoleText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRoleText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Section-specific Stars */}
      <div className="section-stars">
        {Array.from({ length: 800 }).map((_, i) => (
          <div
            key={i}
            className="section-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Ultra-Slow Gentle Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(253, 184, 19, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          backgroundPosition: `${mousePosition.x / 1000}px ${mousePosition.y / 1000}px`,
        }}
        transition={{ type: 'spring', damping: 100, stiffness: 50 }}
      />

      {/* Ultra-Slow Cosmic Vortex Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="cosmic-vortex"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Ultra-Slow Cosmic Dust Clouds */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="cosmic-dust"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 60}s`,
              animationDuration: `${60 + Math.random() * 30}s`,
            }}
          />
        ))}
      </div>

      {/* Ultra-Slow Floating Planets */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 rounded-full"
            style={{
              background: `radial-gradient(circle, ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32', '#FF4500'][i % 5]}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 25px ${['#FFD700', '#87CEEB', '#FF69B4', '#32CD32', '#FF4500'][i % 5]}`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 40 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Ultra-Slow Energy Waves */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="energy-wave"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Ultra-Slow Constellation Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="constellation-line"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: `${50 + Math.random() * 100}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: '8s',
            }}
          />
        ))}
      </div>

      {/* Ultra-Slow Cosmic Lightning */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="cosmic-lightning"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="cosmic-gradient-text">Alex</span>
            <br />
            <span className="text-white">Johnson</span>
          </motion.h1>
          
          <div className="h-16 flex items-center justify-center lg:justify-start mb-8">
            <motion.p
              className="text-2xl md:text-3xl text-white/80 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="cosmic-gradient-text typewriter">
                {currentRole}
              </span>
            </motion.p>
          </div>

          <motion.p
            className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Crafting exceptional digital experiences through innovative design and cutting-edge development. 
            Passionate about creating beautiful, functional, and user-centered solutions that reach for the stars.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="cosmic-glow-hover px-8 py-6 text-lg interactive bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="px-8 py-6 text-lg interactive border-yellow-500/50 text-white hover:bg-yellow-500/10">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start space-x-6"
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
                className="p-3 rounded-full cosmic-glass hover:cosmic-glow transition-all interactive text-white/80 hover:text-yellow-400"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Picture with Orbit */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-orbit cosmic-float">
            {/* Orbit Rings */}
            <div className="orbit-ring orbit-ring-1">
              <div className="orbit-moon moon-1" />
            </div>
            <div className="orbit-ring orbit-ring-2">
              <div className="orbit-moon moon-2" />
            </div>
            <div className="orbit-ring orbit-ring-3">
              <div className="orbit-moon moon-3" />
            </div>

            {/* Profile Picture - Static but with animated border */}
            <motion.div
              className="profile-picture bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-6xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              AJ
            </motion.div>
          </div>
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
          className="flex flex-col items-center text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Explore the cosmos</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}