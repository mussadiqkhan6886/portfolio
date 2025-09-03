import React from 'react'
import { testimonials } from '@/data';
import { AnimatedTestimonials } from './ui/Testimonials';

const Client = () => {
  return (
   <div id="testimonials" className="py-20">
        <h1 className="heading">
            Kind words from {' '} 
            <span className="dark:text-purple text-gray-600">satisfied Clients</span>
        </h1>
        <div className="flex items-center flex-col max-lg:mt-10">
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
   </div>
  )
}

export default Client;
