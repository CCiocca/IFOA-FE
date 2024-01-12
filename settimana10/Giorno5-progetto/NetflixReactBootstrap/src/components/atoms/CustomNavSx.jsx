import Nav from 'react-bootstrap/Nav';

const CustomNavSx =() => {
    return(
        <>
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">TV Shows</Nav.Link>
                <Nav.Link href="#action3">Movies</Nav.Link>
                <Nav.Link href="#action4">Recently Added</Nav.Link>
                <Nav.Link href="#action5">My List</Nav.Link>

            {/* <Nav.Link href="#" disabled>Link</Nav.Link> */}
            </Nav>
        </>
    )
}

export default CustomNavSx




