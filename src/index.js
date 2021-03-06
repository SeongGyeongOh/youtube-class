import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import YoutubeFetch from './service/youtube-axios';
import YoutubeAxios from './service/youtube-axios';
import axios from 'axios';

// const youtube = new YoutubeFetch(process.env.REACT_APP_YOUTUBE_API_KEY)
const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {key: process.env.REACT_APP_YOUTUBE_API_KEY, type: 'video'},
})

const youtube = new YoutubeAxios(httpClient)

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);

