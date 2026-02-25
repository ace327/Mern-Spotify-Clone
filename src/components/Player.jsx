g
import React from 'react'
import { assets,songsData } from '../assets/assets'
import { PlayerContext } from '../context/PLayerContex';

const Player = () => {

    const {seekBar,seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className="hidden lg:flex items-center gap-4">
            <img className='w-12' src={songsData[0].image} alt="" />
            <div> 
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div> 
        </div>

        <div className="flex flex-col item-center gap-1 m-auto">

            <div className="flex gap-4">


            <img src= {assets.shuffle_icon} alt="" className="w-4 cursor-pointer" />
            <img onClick={previous} src= {assets.prev_icon} alt="" className="w-4 cursor-pointer" />
            {playStatus ? <img onClick={pause} src= {assets.pause_icon} alt="" className="w-4 cursor-pointer" />
            :             <img onClick={play} src= {assets.play_icon} alt="" className="w-4 cursor-pointer" />
             }
            <img onClick={next} src= {assets.next_icon} alt="" className="w-4 cursor-pointer" />
            <img src= {assets.loop_icon} alt="" className="w-4 cursor-pointer" />
            </div>
            <div className="flex items-center gap-5">
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div onClick={seekSong}ref={seekBg} className="w-[60vh] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                    <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
                </div>
                <p>{time.total.minute}:{time.totalTime.second}</p>
            </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 opacity-75">
            <img src={assets.play_icon} alt="" className="w-4" />
            <img src={assets.mic_icon} alt="" className="w-4" />
            <img src={assets.queue_icon} alt="" className="w-4" />
            <img src={assets.speaker_icon} alt="" className="w-4" />
            <img src={assets.volume_icon} alt="" className="w-4" />
            <div className="w-20 bg-state-50 h-1 rounded"></div>
        </div>
      
    </div>
  )
}

export default Player
