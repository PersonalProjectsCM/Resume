import React from 'react';
import EducationCard from './educationcard';

const MainComponent3 = () => {
  
  const educationArray = [
    {university: "UDEA", student: "Cristian Julio", graduationDate: "Sep 2025 - Dec 2025", degree: "GEneXus 18 Junior Analyst", description: "Course completed virtually using GenuXus Learning."},
    {university: "COURSERA", student: "Cristian Julio", graduationDate: "Nov 2025", degree: "Generative AI: Prompt Engineering Basics", description: "An online course, authorized by IBM and offered through Coursera."},
    {university: "COURSERA", student: "Cristian Julio", graduationDate: "Nov 2025", degree: "Cómo resolver problemas y tomar decisiones con eficiencia", description: "An online course authorized by the University of California, Irvine and offered through Coursera."},
    {university: "UDEA", student: "Cristian Julio", graduationDate: "Oct 2019 - Jun 2025", degree: "Systems Engineering", description: "Systems engineer, graduate of the University of Antioquia (UDEA)."},
    {university: "CISCO", student: "Cristian Julio", graduationDate: "Aug 2023", degree: "Cyber Threat Management", description: "Course carried out virtually from the Cisco platform."},
    {university: "CISCO", student: "Cristian Julio", graduationDate: "Jul 2023", degree: "Introduction To Cybersecurity", description: "Course carried out virtually from the Cisco platform."},

    {university: "SENA", student: "Cristian Julio", graduationDate: "Jan 2014 - Dec 2016", degree: "Systems Technology", description: "I carried out this technique at the National Learning Service (SENA), which allowed me to enter my working life in a more stable way."},
    {university: "Politénico Colombiano JIC", student: "Cristian Julio", graduationDate: "May 2009 - Dec 2012", degree: "Technologist in Data Systematizatio", description: "I carried out this technology in person at the Jaime Isaza Cadavid Colombian Polytechnic, Apartadó Headquarters."},
    // Agrega más objetos de educación aquí
  ];

  return (
    <div className="w-[970px] h-[815px]  flex flex-col items-center justify-center mt-20">
      <h2 className="font-inter font-bold text-2xl leading-[39.55px] mb-4">Educaction</h2>
      <p className="font-inter text-base leading-6 mb-8">In this session some studies carried out by me will be shown: from techniques, technologies, courses, to
        undergraduate studies, etc.</p>
      {educationArray.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </div>
  );
};

export default MainComponent3;
