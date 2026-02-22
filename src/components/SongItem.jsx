import React from 'react'
import { albumsData } from '../assets/assets'

const SongItem = () => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
    <p className="text-white">
        <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
        <img src={item.image} alt="" />
        </p> 
        <p>{album.item}</p>
        
    </div>
  )
}

export default SongItem
