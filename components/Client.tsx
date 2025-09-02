import React from 'react'
import {InfiniteMovingCards} from './ui/InfiniteMovingCards';
import { testimonials } from '@/data';

const Client = () => {
  return (
   <div id="testimonials" className="py-20">
        <h1 className="heading">
            Kind words from {' '} 
            <span className="text-purple">satisfied Clients</span>
        </h1>
        <div className="flex items-center flex-col max-lg:mt-10">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />


        </div>
   </div>
  )
}

export default Client;
