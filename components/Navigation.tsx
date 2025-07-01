'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, BookOpen, Image, Mail } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Gallery', href: '#gallery', icon: Image },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          scrollY > 50 ? 'glass backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              AJ
            </motion.div>

            {/* Desktop Menu */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors interactive"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom Center */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
      >
        <div className="glass backdrop-blur-md rounded-full px-6 py-3 border border-border/50">
          <div className="flex items-center space-x-1">
            {/* Mobile Menu Items */}
            {!isOpen ? (
              <>
                {navItems.slice(0, 4).map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors interactive"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={18} />
                  </motion.a>
                ))}
                <motion.button
                  className="p-3 rounded-full hover:bg-white/10 transition-colors interactive"
                  onClick={() => setIsOpen(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Menu size={18} />
                </motion.button>
              </>
            ) : (
              <>
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors interactive"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <item.icon size={18} />
                  </motion.a>
                ))}
                <motion.button
                  className="p-3 rounded-full hover:bg-white/10 transition-colors interactive"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={18} />
                </motion.button>
              </>
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
}