import { useEffect } from 'react';
import { useState } from 'react';
import SearchInput from './components/search_input/search_input';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css'
import Youtube from './service/youtube';

function App({youtube}) {
  const [videos, setVideos] = useState([])
  const handleSearch = query => {
    youtube
      .searchVideo(query)
      .then(videos => setVideos(videos))
  }

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos))
  }, []) // Mount가 되었을 때만 호출되도록 빈 배열을 집어넣음
  


  return (
    <div className={styles.app}>
      <SearchInput onSearch={handleSearch}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
