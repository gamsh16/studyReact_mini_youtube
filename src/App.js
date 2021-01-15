import logo from './logo.svg';
import './App.css';
import SearchHeader from './components/searchHeader';
import { useCallback, useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyAT5tgfFV6WFtvuobsxhQamzWTv-5cTZpM", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []);


  return (
    <VideoList videos={videos}/>
  );
}

export default App;
