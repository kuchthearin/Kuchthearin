import React from 'react'
import {motion} from "framer-motion"


const quote = {
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.08,
      staggerChildren: 0.08,
    }
  }
}

const singelWord = {
  initial:{
    opacity:1,
    y:50,
  },
  animate:{
    opacity:2,
    y:3,
    transition:{
      duration:1,
    }
  }
}

const AnimatedText = ({text, clasName=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden
    sm:py-0
    '>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl  dark:text-light ${clasName}`}
        variants={quote}
        initial="intial"
        animate="animate"
        >
        {
            text.split(" ").map((word, index) =>
            <motion.span key={word+'-'+index} className='inline-block'
            variants={singelWord}
            initial="intial"
            animate="animate"
            
            >
                {word}&nbsp;
            </motion.span>
            )
        }
     </motion.h1>
    </div>
  )
}

export default AnimatedText
