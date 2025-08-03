"use client"
import Image from 'next/image'
import Link from "next/link"
import Button from './Button'
import {Button as Bun} from './ui/button'
import { useState } from 'react';
import NavbarSidebar from './Navbar';
import { MenuIcon } from 'lucide-react';
import Form from './Form'


export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let [open, setOpen] = useState(false);
    return (
        <header className="bg-[#101435] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div id="logo">
              <Link href="/" className="flex items-center space-x-2">
                  <Image src="/dreptec_logo_ww.png" alt="Dreptec Logo" width={170} height={60} className="block" />
              </Link>
            </div>

            {/* Menu */}
            <nav className="hidden lg:block">
              <ul id="mainmenu" className="flex space-x-8 text-white uppercase font-semibold">
                <Link href="/" className="menu-item hover:text-indigo-400">Home</Link>
                {/* <Link href="/#section-features" className="menu-item hover:text-indigo-400">Features</Link> */}
                <Link href="/price" className="menu-item hover:text-indigo-400">Prices</Link>
                <Link href="/about" className="menu-item hover:text-indigo-400">About</Link>
              </ul>
            </nav>
            
            <div className='hidden lg:block'>
            {/* <Button btnText="Contact us"/> */}
            <Form/>
            {/* Buy Now Button */}
            <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
            </div>
            <div className="flex lg:hidden items-center justify-center">
            <Bun
              variant="ghost"
              className="size-12 border-transparent text-white"
              onClick={() => setIsSidebarOpen(true)}
              >
                <MenuIcon/>
            </Bun>

           </div>
          </div>
        </div>
        
      </header>
    )
}