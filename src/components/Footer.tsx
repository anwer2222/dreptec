import Image from "next/image";
import Link from "next/link";
import Chat from "./Chat";
// import Chat from "./Chat";

const icons = [
    {
        src: "/footer/1.svg",
        href: "",
    },
    {
        src: "/footer/2.svg",
        href: "",
    },
    {
        src: "/footer/3.svg",
        href: "",
    },
    {
        src: "/footer/4.svg",
        href: "",
    },
    // {
    //     src: "/footer/5.svg",
    //     href: "",
    // },
    // {
    //     src: "/footer/6.svg",
    //     href: "",
    // },
    // {
    //     src: "/footer/7.svg",
    //     href: "",
    // },
]

const Footer = () => {
    return (
        <footer className="bg-[#101435] flex justify-center">
            <div className="container mx-12 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
                    {/* socials */}
                    <div className="flex-1 flex gap-8 xl:mt-0">
                        {icons.map((icon,index) => {
                            return (
                                <Link href={icon.href} key={index}>
                                    <div className="relative w-6 h-6">
                                        <Image src={icon.src} fill alt="" className="object-contain"/>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>
                    {/* logo */}
                    <div className="flex-1 flex justify-center">
                       <Link href="/" className="">
                        <div className="flex justify-center items-center gap-4 lg:flex-row flex-col">
                           <div className="relative w-[130px] h-[130px] flex">
                              <Image src="/logo_d.png" fill alt="" className="object-contain"/>
                           </div>
                             <div className="relative w-[130px] h-[60px] lg:w-[240px] lg:h-[240px] flex">
                              <Image src="/logo_is.png" fill alt="" className="object-contain"/>
                              </div>
                        </div>
                       </Link>
                    </div>
                    <Chat/> 
                    {/* copyright */}
                    <p className="flex-1 flex text-white justify-end font-light lg:mb-0"> &copy; 2025 Derptec. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;