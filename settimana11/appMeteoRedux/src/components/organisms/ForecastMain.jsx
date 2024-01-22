import { Col } from "react-bootstrap"
import { useSelector } from "react-redux"


const ForecastMain = () => {

    const resultsForecast = useSelector((state)=>state.forecast) 

    return(
        
    <>
    <h5 className="mt-3">Forecasts</h5>

    {resultsForecast.list && resultsForecast.list.length > 0 &&
    <>
    <Col className="d-flex flex-wrap justify-content-center p-0 gap-2 ">

        {resultsForecast.list.map((hour) => {
            return(
            <Col key={hour.dt} className="rounded cardsBackground d-flex p-2 align-items-center my-2 col-12" >

                <Col className="col-3" >
                    <p>{hour.dt_txt}</p>
                </Col>
                <Col className="col-7 align-top">
                    <p className="rem2 m-0 d-inline">{hour.main.temp.toFixed()} </p><small className="rem08 align-top">°C</small>
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
                    <p className="m-0 rem08">{hour.weather[0].main}</p>
                </Col> 
            </Col>
            
        )}
            )}                                            
    </Col>
    </>
    }
    </>
    )
}

export default ForecastMain