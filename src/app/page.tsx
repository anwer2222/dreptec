import { Action } from '@/components/Action'
// import { Demo } from '@/components/Demo'
import { Feature } from '@/components/Feature'
import { Hero } from '@/components/Hero'
import Integrations from '@/components/Integrations'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="dark bg-gray-900 min-h-screen relative overflow-x-hidden">
      {/* Scroll to top and scrollbar placeholders */}
      <div className="fixed bottom-4 left-4 z-50 hidden dark">
        <a href="#top" className="text-sm underline">Scroll to top</a>
      </div>
      <div className="fixed right-0 top-0 h-0 w-1 bg-gray-700 dark:hidden"></div>

      {/* Page preloader (hidden by default) */}
      {/* You can implement loading logic if needed */}
      
      

      {/* Content */}
      <main id="content" className="no-top no-bottom">
        <div id="top" />

        {/* Hero Section */}
        <Hero/>

        {/* Features Section */}
        <Feature/>
        <Integrations/>

        {/* Demo Preview Section  <Demo/>*/}
        

        {/* Call to Action Section */}
        <Action/>
      </main>

      {/* Buy Now floating button */}
      <div className="fixed bottom-10 right-10 z-50 hidden">
        <a
          href="https://themeforest.net/item/aivent-ai-event-conference-and-meetup-website-template/58402469"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-buy flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
        >
          <span>Buy on</span>
          <Image src="/demo/envato.svg" alt="Envato" width={80} height={24} />
        </a>
      </div>
      
    </div>
  )
}