import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='sticky top-0 left-0 bg-white z-50 shadow-sm'> <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <p className='flex items-center justify-center gap-2'><h2 className='text-gray-500 text-3xl'>Weather</h2></p></div>Navbar</div>
  )
}