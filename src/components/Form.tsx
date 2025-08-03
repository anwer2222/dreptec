// import Button from "@/components/Button"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
// import Radio from "./Radio"
import { Textarea } from "./ui/textarea"

import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// {open}: {open: boolean} open={open}
const Form = () => {
  const [formValues, setFormValues] = React.useState({
    name: '',
    phone: '',
    email: '',
    text: ''
  });

  const isFormIncomplete = Object.values(formValues).some(value => value.trim() === '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormIncomplete) {
      // Proceed with form submission
    }
  };

  return (
    <Dialog >
      <DialogTrigger asChild>
        {/* <Button btnText="Contact us"/> */}
        <Button className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group cursor-pointer">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br  from-blue-900 to-blue-950"></span>
          <span className="absolute bottom-0 right-0 block w-72 h-72 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#ceaf67] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white font-bold text-sm uppercase tracking-[1px]">
            Contact us
          </span>
        </Button>
      </DialogTrigger>
      <div className="">

        <DialogContent className="p-2 sm:max-w-[625px]">
          <form>
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
                  <Label htmlFor="text-1">Tell us about your idea *</Label>
                  <Textarea className="min-h-20" id="text-1" name="text" placeholder="App integrating AI ..." value={formValues.text} onChange={handleChange} required/>
                </div>
                <Separator className="my-2" />

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