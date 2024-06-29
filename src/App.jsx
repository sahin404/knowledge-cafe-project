import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  const handleBookmarks = bookmarksTitle => {
    const newBookmarks = [...bookmarks, bookmarksTitle];
    setBookmarks(newBookmarks);
    
  }

  const handleTime = blogTime =>{
    setTime(time+blogTime);
  }
 
  return (
    <>
     <Header></Header>
     <div className='md:flex justify-between gap-5 mt-5'>
      <Posts
      handleBookmarks={handleBookmarks}
      handleTime={handleTime}
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
