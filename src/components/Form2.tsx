"use client"
import z from "zod";
import {useForm} from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {zodResolver} from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// import { profileSchema } from "@/lib/schema";
import Link from "next/link";
// import { useMutation } from "@tanstack/react-query";
import Radio from "./Radio";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

export const Form2 = () => {
  const router = useRouter();
  // const trpc = useTRPC() ;
  
  // const profile = useMutation(trpc.profiles.register.mutationOptions({
  //   onError: (error) => {toast.error(error.message)},
  //   onSuccess: async() => {
  //     console.log("uuuuuu")
  //     router.push("/")}
  // }));

  const profile = useMutation({
    mutationFn: async (values: z.infer<typeof profileSchema>) => {
        const response = await fetch("/api/trpc/profiles.register", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(values),
        });
        if (!response.ok) {
          const error = await response. json();
          throw new Error(error.message || "Login failed");
        }
        return response.json()
    },
    onError: (error) => {toast.error(error.message)},
    onSuccess: async() => {
      router.push("/submit/")}
    });

  const form =useForm<z.infer<typeof profileSchema>>({
    mode: "all",
    resolver: zodResolver (profileSchema),
    defaultValues: {
      first_name:"",
      last_name:"",
      age:"",
      email: "",
      instagram:"instagram.com/",
      level:"",
      budget:""
    }
   });

   const onSubmit = (values: z.infer<typeof profileSchema>) =>{
      console.log("jjjjj")
      profile.mutate(values);
   }
   
    return (
      <Dialog>
        <DialogTrigger asChild>
        <Button className="w-full cursor-pointer bg-blue-900">احصلي على نسختك من الكتيب</Button>
        </DialogTrigger>
        <DialogContent className="p-2 sm:max-w-[625px]  h-[600px] ">
        <DialogTitle>
          
        </DialogTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className=" bg-[#F4F4F0]  h-[570px]  w-full lg:col-span-3 overflow-y-auto">
              
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 p-4 lg:p-16">
                <div className="flex items-center justify-center mb-8">
                  <Link href="/">
                     <Image src="/logo1.png" width={150} height={150} alt=""/>
                  </Link>
                </div>
                <FormField
                  name="first_name"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">First name *</FormLabel>
                    <FormControl>
                      <Input {... field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                <FormField
                  name="last_name"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">Last name *</FormLabel>
                    <FormControl>
                      <Input {... field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                <FormField
                  name="phone"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">Phone *</FormLabel>
                    <FormControl>
                      <Input {... field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">Email *</FormLabel>
                    <FormControl>
                      <Input {... field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                
                <FormField
                  name="age"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">كم هو عمرك *</FormLabel>
                    <FormControl>
                      <Radio radios={["17-25","26-35","36-45+"]} r="c" field={field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                 <FormField
                  name="instagram"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">ماهو حسابك في الانستغرام</FormLabel>
                    <FormControl>
                      <Input {... field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                <FormField
                  // control={form.control}
                  name="level"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">ما هو مستوى مهارتك في التنسيق *</FormLabel>
                    <FormControl>
                    <Radio radios={["لا يوجد","مبدئ","متوسط","محترف"]} r="r" field={field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                <FormField
                  name="budget"
                  render={({ field }) =>(
                  <FormItem>
                    <FormLabel className="text-base">هل انت على استعداد ان تستثمري لتطوير او اكتساب مهاره لك مبلغ ما بين (800$ -1000$) *</FormLabel>
                    <FormControl>
                    <Radio radios={["نعم","لا"]} r="b" field={field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                <Button
                   disabled={profile.isPending}
                   type="submit"
                   size="lg"
                   variant="outline"
                   className="w-full text-white bg-blue-900 hover:bg-blue-300 cursor-pointer">
                  تحميل الكتيب المجاني
                </Button>
              </form>
            </Form>
          </div>
        </div>
        </DialogContent>
      </Dialog>
    );
};