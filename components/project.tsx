import { ReactNode } from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaEye } from "react-icons/fa";


interface Tag {
  name: string;
  icon?: ReactNode;
  color: string;
}

interface ProjectContainerProps {
  banner: ReactNode;
  title: string;
  description: string;
  linkProject: string;
  linkRepo: string;
  tags?: Tag[];
}

export function Project({ banner, title, description, linkProject, linkRepo, tags = [] }: ProjectContainerProps) {
  return (
    <div className="bg-zinc-900  rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full ">
      <div className="relative">
        <div className="w-full h-auto rounded-t-lg overflow-hidden">
          {banner}
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-2xl font-bold  text-start ">{title}</h2>
        {tags.length > 0 && (
          <div className="flex flex-wrap mt-2 space-x-2">
            {tags.map((tag, index) => (
          <span key={index} className={`flex items-center px-2 py-1 text-gray-800 text-xs font-medium rounded-full mb-2 ${tag.color}`}>
                {tag.icon && <span className="mr-1">{tag.icon}</span>}
                {tag.name}
              </span>
            ))}
          </div>
        )}
        <hr aria-orientation="horizontal" className="chakra-divider css-svjswr"></hr>
        <p className="mt-2 mb-4 text-start flex-grow text-gray-primary">{description}</p>     
      </div>
      <div className="flex justify-end space-x-2 pb-6 pr-6 bg-zinc-90 mt-auto">
        <Link href={linkProject} target="_blank">
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-zinc-800 border border-transparent rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-gray">
            <FaEye className="mr-2"/>Ver Projeto
          </span>
        </Link>
        <Link href={linkRepo} target="_blank">
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-zinc-800 border border-transparent rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-gray">
            <SiGithub className="mr-2" /> Repositório
          </span>
        </Link>
      </div>
    </div>
  );
}
