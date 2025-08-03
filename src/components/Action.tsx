"use client"
import { motion } from 'framer-motion'
import Button from './Button'
import { fadeInUpSpring } from '@/motion/motionVariants'


export const Action = () => {
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
            Get Started Now
            </div>
            <h1 className="text-1xl font-extrabold mb-6">
            Join the future of AI-driven innovation. Contact us today to see how Dreptec can elevate your business with the transformative power of generative AI.
            </h1>
           
            {/* btn */}
            <motion.div
                 variants={fadeInUpSpring(0.6,0.8)}
                 initial="hidden"
                 whileInView="visible"
                 >
                    <Button btnText="Contact us"/>
                </motion.div>
          </div>
        </section>
    )
}