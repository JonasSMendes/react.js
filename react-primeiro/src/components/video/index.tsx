import { useEffect, useRef } from "react"


type props = {
    src: string
    inplayer:boolean    
}

export const VideoPlayer = ({src , inplayer}: props) =>{

    const videoTag = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(inplayer){
            videoTag.current?.play();
        }else{
            videoTag.current?.pause();
        }
    })

    return(
        <>
            <video ref={videoTag} loop playsInline src={src} ></video>
        </>
    )
}