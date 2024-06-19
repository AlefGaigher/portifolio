import Image from "next/image";
import PerfilImage from '/public/perfil.png';
import { BirthdayProgressBar } from "./birthday-progress-bar";

export const Profile = () => (
  <div className="w-full flex flex-col items-center justify-center py-8 slide">
     
    <div className="relative shadow-lg w-80 rounded-lg bg-white border-8 border-white overflow-hidden card-rotate">
      {/* Header */}
      <div className="bg-indigo-400 w-full p-3 flex justify-between items-center text-white ">
        <span className="text-xl font-bold">Alef Gaigher</span>
        <div className="flex items-center">
          <span className="text-sm font-bold">Nível:</span>
          <div className="flex items-center ml-2">
            <span className="w-6 h-6 bg-indigo-200 text-center rounded-full text-indigo-400 font-bold">30</span>
          </div>
        </div>
      </div>
     
      {/* Image */}
      <div className="bg-black p-4 flex justify-center">
        <div className="relative w-40 h-40 rounded-full border-8 border-white overflow-hidden">
          <Image src={PerfilImage} alt="Alef Gaigher" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* Description */}
      <div className="bg-indigo-400 w-full text-center p-2 text-white font-bold">
        <span>Full-Stack Developer</span>
      </div>
      {/* Details */}
      <div className="bg-black w-full p-4 text-left text-sm ">
        <BirthdayProgressBar />
        <p><strong>Data de Nascimento:</strong> 21 de Outubro de 1993</p>
        <p><strong>Endereço:</strong> Vila Velha - ES</p>
        <p><strong>Nacionalidade:</strong> Brasileiro</p>
        <p><strong>Telefone:</strong> (27) 99800-1322</p>
        <p><strong>E-mail:</strong> alefgaigher@hotmail.com</p>
      </div>
    </div>
  </div>
);
