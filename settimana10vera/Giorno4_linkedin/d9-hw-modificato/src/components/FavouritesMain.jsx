import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const FavouritesMain = () => {
    return(
        <>
            <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
            { favouritesData.map((favourite) => {
                <>
                
                <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
                </Col>
                <Col xs={7}>
                <a href={data.url} target="_blank" rel="noreferrer">
                    {data.title}
                </a>
                </Col>
                <Col xs={2}>
                <a onClick={() => dispatch(setFavourites(data.company_name))}>Add to favourites</a>
                {/* <i className="bi bi-heart dark"></i> */}
                </Col>
                </>
        })}
    </Row>
    </>
    )
}

export default FavouritesMain