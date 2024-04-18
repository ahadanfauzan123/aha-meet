"use client"
import React from 'react'
import {
      Sheet,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet"

    import { FaBars } from "react-icons/fa6";
import Link from 'next/link';
import { BiVideoRecording } from 'react-icons/bi';
import { sidebarLinks } from '../../constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
    
function MobileNav() {
      const pathname = usePathname();
  return (
    <div className='inline-flex lg:hidden text-white'>
      <Sheet>
  <SheetTrigger>
      <FaBars className='text-xl' />
  </SheetTrigger>
  <SheetContent side="left" className="border-0 bg-gray-700">
    <SheetHeader>
      <SheetTitle>
      <Link href={"/"} className='flex items-center gap-3'>
            <BiVideoRecording className='text-4xl text-purple-400' />
            <h1 className='text-3xl font-bold text-white'>aha<span className='text-purple-400'>meet</span></h1>
      </Link>
      </SheetTitle>
      <SheetDescription className="h-screen">
            <div className='w-full h-full'>
            {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route; //|| pathname.startsWith(link.route);
                  return (
                        <Link href={link.route} key={link.label} className={cn(' flex gap-4 p-4 rounded-xl items-center justify-start', {
                              'bg-gradient-to-tr from-purple-400 to-pink-400 font-semibold text-lg': isActive,
                              'bg-transparent': !isActive,
                        })}>
                              {link.label}
                        </Link>
                  )
            })}
            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNav