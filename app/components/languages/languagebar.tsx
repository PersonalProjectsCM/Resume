import React from 'react';

interface Props {
  language: string;
  texto: string;
  percentage: number;
}

const LanguageBar: React.FC<Props> = ({ language, texto, percentage }) => {
  return (
    <div className="flex items-center justify-between w-[250px] h-[24px] bopacity-1">
      <span>{language}</span>
      
      <div className="relative w-full h-2 bg-gray-400 rounded mx-16">
        <div style={{ width: `${percentage}%` }} className="absolute h-2 bg-green-300"></div>
      </div>

      <span>{texto}</span>
    </div>
  );
};

export default LanguageBar;
