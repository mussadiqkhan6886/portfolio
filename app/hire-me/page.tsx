export const dynamic = "force-static"

import React from 'react'
import Image from 'next/image'
import { HireMeInfinite } from '@/components/ui/HireMeInfinite'
import {ThreeDMarqueeDemo} from "@/components/Designs"
import Contact from '@/components/Email'
import MagicButton from '@/components/ui/MagicButton'
import { FaArrowDown } from 'react-icons/fa'
import Link from 'next/link'
import { Metadata } from 'next'


export const  generateMetadata = () : Metadata => {
  return {
    title: "Hire Me",
    description: "Hire mussadiq for frontend web development, fullstack web development and for your Project" ,
    applicationName: "Personal portfolio",
    authors: [{url: "", name: "Mussadiq khan"}],
    keywords: ["Portfolio", "Modern Portfolio", "Web developer", "UI/UX"]
  }
} 


const page = () => {

  return (
    <>
    <section className='px-5 max-w-7xl lg:px-20 my-5 mx-auto w-full flex flex-col justify-center relative overflow-hidden'>
        <div className='w-full flex justify-center items-center h-[300px] md:h-[600px] lg:h-full overflow-hidden '>
            <Image priority={true} src={"/profileImage (5).jpg"} alt="ProfileImage" className='object-cover lg:h-[630px] h-[500px] -z-10' width={1400} height={630}/>
            <Link href={"#contact"} className="absolute top-0 right-21">
              <MagicButton title='Hire me' icon={<FaArrowDown />} position='right' />
            </Link>
        </div>
        <div className='absolute max-w-7xl -bottom-10 left-0 flex justify-center items-center'>
            <HireMeInfinite items={"HIRE ME"} direction='right' pauseOnHover={false} speed={"fast"} />
        </div>
    </section>
    <section className="max-w-[1400px] mx-auto">
        <h1 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[90px] font-bold text-center'>I Don’t Just Build Websites, I Shape Digital Journeys.</h1>
        <ThreeDMarqueeDemo />
        <Contact />
      </section>
      </>
  )
}

export default page
