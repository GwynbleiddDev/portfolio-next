import { useState, useEffect } from 'react'

export type Star = {
  id: number;
  x: number;
  y: number;
}

export const useStars = (starCount: number = 15, heightRatio: number = 0.6) => {
  const [stars, setStars] = useState<Star[]>([]);

  const createStars = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight * heightRatio : 1080 * heightRatio;
    const newStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      });
    }

    setStars(newStars);
  };

  useEffect(() => {
    createStars();
    const updateStars = () => createStars();
    window.addEventListener('resize', updateStars);
    return () => window.removeEventListener('resize', updateStars);
  }, []);

  return stars;
};