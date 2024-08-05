import Link from 'next/link'
import React from 'react'
import { BiVideoRecording } from "react-icons/bi";
import MobileNav from './MobileNav';
import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ModeToggle } from './ui/theme-button';
import Image from 'next/image';
import LogoLight from "../../public/logoLight.png"
import LogoDark from "../../public/logoDark.png"

function Navbar() {
  return (
    <div className='fixed flex justify-between items-center z-50 px-6 py-8 w-screen lg:px-10 bg-gray-50 dark:bg-gray-900'>
      <Link href={"/"} className='flex items-center gap-3'>
            {/* <BiVideoRecording className='text-4xl text-purple-400' /> */}
            <Image src={LogoLight} alt="..." height={1000} width={1000} className='inline-flex dark:hidden w-12 h-12' />
            <Image src={LogoDark} alt="..." height={1000} width={1000} className='hidden dark:inline-flex w-12 h-12' />
            <h1 className='text-3xl font-bold text-gray-600 dark:text-gray-100'>ahameet<span className='text-[#36C2CE] font-extrabold text-[24px]'> v 1. 1. 0</span></h1>
      </Link>
      <div className='gap-5 flex items-center justify-between'>
            {/* clerk */}
            <SignedIn>
                  <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
            <div className='hidden lg:inline-flex'>
            <ModeToggle />
            </div>
            
            <MobileNav />
      </div>
    </div>
  )
}

export default Navbar