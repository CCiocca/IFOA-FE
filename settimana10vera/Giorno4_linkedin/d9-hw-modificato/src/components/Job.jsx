import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_FAVOURITE, REMOVE_FAVOURITE, addFavourite, removeFavourite } from '../actions/favouritesAction'


const Job = ({ data }) => {
  
  const dispatch = useDispatch()
  const favourites = useSelector (state => state.favourites)
  
  const navigate = useNavigate()
  

  const handleFavourites = (buba) => {
    switch (buba) {
      case ADD_FAVOURITE:
        dispatch(addFavourite())
        break;
      case REMOVE_FAVOURITE
        dispatch(removeFavourite())
        break;
    }
     
  }


  return (
    <>
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={2}>
      <a onClick={() =>dispatch(addFavourite(data.company_name)) }>Add to favourites</a>
      {/* <i className="bi bi-heart dark"></i> */}
    </Col>
  </Row>
  </>
)
}

export default Job
