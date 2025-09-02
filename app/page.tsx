import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import RecentProjects from "@/components/RecentProjects"
import { navItems } from '@/data'
import Client from '@/components/Client'

const page = () => {
  return (
    <main className='relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}  />
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
      </div>
    </main>
  )
}

export default page
