import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from "../images/cart.png" 
import qqq from "../images/qqq.png" 
import NavbarSearchHook from '../../HOOKS/search/Navbar-search-Hook';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { LOG_OUT } from '../../Redux/type/type';





function NavbarLogin() {

  const dispatch = useDispatch()
const [serchWord ,onChangeSearch] = NavbarSearchHook()

let word = "" ; 
if(localStorage.getItem("searchWord") != null)
word = localStorage.getItem("searchWord")


const [user , setUser]=useState(null)



let userData = useSelector((state)=>state.authReducer.user)

useEffect(()=>{
setUser(userData?.data?.data)
},[userData])



const logOut =()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  dispatch({
    type :LOG_OUT,
    payload :null,
    error: null,
  })

}


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

            {
             user?.name ?(
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  profile
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item href="/admin/Profile">personal page</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={logOut}>logOut</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              ):(<Nav.Link href="/login">login</Nav.Link>
              ) 
            }
            <Nav.Link href="/login">Home</Nav.Link>


            <Nav.Link href="/Cart">
            <img src={cart} className="img-style-two"/>
              </Nav.Link>

          </Nav>
          <Form className="d-flex w-800">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-100"
              aria-label="Search"
              value={word}
              onChange={onChangeSearch}
            
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarLogin;