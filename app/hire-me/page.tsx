import React from 'react'
import Image from 'next/image'
import { HireMeInfinite } from '@/components/ui/HireMeInfinite'
import {ThreeDMarqueeDemo} from "@/components/Designs"
import Contact from '@/components/Email'

const page = () => {
  return (
    <>
    <section className='px-5 lg:px-20 my-5 mx-auto w-full flex flex-col justify-center relative overflow-hidden'>
        <div className='w-full flex justify-center items-center h-[300px] md:h-[600px] lg:h-[730px] overflow-hidden '>
            <Image src={"/profileImage (5).jpg"} alt="ProfileImage" className='object-cover lg:h-[630px] h-[500px] -z-10' width={1400} height={630}/>
        </div>
        <div className='absolute -bottom-10 left-0 flex justify-center items-center'>
            <HireMeInfinite items={"HIRE ME"} direction='right' pauseOnHover={false} speed={"fast"} />
        </div>
    </section>
        <ThreeDMarqueeDemo />
        <Contact />
      </>
  )
}

export default page
