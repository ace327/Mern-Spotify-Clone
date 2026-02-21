import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center font-semibold '>
        <div className="flex items-cener gap-2">
            <img src={assets.arrow_left} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
            <img src={assets.arrow_right} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
            <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2x1 hidden md:block  cursor-pointer"></p>
            <p className="bg-black p-1 px-3 rounded-2xl text-[15px] cursor-pointer">Install App</p>
        </div>
      
    </div>
  )
}

export default Navbar
