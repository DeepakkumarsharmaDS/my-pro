"use client"
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendMail } from '@/actions/sendMail';
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact",0.75);
  return (
    <motion.section 
      ref={ref}
      id="contact" 
      className='mb-20 scroll-mt-28 sm:mb-24 w-[min(100%,38rem)] text-center'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:deepaksharma9540072219@gmail.com">deepaksharma9540072219@gmail.com</a> or through this form.</p>
      <form className='mt-10 flex flex-col dark:text-black' action={async (formData)=>{
        const {data,error} = await sendMail(formData);
        if(error){
          toast.error('Error sending email!');
          return;
        }
        toast.success("Email sent successfully!")
      }}>
        <input 
          type="email" 
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
          placeholder='Your email'
          name='senderEmail' 
          required
          maxLength={500}
        />
        <textarea 
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
          placeholder='Your message' 
          name='senderMessage'
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
