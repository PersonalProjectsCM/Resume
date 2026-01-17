import React from 'react';
import Image from 'next/image'; // Importa Image de 'next/image'
import Button from './button';

const MainComponent = () => {
  return (
    <div className="flex justify-between w-[970px] h-[425.09px] opacity-1 bg-black">
      <div>
        <h1 className="w-[500px] h-[118px] top-[93px] left-[69px] text-left font-inter font-bold text-4xl leading-[59.33px] ml-14">
          <span className="text-bold">I'm, Cristian Julio</span> <span className="text-blue-300">Systems Engineer</span>
                    
        </h1>

       <p className=" w-[424px] h-[88px] top-[229px] left-[69px] text-left font-inter text-base leading-10 ml-10 font-bold"> Data Analysis -Cybersecurity -Development</p>
          
        
        <p className=" w-[424px] h-[88px] top-[229px] left-[69px] text-left font-inter text-base leading-6 ml-14">
        I build clear, secure, and functional technological solutions. I focus on understanding the problem before writing code.
        </p>
        <Button text="HIRE ME" />
      </div>
      <div>
        <Image src="/perfil_4.png" alt="Imagen del desarrollador" width={225.72} height={359.09} className="top-[8px] left-[601px] opacity-1 object-cover" />
      </div>
    </div>
  );
};

export default MainComponent;
