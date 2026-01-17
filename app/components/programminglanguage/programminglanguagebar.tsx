import React from 'react';

interface Props {
  language: string;
  percentage: number;
}

const ProgrammingLanguageBar: React.FC<Props> = ({ language, percentage }) => {
  return (
    <div className="flex items-center justify-between w-[220px] h-[24px]opacity-1">
      <span className="w-[34px] h-[24px] top-[797px] left-[40px] opacity-1">{language}</span>
      <div className="relative w-full h-1 bg-gray-400 rounded mx-16">
        <div style={{ width: `${percentage}%` }} className="absolute h-1 bg-green-300"></div>
      </div>
      <span className="w-[31px] h-[24px] top-[797px] left-[229px] opacity-1">{percentage}%</span>
    </div>
  );
};

export default ProgrammingLanguageBar;
