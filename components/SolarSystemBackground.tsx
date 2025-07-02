'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function SolarSystemBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const starArray = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setStars(starArray);

    // Generate shooting stars
    const shootingStarArray = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
    }));
    setShootingStars(shootingStarArray);
  }, []);

  return (
    <div className="solar-system-bg">
      {/* Stars */}
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
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="shooting-star"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 50}%`,
            animationDelay: `${shootingStar.delay}s`,
          }}
        />
      ))}

      {/* Planets */}
      <motion.div
        className="planet sun"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
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

      {/* Nebula Effects */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      {/* Cosmic Particles */}
      <div className="cosmic-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="cosmic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}