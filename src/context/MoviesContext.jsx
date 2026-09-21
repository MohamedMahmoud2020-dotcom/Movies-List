import { useContext, createContext, useState, useEffect } from "react";


const MoviesContext = createContext();
export const useMoviesContext = () => useContext(MoviesContext);
export const MoviesProvider = ({children}) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoriteMovies");
        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
        } 
    }, [])

    useEffect(() => {
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    const addToFavorites = (movie) => {
        setFavoriteMovies((prev) => [...prev, movie])
    }

    const removeFromFavorites = (movie) =>{
        setFavoriteMovies((prev) => prev.filter((item) => item.id !== movie.id))
    }

    const isFavorite = (movie) => {
        return favoriteMovies.some((favMovie) => favMovie.id === movie.id);
    }

    const value = {
        favoriteMovies,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}