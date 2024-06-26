
import React, { ReactNode } from 'react'
import StreamVideoProvider from '../../../providers/StreamClientProvider'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ahameet v1",
  description: "Generated by Palawa Technology",
  icons: {icon: "/icon.png"}
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout