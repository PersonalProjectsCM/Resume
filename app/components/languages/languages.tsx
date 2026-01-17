import React from 'react';
import LanguageBar from './languagebar';

const Languages = () => {
  return (
    <div className="w-[280px] h-[153px] rounded-tl-[30px] opacity-1">
      <h2 className="text-lg font-bold text-center mb-4">Languages</h2>
      <LanguageBar language="Spanish" texto="80%" percentage={80} />
      <LanguageBar language="English" texto="40%" percentage={40} />
      <LanguageBar language="Italy" texto="10%" percentage={10} />
    </div>
  );
};

export default Languages;
