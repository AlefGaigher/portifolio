import Image from "next/image";
import Adaline from '/public/adaline.png';
import Carteira from '/public/carteira.png';
import GitHub from '/public/github.png';
import Login from '/public/logincadastro.png';
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
        banner: <Image src={GitHub} alt="repositorio github" className="w-full"/> , 
        title: 'Conexão com API externa Github', 
        description: 'Um projeto para testar e aprimorar conhecimentos sobre conexões com APIs externas e obtenção de dados usando axios. Neste projeto específico, o objetivo é adicionar repositórios do GitHub a uma lista de repositórios através de uma interface interativa.', 
        linkProject: "https://api-repositorio-github.vercel.app/", 
        linkRepo: "https://github.com/AlefGaigher/api-repositorio-github",
        tags:[
        {
            name: "React.js",
            icon: <SiReact/>,
            color: "React"
        }, 
        {
            name: "JavaScript",
            icon: <SiJavascript/>,
            color: "JS"
        },
        ]  
    },
    { 
        banner: <Image src={Login} alt="login/cadastro" className="w-full"/>, 
        title: 'Login/Cadastro - Next Auth', 
        description: 'Uma aplicação de login e cadastro usando os conceitos da biblioteca de autenticação do next (Next Auth), que gera mais segurança para autenticação de contas', 
        linkProject: "https://auth-next-rho-one.vercel.app/", 
        linkRepo: "https://github.com/AlefGaigher/auth-next",
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
  ];