// components/ReviewHero.tsx

import React from 'react';
import Image from 'next/image';
import { fullstar , halfstar , review } from '@/public/assets/images';

const reviews = [
  {
    name: 'Ashley Fox',
    location: 'Edmonton, AB',
    review:
      'Ryan and his team at newdog provide exceptional customer service and great products! We were able to outfit our organization in no time because he steers the customer in the right direction with options that suit your budget. Our timeline was tight and Ryan and his team went above and beyond to make sure the order was ready. I would highly recommend getting in touch with Ryan and having him educate them about the right products for your team or organization.',
    image: '/path/to/ashleyfox.jpg',
  },
  {
    name: 'Mason',
    location: 'Edmonton, AB',
    review:
      'Ordered some custom tote bags and they turned out great. Ryan made the whole process very easy, would definitely recommend.',
    image: '/path/to/mason.jpg',
  },
  {
    name: 'Tammy W',
    location: 'Google Review',
    review:
      'Omg these guys are awesome. Great pricing, products, easy to work with and they just pulled off a last minute award winning. First time I looked at their Google reviews, no wonder!',
    image: '/path/to/tammy.jpg',
  },
  {
    name: 'B Mac',
    location: 'Google Review',
    review:
      'The folks at Newdog are always helpful. The products are great quality and the scheduling is amazing. They have done all of our gear and I couldn’t be happier.',
    image: '/path/to/bmac.jpg',
  },
  {
    name: 'Ashley Varga',
    location: 'Google Review',
    review:
      'We purchased apparel for our company through New Dog. Ryan was super helpful with everything and the process was super easy and prices were very reasonable. We received our apparel much quicker than I had anticipated. I really liked how you could bring your print or the clothing digitally to life before clicking submit! A great quality print and the vinyl used seems to be great as well. We will definitely be a returning customer for any custom apparel needs!',
    image: '/path/to/ashleyvarga.jpg',
  },
];

const ReviewHero: React.FC = () => {
  return (
    <div className="text-center mb-8">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700">
           At newdog, behind every  honest review  is an experience that matters!
        </p>
        <Image src={review} alt="review" className='h-50 w-full'/>
    </div>
  );
};

export default ReviewHero;
