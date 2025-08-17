"use client"
import Image from "next/image";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useValue } from './ValueContext';
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MemoizedMarkdown } from '@/components/memoized-markdown';
import { ArrowDownCircleIcon, Loader2, Send, X } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Chat = () =>{
    const pathname = usePathname()
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showChatIcon, setShowChatIcon] = useState(false);
    const chatIconRef = useRef<HTMLButtonElement>(null);
    const { value, setValue } = useValue();
    
    const {messages, sendMessage, status, stop,error,} = useChat({
        transport: new DefaultChatTransport({
            api: '/api/chat',
            body:{url:pathname,price:value[0]},
          }),})
    
    const scrollRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
               setShowChatIcon (true);
             } else {
               setShowChatIcon (false);
               setIsChatOpen (false);
             }
        };
          
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
           window. removeEventListener("scroll", handleScroll);
        };
      }, []);

    const toggleChat = () => {setIsChatOpen(!isChatOpen)};

    useEffect(() => {
      if (scrollRef.current) {
         scrollRef.current.scrollIntoView({ behavior: "smooth" });
   
      }}, [messages]);
    
    return (
    <div>
    <AnimatePresence>
      { showChatIcon && (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }} // toggleChat
            className="fixed bottom-4 right-4 z-50" >
     <Button ref={chatIconRef} onClick={toggleChat} size="icon" className="rounded-full size-14 p-0 shadow-lg bg-transparent hover:bg-[#0A43D5]">
         {!isChatOpen ? (
          
           <Image src="/logo_d.png" alt="" width={30} height={30}/>
          ):(
            <ArrowDownCircleIcon className="text-white size-8"/>)}
      </Button>

        </motion.div>
      )}
    </AnimatePresence>
    <AnimatePresence>
      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1 }}
          exit={{opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px] ">
              <Card className="border-2 bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                   <CardTitle className="text-lg font-bold">
                      Chat with Dreptec AI
                   </CardTitle>
                   <Button
                      onClick={toggleChat}
                      size="sm"
                      variant="ghost"
                      className="px-2 py-0">
                       <X className="size-4" />
                      <span className="sr-only">Close chat</span>
                   </Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
                    { messages?.length === 0 && (
                      <div className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                        No message yet.
                      </div>
                    )}
                    {messages?.map((message, index)=> ( 
                      <div key={index} className={`mb-4 ${message.role ==="user"? "text-right":"text-left"}`}>
                        <div className={`inline-block p-4 rounded-lg ${message.role ==="user"? "bg-primary text-primary-foreground":"bg-muted"}`}>
                            {message.parts.map((part,index) =>
                                part.type === 'text' ? <MemoizedMarkdown id={message.id} content={part.text} key={index}/> : null,
                              )}   
                        </div>
                      </div>
                    ))}
                    {(status =="submitted") && (
                        <div className="w-full items-center flex justify-center gap-3">
                        <Loader2 className="animate-spin h-5 w-5 text-primary" />
                        <button
                        className="underline"
                        type="button"
                        onClick={() => stop()}>
                        
                        abort 
                        </button>
                        </div>
                    )}
                    {error && (
                      <div className="w-full items-center flex justify-center gap-3">
                        <div>An error occurred.</div>
                          <button
                            className="underline"
                            type="button"
                            // onClick={() => reload()}
                            >
                            Retry
                          </button>
                        </div>
                    )}
                    <div ref={scrollRef}></div>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <form onSubmit={e => {
                                    e.preventDefault();
                                    if (input.trim()) {
                                        sendMessage({ text: input, }, {body: { url: pathname, price: value[0] }});
                                        setInput('');
                                        setValue([value[0],value[1],JSON.stringify(messages,null,2)])
                                    }}} className="flex w-full items-center space-x-2">
                    <Input
                       value={input}
                       onChange={e => setInput(e.target.value)}
                       className="flex-1"
                       placeholder="Type your message here..." 
                    />
                    <Button
                       type="submit"
                       className="size-9"
                       disabled={status !== 'ready'}
                       size="icon"
                      >
                      <Send className="size-4"/>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
       </motion.div>
      )}
    </AnimatePresence>
    
        
    </div>
    )

}

export default Chat