import { Technology } from "@/components/technology";
import { tecnologias } from '@/config/tecnologias';

export const SkillsSection = () => (
    <div className="text-center">
      <div className="border-b border-gray-300 mb-8 mt-14"></div>
      <span className="text-3xl">Habilidades</span>
      <div className="grid grid-cols-3 gap-7 mt-20">
        {tecnologias.map((tecnologia, index) => (
          <Technology
            key={index}
            icon={tecnologia.icon}
            title={tecnologia.title}
            description={tecnologia.description}
          />
        ))}
      </div>
    </div>
  );