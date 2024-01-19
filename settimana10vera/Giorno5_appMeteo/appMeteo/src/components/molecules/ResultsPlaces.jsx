import { Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { FetchData } from './FetchData'



const ResultsPlaces = ({place}) => {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const navigate = useNavigate()

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`

    const handleClick = (e) => {
        setLatitude(e.target.value);
        setLongitude(e.target.value);
        fetchData()
        navigate('/data/2.5/weather')
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
        <Button onClick={handleClick} className='display-block'>
        <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
            
        >
                    <Col> <p>{place.name}</p></Col>
                    <Col> <p>{place.state}</p></Col>
                    <Col> <p>{place.country}</p></Col>
        </Row>
        </Button>
        </>
    )
}

export default ResultsPlaces






