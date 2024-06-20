import { Profile } from "./profile";

import { SocialMediaButtons } from "@/components/social-media";

export const WelcomeSection = () => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 items-center justify-center pt-16 pb-36"
    id="quemsou"
  >
    <div>
      <p className="text-4xl text-blue-600 font-bold">Olá, eu sou o</p>
      <span className="text-8xl font-semibold">Alef Gaigher.</span>
      <p className="mt-4 text-gray-primary text-lg">
        <span className="text-white font-mono">Desenvolvedor Full-Stack.</span> apaixonado por desafios e inovação. Com
        habilidades sólidas em Ciência da Computação e experiência prática,
        busco constantemente soluções criativas para problemas complexos. Sou
        comunicativo, colaborativo e sempre em busca de oportunidades para
        aprender e crescer. Vamos nos conectar e explorar como posso agregar
        valor à sua equipe de desenvolvimento!
      </p>
      
      <SocialMediaButtons/> 
    </div>
    <Profile />
  </div>
);
