import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ahameet",
  description: "Generated by Palawa Technology",
  icons: {icon: "/icon.png"}
};

function HomeLayout({children}: {children: ReactNode}) {
  return (
    <main className='relative overflow-x-hidden'>
      <Navbar />
      <div className='flex'>
            <Sidebar />
            <div className='flex-1 min-h-screen flex flex-col px-4 py-6 pt-[144px] max-md:pb-14 sm:px-14'>
                  <div className='w-full'>
                        {children}
                  </div>
            </div>
         
      </div>
    </main>
  )
}

export default HomeLayout