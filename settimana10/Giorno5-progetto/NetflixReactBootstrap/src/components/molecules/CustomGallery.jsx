import { useState, useEffect } from 'react';
import {Col, Row} from 'react-bootstrap'

const CustomGallery = ({url}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.Search)
    })}, [])

  return (
    
      <Row className="g-1 d-flex flex-nowrap overflow-x-visible mx-3">
          {movies.map((movie)=>(
            <Col key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className='imgZoom' />      
            </Col>
            ))}
       </Row>
  );
}


export default CustomGallery;