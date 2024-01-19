import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FetchData } from "../molecules/FetchData"
import ResultsPlaces from "../molecules/ResultsPlaces"


const HomeMain = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState(
        {
            cod: "200",
            message: 0,
            cnt: 40,
            list: []
        },
    )

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${APIkey}&units=metric`

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchData = async () => {
        try {
            console.log(url)
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                console.log(data);
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
        <Container className="d-flex flex-column">
            <Row className="d-flex flex-column"> 
                <Col className="mx-auto mb-3">
                    <h1>MoodieWeather</h1>
                </Col>
                {/* <Col className="mx-auto my-3">
                    <Link to="/favourites">Favourites</Link>
                </Col> */}
            </Row>
            <Row className="d-flex flex-row">
                <Form className="mx-auto">
                    <Col className="mx-auto mb-5 d-flex justify-content-around col-md-8">
                    <Form.Control
                                type="text"
                                placeholder="Search a city"
                                className="mx-2"
                               
                                value={query} 
                                onChange={handleChange}
                                />

                    <Button type="button" onClick={() => fetchData()}>Search</Button>
                    </Col>
                </Form>
            </Row>

                
                                        

            <Row className="mx-auto mt-3 p-0">
                <h2 className="bold big">{results.city?.name}</h2>
                        <Col className="col-6"> <p className="display-3">{results.list[0]?.main.temp} °C</p></Col>

                        <Col className="col-6"> <p className="display-3">{results.list[0]?.weather[0]?.main}</p></Col>

                        <Col className="d-flex flex-wrap justify-content-between p-0 gap-1">
                           
                            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 " style={{ minWidth: '10rem' }}>

                                    <Col className="col-2" >
                                        <i class="fa-solid fa-wind fs-3"></i>
                                    </Col>
                                    <Col className="col-8">
                                        <p className="m-0 rem08">Wind speed</p>
                                        <p className="m-0">{results.list[0]?.wind.speed} km/h</p>
                                    </Col> 
                            </Col>

                            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 " style={{ minWidth: '10rem' }}>

                                    <Col className="col-2" >
                                        <i class="fa-solid fa-temperature-three-quarters fs-3"></i>
                                    </Col>
                                    <Col className="col-8">
                                        <p className="m-0 rem08">Temperature</p>
                                        <p className="m-0">{results.list[0]?.main.temp} °C</p>
                                    </Col> 
                            </Col>
                         

                          
                            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 " style={{ minWidth: '10rem' }}>

                                    <Col className="col-2" >
                                        <i class="fa-solid fa-cloud-rain fs-3"></i>
                                    </Col>
                                    <Col className="col-8">
                                        <p className="m-0 rem08">Rain chance</p>
                                        <p className="m-0">{results.list[0]?.clouds.all} %</p>
                                    </Col> 
                            </Col>

                            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 " style={{ minWidth: '10rem' }}>

                                    <Col className="col-2" >
                                        <i class="fa-solid fa-percent fs-3"></i>
                                    </Col>
                                    <Col className="col-8">
                                        <p className="m-0 rem08">Humidity</p>
                                        <p className="m-0">{results.list[0]?.main.humidity} %</p>
                                    </Col> 
                            </Col>
                        

                            

                            

                            
                        </Col>
                        
            </Row>


                    
        </Container>
        </>
    )
}

export default HomeMain