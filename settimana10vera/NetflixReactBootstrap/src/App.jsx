import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CustomHeader from './components/organisms/CustomHeader'
import CustomFooter from './components/organisms/CustomFooter'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TvShows from './pages/TvShows'
import Movies from './pages/Movies'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import MovieDetails from './pages/MovieDetails'
import SearchPage from './pages/SearchPage'



function App() {

  return (
    <>   
    <CustomHeader/>
    <Routes>
      <Route path="/" element={<Home page="Home"/>}/>
      <Route path="/tv-shows" element={<TvShows page="TV Shows"/>}/>
      <Route path="/movies" element={<Movies page="Movies"/>}/>
      <Route path="/account" element={<Account page="Account"/>}/>
      <Route path="/movie-details" element={<MovieDetails page="Movie Details"/>}/>
      <Route path="/search-page" element={<SearchPage page="Search"/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  
      {/* <CustomMain /> */}
      <CustomFooter/> 
    </>
  )
}

export default App
