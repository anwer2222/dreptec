"use client"
import { motion } from 'framer-motion';
import { Card } from './Uitls';
import { fadeInUpSpring } from '@/motion/motionVariants';
import Button from './Button';

export const Hero = () => {

  return (
    <section
      className="relative py-32 bg-gray-900 text-white"
      style={{
        backgroundImage: 'url(/demo/bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="subtitle mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
           Terms of Service
        </div>
        <h1 className="text-1xl font-extrabold mb-6">
          At Dreptec, The Terms of Service (&quot;Terms&quot;) govern your access to and use of Dreptec&apos;s products, services, and technologies, including our website, applications, APIs, and integrations. By using Dreptec, you agree to be bound by these Terms.
        </h1>
      </div>
    </section>
  )
}


export const Discover = () => {

  return (
    <section
      className="relative py-32 bg-gray-900 text-white"
      style={{
        backgroundImage: 'url(/demo/bg-2.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="subtitle mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
        📬 Contact Us
        </div>
        <h1 className="text-1xl font-extrabold mb-6">
          If you have any questions or concerns about these Terms, please contact.
        </h1>

        {/* btn */}
        <motion.div
          variants={fadeInUpSpring(0.6, 0.8)}
          initial="hidden"
          whileInView="visible"
        >
          <Button />
        </motion.div>
      </div>
    </section>
  )
}

