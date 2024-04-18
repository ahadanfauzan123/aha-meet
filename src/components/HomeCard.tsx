"use client"
import React, { useState } from 'react'
interface Props {
      className: string;
      name: string;
      handleClick: () => void
}
function HomeCard({handleClick, className,name}: Props) {
  return (
    <div onClick={handleClick} className={`h-[185px] w-[48%] ${className} flex items-center justify-center`}>
      <h1 className='text-md font-semibold'>{name}</h1>
    </div>
  )
}

export default HomeCard