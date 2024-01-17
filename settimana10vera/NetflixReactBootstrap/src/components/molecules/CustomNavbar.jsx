// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AccountDropdown from '../atoms/AccountDropdown.jsx'
import CustomNavbarBrand from '../atoms/CustomNavbarBrand.jsx'
import CustomNavSx from '../atoms/CustomNavSx.jsx'
import CustomNavDx from '../atoms/CustomNavDx.jsx'
import { Link } from 'react-router-dom';




function CustomNavbar() {
  return (
    <>
    <Navbar expand="lg" data-bs-theme="dark">
      <Container fluid>
        <CustomNavbarBrand/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <CustomNavSx/>

          <Nav>
            <CustomNavDx/>
            <AccountDropdown/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}

export default CustomNavbar;