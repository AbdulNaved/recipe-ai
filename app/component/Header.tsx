import React from 'react';

function Header() {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <div className="flex items-center space-x-2 ">
        <img 
          className="h-full w-20 " 
          src="assets/pizza.png" // Use path relative to public directory
          alt="Recipe AI Icon" 
        />
        <h1 className="text-yellow-700 text-5xl font-bold">Recipe AI Bot</h1>
      </div>
      {/* Uncomment and customize this if needed
      <p className="mt-2 text-gray-500 text-center">
        Your personal assistant for all your recipe needs!
      </p>
      */}
    </div>
  );
}

export default Header;
