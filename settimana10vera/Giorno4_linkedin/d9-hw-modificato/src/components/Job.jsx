import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavourite } from '../actions/favouritesAction'


const Job = ({ data }) => {
  
  const dispatch = useDispatch()

  // const handleClick = () => {
  //   dispatch(addFavourite(data._id));
  //   alert("Added to favourites")
  // }

  return (
    <>
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={6}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={3}>
      <Button variant="outline-warning"  onClick={() => dispatch(addFavourite(data.title))}>Add to favourites</Button>
      {/* <i className="bi bi-heart dark"></i> */}
    </Col>
  </Row>
  </>
)
}

export default Job
