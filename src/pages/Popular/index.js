import {useEffect, useState} from 'react'
import './index.css'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

const API_KEY = 'e971ccc00afed9429b95fd5047cca504'
const Popular = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true)
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
      )
      const data = await res.json()
      setMovies(data.results)
      setLoading(false)
    }

    fetchPopularMovies()
  }, [page])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
          <Pagination currentPage={page} onPageChange={setPage} />
        </>
      )}
    </>
  )
}

export default Popular
