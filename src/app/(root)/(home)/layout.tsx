import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

function HomeLayout({children}: {children: ReactNode}) {
  return (
    <main className='relative text-white'>
      <Navbar />
      <div className='flex'>
            <Sidebar />
            <div className='flex-1 min-h-screen flex flex-col px-4 py-6 pt-28 max-md:pb-14 sm:px-14'>
                  <div className='w-full'>
                        {children}
                  </div>
            </div>
      </div>
    </main>
  )
}

export default HomeLayout