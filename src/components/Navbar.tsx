import React from 'react'
import { IoMdSunny } from "react-icons/io";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='sticky top-0 left-0 bg-white z-50 shadow-sm'> <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <p className='flex items-center justify-center gap-2'><h2 className='text-gray-500 text-3xl'>Weather</h2><IoMdSunny className='text-3xl mt-1 text-yellow-300' /></p>
        <section className='flex gap-2 items-center'><MdOutlineMyLocation className='text-xl text-gray-400 hover:opacity-80 cursor-pointer'/>
        <FaLocationDot className='text-3xl'/>
        <p className='text-slate-900/80 text-sm'>Neuss</p>
        <div><SearchBox /></div>
        </section>
        </div>Navbar</div>
  )
}