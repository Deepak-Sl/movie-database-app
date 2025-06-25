import './index.css'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

const API_KEY = 'e971ccc00afed9429b95fd5047cca504'

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
        )
        const data = await res.json()
        setMovie(data)
      } catch (err) {
        console.error('Failed to fetch movie details', err)
      }
    }

    const fetchCast = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
        )
        const data = await res.json()
        setCast(data.cast || [])
      } catch (err) {
        console.error('Failed to fetch cast info', err)
      }
    }

    fetchMovieDetails()
    fetchCast()
  }, [id])

  if (!movie) return <p style={{padding: '2rem'}}>Loading movie details...</p>

  return (
    <div className="details-page">
      <div className="movie-info">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} mins
          </p>
          <p>
            <strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>

      <h3>Cast</h3>
      <div className="cast-grid">
        {cast.map(member => (
          <div key={member.cast_id} className="cast-card">
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={member.name}
            />
            <p className="cast-name">{member.name}</p>
            <p className="character-name">as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
