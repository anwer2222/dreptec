"use client"
import { Blue, Card } from './Uitls';




const l1 = [
  {
    img: "/demo/icons/dreptic-f.png",
    til: "Dreptec",
    par: "The future is built on the limitless potential of AI. Our platform empowers developers, businesses, and creators to harness advanced generative AI to craft smarter, more personalized digital experiences."
  },
  {
    img: "/demo/icons/flash.png",
    til: "Dreptec",
    par: "The future is built on the limitless potential of AI. Our platform empowers developers, businesses, and creators to harness advanced generative AI to craft smarter, more personalized digital experiences."
  },
  {
    img: "/demo/icons/dreptic-f.png",
    til: "Dreptec",
    par: "The future is built on the limitless potential of AI. Our platform empowers developers, businesses, and creators to harness advanced generative AI to craft smarter, more personalized digital experiences."
  },

]

export const Feature = () => {
    return (
      <section id="section-features" className="relative py-20 bg-[#101435] text-white">
      <div className="gradient-edge-top opacity-20 absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10" >
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="subtitle s2 mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
            Why Choose Dreptec
          </div>
          <h2 className="text-4xl font-bold">Dreptec Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card idx={1} img="/demo/icons/dreptic-f.png" til="Dreptec" par="The future is built on the limitless potential of AI. Our platform empowers developers, businesses, and creators to harness advanced generative AI to craft smarter, more personalized digital experiences."/>
          
          {/* Feature 2 */}
          <Card idx={2} img="/demo/icons/flash.png" til="Lightning-Fast" par="Fast Experience near-instantaneous interactions. Dreptec's optimized infrastructure ensures your AI-powered apps respond swiftly, maintaining high user satisfaction and seamless experience."/>
          
          {/* Feature 3 */}
          <Card idx={3} img="/demo/icons/website-chat.png" til="Chatbot Integration" par="Embed smart chatbots directly into your website or social media channels. Whether serving as a customer support agent, a social media responder, or a personalized virtual assistant tailored to your unique personality."/>
          
          {/* Stats */}
          <Blue til="Clients Trust Dreptec" nums={0} nume={200} dur={3} px="" suf="+" idx={1}/>
          <Blue til="Years of Experiences" nums={0} nume={17} dur={5} px="" suf="" idx={2}/>
          <Blue til="Free trial" nums={200} nume={0} dur={3} px="$" suf="" idx={3}/>

          {/* More features */}
          <Card idx={1} img="/demo/icons/openai.png" til="OpenAI" par="Powered by the Most Advanced AI Integrate with cutting-edge OpenAI models, providing your applications with sophisticated language understanding, creativity, and contextual awareness."/>
          <Card idx={2} img="/demo/icons/youtube-chat.png" til="YouTube to Chat" par="Engage with Content like Never Before Turn YouTube videos into interactive conversations. Our “YouTube to Chat” feature enables your audience to ask questions and discuss content from channels, making learning and engagement richer and more dynamic."/>
          <Card idx={3} img="/demo/icons/mcp.png" til="MCP technology" par="Seamless connection between LLMs and external data sources or tools. Whether you're building an enhancing chat interfaces, or designing custom AI workflows, MCP offers a standardized way to connect relevant context and data to perform best."/>
        
        </div>
      </div>
    </section>
    )
}