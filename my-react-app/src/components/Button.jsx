import React from 'react';

const Button = ({ text, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105"
    >
      
      {text}
    </button>
  );
};

export default Button;