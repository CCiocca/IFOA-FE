import { useState, useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';
import {Spinner, Alert} from 'react-bootstrap'

const CustomGallery = ({url}) => {

  const [movies, setMovies] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] =useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
        const res = await fetch(url);
        if (res.ok){
            let data = await res.json();
            setMovies(data.Search)
            setLoading(false);
        } else {
            console.log("errore in else")
            setError(true);
            setLoading(false)
        }
    }

    catch (err) {
        console.log("errore in catch")
        setError(true)
        setLoading(false)
    }}

    useEffect(() => {fetchData()}, [])

    // useEffect(() => {
    // fetch(url)
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   setMovies(data.Search)
    // })}, [])

  return (
    
      <Row className="g-1 d-flex flex-nowrap overflow-x-visible mx-3">
        {isLoading && <Spinner animation="border" />}
        {isError && <Alert variant='warning'>Oh snap! You got an error in loading movies</Alert>}
          {!isLoading && movies.length<1
            ? <p>Movies not found</p>
            : movies.map((movie)=>(
            <Col key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className='imgZoom' />      
            </Col>))}
       </Row>
  );
}


export default CustomGallery;