// pages/pricing.tsx

import { Slider } from "@/components/ui/slider"
import { useValue } from './ValueContext'
import {CircleCheck,} from "lucide-react"
import { Button } from "./ui/button"
// const r= `
// Smart Chatbot Features - Pricing Plans
// Starter Plan

// Level	Basic	Standard	Premium	Enterprise	Ultimate
// Website Chatbot	Basic website support chatbot	Enhanced website support with simple automation	Advanced website chatbot with custom responses	Fully customized website chatbot with analytics	AI-powered website chatbot with multilingual support
// Social Media Integration	Basic replies for Facebook and Twitter	Automated responses for multiple channels	Multi-platform engagement and scheduling	Social media management tools	AI-driven social media responder with analytics
// Personalized Virtual Assistant	Basic virtual assistant with predefined tasks	Customizable virtual assistant	AI-powered virtual assistant with learning capabilities	Virtual assistant with integrations to third-party apps	Fully integrated, context-aware virtual assistant
// Business Plan

// Level	Basic	Standard	Premium	Enterprise	Ultimate
// Website Chatbot	Advanced website chatbot with lead capture	Context-aware chatbot with qualification features	Omnichannel chatbot with proactive support	Fully integrated chat for multiple websites	Enterprise-grade chatbot with AI personalization
// Social Media Integration	Advanced social media responder	Automated multi-channel social engagement	Multi-platform campaign management	AI-powered social media analytics & response	Fully automated social media strategy & outreach
// Personalized Virtual Assistant	Virtual assistant with task automation	AI-powered virtual assistant with CRM integration	Virtual assistant with customized workflows	Virtual assistant with ERP integration	Enterprise AI virtual assistant with predictive insights
// ERP & CRM Integration	Not included	Basic transfer of CRM data	Transfer and synchronize limited ERP & CRM data	Comprehensive ERP & CRM transfer and control	Fully automated, bidirectional ERP & CRM management
// `

const st =[
    ["Website chatbot", "From 3 pages", "No website support"],
    ["Enhanced website support", "From 5 pages", "Simple automation"],
    ["Replies for Whatsapp", "From 300 Replies", "Content management"],
    ["Social media engagement", "From 500 Replies", "Chat-based scheduling"],
    ["Virtual Assistant", "From 800 Replies", "Predefined tasks"],
]

const bu =[
    ["Website chatbot", "From 8 pages", "Website support"],
    ["Fully website support", "From 12 pages", "Full automation"],
    ["Replies for Whatsapp", "From 500 Replies", "Social media analytics"],
    ["Multi-platform engagement", "From 800 Replies","Chat-based tasks"],
    ["Smart ERP & CRM chat", "From 1000 Replies","Full automated tasks"],
]

const PricingPage = () => {
  const { value, setValue, setIsFormOpen } = useValue();
  //  Slider value ranges from 0 to 100
  //  const [value, setValue] = useState<[number]>([33]) // Default value
  
  //  Predefined titles for 5 slides
  const slideTitles = [
    "Basic Plan",
    "Standard Plan",
    "Premium Plan",
    "Enterprise Plan",
    "Ultimate Plan"
  ];
  
  // Determine the current slide index based on slider value
  // Range 0-20: index 0, 21-40: 1, 41-60: 2, 61-80: 3, 81-100: 4
  const slideIndex = Math.min(
    Math.floor((value[0] / 100) * slideTitles.length),
    slideTitles.length - 1
  );
  
  // Define the prices based on slider value
  // For example, the Starter price might range from $10 to $50
  // and Business from $100 to $500
  const starterPrice = Math.round(10 + (value[0] / 100) * (50 - 10))
  const businessPrice = Math.round(100 + (value[0] / 100) * (500 - 100))
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#131640]">
      <h1 className="text-3xl font-bold mb-8">Our Pricing Plans</h1>
      <div className="w-full max-w-2xl p-4 rounded shadow-md">
        {/* Slider for controlling prices */}
        <div className="mb-6">
          <h2 className="text-xl mb-2">Adjust the plan level: {slideTitles[slideIndex]}</h2>
          <Slider
                defaultValue={[value[0]]}
                max={100}
                step={1}
                onValueChange={(val: [number]) => setValue([val[0],value[1],value[2]])}
                />
        </div>
        
        {/* Display Prices */}
        <div className="flex flex-col md:flex-row justify-around gap-8 text-center">
          {/* Starter Plan */}
          <div className="border p-4 flex-1 hover:shadow-lg transition-shadow duration-300 rounded-3xl min-w-[310px]">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-2 flex items-center justify-center">${starterPrice}/month</p>
            <ul className="my-8 ml-35 md:ml-5 text-left">
               {st[slideIndex].map((i,idx)=>{
                return (<li key={idx} className='flex gap-2 items-center'><CircleCheck className=' size-5'/>{i}</li>)
               })}
            </ul>
            {/* <Form> <button className='bg-blue-600 text-white px-8 py-2 rounded-4xl hover:bg-blue-700' onClick={()=>setValue([value[0],false,value[2]])}> Contact us</button></Form> */}
            <Button onClick={()=>{setValue([value[0],false,value[2]]);setIsFormOpen(true)}}  className='bg-blue-600 text-white px-8 py-2 rounded-4xl hover:bg-blue-700'>Contact us</Button>
            
          </div>
          
          {/* Business Plan */}
          <div className="border p-4 flex-1 hover:shadow-lg transition-shadow duration-300 rounded-3xl  min-w-[310px]">
            <h3 className="text-2xl font-semibold mb-4">Business</h3>
            <p className="text-3xl font-bold mb-2">${businessPrice}/month</p>
            <ul className="my-8 ml-35 md:ml-5 text-left">
              {bu[slideIndex].map((i,idx)=>{
                return (<li key={idx} className='flex gap-2 items-center'><CircleCheck className=' size-5'/> {i}</li>)
               })} 
            </ul>
            {/*/() => setValue([value[0],0]) */}
            <Button onClick={()=>{setValue([value[0],true,value[2]]);setIsFormOpen(true)}} className='bg-green-600 text-white px-8 py-2 rounded-4xl hover:bg-green-700'>Contact us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPage