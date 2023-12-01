import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-primaryDark dark:border-primaryDark
    sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserves.</span>
            <div className='flex items-center lg:py-2'>
           Build With <span className='text-primary dark:text-light text-2xl px-1 '>&#9825;</span> 
           by&nbsp;<Link href="https://devdreaming.com" className='underline
           underline-offset-2 text-primary dark:text-primaryDark
           'target={'_blank'}>KuchThearin</Link>
            </div>
            <Link href="https://devdreaming.com" className='underline
           underline-offset-2' target={'_blank'}>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
