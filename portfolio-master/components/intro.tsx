"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/activeSidebarContext'

export default function Intro(){
  const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext();
  
  const { ref } = useSectionInView("Home",0.5);
  return (
    <section ref={ref} id='home' className='scroll-mt-28 mb-28 xl:max-w-[60rem] max-w-[50rem] text-center sm:mb-0 '>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
              type:'tween',
              duration:0.2,
            }}
          >
            <Image 
              src='/profile.jpeg' 
              width="192" 
              height="192" 
              quality="75" 
              alt='profile'
              priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
          <motion.span 
            className='absolute bottom-0 right-0 text-4xl'
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
              type:'spring',
              stiffness:125,
              delay:0.1,
              duration:0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p 
        className='mb-10 mt-4 px-4 text-md xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl font-medium !leading-[1.5]'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
      >
        <span className='font-bold'>Hi, I&apos;m Deepak</span>, a passionate {" "}
        <span className="font-bold">full-stack developer</span> currently pursuing my {" "}
        <span className="font-bold">Bachelor&apos;s in Computer Science and Engineering</span>.
        <br />My focus is <span className='underline'>ReactJS and Python</span>
      </motion.p>
      <motion.div 
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
          delay:0.1
        }}
      >
        <Link href="#contact"
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'
          onClick={()=>{
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> 
        </Link>

        <a href="/my resume done 2.pdf" target="_blank" type="application/pdf" className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border borderBlack dark:bg-white/10 dark:text-white/60' download>
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a href="https://www.linkedin.com/in/deepak-kumar-sharmads/" target='_blank' className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition border border-black/10 dark:bg-white/10 dark:text-white/60'>
          <BsLinkedin/>
        </a>
        <a href="https://github.com/DeepakkumarsharmaDS" target='_blank' className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition border border-black/10 dark:bg-white/10 dark:text-white/60'>
          <FaGithubSquare/>
        </a>
      </motion.div>
    </section>
  )
}
