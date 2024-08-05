"use client"
import React from 'react'
import { sidebarLinks } from '../../constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function Sidebar() {
      const pathname = usePathname()
  return (
    <div className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-gray-50 dark:bg-gray-900 p-6 pt-28 max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-col gap-6'>
            {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                  return (
                        <Link href={link.route} key={link.label} className={cn(' flex gap-4 p-4 rounded-xl items-center justify-start', {
                              'bg-[#36C2CE] text-white font-bold text-lg': isActive,
                              'bg-transparent': !isActive,
                        })}>
                              {link.label}
                        </Link>
                  )
            })}
      </div>
      
    </div>
  )
}

export default Sidebar