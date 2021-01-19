import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import { useCallback, useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {

  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyAT5tgfFV6WFtvuobsxhQamzWTv-5cTZpM&q=${query}`;

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    console.log('useEffect');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&type=video&key=AIzaSyAT5tgfFV6WFtvuobsxhQamzWTv-5cTZpM", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []);


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}></SearchHeader>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
