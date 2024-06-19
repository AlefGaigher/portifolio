import Image from "next/image";
import Adaline from '/public/adaline.png';
import NoImage from '/public/noimage.png';

export const projects = [
    { 
        banner: <Image src={Adaline} alt="adaline" className="w-full"/> , 
        title: 'Landing Page Adaline', 
        description: 'Um projeto responsivo, desenvolvido para a empresa Adaline, usando as tecnologias Next.js, Tailwind CSS, React.js, priorizando uma boa perfomance no pagespeed da google', 
        linkProject: "https://adaline.vercel.app/", 
        linkRepo: "https://github.com/AlefGaigher/adaline" 
    },
    { 
        banner: <Image src={NoImage} alt="carteira online" className="w-full"/> , 
        title: 'Carteira Online', 
        description: 'Sistemas, aplicativos, integrados ao Arduino, BeagleBone, Raspberry Pi, PLC e muito mais', 
        linkProject: "", 
        linkRepo: ""  
    },
    { 
        banner: <Image src={NoImage} alt="reserva de ingresso" className="w-full"/> , 
        title: 'Compra de Ingresso', description: 'Implantação e criação de soluções em Business Intelligence [BI]', 
        linkProject: "", 
        linkRepo: ""  
    },
    { 
        banner: <Image src={NoImage} alt="login/cadastro" className="w-full"/>, 
        title: 'Login/Cadastro', 
        description: 'Desenvolvimento de aplicativos nas plataformas: Android, IOS e Windows', 
        linkProject: "", 
        linkRepo: ""  
    },
  ];