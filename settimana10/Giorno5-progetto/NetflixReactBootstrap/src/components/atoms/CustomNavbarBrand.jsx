import Navbar from 'react-bootstrap/Navbar';

const CustomNavbarBrand = () => {
    return(
        <>
        <Navbar.Brand href="https://www.netflix.com/it/">
        <img src="../src/assets/netflix_logo.png" alt="NetflixLogo" width="100" className="d-inline-block align-top"/>
        </Navbar.Brand>
        </>
    )
}

export default CustomNavbarBrand