import React from 'react'
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import {FaLocationArrow} from "react-icons/fa"
import { FaFile } from 'react-icons/fa';

const Hero = React.memo(() => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh]w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className='flex justify-center relative my-10 z-10'>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className='uppercase tracking-widest text-xs text-center  dark:text-blue-100 text-black-100 max-w-80'>Dynamic Web Magic with Next.js</h2>

          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless User Experiences' />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Mussadiq, a Next.js Developer based in Pakistan. 
          </p>

          <div className='flex gap-2 flex-col md:flex-row'>
          <a href="#projects">
            <MagicButton title="Show my work" icon={<FaLocationArrow />} position='right' />
          </a>
          <a href="/resume.pdf"
          download="resume.pdf">
            <MagicButton title="Download CV" icon={<FaFile />} position='right' />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Hero
 