import React from 'react';

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="text-4xl md:text-7xl font-bold text-center mb-16 font-sargento">
      {text}
    </h1>
  );
};

export default Heading;
