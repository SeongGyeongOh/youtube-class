import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({ video, video:{snippet} }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <iframe 
          type="text/html" 
          width="100%" 
          title='youtube video player'
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.descriptoin}>{snippet.description}</pre>
    </section>
  )
}

export default VideoDetail;