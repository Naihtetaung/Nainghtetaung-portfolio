import Image from 'next/image'
import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'
import { RiNextjsLine } from 'react-icons/ri'
import { SiJavascript, SiPostgresql, SiStrapi, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills: React.FC<any>  = () => {
  return (
    <section className='flex flex-col gap-10 justify-start'>
      <span>
        <div className='text-left text-primary text-3xl font-bold'>Skills</div>
        <p className='text-primary font-medium transition-colors'>Keys skills that define my professional identity</p>
      </span>
      <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <RiNextjsLine className="mb-2 w-10 h-10"/>
            <h3 className="text-lg font-semibold">Next.js</h3>
            <p className="text-gray-600">Build dynamic web apps using React.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <FaReact className="mb-2 w-10 h-10"/>
            <h3 className="text-lg font-semibold">React</h3>
            <p className="text-gray-600">JavaScript library for building user interfaces.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <SiStrapi className="mb-2 w-10 h-10"/>
            <h3 className="text-lg font-semibold">Strapi</h3>
            <p className="text-gray-600">Customizable Headless CMS for Node.js.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <FaNodeJs className="mb-2 w-10 h-10"/>
            <h3 className="text-lg font-semibold">Node.js</h3>
            <p className="text-gray-600">JavaScript runtime built on Chrome's V8 engine.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <SiPostgresql className="mb-2 w-10 h-10"/>
          <h3 className="text-lg font-semibold">PostgreSQL</h3>
            <p className="text-gray-600">Open source database.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <SiTypescript className="mb-2 w-10 h-10"/>
          <h3 className="text-lg font-semibold">TypeScript</h3>
            <p className="text-gray-600">A superset of JavaScript that compiles to plain JavaScript.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <SiJavascript className="mb-2 w-10 h-10"/>
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <p className="text-gray-600">High-level, dynamic programming language.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <SiTailwindcss className="mb-2 w-10 h-10"/>
            <h3 className="text-lg font-semibold">Tailwind CSS</h3>
            <p className="text-gray-600">A utility-first CSS framework for rapid UI development.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
          <GrGraphQl className="mb-2 w-10 h-10"/>
            <h3 className="text-lg font-semibold">GraphQL</h3>
            <p className="text-gray-600">A query language for your API.</p>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </section>
  )
}

export default Skills