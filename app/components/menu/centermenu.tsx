import React from 'react';
import MainComponent from '../mainmenu/maincomponent';
import MainComponent2 from '../conocimientos/maincomponent2';
import MainComponent3 from '../education/maincomponent';
import MainComponent4 from '../project/maincomponent';
import Footer from '../footer/footer';

const CenterContent = () => {
  return (
    <div className="ml-[305px] w-[988px] min-h-screen px-2.25 gap-10.5 opacity-1 bg-black border border-black">
      <MainComponent/>
      <MainComponent2/>
      <MainComponent3/>
      <MainComponent4/>
      <Footer/>
      {/* Contenido central */}
    </div>
  );
};

export default CenterContent;
