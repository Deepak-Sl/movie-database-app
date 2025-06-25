import './index.css'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
  const [query, setQuery] = useState('')
  const history = useHistory() // for v5

  const handleSearch = () => {
    const trimmed = query.trim()
    if (trimmed) {
      history.push(`/search?query=${trimmed}`)
      setQuery('')
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <h1>movieDB</h1>
        </Link>
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <div className="navbar-right">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  )
}

export default Navbar
