
import { navicon } from '@/public/assets/images'
import React from 'react'
import Image from 'next/image'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white font-inter">
      <div className="container mx-auto flex flex-wrap justify-center items-center py-2 px-6 text-xs">
        <ul className="flex flex-wrap space-x-5 md:space-x-9 lg:space-x-12">
          <li><Image src={navicon} alt="navicon" className="h-3 w-3"/></li>
          <li><a href="#" className="hover:underline">Bags</a></li>
          <li><a href="#" className="hover:underline">Tops</a></li>
          <li><a href="#" className="hover:underline">Headwear</a></li>
          <li><a href="#" className="hover:underline">Outwear</a></li>
          <li><a href="#" className="hover:underline">Tech</a></li>
          <li><a href="#" className="hover:underline">Beverage</a></li>
          <li><a href="#" className="hover:underline">Workwear</a></li>
          <li><a href="#" className="hover:underline">Office</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
