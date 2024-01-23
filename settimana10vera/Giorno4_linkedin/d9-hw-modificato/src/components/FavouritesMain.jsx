import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { REMOVE_FAVOURITE } from "../actions/favouritesAction";
import { useState } from "react";
import { ConfirmDeleteAlert } from "./ConfirmDeleteAlert"

const FavouritesMain = () => {
    const favouritesData = useSelector((state) => state.favourites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);



    const handleClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false)
      }

    const handleConfirmDelete = (favourite) => {
        dispatch({type: REMOVE_FAVOURITE, payload: favourite});
        setShowModal(false);
    }
    

    return(
        <Container>
            <Row
            className="mx-0 mt-3 p-3 d-flex flex-column"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
                <Col>
                <h1>Favourite Companies</h1>
                <Button variant="outline-primary" onClick={()=> navigate('/')}>Home</Button>
                </Col>
                <Col className="mt-4">
                <ListGroup>
                    { favouritesData?.length > 0 ? (
                        favouritesData.map((favourite, index) => 
                             
                        <ListGroup.Item key={index} className="d-flex justify-content-between">
                            <Link to={`/${favourite.company_name}`}>{favourite.company_name}</Link>
                            <Button variant="outline-danger" onClick={()=> handleClick(favourite)}>Remove</Button>
                            <ConfirmDeleteAlert 
                                show={showModal}
                                handleCloseModal={handleCloseModal}
                                handleConfirmDelete={() => handleConfirmDelete(favourite)}
                                companyName={favourite.company_name}/>
                        </ListGroup.Item>
                    )) : (
                    <ListGroup.Item>There are no favourites</ListGroup.Item>
                    ) 
                    }
                </ListGroup>
            </Col>

    </Row>
    </Container>
    )
}

export default FavouritesMain


// // if the state already contains the company, return an alert
// if (state.favourites.some(existingCompany => existingCompany._id === company._id)) {
//     alert("This company is already present in favourites");
//     return {
//         type: null, // if the company is present, dont do anything
//     };
// } else {

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