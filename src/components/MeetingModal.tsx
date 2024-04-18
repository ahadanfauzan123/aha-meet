import React, { ReactNode } from 'react'
import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';


interface Props {
      className?: string;
      title: string;
      buttonText?: string;
      handleClick?: () => void;
      isOpen: boolean;
      onClose: () => void;
      children?: ReactNode;
}
function MeetingModal({ className, title, buttonText, handleClick, isOpen, onClose, children }: Props) {
  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='flex w-full max-w-[520px] border-none flex-col gap-6 bg-dark-1 px-6 py-9 text-white'>
            <div className='flex flex-col gap-6'>
                  <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
                        {title}
                  </h1>
                  {children}
                  <Button className='bg-purple-500 ring-0 outline-0' onClick={handleClick}>
                        {buttonText || "Schedule Meeting"}
                  </Button>
            </div>
      </DialogContent>
    </Dialog>
    
  )
}

export default MeetingModal