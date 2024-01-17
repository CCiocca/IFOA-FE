import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel = ({url}) => {
  const [movies, setMovies] = useState([]);

  const handleSelect = (selectedMovies) => {
    setMovies(selectedMovies);
  };

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.Search)
    })}, [])

  return (
    <Carousel activeMovie={movies} onSelect={handleSelect} >
      <div className="row g-1 d-flex flex-nowrap overflow-x-visible">
      
        <Carousel.Item>
          {movies.map((movie)=>(
          <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} width={120}/>      ))}
        </Carousel.Item>

       </div>
    </Carousel>
  );
}

export default CustomCarousel;