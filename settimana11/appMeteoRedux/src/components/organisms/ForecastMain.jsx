import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import ForecastChart from "./ForecastChart"


const ForecastMain = () => {

    const resultsForecast = useSelector((state)=>state.forecast) 

    
    return(
        // <Col className="col-12 d-flex flex-wrap justify-content-center p-0 gap-2 flex-row ">
        
    <>
    <h5 className="mt-3">Forecasts</h5>

    {resultsForecast.list && resultsForecast.list.length > 0 &&
    <>
    <Row className="d-flex flex-column p-0 m-0">
    <Col className="p-0 col-lg-8"> 
        <ForecastChart/>
    </Col>   
    <Col className="col-12 d-flex justify-content-center p-0 gap-2 flex-row">
    
        {resultsForecast.list.map((forecastByHour) => {
            
            const date = new Date(forecastByHour.dt*1000);
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.getMonth().toString() +1; 
            const hour = date.getHours().toString().padStart(2, '0')
            const minutes = date.getMinutes().toString().padStart(2, '0');

            return(
               
            <div key={forecastByHour.dt} className="rounded cardsForecast d-flex p-2 align-items-center justify-content-center my-2 col-1 flex-column g-1" >

                <Col className="mb-3" >
                    <p className="m-0 p-0 rem08">{day}/{month}<br/>{hour}:{minutes}</p>
                </Col>
                <Col className="col-7">
                    {(()=> {switch (forecastByHour.weather[0].main) {
                        case "Rain":
                            return <i className="fa-solid fa-cloud-rain rem2"></i>

                        case "Clouds":
                            return <i className="fa-solid fa-cloud rem2"></i>
                        
                        case "Snow":
                            return <i className="fa-solid fa-snowflake rem2"></i>

                        case "Clear":
                            return <i className="fa-solid fa-sun rem2"></i>
                    
                        default:
                            return null;
                    }})()}
                    <p className="m-0 rem08">{forecastByHour.weather[0].main}</p>
                </Col> 
                <Col className="col-2 d-flex justify-content-center align-items-center">
                    <p className="rem2 m-0 d-inline">{forecastByHour.main.temp.toFixed()}</p><p className="rem08 m-0 d-inline">°C</p>
                </Col> 
            </div>
            
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