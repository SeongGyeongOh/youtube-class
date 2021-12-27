import { useEffect } from 'react';
import { useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyAltfsrOvONgSUawBJ-S21X6AsC7p4aRes", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
       .catch(error => console.log('error', error));
  }, []) // Mount가 되었을 때만 호출되도록 빈 배열을 집어넣음

  return (
    <VideoList videos={videos}/>
  );
}

export default App;
