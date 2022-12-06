import { getDividerStyles } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/UploadModal.module.css'

const UploadModal = ({
    description,
    videoUrl,
    newVideo,
    setDescription,
    setVideoUrl,
    setNewVideoShow
}) =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>Upload new video</div>
              <div className={styles.inputField}>
              <div className={styles.inputTitle}>Description</div>
              <div className={styles.inputContainer}>
                <input
                className={styles.input}
                type='text'
                valur={description}
                onChange={e=>setDescription(e.target.value)}
                />
              </div>
              </div>
              <div className={styles.inputField}>
                  <div className={styles.inputTitle}>Video Url</div>
                  <div className={styles.inputContainer}>
                    <input
                    className={styles.input}
                    type='text'
                    value={videoUrl}
                    onChange={e=>setVideoUrl(e.target.value) }/>
                  </div>
              </div>
              <div className={styles.modalButtons}>
                <button
                onClick={()=>setNewVideoShow(flase)}
                className={`${styles.button} ${styles.cancelButton}`}
                >
                  Cancel
                </button>
                <button
                onClick={()=>newVideo(true)}
                 className={`${styles.button} ${styles.createlButton}`}>
                    Create
                </button>
              </div>
        </div>
    )
}

export default UploadModal