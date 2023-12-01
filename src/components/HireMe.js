import React from 'react'
import { Web } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-3 md:bottom-auto md:absolute'>
      
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <Web className={"fill-dark animate-spin-slow dark:fill-light"}/>
        <Link href="mailto:kuchthearxnn@gmail.com" className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary
        text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
        font-semibold hover:bg-light hover:text-primary
        hover:border-primaryDark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-primaryDark
                hover:dark:border-primaryDaark md:w-12 md:h-12 md:text-[10%]
        '>
        Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
