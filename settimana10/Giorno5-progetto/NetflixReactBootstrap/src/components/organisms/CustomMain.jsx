// import CustomNavbar from '../molecules/CustomNavbar'
import {Container, Row, Col} from 'react-bootstrap'

const CustomMain = () => {
    return (
        <>
        <Container fluid className='px-5 py-2'>
        <Row className='d-flex align-items-center'>
            <Col>
                <div className="d-flex align-items-center gap-5"> 
                    <div>
                        <h1 className="fw-semibold">TV Shows</h1>
                    </div>
                   
                    <div className="dropdown">
                            <button className="btn btn-dark border rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Genres
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                    </div>
                    
                </div>
            </Col>

            <Col className='d-flex justify-content-end text-secondary'>
                <div className="border p-2 px-3 d-flex align-items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"/>
                         </svg>
                </div>

                <div className="border p-2 px-3 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                           <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
                         </svg>
                </div>
            </Col>
        </Row>


        </Container>
    
        </>
    )
};

export default CustomMain