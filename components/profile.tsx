import Image from "next/image";
import PerfilImage from '/public/perfil.png';
import { BirthdayProgressBar } from "./birthday-progress-bar";

export const Profile = () => (
  <div className="w-full flex flex-col items-center justify-center slide">
     
    <div className="relative shadow-lg w-80 rounded-lg  border-8 border-gray-300 overflow-hidden card-rotate">
      {/* Header */}
      <div className="bg-blue-600 w-full p-3 flex justify-between items-center ">
        <span className="text-xl font-bold">Meu Card</span>
        <div className="flex items-center">
          <span className="text-sm font-bold">Nível:</span>
          <div className="flex items-center ml-2">
            <span className="w-6 h-6 bg-blue-200 text-center rounded-full text-blue-600 font-bold">30</span>
          </div>
        </div>
      </div>
     
      {/* Image */}
      <div className=" p-4 flex justify-center">
        <div className="relative w-40 h-40 rounded-full border-8 border-gray-300 overflow-hidden">
          <Image src={PerfilImage} alt="Alef Gaigher" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* Description */}
      <div className="bg-blue-600 w-full text-center p-2 font-bold">
        <span>#OpenToWork</span>
      </div>
      {/* Details */}
      <div className=" w-full p-4 text-left text-sm ">
        <BirthdayProgressBar />
        <p><strong>Data de Nascimento:</strong> 21/10/1993</p>
        <p><strong>Endereço:</strong> Vila Velha - ES</p>
        <p><strong>Nacionalidade:</strong> Brasileiro</p>
        <p><strong>Telefone:</strong> (27) 99800-1322</p>
        <p><strong>E-mail:</strong> alefgaigher@hotmail.com</p>
      </div>
    </div>
  </div>
);
