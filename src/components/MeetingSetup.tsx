"use client"
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'



function MeetingSetup({setIsSetupComplete}: {setIsSetupComplete: (value: boolean) => void}) {
      const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)
      const call = useCall()
      if(!call) {
            throw new Error("Must Be use Within Stream Component")
      }
      useEffect(() => {
            if(isMicCamToggledOn) {
                  call?.camera.disable();
                  call?.microphone.disable();
            } else {
                  call?.camera.enable();
                  call?.microphone.enable();

            }
        
      }, [isMicCamToggledOn, call?.camera, call?.microphone])
      
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <div className=' rounded-2xl w-full lg:w-[60%] min-h-[400px] flex items-center justify-center mx-auto'>
            <VideoPreview  className='rounded-2xl w-full h-full object-cover flex items-center justify-center' />
      </div>
      <div className='flex h-16 items-center justify-center gap-3'>
            <label className='flex items-center justify-center gap-2 font-medium'>
                  <input type='checkbox'
                  checked={isMicCamToggledOn}
                  onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
                  />
                  Gabung Tanpa Mic dan Kamera
            </label>
            <DeviceSettings />
      </div>
      <Button onClick={() => {
            call.join();
            setIsSetupComplete(true)
      }} className='rounded-md bg-[#36C2CE] dark:bg-[#36C2CE] px-4 py-3 text-white'>
            Gabung Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup