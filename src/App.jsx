import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'

function App() {
 
  return (
    <>
     <Header></Header>
     <div className='md:flex justify-between gap-5 mt-5'>
      <Posts></Posts>
      <Bookmarks></Bookmarks>
     </div>
      
    </>
  )
}

export default App
