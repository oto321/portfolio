// Photo.jsx
import React from "react";

function Photo() {
  // This is your SVG component, nested inside PhotoWrapper
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='size-64'>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function PhotoWrapper() { // This is the component you intend to render in Home.jsx
  return (
    <div className="bg-amber-300">
      <Photo /> {/* Photo is rendered within PhotoWrapper */}
    </div>
  );
}

export default PhotoWrapper; // <<< This is the key: export PhotoWrapper as default
