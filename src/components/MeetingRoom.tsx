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
import { useSearchParams } from 'next/navigation';
import EndCallButton from './EndCallButton';
import Loader from './Loader';
    

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

function MeetingRoom() {
      const searchParams = useSearchParams()
      const isPersonalRoom = !!searchParams.get('personal')
      const [layout, setLayout] = useState<CallLayoutType>("speaker-left")
      const [showParticipants, setShowParticipants] = useState(false)
      const { useCallCallingState } = useCallStateHooks();
      const callingState = useCallCallingState()
      if(callingState !== CallingState.JOINED) return <Loader />
      const CallLayout = () => {
            switch (layout) {
                  case "grid":
                        return <PaginatedGridLayout />
                  case "speaker-right" :
                        return <SpeakerLayout participantsBarPosition="left" />
                  default :
                        return <SpeakerLayout participantsBarPosition="right" />
            }
      }
  return (
    <div className='relative h-screen w-full overflow-hidden pt-4 text-white'>
      <div className='flex relative size-full items-center justify-center'>
            <div className='flex size-full max-w-[1000px]'>
            <CallLayout />
            </div>
            <div className={cn("h-[calc(100h-86px)] hidden ml-2", { 'show-block': showParticipants })}>
            <CallParticipantsList onClose={() => setShowParticipants(false)} />
            </div>
      </div>
      <div className='fixed bottom-0 flex w-full items-center justify-center gap-5'>
            <CallControls />

            <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-purple-500 bg-opacity-75 px-4 py-2 hover:bg-purple-700">
                        <div className='flex items-center'>
                              <LayoutList size={20} className="text-white" />

                        </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                        {['Grid', 'Speaker Left',  'Speaker Right'].map((item, index) => (
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
            <CallStatsButton />
            <button onClick={() => setShowParticipants (( prev ) => !prev)}>
                  <div className='cursor-pointer rounded-2xl bg-dark-1 px-4 py-2'>
                        <Users size={20} className='text-white' />
                  </div>
            </button>
            {!isPersonalRoom && <EndCallButton />}
            
      </div>
    </div>
  )
}

export default MeetingRoom