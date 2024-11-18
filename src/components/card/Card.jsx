import React from 'react';
import { SiNike } from "react-icons/si";
import Bg from "../../assets/bg.png";
import Tenis from "../../assets/tenis.png";

const Card = () => {
  return (
    <div className="w-[80%] md:w-[70%] lg:w-[70%] h-[65vh] bg-white shadow-lg rounded-md">
      <div className="w-full h-full">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
          {/* container 1 */}
          <div className="w-full h-full text-black p-4 relative">
            <div>
              <h3 className="text-[.9rem] md:text-lg lg:text-xl font-semibold">
                Desafio Front-end
              </h3>
            </div>
            <div className="w-full h-full flex flex-col gap-5 p-4 lg:p-0 items-center justify-center group">
              <div className="flex flex-col gap-3 lg:gap-5">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  Lançamento
                </h1>
                <p className="text-3xl lg:text-4xl font-bold mt-[-15px] group-hover:animaMove"> {/* por ser uma classe padrão de CSS3, após utilizar hover:animateMove não era possível aplicar os efeitos */}
                  Nike Air
                </p>
                <p className="text-[.9rem] lg:text-lg text-neutral-700 font-medium group-hover:animate-pisca">
                  O Tênis do futuro
                </p>
                <p className="text-[.9rem] lg:text-lg text-neutral-700 font-medium">
                  O futuro a um passo do seu alcance
                </p>
                <button className="py-2 lg:py-3 px-6 bg-[#F5CB18] text-slate-800 font-medium shadow-md rounded-md w-[180px] flex items-center
                justify-between border-2 border-[#F5CB18] hover:bg-white duration-150 ease-linear hover:text-[#F5CB18] my-4 lg:my-0">
                  Visualizar
                  <SiNike size={30} />
                </button>
              </div>
            </div>
          </div>
          {/* container 2 */}
          <div 
            style={{ backgroundImage: `url(${Bg})`}}
            className="object-cover bg-cover bg-center bg-no-repeat w-full h-full flex justify-center items-center rounded-r-md"
          >
            <img 
            src={Tenis}
            alt="New Nike Air" 
            title="New Nike Air" 
            className="object-cover hover:rotate-[10deg] hover:scale-[1.18] duration-150 w-[400px] lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;