import React from 'react';
import Image from 'next/image'; // Import the Image component

function Header() {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <div className="flex items-center space-x-2 ">
        <Image 
          className="h-full w-20" 
          src="/assets/pizza.png" // Use path relative to public directory
          alt="Recipe AI Icon" 
          width={80} // Adjust width as needed
          height={80} // Adjust height as needed
        />
        <h1 className="text-yellow-700 text-5xl font-bold">Recipe AI Bot</h1>
      </div>
    </div>
  );
}

export default Header;


