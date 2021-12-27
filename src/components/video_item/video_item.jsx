import React, { memo } from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(
  ({video, video: {snippet}, onSelect, display}) => { // 구조분해할당 - video 인에 있는 snippet 지정
    const displayType = display === 'list' ? styles.list : styles.grid
    
    return(
      <li className={`${styles.container} ${displayType}`}>
        <div 
          className={styles.video}
          onClick={() => onSelect(video)}
        >
          <img  
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt='video thumbnail'
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    )
  }
)

export default VideoItem;