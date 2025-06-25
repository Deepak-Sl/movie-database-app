import './index.css'
import {Link} from 'react-router-dom'

const MovieCard = props => {
  const {movie} = props
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <Link to={`/movie/${movie.id}`}>
        <button type="button" className="details-button">
          View Details
        </button>
      </Link>
    </div>
  )
}

export default MovieCard
