"use client"
import { motion } from 'framer-motion';
import { Card } from './Uitls';
import { fadeInUpSpring } from '@/motion/motionVariants';
import Button from './Button';

export const Hero = () => {

  return (
    <section
      className="relative py-32 bg-gray-900 text-white"
      style={{
        backgroundImage: 'url(/demo/bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="subtitle mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
           Terms of Service
        </div>
        <h1 className="text-1xl font-extrabold mb-6">
          At Dreptec, The Terms of Service ("Terms") govern your access to and use of Dreptec&apos;s products, services, and technologies, including our website, applications, APIs, and integrations. By using Dreptec, you agree to be bound by these Terms.
        </h1>
      </div>
    </section>
  )
}

export const Features = () => {

  return (
    <section id="section-features" className="relative py-20 bg-[#101435] text-white">
      <div className="gradient-edge-top opacity-20 absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10" >
        {/* Feature 1 */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="subtitle s2 mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
            Learn more
          </div>
          <h2 className="text-4xl font-bold">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card idx={1} img="/demo/icons/dreptic-f.png" til="AI-Driven Apps" par="We help you embed intelligent chatbots, conversational agents, and interactive content tools into your websites and social platforms." />
          <Card idx={2} img="/demo/icons/relible.png" til="Open Protocols" par="Utilizing MCP, we offer standardized ways to connect large language models with external data sources and tools, making AI more adaptable and context-aware." />
          <Card idx={3} img="/demo/icons/content.png" til="Content & Data" par="We facilitate rapid, efficient access to relevant external information, ensuring your AI models operate with up-to-date and comprehensive data." />
          <Card idx={4} img="/demo/icons/website-chat.png" til="Innovation and Automation" par="Our solutions aim to simplify operational tasks, automate routine processes, and provide instant, meaningful responses across various applications." />

        </div>
      </div>
    </section>
  )
}

export const Mission = () => {

  return (
    <section
      className="relative py-32 bg-gray-900 text-white"
      style={{
        backgroundImage: 'url(/demo/bg-2.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="subtitle mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
          Our Mission
        </div>
        <h1 className="text-1xl font-extrabold mb-6">
          Our mission is to empower developers, organizations, and creators to unlock the full potential of generative AI. We strive to provide seamless, scalable, and customizable tools and protocols that enable the creation of smarter applications, more engaging interactions, and innovative workflows.
        </h1>

      </div>
    </section>
  )
}


export const Values = () => {

  return (
    <section id="section-features" className="relative py-20 bg-[#101435] text-white">
      <div className="gradient-edge-top opacity-20 absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10" >
        <div className="text-center max-w-xl mx-auto my-12">
          <h2 className="text-4xl font-bold">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <Card idx={1} img="/demo/icons/ai-cpu.png" til="Innovation" par="Continually pushing the boundaries of AI technology to deliver next-generation solutions." />
          <Card idx={2} img="/demo/icons/flash.png" til="Accessibility" par="Making advanced AI tools available and easy to implement for everyone." />
          <Card idx={3} img="/demo/icons/cob.png" til="Collaboration" par="Partnering with clients and communities to foster shared growth and success." />
          <Card idx={4} img="/demo/icons/relible.png" til="Reliability" par="Building dependable solutions that customers can trust." />
        </div>
      </div>
    </section>
  )
}


export const Discover = () => {

  return (
    <section
      className="relative py-32 bg-gray-900 text-white"
      style={{
        backgroundImage: 'url(/demo/bg-2.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="subtitle mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
        📬 Contact Us
        </div>
        <h1 className="text-1xl font-extrabold mb-6">
          If you have any questions or concerns about these Terms, please contact.
        </h1>

        {/* btn */}
        <motion.div
          variants={fadeInUpSpring(0.6, 0.8)}
          initial="hidden"
          whileInView="visible"
        >
          <Button />
        </motion.div>
      </div>
    </section>
  )
}

