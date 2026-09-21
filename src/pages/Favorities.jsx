import React from 'react'
import "../css/Favorites.css"
import { useMoviesContext } from '../context/MoviesContext'
import MovieCard from '../components/MovieCard'
const Favorities = () => {

  const {favoriteMovies} = useMoviesContext()
  
  if(favoriteMovies.length > 0){
    return (
      <div className='favorites'>
        <h2>My Favorite Movies</h2>
      <div className='movies-grid'>
            {favoriteMovies.map((item) => 
                <MovieCard key={item.id} movie={item} />
            )}
        </div>
        </div>
    )
  }
  return (
    <div className='favorites-empty'>
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorities and they will appear here </p>
    </div>
  )
}

export default Favorities