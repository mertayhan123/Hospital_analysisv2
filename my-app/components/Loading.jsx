// components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <svg
        className="w-24 h-24 text-lacivert-200 animate-beat"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 29.6"
      >
        <path
          fill="currentColor"
          d="M23.6,0c-2.6,0-5.1,1.3-6.6,3.4C15.5,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,9.4,16,19.2,16,19.2s16-9.8,16-19.2
          C32,4.7,27.3,0,21.6,0z"
        />
      </svg>
    </div>
  );
};

export default Loading;
