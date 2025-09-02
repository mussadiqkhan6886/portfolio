import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const page = () => {
  return (
    <main className='relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome />}
        ]}  />
        <Hero />
        <Grid />
      </div>
    </main>
  )
}

export default page
