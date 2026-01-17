import React from 'react';
import { FaEnvelope, FaPhone} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-200 py-6 px-4">
      <div className="max-w-[970px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Derechos */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {year} All Rights Reserved</p>
          <p className="text-sm">By Cristian Julio</p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaEnvelope /> cmejia8989@gmail.com
          </p>
          <p className="flex items-center gap-2 hover:text-green-400 transition">
            <FaPhone /> +57 314 242 9407
          </p>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;