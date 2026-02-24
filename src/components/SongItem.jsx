import React from 'react'
import { albumsData } from '../assets/assets'
import { PlayerContext } from '../context/PLayerContex'

const SongItem = ({name, image, desc, id}) => {

  const {playWithId} - useContext(PlayerContext)



  return (
    <div onclick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
    <p className="text-white">
        <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
        <img src={item.image} alt="" />
        </p> 
        <p className='text-[15px'>{albumsData.name }</p>
        <p className='text-[15px]  hidden sm:block'>5 Days ago</p>
        <p className='text-[15px] text-center '>{item.duration}</p>
        
    </div>
  )
}

export default SongItem
