import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { REMOVE_FAVOURITE } from "../actions/favouritesAction";

const FavouritesMain = () => {
    const favouritesData = useSelector(state => state.favourites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <Container>
            <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
                <Col>
                <h1>Favourites</h1>
                <Button variant="outline-primary" onClick={()=> navigate('/')}>Home</Button>
                </Col>
                <Col>
                <ListGroup>
                    { favouritesData?.length > 0 ? (
                        favouritesData.map((favourite, index) => {
                        <ListGroup.Item key={index}>{favourite}
                            <Button variant="outline-danger" onClick={()=> dispatch({type: REMOVE_FAVOURITE, payload: favourite})}>Remove</Button>
                        </ListGroup.Item>
                    })) : (
                    <ListGroup.Item>There are no favourites</ListGroup.Item>
                    ) }
                </ListGroup>
            </Col>
    </Row>
    </Container>
    )
}

export default FavouritesMain


{/*          <>
         <Col xs={3}>
         <Link to={`/${favourite.company_name}`}>{favourite.company_name}</Link>
         </Col>
         <Col xs={7}>
         <a href={favourite.url} target="_blank" rel="noreferrer">
            {favourite.title}
         </a>
         </Col>
         <Col xs={2}>
         <a onClick={() => dispatch(setFavourites(favourite.company_name))}>Add to favourites</a>
         {/* <i className="bi bi-heart dark"></i> 
         </Col>
         </>
 })} */}