import { createContext, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time,setTime] = useState( {

        currentTime : {
            second: 0,
            minute: 0
        },
        totalTime: t {

            second:0,
            minute: 0
        }
    })

    const play = () => {

        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {

        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playwithId = async (id) => {

        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true)
    }

    const previous = async () => {
        if(track.id>0) {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async () => {
        if(track.id< songsData[songsData[track.id+1]]) {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }



    useEffect(() => {

        setTimeout(() => {

            audio.Ref.current.ontimeupdate =  () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duaryion*100))+"%";

                setTime({
                                                currentTime : {
                                        second: Math.floor(audioRef.current.currentTime%60),
                                        minute: Math.floor(audioRef.current.currentTime /60)
                                    },
                                    totalTime:  {

                                        second:Math.floor(audioRef.current.duration%60),
                                        minute: Math.floor(audioRef.current.duration/60)
                                    } 
                         })
                }
            },1000);
        


    },[audioRef])


    const contextValue = {

        audioRef,
        seekBAr,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playwithId,
        previous,
        next



    }


    return(

        <PlayerContext.Provider>
            {props.children}
        </PlayerContext.Provider>
    )
}



export default PlayerContextProvider