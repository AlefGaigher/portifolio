import { VerticalLine } from "@/components/vertical-line";
import { experience } from "@/config/experience";
import { certifications } from "@/config/certifications";

export const ExperienceSection = () => (
    <div className="text-center" id="experiencias">
      <div className="border-b border-gray-300 mb-8 mt-14"></div>
      <span className="text-3xl">Experiências</span>
      <div className="grid grid-cols-2 gap-7 mt-16">
        <div className="text-3xl">Formação</div>
        <div className="text-3xl">Certificações</div>
        <div className="flex justify-start items-start">
          <VerticalLine experiences={experience} />
        </div>
        <div className="flex justify-start items-start">
          <VerticalLine experiences={certifications} />
        </div>
      </div>
    </div>
  );
