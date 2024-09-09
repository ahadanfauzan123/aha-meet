"use client"
import { cn } from '@/lib/utils';
import { CallControls, CallParticipantsList, CallStatsButton, CallingState, PaginatedGridLayout, SpeakerLayout, useCallStateHooks, } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
import { LayoutList, Users } from 'lucide-react';
import { redirect, useSearchParams } from 'next/navigation';
import EndCallButton from './EndCallButton';
import Loader from './Loader';
import { MdControlPointDuplicate } from "react-icons/md";
import { IoClose } from "react-icons/io5";
    

type CallLayoutType = 'grid' | 'speaker left' | 'speaker right' | 'speaker top' | 'speaker bottom';


function MeetingRoom() {
      const searchParams = useSearchParams()
      const isPersonalRoom = !!searchParams.get('personal')
      const [layout, setLayout] = useState<CallLayoutType>("speaker right")
      const [showParticipants, setShowParticipants] = useState(false)
      const [showControls, setShowControls] = useState(false)
      const { useCallCallingState } = useCallStateHooks();
      const callingState = useCallCallingState()
      if(callingState !== CallingState.JOINED) {
            // if (callingState === CallingState.) {
            //       return redirect('/')
            // }
            return <Loader />
      }
      const CallLayout = () => {
            switch (layout) {
                  case "grid":
                        return <PaginatedGridLayout pageArrowsVisible={true} />
                  case "speaker right" :
                        return <SpeakerLayout participantsBarPosition="left" />
                  case "speaker top" :
                        return <SpeakerLayout participantsBarPosition="top" />
                  case "speaker bottom" :
                        return <SpeakerLayout participantsBarPosition="bottom" />
                  default :
                        return <SpeakerLayout participantsBarPosition="right" />
            }
      }
  return (
    <div className=' h-fit w-full overflow-hidden pt-4 text-white'>
      <div className='flex relative size-full items-center justify-center'>
            <div className='flex size-full max-w-[1000px] px-6 mb-4 self-center'>
            <CallLayout />
            </div>
            <div className={cn("h-[calc(100vh-86px)] hidden ml-2", { 'show-block': showParticipants })}>
            <CallParticipantsList onClose={() => setShowParticipants(false)} />
            </div>
      </div>
      {/* call controll */}
      {/* <div className='fixed bottom-2 w-full'>
            <div className="mx-auto w-[90%] lg:w-[65%] flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 bg-gray-100 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-75 rounded-full py-2 px-6">
                  <CallControls />
                  <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#36C2CE] dark:bg-[#36C2CE] bg-opacity-75 px-4 py-2">
                              <div className='flex items-center'>
                                    <LayoutList size={20} className="text-white" />
                              </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                              {['Grid', 'Speaker Left',  'Speaker Right', 'Speaker Bottom', 'Speaker Top'].map((item, index) => (
                                    <div key={index}>
                                          <DropdownMenuItem onClick={()=>{
                                                setLayout(item.toLowerCase() as CallLayoutType)
                                          }}>
                                                {item}
                                          </DropdownMenuItem>
                                          <DropdownMenuSeparator />
                                    </div>
                              ))}
                        </DropdownMenuContent>
                  </DropdownMenu>
                  {isPersonalRoom && <CallStatsButton/>}
                  <button onClick={() => setShowParticipants (( prev ) => !prev)}>
                        <div className='cursor-pointer rounded-2xl bg-dark-1 px-4 py-2'>
                              <Users size={20} className='text-white' />
                        </div>
                  </button>
                  {!isPersonalRoom && <EndCallButton />}
            </div>
            
      </div> */}
      <button onClick={() => setShowControls(true)} className={`${showControls ? "hidden" : "absolute right-3 bottom-4 z-50"}  cursor-pointer rounded-2xl bg-[#36C2CE] dark:bg-[#36C2CE] px-4 py-2 flex items-center justify-center space-x-2`}>
            <MdControlPointDuplicate className='text-white text-xl' />
            <span className="text-white">Controls</span>
      </button>
      <div className='fixed bottom-2 w-full'>
            {/* <div className="mx-auto w-[90%] lg:w-[65%] flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 bg-gray-100 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-75 rounded-full py-2 px-6"> */}
                  <div className={cn("relative transition-all duration-300 ease-linear mx-auto w-[90%] lg:w-[65%] flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 bg-gray-100 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-75 rounded-full py-2 px-6", {
                        "opacity-0 pointer-events-none": !showControls,
                        "opacity-100": showControls
                  })}>
                        <CallControls />
                        <DropdownMenu>
                              <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#36C2CE] dark:bg-[#36C2CE] bg-opacity-75 px-4 py-2">
                                    <div className='flex items-center'>
                                          <LayoutList size={20} className="text-white" />
                                    </div>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                    {['Grid', 'Speaker Left',  'Speaker Right', 'Speaker Bottom', 'Speaker Top'].map((item, index) => (
                                          <div key={index}>
                                                <DropdownMenuItem onClick={()=>{
                                                      setLayout(item.toLowerCase() as CallLayoutType)
                                                }}>
                                                      {item}
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                          </div>
                                    ))}
                              </DropdownMenuContent>
                        </DropdownMenu>
                        {isPersonalRoom && <CallStatsButton/>}
                        {/* <button onClick={() => setShowParticipants (( prev ) => !prev)}>
                              <div className='cursor-pointer rounded-2xl bg-dark-1 px-4 py-2'>
                                    <Users size={20} className='text-white' />
                              </div>
                        </button> */}
                        {!isPersonalRoom && <EndCallButton />}
                        <button onClick={() => setShowControls(false)} className={`cursor-pointer absolute right-4 h-full flex items-center`}>
                              <IoClose className="text-gray-700 dark:text-gray-100 text-2xl" />
                        </button>
                  </div>
            {/* </div> */}
            
      </div>
    </div>
  )
}

export default MeetingRoom