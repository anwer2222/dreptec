
import { Button as Btn} from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// // import Radio from "./Radio"
// import { Textarea } from "./ui/textarea"

// import * as React from "react"

// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
interface btnText {
    btnText : string
}

const Button = ({btnText} : btnText) => {
    return (
        <Btn className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group cursor-pointer">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br  from-blue-900 to-blue-950">
            </span>
            <span className="absolute bottom-0 right-0 block w-72 h-72 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#ceaf67] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white font-bold text-sm uppercase tracking-[1px]">
               {btnText}
            </span>
        </Btn>
    
    )
}

export default Button;