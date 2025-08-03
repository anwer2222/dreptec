"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInOnScoll, iconAnimation } from "@/motion/motionVariants";

const icons = [
    {
        src: "/integrations/notion.svg"
    },
    {
        src: "/integrations/slack.svg"
    },
    {
        src: "/integrations/google_drive.svg"
    },
    {
        src: "/integrations/youtube.png"
    },
    {
        src: "/integrations/chatGpt.png"
    },
    {
        src: "/integrations/dropbox.svg"
    },
    {
        src: "/integrations/stripe.svg"
    },
    {
        src: "/integrations/zapier.svg"
    },
    {
        src: "/integrations/figma.svg"
    },
    {
        src: "/integrations/mailchimp.svg"
    },
    {
        src: "/integrations/whatsapp.svg"
    },
    {
        src: "/integrations/discord.svg"
    },
    {
        src: "/integrations/bitbucket.svg"
    },
    {
        src: "/integrations/invision.svg"
    },
    {
        src: "/integrations/evernote.svg"
    },

]


const Integrations = () => {
    return (
        <section className="pt-12 min-h-[620px] xl:mt-12">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16">
                {/* text */}
                <motion.div
                  variants={fadeInOnScoll(0.2, 0.6)}
                  initial="hidden"
                  whileInView="visible"
                  className="text-center">
                    <h2 className="h2 mb-3 text-black">Our Service</h2>
                    <h2 className="lead text-white text-2xl">
                    Our technology are integrated with list of services
                    </h2>
                </motion.div>
                {/* icon list */}
                <div className=" flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center">
                    {icons.map((icon, index) => {
                        return (
                            <motion.div
                             variants={iconAnimation}
                             initial="initial"
                             whileInView="animate"
                             custom={index}
                             className="relative w-[80px] h-[80px]" key={index}>
                                <Image src={icon.src} fill alt=""/>
                            </motion.div>
                        )
                    })}
                </div>
                {/* btn */}
                {/* <motion.div
                 variants={fadeInUpSpring(0.6,0.8)}
                 initial="hidden"
                 whileInView="visible"
                 >
                    <Button btnText="Contact us"/>
                </motion.div> */}
            </div>
        </section>
    )
}

export default Integrations;