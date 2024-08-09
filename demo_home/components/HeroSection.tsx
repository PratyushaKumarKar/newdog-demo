
import { caraousel, dogicon ,caraousel2} from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'
import Product from './Products'
import ReviewHero from './ReviewHero'

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full bg-gray-100">
      {/* <div className="flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-12 lg:px-16"> */}
        {/* Text section */}
        {/* <div className="text-center md:text-left md:w-1/2 lg:w-2/5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Calgary's Best Promotional <br /> Products Supplier{' '}
            <Image
              src={dogicon}
              alt="dogicon"
              className="inline-block h-8 w-8 md:h-10 md:w-10"
            />
          </h1>
        </div> */}

        {/* Image section */}
        {/* <div className="mt-8 md:mt-0 md:w-1/2 lg:w-3/5 flex justify-center">
          <Image
            src={caraousel2}
            alt="Promotional Products"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div> */}
        <Image
            src={caraousel2}
            alt="Promotional Products"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
      {/* </div> */}

      <Product/>
      <ReviewHero/>
    </div>
  )
}

export default HeroSection
