"use client"

// import Button from "@/components/Button"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
// import Radio from "./Radio"
import { Textarea } from "./ui/textarea"

import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { sendEmail } from "./Mail"
import { useValue } from "./ValueContext"
import { getPriceInfo } from "./AiTools"

// {open}: {open: boolean} open={open}
const Form = ( {
    plan,
    isOpen,
    setIsOpen,
  }: {
    
    plan?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
  const { value } = useValue();
  const [formValues, setFormValues] = React.useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    chat:value
  });

  const isFormIncomplete = Object.values(formValues).some(value => value.toString().trim() === '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (formData: FormData) => {
    
    const result = await sendEmail(formData);
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };
   const getPlan=()=>
   {
    if (plan) {return plan} else { 
        if (value) {return "Business"} else {return "Starter"}
    }
    }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
        
        {/* <Button btnText="Contact us"/> */}
      {/* <DialogTrigger asChild>
        {children}
      
      </DialogTrigger> */}
      <div className="">

        <DialogContent className="p-2 sm:max-w-[625px] bg-white">
          <form action={handleSubmit}>
            <ScrollArea className="max-h-[600px] rounded-md border md:p-10 p-4 overflow-auto">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription className="flex items-center justify-center pb-12">
                  <Image src="/dreptec_logo.png" alt="" width={300} height={100} />
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Full name *</Label>
                  <Input id="name-1" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} required/>
                  
                </div>
                <Separator className="my-2" />
                <div className="grid gap-3">
                  <Label htmlFor="phone-1">Phone *</Label>
                  <Input id="phone-1" name="phone" placeholder="05111222333" value={formValues.phone} onChange={handleChange} required/>
                </div>
                <Separator className="my-2" />
                <div className="grid gap-3">
                  <Label htmlFor="email-1">Email *</Label>
                  <Input id="email-1" name="email" placeholder="example@email.com" value={formValues.email} onChange={handleChange} required/>
                </div>
                <Separator className="my-2" />

                <div className="grid gap-3">
                  <Label htmlFor="message-1">Tell us about your idea *</Label>
                  <Textarea className="min-h-20" id="message-1" name="message" placeholder="App integrating AI ..." value={formValues.message} onChange={handleChange} required/>
                </div>
                <Separator className="my-2" />
                <Textarea id="price-1" name="price" placeholder="App integrating AI ..." value={JSON.stringify(getPriceInfo(value[0]),null,2)} hidden/>
                
                <Textarea id="plan-1" name="plan" placeholder="App integrating AI ..." value={getPlan()} hidden/>
                <Textarea id="chat-1" name="chat" placeholder="App integrating AI ..." value={value[2]} hidden/>
              </div>
              <DialogFooter className="py-10 flex items-center sm:justify-center">
                <Button type="submit" className="w-full cursor-pointer bg-blue-900" disabled={isFormIncomplete}>Submit</Button>
              </DialogFooter>
            </ScrollArea>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  )
}

export default Form