'use client';

import React from 'react';

interface AnimatedButtonProps {
  text: string;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
}

export function AnimatedButton({
  text,
  primary = true,
  className = '',
  onClick = () => {},
}: AnimatedButtonProps) {
  const baseClasses =
    'flex justify-center gap-2 items-center shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group';
  const primaryClasses =
    'bg-blue-500 hover:bg-blue-700 text-white border-blue-500 before:bg-blue-700';
  const secondaryClasses =
    'bg-white hover:bg-gray-100 text-blue-500 border-blue-500 before:bg-gray-100';

  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
    >
      {text}
      <svg
        className={`w-6 h-6 justify-end transition-transform duration-300 rotate-[40deg] ease-in-out group-hover:rotate-90 rounded-full p-1 
                ${
                  primary
                    ? 'bg-white/20 group-hover:bg-white text-white group-hover:text-blue-500'
                    : 'bg-blue-500/20 group-hover:bg-blue-500 text-blue-500 group-hover:text-white'
                }`}
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-current"
        />
      </svg>
    </button>
  );
}
