import React from "react";

function GradientButton({ children, className = "", ...props }) {
  return (
    <button
      className={`group bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-black px-10 py-4 rounded-lg text-lg font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 shadow-lg shadow-cyan-500/25 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default GradientButton;
