"use client"
import HomeCard from '@/components/HomeCard'
import MeetingModal from '@/components/MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"


function Home() {
  const router = useRouter()
  const { toast } = useToast()
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: ""
  })
  const [callDetails, setCallDetails] = useState<Call>()

  const now = new Date()
  const time = now.toLocaleTimeString('id-ID', {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
  const date = (new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full"
  })).format(now)

  const user = useUser();
  const client = useStreamVideoClient();
  
  const createMeeting = async () => {
    if(!client || !user) return
    try {
        if(!values.dateTime) {
          toast({
            title: "💀 Mohon Untuk Memilih Waktu"
          })
          return
          
        }
        const id = crypto.randomUUID()
        const call = client.call('default', id);
        if(!call) throw new Error("gagal membuat call")
        const startAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
        const description = values.description || "instant meeting"
        await call.getOrCreate({
          data: {
            starts_at: startAt,
            custom: {
              description
            }
          }
        })
        setCallDetails(call)
        if(!values.description) {
          router.push(`/meeting/${call.id}`)
        }
        toast({
          title: "✅ Room Dibuat"
        })
      }catch(error) {
      console.log(error)
        toast({
          title: "💀 Gagal Membuat Room"
        })
    }
  }

  return (
  
    <div className='flex size-full flex-col gap-10 text-white'>
      {/* body */}
      <div className='w-full flex flex-col lg:flex-row sm:items-start sm:justify-between '>
        {/* left/top */} 
        <div className='flex flex-col justify-between p-5 bg-gradient-to-tr from-[#77E4C8] to-[#36C2CE] lg:w-[40%] h-[400px] rounded-xl'>
          <h1 className='text-lg font-semibold'>Welcome Back!</h1>
          <h1 className='text-5xl font-semibold'>{time}</h1>

        </div>
        {/* right/bottom */}
        <div className='w-full lg:w-[50%] flex flex-col space-y-3 pt-[50px] lg:pt-0'>
          {/* 1 */}
          <div className='w-full flex flex-col lg:flex-row items-start justify-end gap-x-3 gap-y-4 lg:gap-y-0'>
            <HomeCard handleClick={() => setMeetingState('isInstantMeeting')} className="w-full lg:w-[50%] bg-gray-200 dark:bg-gray-600 dark:text-gray-100 hover:bg-[#36C2CE] dark:hover:bg-[#36C2CE] transition-all duration-200 ease-in text-gray-700 hover:text-white cursor-pointer rounded-2xl lg:rounded-br-none lg:rounded-tr-none" name='new meeting'  />
            <HomeCard handleClick={() => setMeetingState('isJoiningMeeting')} className="w-full lg:w-[50%] bg-gray-200 dark:bg-gray-600 dark:text-gray-100 hover:bg-[#36C2CE] dark:hover:bg-[#36C2CE] transition-all duration-200 ease-in text-gray-700 hover:text-white cursor-pointer rounded-2xl lg:rounded-bl-none lg:rounded-tl-none" name='Previous'  />
          </div>
          {/* 2 */}
          <div className='w-full flex flex-col lg:flex-row items-start justify-end gap-x-3 gap-y-4 lg:gap-y-0'>
            <HomeCard handleClick={() => setMeetingState('isScheduleMeeting')} className="w-full lg:w-[50%] bg-gray-200 dark:bg-gray-600 dark:text-gray-100 hover:bg-[#36C2CE] dark:hover:bg-[#36C2CE] transition-all duration-200 ease-in text-gray-700 hover:text-white cursor-pointer rounded-2xl lg:rounded-tr-none lg:rounded-br-none" name='Schedule'  />
            <HomeCard handleClick={() => router.push('/recordings')} className="w-full lg:w-[50%] bg-gray-200 dark:bg-gray-600 dark:text-gray-100 hover:bg-[#36C2CE] dark:hover:bg-[#36C2CE] transition-all duration-200 ease-in text-gray-700 hover:text-white cursor-pointer rounded-2xl lg:rounded-tl-none lg:rounded-bl-none" name='Recordings'  />
          </div>
        </div>
      </div>
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </div>
  )
}

export default Home