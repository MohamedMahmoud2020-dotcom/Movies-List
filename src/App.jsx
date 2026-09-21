import './css/App.css'
import MovieCard from './components/MovieCard'
import Favorities from './pages/Favorities'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { MoviesProvider } from './context/MoviesContext'
function App() {
  return (
    <MoviesProvider>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorities' element={<Favorities/>}/>
        </Routes>
      </main>
    </MoviesProvider>
  )
}

export default App
