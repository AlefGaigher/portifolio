import { VerticalLine } from "@/components/vertical-line";
import { experience } from "@/config/experience";
import { certifications } from "@/config/certifications";

export const ExperienceSection = () => (
    <div className="text-center mb-8 mt-56" id="experiencias">
        <span className="text-6xl font-bold">Experiências</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-28">
          <div>
            <div className="text-3xl">Formação</div>
            <div className="flex justify-center md:justify-start items-start">
                <VerticalLine experiences={experience} />
            </div>
          </div>
          <div>
            <div className="text-3xl">Certificações</div>
            <div className="flex justify-center md:justify-start items-start">
                <VerticalLine experiences={certifications} />
            </div>
          </div>
        </div>
    </div>
);
