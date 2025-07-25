import Image from 'next/image'
import React from 'react'
import CardGrid from '../components/card'

const Experience: React.FC = () => {
  return (
    <section>
        <span>
            <div className='text-left text-primary text-3xl font-bold'>Experience</div>
            <p className='text-primary font-medium transition-colors'>Highlighting career journey and impactful projects.</p>
        </span>
        <CardGrid/>
    </section>
  )
}

export default Experience