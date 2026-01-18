import React, { useState, useEffect } from 'react';
import { fuji, bar, cherry } from '../assets/images';

const backgrounds = [fuji, bar, cherry];

export default function Background() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 12000); // Change every 12 seconds (35s / 3 images ≈ 12s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container">
      {backgrounds.map((bg, idx) => (
        <div
          key={idx}
          className={`background-slide ${idx === currentBg ? 'active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
    </div>
  );
}
