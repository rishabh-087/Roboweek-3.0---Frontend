import React from 'react';

const Button = ({ text, textSize = 'text-lg' , iconLink}) => {
  return (
    <button
      className="relative p-1 text-white font-semibold rounded-full 
                 bg-gradient-to-b from-cyan-400/30 to-cyan-400/10
                 hover:from-cyan-400/40 hover:to-cyan-400/20
                 backdrop-blur-lg border border-cyan-400/30
                 transition-all duration-300 shadow-lg shadow-cyan-500/20"
    >
      <div className={`flex items-center gap-2 p-5 bg-black/30 rounded-full backdrop-blur-md ${textSize}`}>
        {text} {iconLink} 
      </div>
    </button>
  );
};

export default Button;
