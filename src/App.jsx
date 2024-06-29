import { useState } from 'react';
import './App.css';
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  const handleBookmarks = SingleBookmark => {
    const newBookmarks = [...bookmarks, SingleBookmark];
    setBookmarks(newBookmarks);
  }

  const handleTime = newTime =>{
    const addTime = newTime +time;
    setTime(addTime);
  
  }
  const handleModify = modifyId =>{
    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id!==modifyId);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
     <Header></Header>
     <div className='md:flex justify-between gap-5 mt-5'>
      <Posts
      handleBookmarks={handleBookmarks}
      handleTime={handleTime}
      handleModify={handleModify}
      ></Posts>
      <Bookmarks
      time={time}
      bookmarks={bookmarks}
      
      ></Bookmarks>
     </div>
    
    </>
  )
}

export default App
