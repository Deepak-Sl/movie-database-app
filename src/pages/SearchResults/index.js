import './index.css'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import MovieCard from '../../components/MovieCard'

const API_KEY = 'e971ccc00afed9429b95fd5047cca504'

const SearchResults = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('query')

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!query) return

    const fetchSearchResults = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
        )
        const data = await res.json()
        setMovies(data.results || [])
      } catch (err) {
        console.error('Error fetching search results:', err)
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    fetchSearchResults()
  }, [query])

  if (!query) {
    return <p style={{padding: '2rem'}}>No search query found.</p>
  }

  return (
    <div className="search-page">
      <h2>
        Search Results for: <span className="query-text">{query}</span>
      </h2>

      {loading && <p>Loading...</p>}

      {!loading && movies.length > 0 && (
        <div className="grid">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={{
                ...movie,
                poster_path: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
              }}
            />
          ))}
        </div>
      )}

      {!loading && movies.length === 0 && <p>No movies found for "{query}".</p>}
    </div>
  )
}

export default SearchResults
