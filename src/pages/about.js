import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/photo1.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});

useEffect(() => {
  if(isInView){
    motionValue.set(value);
}
}, [isInView, value, motionValue])

useEffect(() => {
   springValue.on("change", (latest) => {
       if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);
       }
   })
  }, [springValue, value])


  return <span ref={ref}></span>
}




const about = () => {
  return (
    <>
    <Head>
        <title>KUCHTHEARIN | About Page</title>
        <meta name="description" content="any description"/>
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16 '>
        <AnimatedText text="About Me!" clasName='mb-16 text-primary dark:text-primaryDark lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='text-gray-950 grid w-full grid-cols-8 gap-16 text-xl justify-items-center sm:gap-8'>
             <div className='col-span-3 flex flex-col dark:text-light xl:col-span-4 md:order-2
             md:col-span-8'>  
             <h2 className='mb-4 text-2xl font-bold uppercase text-primary dark:text-primaryDark'>ព័ត៌មានផ្ទាល់ខ្លួន!</h2>
             <p >ឈ្មោះ : គុជ ធារិន</p>
             <p >ភេទ : ប្រុស</p>
             <p>អាយុ : ២៣ ឆ្នាំ</p>
             <p>អាសយដ្ឋាន : សង្កាត់បឹងសាឡាង​-ខណ្ឌទួលគោក-រាជធានីភ្នំពេញ</p>
             <p>សញ្ជាតិ : ខ្មែរ</p>
             </div>
             
       <div className='w-10/12 col-span-3 relative h-max rounded-2xl border-2 border-solid border-primary bg-light p-8 dark:hover:bg-primaryDark dark:border-primaryDark 
       xl:col-4 md:order-1 md:col-span-8'>
       <div className='bg-primary absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl dark:bg-light'/>
      <FramerImage src={profilePic} alt='kuchthearin' className='w-full h-auto '
      whileHover={{scale:1.05}}
      transition={{duration:0.2}}
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      /> 
        </div>
       <div className='col-span-2 flex flex-col items-end justify-center dark:text-light xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
       <div className='flex flex-col items-end justify-center xl:items-center' >
        <span className='inline-block text-7xl font-bold dark:text-light/75 md:text-6xl sm:text-5xl xs:text-4xl'>
        <AnimatedNumbers value={50} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satis clients</h2>
      </div>
      <div  className='flex col-span-2 flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-7xl font-bold dark:text-light/75'>
        <AnimatedNumbers value={40} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>project completed</h2>
      </div>
      <div  className='flex col-span-2 flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-7xl font-bold dark:text-light/75'>
        <AnimatedNumbers value={4} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
      </div>
      </div>


       </div>
       
      
                
          
      <Skill/>
      <Experience/>
      <Education/>
      </Layout>
    
    </main>

    </>
  )
}

export default about
