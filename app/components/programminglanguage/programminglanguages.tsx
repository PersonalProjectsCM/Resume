import React from 'react';
import ProgrammingLanguageBar from './programminglanguagebar';

const ProgrammingLanguages = () => {
  return (
    <div className="w-[280px] h-[242px] rounded-tl-[30px] opacity-1">
      <h2 className="text-lg font-bold text-center mb-4">Programming Languages</h2>
      <ProgrammingLanguageBar language="Pyhton" percentage={70} />
      <ProgrammingLanguageBar language="CSS" percentage={60} />
      <ProgrammingLanguageBar language="JavaScript" percentage={40} />
      <ProgrammingLanguageBar language="GeneXus" percentage={50} />
      <ProgrammingLanguageBar language="C#" percentage={30} />
    </div>
  );
};

export default ProgrammingLanguages;
