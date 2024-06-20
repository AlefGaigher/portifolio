import Image from "next/image";
import Adaline from '/public/adaline.png';
import NoImage from '/public/noimage.png';
import { SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiHtml5, SiBootstrap, SiCsharp, SiDotnet } from "react-icons/si";

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
            color: "bg-blue-300"
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs/>,
            color: "bg-blue-600"
        },
        {
            name: "TypeScript",
            icon: <SiTypescript/>,
            color: "bg-blue-600"
        }, 
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss/>,
            color: "bg-blue-600"
        },    
        ] 
    },
    { 
        banner: <Image src={NoImage} alt="carteira online" className="w-full"/> , 
        title: 'Em construção', 
        description: 'Em construção', 
        linkProject: "", 
        linkRepo: "",
        tags:[{
            name: "React.js",
            icon: <SiReact/>,
            color: "bg-blue-300"
        },{
            name: "TypeScript",
            icon: <SiTypescript/>,
            color: "bg-blue-600"
        },   
        ]  
    },
    { 
        banner: <Image src={NoImage} alt="reserva de ingresso" className="w-full"/> , 
        title: 'Em construção', 
        description: 'Em construção', 
        linkProject: "", 
        linkRepo: "",
        tags:[{
            name: "React.js",
            icon: <SiReact/>,
            color: "bg-blue-300"
        },{
            name: "TypeScript",
            icon: <SiTypescript/>,
            color: "bg-blue-600"
        },   
        ]  
    },
    { 
        banner: <Image src={NoImage} alt="login/cadastro" className="w-full"/>, 
        title: 'Em construção', 
        description: 'Em construção', 
        linkProject: "", 
        linkRepo: "",
        tags:[{
            name: "React.js",
            icon: <SiReact/>,
            color: "bg-blue-300"
        },{
            name: "TypeScript",
            icon: <SiTypescript/>,
            color: "bg-blue-600"
        },   
        ]  
    },
  ];