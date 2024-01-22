import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FetchData } from "../molecules/FetchData"
import ResultsPlaces from "../molecules/ResultsPlaces"


const HomeMain = () => {
    const [query, setQuery] = useState('')
    const [resultsWeather, setResultsWeather] = useState(
        {
            coord: {},
            weather:[],
            base: "",
            main: {},
            visibility: 0,
            wind:{},
            clouds: {},
            dt: 0,
            sys: {},
            timezone: 0,
            id: 0,
            name: "",
            cod: 0

        }
    )
    const [resultsForecast, setResultsForecast] = useState([
        {
            cod: "",
            message: 0,
            cnt: 0,
            list: [],
            city:{}
        },
    ])

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIkey}&units=metric`

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${APIkey}&units=metric`


    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchData = () => {
        fetchDataWeather()
        fetchDataForecast()
        }


    const fetchDataWeather = async () => {
        try {
            console.log(urlWeather)
            const res = await fetch(urlWeather);
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setResultsWeather(data)
                
            } else {
                alert('No weather results')
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchDataForecast = async () => {
        try {
            console.log(urlForecast)
            const res = await fetch(urlForecast);
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setResultsForecast(data)
                
            } else {
                alert('No forecast results')
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

                
                                        
        {resultsWeather.name !== "" &&

        <>
            <Row className="mx-auto mt-3 p-0">
                <h2 className="bold big">{resultsWeather.name}</h2>
                        <Col className="col-6"> <p className="display-3">{resultsWeather.main?.temp.toFixed()} °C</p></Col>

                        <Col className="col-6"> <p className="display-3">{resultsWeather.weather[0]?.main}</p></Col>

{/* weather beginning */}

                <h5 className="mt-3">Today</h5>
                <Col className="d-flex flex-wrap justify-content-between p-0 gap-1">
                           
                    <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 ">

                            <Col className="col-2" >
                                <i className="fa-solid fa-wind fs-3"></i>
                            </Col>
                            <Col className="col-8">
                                <p className="m-0 rem08">Wind speed</p>
                                <p className="m-0">{resultsWeather.wind?.speed} km/h</p>
                            </Col> 
                    </Col>

                    <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 ">

                            <Col className="col-2" >
                                <i className="fa-solid fa-temperature-three-quarters fs-3"></i>
                            </Col>
                            <Col className="col-8">
                                <p className="m-0 rem08">Temperature</p>
                                <p className="m-0">{resultsWeather.main?.temp.toFixed()} °C</p>
                            </Col> 
                    </Col>
                    

                    
                    <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 " >

                            <Col className="col-2" >
                                <i className="fa-solid fa-cloud-rain fs-3"></i>
                            </Col>
                            <Col className="col-8">
                                <p className="m-0 rem08">Rain chance</p>
                                <p className="m-0">{resultsWeather.clouds.all} %</p>
                            </Col> 
                    </Col>

                    <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 ">

                            <Col className="col-2" >
                                <i className="fa-solid fa-percent fs-3"></i>
                            </Col>
                            <Col className="col-8">
                                <p className="m-0 rem08">Humidity</p>
                                <p className="m-0">{resultsWeather.main.humidity} %</p>
                            </Col> 
                    </Col>
                                            
                </Col>

{/* weather end */}





{/* forecasts beginning */}
                <h5 className="mt-3">Forecasts</h5>

                {resultsForecast.list && resultsForecast.list.length > 0 &&
                <>
                <Col className="d-flex flex-wrap justify-content-center p-0 gap-2 ">

                    {resultsForecast.list.map((hour) => {
                        return(
                        <Col key={hour.dt} className="rounded cardsBackground d-flex p-2 align-items-center my-2 col-12" >

                            <Col className="col-2" >
                                <p>{hour.dt_txt}</p>
                            </Col>
                            <Col className="col-8">
                                <p className="m-0 rem08">{hour.weather[0].main}</p>
                                <p className="m-0">{hour.main.temp.toFixed()} °C</p>
                            </Col> 
                            <Col className="col-2">
                                {(()=> {switch (hour.weather[0].main) {
                                    case "Rain":
                                        return <i className="fa-solid fa-cloud-rain fs-3"></i>

                                    case "Clouds":
                                        return <i className="fa-solid fa-cloud fs-3"></i>
                                    
                                    case "Snow":
                                        return <i className="fa-solid fa-snowflake fs-3"></i>

                                    case "Clear":
                                        return <i className="fa-solid fa-sun fs-3"></i>
                                
                                    default:
                                        return null;
                                }})()}
                                <p className="m-0">{hour.main.temp.toFixed()} °C</p>
                            </Col> 
                        </Col>
                        
                    )}
                        )}                                            
                </Col>
                </>
            }
 {/* forecasts end */}
                        
            </Row>

            </>
}
                    
        </Container>
        </>
    )
}

export default HomeMain