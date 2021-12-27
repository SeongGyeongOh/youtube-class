import { useEffect } from 'react';
import { useState } from 'react';
import SearchInput from './components/search_input/search_input';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail';
import { useCallback } from 'react';

function App({youtube}) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  // useCallback : 콜백 함수를 메모리에 저장 - 여러번 re-render 되지 않도록!!!
  // 한 번 만들어지면 계속 메모리에 남아있기 때문에 꼭 필요한 경우에만 사용해야 함
  const handleSearch = useCallback(query => {
    youtube
      .searchVideo(query)
      .then(videos => {
          setVideos(videos)
          setSelectedVideo(null)
        })
  }, [youtube])

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos))
  }, [youtube]) // Mount가 되었을 때만 호출되도록 빈 배열을 집어넣음
  
  const handleSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className={styles.app}>
      <SearchInput onSearch={handleSearch}/>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/> 
          </div>
        )}
        <div className={styles.list}>
          {/* 직접 className 지정이 불가능함으로 div로 한 번 감쌀것*/}
          <VideoList videos={videos} onSelect={handleSelect} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
