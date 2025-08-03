"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInOnScoll } from "@/motion/motionVariants"

const brandsImages = [
    {
        src: "/brands/img1.png",
    },
    {
        src: "/brands/img2.png",
    },
    {
        src: "/brands/img3.png",
    },
    {
        src: "/brands/img4.png",
    },
    {
        src: "/brands/img5.png",
    },
    {
        src: "/brands/img6.png",
    },
    {
        src: "/brands/img7.png",
    },

];

const numps = Array.from({ length: 24 }, (_, i) => (i + 1).toString());

const Brands = () => {
    return (
        <section className="w-full h-[24vh] pt-24 flex justify-center items-center">
            <motion.div
            //   variants={fadeInOnScoll(0.2,0.6)}
              initial="hidden"
              whileInView="visible"
              className="container mx-auto overflow-hidden">
                <h2 className="h2 text-center mb-6 text-black">الرعاة الرسميين</h2>
                <div className="flex">
                    <motion.div
                    initial={{x:0}}
                    animate={{x:"-100%"}}
                    transition={{duration:30, repeat: Infinity, ease: "linear"}}
                    className="flex"
                    >

                        {numps.map((item, index) =>{
                            return (
                                <div className="relative w-[120px] h-[120px] mr-12" key={index}>
                                    <Image src={`/brands/img${item}.png`} fill alt="" className="object-contain" />
                                </div>
                            )
                        })}
                    </motion.div>
                    {/* duplicate div */}
                    <motion.div
                    initial={{x:0}}
                    animate={{x:"-100%"}}
                    transition={{duration:30, repeat: Infinity, ease: "linear"}}
                    className="flex"
                    >

                        {numps.map((item, index) =>{
                            return (
                                <div className="relative w-[120px] h-[120px] mr-12" key={index}>
                                    <Image src={`/brands/img${item}.png`} fill alt="" className="object-contain" />
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Brands;