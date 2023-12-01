import Link from 'next/link';
import React, { useState, isOpen, setIsOpen } from 'react';
import Logo from '../components/Logo';
import { useRouter } from 'next/router';
import {Facebook, Instragram, Youtube, Email, Github, SunIcon, MoonIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemSwitcher from './hooks/useThemSwitcher';






const CustomLink = ({href, title,  className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block w-0 bg-dark
            absolute left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobieLink = ({href, title,  className="", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-primary dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block w-0 bg-light
            absolute left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark
            `}>&nbsp;</span>
        </button>
    )
}


const Navbar = () => {

     const [mode, setMode] = useThemSwitcher();

     const [isOpen, setIsOpen] = useState(false);
     const handleClick = () => {
        setIsOpen(!isOpen)
     }

  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between mt-5  bg-light
    text-primary shadow-md border border-solid  mx-auto h-20 rounded-s-none
    hover:bg-primary hover:text-light dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-light
    z-10 lg:px-16 md:px12 sm:px-8
    '>

     <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
     </button>
     <div className='w-full flex justify-between items-center lg:hidden'>
     <nav>  
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/project" title="Project" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/>
         </nav>
         <nav className='flex items-center justify-center flex-wrap'>
             
             <motion.a href="https://www.facebook.com/kshsg.tha?mibextid=LQQJ4d" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:9}}
             className="w-6 mr-3"
             >
                 <Facebook/>
             </motion.a>
             <motion.a href="https://instagram.com/sisisaranghae?igshid=YWF2cmJrc3ZrNGhj&utm_source=qr" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className="w-6 mx-3">
                 <Instragram/>     
             </motion.a>
             <motion.a href="https://www.youtube.com/@rxnnisback1132" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className="w-6 mx-3">
                 <Youtube/>
             </motion.a>
             <motion.a href="https://kuchthearxnn@gmail.com" target={"_blank"} 
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className="w-6 mx-3">
                 <Email/>
             </motion.a>
             <motion.a href="https://github.com/kuchthearin" target={"_blank"} 
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className="w-6 ml-3">
                 <Github/>
             </motion.a>
 
             <button 
             onClick={() => setMode(mode === "light" ? "dark" : "light") }
             className={`ml-3 flex items-center justify-center rounded-full p-1
             ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
             `}
             >
                {
                 mode === "dark" ?
                 <SunIcon className={"fill-dark"} />
                 : <MoonIcon className={"fill-dark"} />
                }
             </button>
             
         </nav>
     </div>

     {
        isOpen ?
        <motion.div
        initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
        '>
        <nav className='flex items-center flex-col justify-center'>  
               <CustomMobieLink href="/" title="Home" className='' toggle={handleClick}/>
               <CustomMobieLink href="/about" title="About" className='' toggle={handleClick}/>
               <CustomMobieLink href="/project" title="Project" className='' toggle={handleClick}/>
               <CustomMobieLink href="/articles" title="Articles" className='' toggle={handleClick}/>
            </nav>
            <nav className='flex items-center justify-center flex-wrap mt-2'>
                
                <motion.a href="https://www.facebook.com/kshsg.tha?mibextid=LQQJ4d" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:9}}
                className="w-6 mr-3 sm:mx-1"
                >
                    <Facebook/>
                </motion.a>
                <motion.a href="https://instagram.com/sisisaranghae?igshid=YWF2cmJrc3ZrNGhj&utm_source=qr" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 sm:mx-1">
                    <Instragram/>     
                </motion.a>
                <motion.a href="https://www.youtube.com/@rxnnisback1132" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 sm:mx-1">
                    <Youtube/>
                </motion.a>
                <motion.a href="https://kuchthearxnn@gmail.com" target={"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 sm:mx-1">
                    <Email/>
                </motion.a>
                <motion.a href="https://github.com/kuchthearin" target={"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 ml-3 sm:mx-1">
                    <Github/>
                </motion.a>
    
                <button 
                onClick={() => setMode(mode === "light" ? "dark" : "light") }
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}
                >
                   {
                    mode === "dark" ?
                    <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"} />
                   }
                </button>
                
            </nav>
        </motion.div>

        : null
     }
     
  
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>
   </header>
  )
}

export default Navbar
