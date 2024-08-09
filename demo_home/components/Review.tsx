
import { canada, fullstar, halfstar, trustpilot } from '@/public/assets/images';
import Image from 'next/image';
import React from 'react';

const Review: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-[#eeeeee] py-2 px-4 sm:space-x-4 md:space-x-6 lg:space-x-10 text-xs text-gray-700">
      <div className="flex items-center space-x-2 px-4">
        <Image src={canada} alt="Canada Flag" className="h-2 w-2" />
        <div className="font-small">EN</div>
      </div>
      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
        <span className="font-medium">Excellent</span>
        <div className="flex items-center">
          <Image src={fullstar} alt="Star Rating" className="h-4" />
          <Image src={fullstar} alt="Star Rating" className="h-4" />
          <Image src={fullstar} alt="Star Rating" className="h-4" />
          <Image src={fullstar} alt="Star Rating" className="h-4" />
          <Image src={halfstar} alt="Star Rating" className="h-4" />
        </div>
        <span>4.6 out of 5 based on 1,803 reviews</span>
        <img src={trustpilot} alt="Trustpilot Logo" className="h-4" />
      </div>
    </div>
  );
};

export default Review;
