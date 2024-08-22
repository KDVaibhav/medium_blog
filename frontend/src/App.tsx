import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
<<<<<<< HEAD
          <Route path="/signin" element={<Signin/>}/>
=======
          <Route path="/" element={<Signin/>}/>
>>>>>>> 93334c2f4359a2105afedc9048aa5eeb525d8be7
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
