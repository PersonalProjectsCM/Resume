import React from 'react';
import Badge from '../atoms/badge2';

interface Props {
  title: string;
  description: string;
  icon: string; // Añade una prop para la ruta de la imagen
}

const KnowledgeCard: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="w-[310px] h-[225px]  bg-black flex flex-col items-center justify-center whitespace-nowrap">
      <Badge icon = {icon}/>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className=" text-sm ">{description}</p>
    </div>
  );
};

export default KnowledgeCard;
