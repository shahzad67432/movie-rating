import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Blogs/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App