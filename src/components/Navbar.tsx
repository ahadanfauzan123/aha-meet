import Link from 'next/link'
import React from 'react'
import { BiVideoRecording } from "react-icons/bi";
import MobileNav from './MobileNav';
import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <div className='fixed flex justify-between items-center z-50 px-6 py-4 w-screen lg:px-10 bg-gray-800'>
      <Link href={"/"} className='flex items-center gap-3'>
            <BiVideoRecording className='text-4xl text-purple-400' />
            <h1 className='text-3xl font-bold text-white'>aha<span className='text-purple-400'>meet</span></h1>
      </Link>
      <div className='gap-5 flex items-center justify-between'>
            {/* clerk */}
            <SignedIn>
                  <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
            
            <MobileNav />
      </div>
    </div>
  )
}

export default Navbar