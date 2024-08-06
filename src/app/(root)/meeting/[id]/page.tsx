"use client"
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'
import { useGetCallById } from '../../../../../hooks/useGetCallById'
import Loader from '@/components/Loader'
import NavbarRoom from '@/components/NavbarRoom'

function Meeting({params}: {params: {id: string}}) {
  const {user,isLoaded} = useUser()
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const {call, isCallLoading} = useGetCallById(params.id)

  if(!isLoaded || isCallLoading) return <Loader />
  return (
    <main className='h-screen w-full max-w-screen overflow-x-hidden bg-white dark:bg-gray-900'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ): (
            <>
            <NavbarRoom />
            <MeetingRoom />
            </>
          )}
        </StreamTheme>
      </StreamCall>

    </main>
  )
}

export default Meeting