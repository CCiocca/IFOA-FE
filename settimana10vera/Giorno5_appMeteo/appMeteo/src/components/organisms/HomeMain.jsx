import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FetchData } from "../molecules/FetchData"
import ResultsPlaces from "../molecules/ResultsPlaces"


const HomeMain = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([
        {
            name: "",
            local_names: {} ,  
            lat: 0,
            lon: 0,
            country: "",
            state: ""
        },
    ])

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=40&appid=${APIkey}`

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchData = async () => {
        try {
            console.log(url)
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                // console.log(data);
                setResults(data)
                
            } else {
                alert('No results')
            }
        }
        catch (err) {
            console.log(err)
        }
    }



    return(
        <>
        <Container>
            <Row className="d-flex flex-column"> 
                <Col className="mx-auto my-3">
                    <h1>MoodieWeather</h1>
                </Col>
                {/* <Col className="mx-auto my-3">
                    <Link to="/favourites">Favourites</Link>
                </Col> */}
            
                <Col className="mx-auto mb-5">

                    <Form className="mx-auto">
                        <Row className="display-flex justify-content-between">
                            <Col className="col-8">
                                <Form.Control
                                type="text"
                                placeholder="Search a city"
                               
                                value={query} 
                                onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Button type="button" onClick={() => fetchData()}>Search</Button>
                            </Col>
                            </Row>
                    </Form>
                </Col>



                {/* <input type="text" value={query} onChange={handleChange} placeholder="search a city" />
                    <Button onClick={() => setResults(FetchData(url))}>Search</Button>
                </Col> */}
                
                
                <Col>
                    {results?.length > 0 &&
                    results.map((place, index) => (
                    <ResultsPlaces key={index} place={place}/>
                ))}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HomeMain