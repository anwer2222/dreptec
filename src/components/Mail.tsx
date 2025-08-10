'use server'; // Marks this as a Server Action

import nodemailer from 'nodemailer';

// interface Dictionary<T> {[Key: string]: T;} :Dictionary<[Key: string]>

// const nodemailer = require("nodemailer");

export async function sendEmail(formData:FormData): Promise<{ success: boolean; message: string; }>{
  const name = formData.get("name")
  const phone = formData.get('phone');
  const email = formData.get('email');
  const message = formData.get('message');
  const price = formData.get('price');
  const plan = formData.get('plan');
  const chat = formData.get('chat');
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: process.env.GMAIL_DREPTEC, // Replace with your desired recipient
      subject: `New message from ${name}`,
      text: message+"\n\nPrice:"+price+"\n\nSelected Plan:"+plan+"\n---------\nchat:"+chat+"\n--------\nemail:"+email+"\n\nPhone:"+phone,
      replyTo: email as string,
    });
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send email.' };
  }
}