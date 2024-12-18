
import React, { ReactNode } from 'react'
import StreamVideoProvider from '../../../providers/StreamClientProvider'
import { Metadata } from 'next';
// import { ThemeProvider } from '../../../providers/UiThemeProvider';

export const metadata: Metadata = {
  title: "ahameet",
  description: "Generated by Arthaloka Technology",
  icons: {icon: "/icon.png"}
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    
      <main className='overlow-x-hidden'>
        <StreamVideoProvider>
          {children}
        </StreamVideoProvider>
      </main>
  )
}

export default RootLayout