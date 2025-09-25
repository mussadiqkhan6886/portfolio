export const dynamic = "force-static"; 

import Grid from '@/components/Grid'
import {Hero} from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import RecentProjects from "@/components/RecentProjects"
import { navItems } from '@/data'
import Client from '@/components/Client'
import Experience from '@/components/Experience'
import Approach from '@/components/Approach'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'

const page = () => {
  return (
    <main className='relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-8xl w-full">
        <BackgroundRippleEffect />
        <FloatingNav navItems={navItems}  />
        <Hero /> 
        <Grid />
        <RecentProjects />
        <Skills />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default page
