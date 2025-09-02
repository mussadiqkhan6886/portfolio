import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
     <div id="experience" className="py-20">
        <h1 className="heading">
            My {' '} 
            <span className="text-purple">Work Experience</span>
        </h1>
        <div className=" w-full my-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
            {/* {workExperience.map((card) => (

            ))} */}
        </div>
       </div>
  )
}

export default Experience
