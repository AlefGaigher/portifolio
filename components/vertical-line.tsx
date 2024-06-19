// components/VerticalLine.tsx
import React from 'react';

interface Experience {
  year: string;
  title: string;
  description: string;
}

interface VerticalLineProps {
  experiences: Experience[];
}

export const VerticalLine: React.FC<VerticalLineProps> = ({ experiences }) => {
  return (
    <div className="relative flex flex-col items-start">
      {/* Linha vertical */}
      <div className="absolute ml-2 w-px bg-white h-full"></div>
      {/* Pontos na linha */}
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center my-4">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="ml-4 text-start">
            <div className="text-white font-bold">{experience.year}</div>
            <div className="text-white text-xl">{experience.title}</div>
            <div className="text-white text-sm">{experience.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
