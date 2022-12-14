import { TransactionExpiredTimeoutError } from '@solana/web3.js'
import React from 'react'
import {useRef ,useState} from 'react'
import styles from "../styles/Video.module.css"
import Comments from '../components/Comments'
const Video= ({
    address,
    url,
    channel,
    description,
    index,
    likes,
    shares,
    likeVideo,
    likesAddress,
    createComment,
    getComments,
    commentCount,
})=>{

    const[playing,setPlaying]=useState(false)
    const[showCommentsModal,setShowCommentsModal] = useState(false)
    const videoRef= useRef(null)

    const onVideoPress = () =>{

        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

    const hideComments = () =>{
        setShowCommentsModal(false)
    }

    const showComments = () =>{
        setShowCommentsModal(true)
    }



    return(
        <div className={styles.wrapper}>
           <video
            className={styles.videoPlayer}
            onClick={onVideoPress}
            ref={videoRef}
            src={url}
            style={{objectFit:'cover'}}
            />

            {/*Footer */}

            {/*Sidebar */}

            {showCommentsModal &&(
                <Comments/>
            ) }
        </div>
    )
}

export default Video