"use client"
import React, { useEffect, useState } from 'react';

interface Experience {
  year: string;
  title: string;
  description: string;
}

interface VerticalLineProps {
  experiences: Experience[];
}

export const VerticalLine: React.FC<VerticalLineProps> = ({ experiences }) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          if (!visibleIndexes.includes(index)) {
            setVisibleIndexes(prev => [...prev, index]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Dispara quando 10% do elemento estiver visível
    });

   
    document.querySelectorAll('.vertical-item').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [visibleIndexes]);

  return (
    <div className="relative flex flex-col items-start">
      {/* Linha vertical */}
      <div className="absolute ml-2 w-px bg-white h-full"></div>
      {/* Pontos na linha */}
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`flex items-center my-4 vertical-item ${visibleIndexes.includes(index) ? 'animate-scale-in' : ''}`}
          data-index={index}
        >
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="ml-4 text-start">
            <div className="text-xs md:text-sm font-bold">{experience.year}</div>
            <div className="text-sm md:text-xl">{experience.title}</div>
            <div className="text-xs md:text-sm">{experience.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
