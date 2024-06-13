"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About",0.75);

  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.175}}
      id='about'
    >
      <SectionHeading >About Me</SectionHeading>
      <p className='mb-3'>
        After completing diploma in <span className="font-medium">ITES&M</span>. I decided to study further in technology, and enrolled in <span className="font-medium">B.Tech with Computer Science Engineering</span>. I&apos;m passionate about programming and love to code. My core stack is <span className="font-medium">ReactJS, Next.js, MongoDB, Python</span>. I am also familiar with <span className="font-medium">Django and Machine Learning</span>. I am always looking to learn new technologies. I am currently looking for a <span className="font-medium">full-time</span> position as a software developer.
      </p>
      <p>
        When I&apos;m not coding, I enjoy playing games, watching movies and listening music. I also enjoy <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  )
}
