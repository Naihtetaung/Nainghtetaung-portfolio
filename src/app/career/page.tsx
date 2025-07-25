import React from 'react'
import { TimelineItem } from '../components/timeline'
import { careerData } from '../data/careerData'

const Career = () => {
  return (
    <div className='flex flex-col gap-10 justify-start'>
        <span>
            <div className='text-left text-primary text-3xl font-bold'>Career Timeline</div>
            <p className='text-primary font-medium transition-colors'>Professional journey and experience timeline.</p>
        </span>
        <div className="relative max-w-8xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        <div className="space-y-12">
            {careerData.map((item, index) => (
            <TimelineItem
              key={index} 
              {...item} 
              isLast={index === careerData.length - 1}
            />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Career