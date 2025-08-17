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
      className="bg-[#d7d8e3] p-10 rounded-lg flex flex-col items-center text-center space-y-4" key={idx}>
      <Image src={img} alt="dreptic" width={100} height={100} />
      <h4 className="text-xl font-semibold text-[#0A43D5]!">{til}</h4>
      <p className='text-[#0A43D5]!'>{par}</p>
    </motion.div>
  )
}

export const Blue = ({ til, suf, nums, nume, dur, px, idx }: Propb) => {
  return (
    <motion.div
      variants={iconAnimation}
      initial="initial"
      whileInView="animate"
      custom={idx}
      className="bg-[#0A43D5] p-10 rounded-lg text-center text-white" key={idx}>
      <h2 className="text-4xl font-bold mb-1">
        <CountUp start={nums} end={nume} delay={0.5} duration={dur} prefix={px} suffix={suf} enableScrollSpy={true} />
      </h2>
      <p>{til}</p>
    </motion.div>
  )
}

