import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const CustomNavSx =() => {
    return(
        <>
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/tv-shows' className='nav-link'>TV Shows</Link>
                <Link to='/movies' className='nav-link'>Movies</Link>
                <Link to='/recently-added' className='nav-link'>Recently Added</Link>
                <Link to='/my-list' className='nav-link'>My List</Link>

            {/* <Nav.Link href="#" disabled>Link</Nav.Link> */}
            </Nav>
        </>
    )
}

export default CustomNavSx




