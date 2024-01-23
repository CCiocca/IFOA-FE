import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import ForecastChart from "./ForecastChart"


const ForecastMain = () => {

    const resultsForecast = useSelector((state)=>state.forecast) 

    
    return(
        
    <>
    <h5 className="mt-3">Forecasts</h5>

    {resultsForecast.list && resultsForecast.list.length > 0 &&
    <>
    <Row className="d-flex flex-column">
    <Col className="p-0 col-lg-8"> 
        <ForecastChart/>
    </Col>   
    <Col className="d-flex flex-wrap justify-content-center p-0 gap-2 col-lg-4  flex-md-column">

        {resultsForecast.list.map((forecastByHour) => {
            
            const date = new Date(forecastByHour.dt*1000);
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.getMonth().toString() +1; 
            const hour = date.getHours().toString().padStart(2, '0')
            const minutes = date.getMinutes().toString().padStart(2, '0');

            return(
               
            <Col key={forecastByHour.dt} className="rounded cardsBackground cardsForecast d-flex p-2 align-items-center my-2 col-12" >

                <Col className="col-3" >
                    <p className="m-0">{day}/{month}</p>
                    <p className="m-0">{hour}:{minutes}</p>
                </Col>
                <Col className="col-7">
                    {(()=> {switch (forecastByHour.weather[0].main) {
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
                    <p className="m-0 rem08">{forecastByHour.weather[0].main}</p>
                </Col> 
                <Col className="col-2 align-top">
                    <p className="rem2 m-0 d-inline">{forecastByHour.main.temp.toFixed()} </p><small className="rem08 align-top">°C</small>
                </Col> 
            </Col>
            
        )}
            )}                                    
    </Col>
    </Row>     
    </>
    }
    </>
    )
}

export default ForecastMain