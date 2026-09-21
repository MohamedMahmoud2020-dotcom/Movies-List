import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Home.css"
import { searchMovies, fetchMovies } from '../services/api'
const Home = () => {

    const [searchQuery, setSearchQuery] = React.useState("")
    const [movies, setMovies] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true)
        try{
            const data = await searchMovies(searchQuery)
            setMovies(data)
            setError(null)
        }
        catch(err){
            console.log(err)
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        const loadMovies = async () => {
            try{
                const data = await fetchMovies()
                setMovies(data)
            }
            catch(err){
                console.log(err)
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        loadMovies()
    }, [])
    
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" 
            placeholder='Search for movies...'
            value={searchQuery}
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>
        {error && <p className='error-message'>{error}</p>}
        {loading ? <p className='loading'>Loading...</p> : 
            <div className='movies-grid'>
            {movies.map((item) => 
                <MovieCard key={item.id} movie={item} />
            )}
        </div>
        }
        
    </div>
  )
}

export default Home