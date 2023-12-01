import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import article1 from '../../public/images/articles/Wordpress.jpg'
import article2 from '../../public/images/articles/Laragon.jpg'
import {easeInOut, motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/images/articles/Joomla.jpg'
import article4 from '../../public/images/articles/Joomshopping.png'
import article5 from '../../public/images/articles/Joomla.jpg'
import article6 from '../../public/images/articles/Joomshopping.png'
import article7 from '../../public/images/articles/Translatepress.png'
import article8 from '../../public/images/articles/kmkh.png'
import article9 from '../../public/images/articles/oscommerce.jpg'
import article10 from '../../public/images/articles/xampp.jpg'
import article11 from '../../public/images/articles/wamp.jpg'


const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
      imgRef.current.style.display ="inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
    function handleMouseLeave(event){
      imgRef.current.style.display ="none";
      x.set(0);
      y.set(0);
    }

  return(
    <Link href={link} target='_blank'
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
    <h2 className='capitalize text-1xl font-bold hover:underline'>
      {title}</h2>
      <FramerImage 
      style={{ x:x, y:y }}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration: 0.2}}}

      ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg ' />
    </Link>
  )
}

const Article = ({img, title, date, link}) => {
  return(
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once: true}}
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-primary
    border-r-4 border-b-4 dark:border-primaryDark
    sm:flex-col'>
     <MovingImg title={title} img={img} link={link}/>
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

const FeaturedAcrticles = ({img, title, time, summary, link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-primary rounded-2xl dark:border-dark'>
            <Link href={link} target="_blank"
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
 <div className='bg-primary absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl dark:bg-primaryDark'/>
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
     <Head>
        <title>KUCHTHEARIN | Articles Page</title>
        <meta name="description" content="any description"/>
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Softwares." clasName='mb-16 text-primary hover:text-dark dark:text-primaryDark dark:hover:text-light
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <ul className='grid grid-cols-2 lg:gap-8 gap-16 md:grid-cols-1 md:gap-y-16'>
                <FeaturedAcrticles 
                 title="Free Download"
                 summary="Wordpress_Version-6.3.1"
                 time="Zip File"
                 link="https://drive.google.com/file/d/1DHXV53rwkO0cySjfMeuwnuhtovx5EHua/view?usp=sharing"
                 img={article1}
                 />
                <FeaturedAcrticles 
                 title="Free Downlord"
                 summary="Laragon-wamp php-8.1.10"
                 time="Zip File"
                 link="https://drive.google.com/file/d/1rvcL0EfT7Lpr2HhlzOhxxNgMMHgxnrhY/view?usp=sharing"
                 img={article2}
                 />        
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 text-primary  hover:text-dark dark:text-light dark:hover:text-primaryDark'>All Softwares</h2>
            <ul>
              <li className='font-sans text-3xl w-full text-start my-10 text-primary hover:text-dark dark:text-light dark:hover:text-primaryDark'>Joomla.</li>
              <Article
              title="Joomla_Version-5.0.0-Stable-Full_Package"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1ABxkRFUUDvWGy3dmrTMBdChH4EVI9rYS/view?usp=sharing"
              img={article3}
              />
               <Article 
              title="Joomla_Version-4.3.4-Stable-Full_Package"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1kXUH_HYMMCLQRHFgJmIy7zm_TU1XtrMn/view?usp=sharing"
              img={article3}
              />
               <Article 
              title="Joomla_Version-3.6.5-Stable-Full_Package"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1Vg57PFJ15Vw37RtMorW6EYlmAo59iZX-/view?usp=sharing"
              img={article5}
              />
               <Article 
              title="JoomShopping_Version-5.2.1 Use_Joomla5.0.0-Joomla4.3.4"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1QO79MTsfaw-YCUdkE41wV1Uij5pFCEed/view?usp=drive_link"
              img={article4}
              />
               <Article 
              title="JoomShopping_Version-3.20.2 Use_Joomla3.6.5"
              date="Free Downlord"
              link="https://drive.google.com/file/d/19Y_aAMrbKCsRNe8DPeaHdbsBRcvd02hG/view?usp=sharing"
              img={article6}
              />
              <li className='font-sans text-3xl w-full text-start my-10 text-primary hover:text-dark dark:text-light dark:hover:text-primaryDark'>TranSlate Khmer</li>
               <Article 
              title="Translatepress-business_v1.2.3 Use-Wordpress"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1UpplMBap_qo1MU0aA6p-N9TM1aRxiN25/view?usp=sharing"
              img={article7}
              />
               <Article 
              title="Site_Km-Kh Use_Joomla5.0.0-Joomla4.3.4"
              date="Free Downlord"
              link="https://drive.google.com/file/d/18pbyWx5pRFd636r75ThLZ8ztU6qPYBhb/view?usp=sharing"
              img={article8}
              />
              <li className='font-sans text-3xl w-full text-start my-10 text-primary hover:text-dark dark:text-light dark:hover:text-primaryDark'>Oscommerce</li>
               <Article 
              title="Oscommerce_4_12_56860"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1tSYdacY-tPXILXLPrbL1keMqv14NlW_K/view?usp=sharing"
              img={article9}
              />
               <Article 
              title="Oscommerce_4_13_60075"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1l3ZiVuozS_Z2vTWstpumroFp4XVOSh9X/view?usp=sharing"
              img={article9}
              />
             <li className='font-sans text-3xl w-full text-start my-10 text-primary hover:text-dark dark:text-light dark:hover:text-primaryDark'>Localhost_Sever</li>
             <Article 
              title="Laragon-wamp php-8.1.10"
              date="Free Downlord"
              link="https://drive.google.com/file/d/1rvcL0EfT7Lpr2HhlzOhxxNgMMHgxnrhY/view?usp=drive_link"
              img={article2}
              />
               <Article 
              title="Xampp Apach"
              date="Free Downlord"
              link="https://www.apachefriends.org/"
              img={article10}
              />
              <Article 
              title="Wampp Apach"
              date="Free Downlord"
              link="https://sourceforge.net/projects/wampserver/"
              img={article11}
              />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles
