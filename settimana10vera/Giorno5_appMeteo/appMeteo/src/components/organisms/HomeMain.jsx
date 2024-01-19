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
            <Row>
                <Col className="mx-auto my-3">
                    <h1 className="display-1">Weather</h1>
                </Col>
                <Col className="mx-auto my-3">
                    <Link to="/favourites">Favourites</Link>
                </Col>
            
                <Col className="mx-auto">

                    <Form>
                        <Row >
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search a city"
                                className=" mr-sm-2 p-5 danger"
                                value={query} 
                                onChange={handleChange}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="button" onClick={() => fetchData()}>Search</Button>
                            </Col>
                            </Row>
                    </Form>
                </Col>



                {/* <input type="text" value={query} onChange={handleChange} placeholder="search a city" />
                    <Button onClick={() => setResults(FetchData(url))}>Search</Button>
                </Col> */}
                
                <Col className="mx-auto mb-5 b text-bg-info p-3">
                    {results?.length > 0 &&
                    results.map((place, index) => (
                    <ResultsPlaces key={index} place={place} lat={place.lat} lon={place.lon}/>
                ))}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HomeMain