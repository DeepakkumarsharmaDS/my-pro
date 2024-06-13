"use server"

import React from "react";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactMailFormat from "@/emails/contactMailFormat";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (formData:FormData) => {

  const senderEmail = formData.get('senderEmail');
  const message = formData.get('senderMessage');
  if(!validateString(senderEmail,500)){
    return{
      error:"Invalid sender email"
    }
  }
  if(!validateString(message,5000)){
    return{
      error:"Invalid message"
    }
  }
  let data;
  try{
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'deepaksharma9540072219@gmail.com',
      subject: 'Message from Contact Form',
      reply_to:senderEmail as string,
      react: React.createElement(ContactMailFormat,{
        message:message as string,
        senderEmail:senderEmail as string
      })
    });
  }catch(error){
    return{
      error
    }
  }
  return {data,}
}