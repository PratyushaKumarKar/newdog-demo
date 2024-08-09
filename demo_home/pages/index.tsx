import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
    </>
  )
}

export default Home


//============ SSR data fetching starts here ===========

