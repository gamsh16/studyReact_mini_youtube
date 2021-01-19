import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query)
    .then(videos => setVideos(videos));
  };

  useEffect(() => {
    console.log('useEffect');
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, []);


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}></SearchHeader>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
