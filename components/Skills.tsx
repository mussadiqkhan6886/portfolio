import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { icons } from '@/data'

const Skills = () => {
    

  return (
   <div id="skills" className="py-10">
        <h1 className="heading">
            Skills {' '} 
            <span className="dark:text-purple text-gray-600">I Have Experienced</span>
        </h1>
        <div className="flex items-center mt-10 flex-col max-lg:mt-10">
            <InfiniteMovingCards items={icons} direction="left" speed="slow" />
        </div>
      </div>
  )
}

export default Skills
