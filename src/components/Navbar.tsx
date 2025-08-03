"use client"

import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";


interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}


const NavbarSidebar = ({ open,onOpenChange} : Props) => {
    const items = [
        {
            href: "/",
            children: "Home"
        },
        // {
        //     href: "/#section-features",
        //     children: "Features"
        // },
        {
            href: "/price",
            children: "price"
        },
        {
            href: "/about",
            children: "Abour"
        }
    ]

    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="left"
          className="p-0 transition-none bg-[#101435] text-white"
          >
          <SheetHeader className="p-4 border-b items-center justify-center">
            <Image src="/logo_h.png" width={150} height={150} alt=""/>
          <div className="flex items-center">
              <SheetTitle className="text-white">
                Menu
              </SheetTitle>
          </div>
          </SheetHeader>
          <ScrollArea>
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => onOpenChange(false)} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                  {item.children}
              </Link>
            ))}
            <div className="border-t">
              {/* <Link href="/police" onClick={() => onOpenChange(false)} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
               Log in
              </Link>
              <Link href="/sign-up" onClick={() => onOpenChange(false)} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
               Start listing
              </Link> */}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>  
    )
}

export default NavbarSidebar