import { Technology } from "@/components/technology";
import { tecnologias } from '@/config/tecnologias';

export const SkillsSection = () => (
    <div className="text-center mb-8 mt-56" id="habilidades">
      <span className="text-6xl font-bold">Habilidades</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-28">
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