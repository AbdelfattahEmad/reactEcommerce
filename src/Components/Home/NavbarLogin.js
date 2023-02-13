import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from "../images/cart.png" 
import qqq from "../images/qqq.png" 


function NavbarLogin() {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">
          <img src={qqq} className="img-style-one"/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/login">Home</Nav.Link>


            <Nav.Link href="/Cart">
            <img src={cart} className="img-style-two"/>
              </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarLogin;