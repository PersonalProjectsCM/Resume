'use client'
import React, { useState } from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000); // El mensaje se ocultará después de 5 segundos
  };

  return (
    <>
      <button onClick={handleClick} className="w-[154px] h-[51px] top-[342px] left-[69px] bg-blue-400 rounded-full ml-14 color-gradient shadow">
        {text}
      </button>

      {showMessage && (
        <div className="mt-4 border-l-4 border-green-500 bg-green-100 p-4 text-green-700" role="alert">
          <p className="font-bold">Hi!</p>
          <p>
            Thank you for your interest in hiring me. Please send me an email to my email address and I will get back
            to you as soon as possible (cmejia8989@gmail.com).
          </p>
        </div>
      )}
    </>
  );
};

export default Button;
