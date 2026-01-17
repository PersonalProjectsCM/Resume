import React from 'react';


const PersonalInfo = () => {
  return (
    <div className="w-[220px] h-[126px] opacity-1 mb-4">
        <h2 className="text-lg font-bold text-center mb-2">Personal Information</h2>
        <div className="w-[220px] h-[25px] top-[381px] left-[40px]opacity-1">
            {/*<p>Age: 25</p>*/}
        </div>
        
        <div className="w-[220px] h-[24px] top-[415px] left-[40px]opacity-1">
            <p>City: Chigorodó (ANT)</p>
        </div>
        
        <div className="w-[220px] h-[24px] top-[449px] left-[40px] opacity-1">
            <p>Phone: 3142429407</p>
        </div>
        
        <div className="w-[220px] h-[24px] top-[483px] left-[40px] opacity-1 whitespace-nowrap">
            <p>Email: cmejia8989@gmail.com</p>
        </div>
    </div>
    
  );
};

export default PersonalInfo;
