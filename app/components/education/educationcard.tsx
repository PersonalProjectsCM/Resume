import React from 'react';

interface EducationProps {
  university: string;
  student: string;
  graduationDate: string;
  degree: string;
  description: string;
}

const EducationCard: React.FC<EducationProps> = ({ university, student, graduationDate, degree, description }) => {
  return (
    <div className="w-[970px] h-[632px]  border border-[#F0F0F6] flex bg-black">
      <div className="flex-1 p-2">
        <h3 className="font-inter font-medium text-lg leading-[22.25px] mb-2">{university}</h3>
        <p className="font-inter text-base leading-6 mb-2">{student}</p>
        <p className="font-inter leading-6 rounded bg-green-300 text-sm text-black font-bold">{graduationDate}</p>
      </div>
      <div className="flex-1 p-2">
        <h3 className="font-inter font-medium text-lg leading-[22.25px] mb-2">{degree}</h3>
        <p className="font-inter text-base leading-6">{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
