"use client"
import {Button} from "@/components/ui/button"
import { useValue } from "./ValueContext";


const ButtonForm = () => {
    const { setIsFormOpen } = useValue();
    return (
        <Button onClick={()=>setIsFormOpen(true)} className="relative min-w-[90px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-sm shadow-xl group cursor-pointer">
        <span className="absolute inset-0 w-full h-full bg-[#0A43D5]">
        </span>
        <span className="absolute bottom-0 right-0 block w-72 h-72 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#fbfbfb] rounded-full opacity-20 group-hover:rotate-90 ease"></span>
        <span className="relative text-white font-bold text-sm uppercase tracking-[1px]">
           Contact Us
        </span>
        </Button>
    
    )
}

export default ButtonForm;