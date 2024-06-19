import { ReactNode } from "react";
import Link from "next/link";

interface ProjectContainerProps {
  banner: ReactNode;
  title: string;
  description: string;
  linkProject: string;
  linkRepo: string;
}

export function Project({ banner, title, description, linkProject, linkRepo }: ProjectContainerProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full opacity-60 hover:opacity-100">
      <div className="relative p-5">
        {banner}
      </div>
      <div className="flex flex-col flex-grow pl-6 pr-6">
        <h2 className="text-2xl font-bold text-gray-800 text-start">{title}</h2>
        <p className="text-gray-600 mt-2 mb-4 text-start flex-grow">{description}</p>
      </div>
      <div className="flex justify-end space-x-2 p-6 bg-white mt-auto">
        <Link href={linkProject} target="_blank">
          <span className="px-4 py-2 text-sm font-medium leading-5 text-black transition-colors duration-150 border border-black rounded-lg hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue">
            Ver Projeto
          </span>
        </Link>
        <Link href={linkRepo} target="_blank">
          <span className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-800 border border-transparent rounded-lg hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray">
            Repositório
          </span>
        </Link>
      </div>
    </div>
  );
}
