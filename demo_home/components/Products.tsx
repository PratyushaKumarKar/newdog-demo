
import { coffee, conventionalwear, embriodery, hoodies, parkas, polos, promoproducts, silkscreening, tech, tshirts } from '@/public/assets/images';
import Image from 'next/image';
import React from 'react';

const productsTop = [
  {
    name: 'Silk Screening',
    image: silkscreening,
  },
  {
    name: 'Promo Products',
    image: promoproducts,
  },
  {
    name: 'Embroidery',
    image: embriodery,
  },
  {
    name: 'Conventional Wear',
    image: conventionalwear,
  },
];

const productsBottom = [
  {
    name: 'T Shirts',
    image: tshirts,
  },
  {
    name: 'Hoodies',
    image: hoodies,
  },
  {
    name: 'Polos',
    image: polos,
  },
  {
    name: 'Parkas',
    image: parkas,
  },
  {
    name: 'Tech',
    image: tech,
  },
];

const Product: React.FC = () => {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 bg-white">
      {/* Top Text */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700">
          Depending on factors such as artwork, product, and expected finished look, we use a variety of different imprint methods to bring your promotional products to life.
        </p>
      </div>

      {/* Top Row of Products */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {productsTop.map((product, index) => (
          <div key={index} className="relative">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{product.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700">
          Choose from varieties of promotional products
        </p>
      </div>

      {/* Bottom Row of Products */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        {productsBottom.map((product, index) => (
          <div key={index} className="relative">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{product.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center text-center">
       <button className="flex items-center justify-center px-6 py-2 bg-black text-white font-semibold shadow-md hover:bg-gray-800 transition duration-300">
         VIEW MORE
          <div className="ml-2 relative w-5 h-5">
             <Image src={coffee} alt="coffee" layout="fill" objectFit="contain" />
          </div>
       </button>
    </div>
 </div>
  );
};

export default Product;
