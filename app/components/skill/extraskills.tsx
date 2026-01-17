import React from 'react';
import SkillBar from './skillbar';

const ExtraSkills = () => {
  return (
    <div className="w-[196px] h-[148px] rounded-tl-[30px] whitespace-nowrap ">
      <h2 className="text-lg font-bold text-center mb-4">Extra Skills</h2>
      <SkillBar skill="Adaptability"  icon='M34 19L24 29L14 19' /> {/* Reemplaza "/ruta/a/tu/imagen.jpg" con la ruta a tu imagen */}
      <SkillBar skill="Knowledge of security"  icon='M34 19L24 29L14 19'/>
      <SkillBar skill="Analytical capabilities"  icon='M34 19L24 29L14 19' />
      <SkillBar skill="Testing and debugging"  icon='M34 19L24 29L14 19' />
      {/* Más habilidades */}
    </div>
  );
};

export default ExtraSkills;
