
import Image from 'next/image';
import { logo , dogicon ,coffee ,profile, cart } from '@/public/assets/images/index.js';
import React from 'react'
import SearchBar from './SearchBar';
import Review from './Review';


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="bg-black text-white py-1 text-center text-xs">
        NEWDOG AD | NEWDOG AD | NEWDOG AD | NEWDOG AD | NEWDOG AD | NEWDOG AD | NEWDOG AD | NEWDOG AD
      </div>
      <Review/>
      <div className="container mx-auto flex items-center space-x-4 justify-between py-4 px-15 sm:px-8 lg:px-15">
        <div className="flex items-center justify-center space-x-10 w-full">
          <Image src={logo} alt="newdoglogo" className="h-18 w-32" />
          <span className='w-full'>
             <div className="flex items-center justify-center space-x-4">
             <Image src={dogicon} alt="dogicon" className="h-4 w-4" />
             <Image src={coffee} alt="coffee" className="h-4 w-4" />
             </div>
            <SearchBar />
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Image src={profile} alt="profile" className="h-12 w-12 px-1 py-1" />
          <div className="relative">
            <Image src={cart} alt="cart" className="h-8 w-11 text-red-600" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


{/* <div className="flex flex-wrap items-center space-x-4 mt-4 md:mt-0">
      <span className="hidden md:block">NEW DOG AD</span>
        <div className="flex items-center space-x-2">
            <Image src="/star.svg" alt="Star" className="h-4 w-4" />
            <span className="text-sm md:text-base">4.9 out of 5 based on 1,943 reviews</span>
        </div>
        <button className="bg-red-600 text-white py-1 px-3 rounded">Trustpilot</button>
    </div> */}