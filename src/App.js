import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import MovieDetails from './pages/MovieDetails'
import SearchResults from './pages/SearchResults'

// Temporary placeholders

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/search" component={SearchResults} />
      </Switch>
    </Router>
  )
}

export default App
