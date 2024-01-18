import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Job = ({ data }) => {
  
  const favourites = useSelector(state => state.favourites)

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
      <span>Add to favourites</span>
      {/* <i className="bi bi-heart dark"></i> */}
    </Col>
  </Row>
  </>
)

export default Job}
