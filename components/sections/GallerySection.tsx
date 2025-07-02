'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GallerySection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Architecture',
      category: 'Design',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary architectural design with clean lines',
    },
    {
      id: 2,
      title: 'Abstract Art',
      category: 'Digital Art',
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Digital abstract composition with vibrant colors',
    },
    {
      id: 3,
      title: 'Urban Photography',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Street photography capturing urban life',
    },
    {
      id: 4,
      title: 'UI Mockup',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mobile app interface design mockup',
    },
    {
      id: 5,
      title: 'Digital Illustration',
      category: 'Digital Art',
      image: 'https://images.pexels.com/photos/1266442/pexels-photo-1266442.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fantasy digital illustration with rich details',
    },
    {
      id: 6,
      title: 'Landscape',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mountain landscape at golden hour',
    },
    {
      id: 7,
      title: 'Brand Identity',
      category: 'Design',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity design system',
    },
    {
      id: 8,
      title: 'Portrait Study',
      category: 'Digital Art',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Digital portrait with dramatic lighting',
    },
    {
      id: 9,
      title: 'Architecture Detail',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/161154/pexels-photo-161154.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Architectural detail with geometric patterns',
    },
  ];

  const categories = ['All', 'Design', 'Digital Art', 'Photography'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-48 h-48 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-36 h-36 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
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
            Creative <span className="cosmic-gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A collection of my creative work spanning design, digital art, and photography
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
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid mb-6 group cursor-pointer interactive"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-2xl cosmic-glass border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-center text-white p-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Eye size={24} className="mx-auto mb-2" />
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.category}</p>
                    </motion.div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors interactive"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>

                {/* Navigation Buttons */}
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors interactive"
                  onClick={prevImage}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors interactive"
                  onClick={nextImage}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight size={24} />
                </motion.button>

                {/* Selected Image */}
                {(() => {
                  const selectedItem = filteredItems.find(item => item.id === selectedImage);
                  return selectedItem ? (
                    <div className="flex flex-col items-center max-h-full">
                      <motion.img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="max-w-full max-h-[70vh] object-contain rounded-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="mt-6 text-center text-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                        <p className="text-white/60 mb-2">{selectedItem.category}</p>
                        <p className="text-sm opacity-80">{selectedItem.description}</p>
                      </motion.div>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" variant="outline" className="interactive border-yellow-500/50 text-white hover:bg-yellow-500/10">
            View Full Portfolio
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