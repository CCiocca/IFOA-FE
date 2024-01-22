import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setResultsWeather } from "../../redux/weatherSlice";
import { setResultsForecast } from "../../redux/forecastSlice";
import WeatherMain from "./WeatherMain";
import { useEffect, useState } from "react";
import ForecastMain from "./ForecastMain";
import ForecastChart from "./ForecastChart";


const HomeMain = () => {
    const [query, setQuery] = useState('')

    // I substitute the useState with the useSelector which get the values of the states from the store, I use dispatch to update the state values

    const resultsWeather = useSelector((state)=>state.weather) 
    const resultsForecast = useSelector((state)=>state.forecast) 
    const dispatch = useDispatch();
    
    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIkey}&units=metric`

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${APIkey}&units=metric`

    //When the user writes in the input, the query value gets updated
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    //onClick: fetch of datas based on city query 
    const fetchData = () => {
        fetchDataWeather()
        fetchDataForecast()
        }


    const fetchDataWeather = async () => {
        try {
            const res = await fetch(urlWeather);
            console.log(urlWeather);
            if (res.ok) {
                const data = await res.json();
                dispatch(setResultsWeather(data))                
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
                dispatch(setResultsForecast(data));
                console.log("io sono lo store forecast", resultsForecast)

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

                <WeatherMain/>
                <ForecastMain />   
                                  
            </Row>
        </>
        }
                    
        </Container>
        </>
    )
}

export default HomeMain