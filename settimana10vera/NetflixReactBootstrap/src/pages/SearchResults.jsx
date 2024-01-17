import { useLocation } from "react-router-dom"
import CustomPageTitleSection from "../components/molecules/CustomPageTitleSection"
import { useState, useEffect } from "react"
import { Alert, Col, Container, Row } from "react-bootstrap"



const SearchResults = () => {

    const location = useLocation()
    const searchTerms = new URLSearchParams(location.search).get('search')

    const [movies, setMovies] = useState([])

    const fetchData = async () => {
        const resp = await fetch('http://www.omdbapi.com/?apikey=86c5c8d1&s=' + searchTerms)
        const data = await resp.json()
        setMovies(data.Search)
        console.log(movies);
    }

    function emptyAlert () {
        return(
            <Alert variant="warning">
            Please insert a title
            </Alert>
        )
    }


    useEffect(() => {
        if (searchTerms?.length>2){
            fetchData()
        }
        else {emptyAlert()}
            }
    , [])



    return(
    <>
      <CustomPageTitleSection page="Results"/>
      
      <Container>
        {movies?.length > 0 &&
            (
            <>
            <Row className="g-1 d-flex flex-wrap">
            {movies.map((movie)=>(
            <Col>
            <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} width={120} className='imgZoom'/>
            </Col>      ))}
            </Row>
            </>
            )
            : (
            <Alert variant="warning">
            Please insert a title
            </Alert>
            )
        }
      </Container>     
    </>
)
}

export default SearchResults