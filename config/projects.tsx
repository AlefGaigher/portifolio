import Image from "next/image";
import Adaline from '/public/adaline.png';
import Carteira from '/public/carteira.png';
import NoImage from '/public/noimage.png';
import { SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiHtml5, SiBootstrap, SiCsharp, SiDotnet, SiFirebase, SiSass   } from "react-icons/si";

export const projects = [
    { 
        banner: <Image src={Adaline} alt="adaline" className="w-full"/> , 
        title: 'Landing Page Adaline', 
        description: 'Um projeto responsivo, desenvolvido para a empresa Adaline, usando as tecnologias Next.js, Tailwind CSS, React.js, priorizando uma boa perfomance no pagespeed da google', 
        linkProject: "https://adaline.vercel.app/", 
        linkRepo: "https://github.com/AlefGaigher/adaline",
        tags:[{
            name: "React.js",
            icon: <SiReact/>,
            color: "React"
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs/>,
            color: "Next"
        },
        {
            name: "TypeScript",
            icon: <SiTypescript/>,
            color: "TS"
        }, 
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss/>,
            color: "Tail"
        },    
        ] 
    },
    { 
        banner: <Image src={Carteira} alt="carteira online" className="w-full"/> , 
        title: 'Carteira Online', 
        description: 'Um projeto financeiro, para alocação de rendas, para praticar todo conhecimento de conexão a banco orientado a docs, nesse projeto coloquei em prática também os conceitos de hooks, slices', 
        linkProject: "https://carteira-online.vercel.app/", 
        linkRepo: "https://github.com/AlefGaigher/carteira-online",
        tags:[{
            name: "React.js",
            icon: <SiReact/>,
            color: "React"
        },
        {
            name: "JavaScript",
            icon: <SiJavascript/>,
            color: "JS"
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs/>,
            color: "Next"
        },
        {
            name: "Firebase",
            icon: <SiFirebase />,
            color: "Fire"
        },
        {
            name: "Scss",
            icon: <SiSass />,
            color: "Sass"
        },    
        ]  
    },
    { 
        banner: <Image src={NoImage} alt="reserva de ingresso" className="w-full"/> , 
        title: 'Em construção', 
        description: 'Em construção', 
        linkProject: "", 
        linkRepo: "",
        tags:[ ]  
    },
    { 
        banner: <Image src={NoImage} alt="login/cadastro" className="w-full"/>, 
        title: 'Em construção', 
        description: 'Em construção', 
        linkProject: "", 
        linkRepo: "",
        tags:[]  
    },
  ];