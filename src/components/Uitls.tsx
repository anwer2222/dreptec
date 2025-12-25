"use client"
import { iconAnimation } from '@/motion/motionVariants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CountUp from "react-countup";

interface Props {
  img: string;
  til: string;
  par: string;
  idx: number
};

interface Propb {
  til: string;
  suf: string;
  px: string;
  nums: number;
  nume: number;
  dur: number;
  idx: number
};



export const Card = ({ img, til, par, idx }: Props) => {
  return (
    <motion.div
      variants={iconAnimation}
      initial="initial"
      whileInView="animate"
      custom={idx}
      className="bg-gray-700 p-10 rounded-lg flex flex-col items-center text-center space-y-4" key={idx}>
      <Image src={img} alt="dreptic" width={100} height={100} />
      <h4 className="text-xl font-semibold">{til}</h4>
      <p>{par}</p>
    </motion.div>
  )
}

export const Blue = ({ til, suf, nums, nume, dur, px, idx }: Propb) => {
  return (
    <motion.div
      variants={iconAnimation} // Assuming iconAnimation is defined elsewhere
      initial="initial"
      whileInView="animate"
      custom={idx}
      className="bg-indigo-700 p-10 rounded-lg text-center text-white" 
      key={idx}
    >
      <h2 className="text-4xl font-bold mb-1">
        {/* FIX: Use the Render Prop pattern here */}
        <CountUp 
          start={nums} 
          end={nume} 
          delay={0.5} 
          duration={dur} 
          prefix={px} 
          suffix={suf} 
          enableScrollSpy={true}
        >
          {({ countUpRef }) => (
            <span ref={countUpRef} />
          )}
        </CountUp>
      </h2>
      <p>{til}</p>
    </motion.div>
  )
}
