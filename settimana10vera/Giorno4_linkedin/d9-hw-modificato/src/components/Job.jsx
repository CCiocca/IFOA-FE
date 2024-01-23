import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavourite } from '../actions/favouritesAction'
import { useEffect } from 'react'



const Job = ({ jobData }) => {
  // console.log(jobData, 'io sono loggetto che arriva a job')
  
  const favourites = useSelector((state)=> state.favourites)
  const dispatch = useDispatch()

  const handleClick = (jobData) => {
    dispatch(addFavourite(jobData));
    alert("Added to favourites")
  }

// Aggiunta di una condizione per verificare se jobData è definito
if (!jobData) {
  return "ai caramba"; // o qualsiasi altra gestione che desideri in caso di jobData indefinito
} 

  return (
    <>
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
    </Col>
    <Col xs={6}>
      <a href={jobData.url} target="_blank" rel="noreferrer">
        {jobData.title}
      </a>
    </Col>
    <Col xs={3}>
      <Button variant="outline-warning"  onClick={() => handleClick(jobData)}>Add to favourites</Button>
      {/* <i className="bi bi-heart dark"></i> */}
    </Col>
  </Row>
  </>
)
}

export default Job
