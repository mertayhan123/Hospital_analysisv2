import { useState } from 'react';

const EnvelopeCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div 
        className="card w-64 bg-base-100 shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        onClick={handleCardClick}
      >
        <div className="card-body flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h2 className="card-title mt-4">Zarf</h2>
          {isOpen && (
            <p className="mt-2 text-center text-blue-500">zarfyan</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnvelopeCard;
