import { Transition } from "framer-motion"

export const iconAnimation = {
  initial: {
      opacity: 0,
      y: 60,
  },
  animate: (index: number) => ({
      opacity:1,
      y:0,
      transition: {
          delay: 0.05 * index,
      }
  })
}

export const fadeInOnScoll = (delay: number, duration: number) => { return {
  hidden: {opacity:0},
  visible: {
    opacity:1,
    transition: {
        delay: delay,
        duration: duration,
        ease: [0.42, 0, 0.58,1],
    } as Transition
  }
}}

export const fadeInUpSpring = (delay: number, duration: number) => { return {
    hidden: {opacity:0, y:60, scale:0.8},
    visible: {
      opacity:1,
      scale: 1,
      transition: {
          delay: delay,
          duration: duration,
          ease: [0.6, -0.05, 0.01,0.99],
          type: "spring",
          stiffness: 100,
      } as Transition
    }
  }}