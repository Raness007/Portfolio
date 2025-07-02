'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function SolarSystemBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    // Generate millions of random stars
    const starArray = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
    }));
    setStars(starArray);

    // Generate more shooting stars
    const shootingStarArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 20,
    }));
    setShootingStars(shootingStarArray);
  }, []);

  return (
    <div className="solar-system-bg">
      {/* Enhanced Stars Field */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="shooting-star"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            animationDelay: `${shootingStar.delay}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Enhanced Planets with Glow */}
      <motion.div
        className="planet sun"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="planet mercury" />
      <div className="planet venus" />
      <div className="planet earth" />
      <div className="planet mars" />
      <div className="planet jupiter" />
      <div className="planet saturn" />

      {/* Enhanced Moons */}
      <div className="moon moon-1" />
      <div className="moon moon-2" />
      <div className="moon moon-3" />
      <div className="moon moon-4" />
      <div className="moon moon-5" />

      {/* Enhanced Nebula Effects */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <div className="nebula nebula-4" />

      {/* Enhanced Cosmic Particles */}
      <div className="cosmic-particles">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="cosmic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}