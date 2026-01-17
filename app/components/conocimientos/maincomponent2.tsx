import React from 'react';
import KnowledgeCard from './knowledgecard'; 

const MainComponent2 = () => {
  return (
    <div className="w-[970px] h-[653px] flex flex-wrap justify-around p-12">
      <h2 className="w-full text-center font-inter font-bold text-2xl leading-[39.55px] mb-4">My Knowledge</h2>
      <p className="w-full text-center font-inter text-base leading-6 mb-8">In this session I will address the relevant topics with some knowledge acquired in my academic and professional life.</p>
      <KnowledgeCard title="Python Development" description="Machine learning, Deep learning" icon='M4 5.5h3.752a.75.75 0 0 0 0-1.5H5.5A1.5 1.5 0 0 1 7 2.5h2A1.5 1.5 0 0 1 10.5 4v2c0 .69-.56 1.25-1.25 1.25h-2.5A2.75 2.75 0 0 0 4 10v.5A1.5 1.5 0 0 1 2.5 9V7A1.5 1.5 0 0 1 4 5.5m1.5 5V12A1.5 1.5 0 0 0 7 13.5h2a1.5 1.5 0 0 0 1.5-1.5H8.25a.75.75 0 0 1 0-1.5H12A1.5 1.5 0 0 0 13.5 9V7A1.5 1.5 0 0 0 12 5.5V6a2.75 2.75 0 0 1-2.75 2.75h-2.5c-.69 0-1.25.56-1.25 1.25zM7 1a3 3 0 0 0-3 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3a3 3 0 0 0-3-3z' /> {/* Reemplaza "/ruta/a/tu/imagen.jpg" con la ruta a tu imagen */}
      <KnowledgeCard title="Security Analyst" description="Kali Linux, SonarCloud, Nmap" icon='M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 4a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5.13 12A9.7 9.7 0 0 1 12 20.92A9.7 9.7 0 0 1 6.87 17c-.34-.5-.63-1-.87-1.53c0-1.65 2.71-3 6-3s6 1.32 6 3c-.24.53-.53 1.03-.87 1.53' />
      <KnowledgeCard title="Web Development" description="Html, CSS, Js, Tailwind" icon='M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2' />  
      <KnowledgeCard title="Genexus" description="GeneXus Learning, Petterns, SQL-Server" icon='M12.003 21c-.732 .001 -1.465 -.438 -1.678 -1.317a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.886 .215 1.325 .957 1.318 1.694' />     
      
      {/* Más tarjetas de conocimientos */}
    </div>
  );
};

export default MainComponent2;
