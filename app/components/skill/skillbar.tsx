import React from 'react';
import Image from 'next/image'; // Importa Image de 'next/image'
import Badge from '../atoms/badge';

interface Props {
  skill: string;  
  icon: string;
}

const SkillBar: React.FC<Props> = ({ skill, icon }) => {
  return (
    <div className="flex items-center justify-between w-[186px] h-[24px]">
      <Badge icon = {icon}/>
      <span className="w-[156px] h-[24px] left-[70px]">{skill}</span>
    </div>
  );
};

export default SkillBar;
