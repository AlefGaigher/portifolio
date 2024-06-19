import { Profile } from "./profile";

export const WelcomeSection = () => (
    <div className="grid grid-cols-2 items-center justify-center " id="quemsou">
       <div className="bouncing-balls">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
      <div>
        <span className="text-3xl font-semibold">Seja Bem Vindo!</span>
        <p className="mt-4">
          Sou um desenvolvedor Full-Stack apaixonado por desafios e inovação. Com habilidades sólidas em Ciência da Computação e experiência prática, busco constantemente soluções criativas para problemas complexos. Sou comunicativo, colaborativo e sempre em busca de oportunidades para aprender e crescer. Vamos nos conectar e explorar como posso agregar valor à sua equipe de desenvolvimento!
        </p>
      </div>
      <Profile />
    </div>
  );