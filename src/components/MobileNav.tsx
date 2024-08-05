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
import { IoApps } from 'react-icons/io5';
import { ModeToggle } from './ui/theme-button';
    
function MobileNav() {
      const pathname = usePathname();
  return (
    <div className='inline-flex lg:hidden'>
      <Sheet>
  <SheetTrigger>
      <IoApps className='text-[28px]' />
  </SheetTrigger>
  <SheetContent side="left" className="border-0 bg-white dark:bg-gray-900">
    <SheetHeader>
      <SheetTitle>
      <Link href={"/"} className='flex items-center gap-3'>
            {/* <BiVideoRecording className='text-4xl text-purple-400' /> */}
            <h1 className='text-3xl font-bold'>ahameet<span className='text-[#36C2CE] font-extrabold text-[24px]'> v 1. 1. 0</span></h1>
      </Link>
      </SheetTitle>
      <SheetDescription className="h-screen pt-[50px]">
            <div className='w-full h-full flex flex-col space-y-6'>
            {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route; //|| pathname.startsWith(link.route);
                  return (
                        <Link href={link.route} key={link.label} className={cn(' flex gap-4 p-4 rounded-xl items-center justify-start', {
                              'bg-[#36C2CE] font-bold text-lg text-white': isActive,
                              'bg-transparent': !isActive,
                        })}>
                              {link.label}
                        </Link>
                  )
            })}
            <div className="p-4 flex items-center space-x-3">
                  <h1 className="text-md">Mode</h1>
                  <ModeToggle />
            </div>
            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNav