// components/SearchBar.tsx

import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="h-10 w-full max-w-lg mx-auto mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 border border-gray-300 focus:outline-none focus:border-red-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-[#b11414]">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
