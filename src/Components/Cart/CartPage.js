import { Col, Container, Row } from "react-bootstrap"
import CartItem from "./CartItem";
import CartCheak from "./CartCheackOut";

const CartPage=()=>{
    return(
   <Container style={{minHeight:"670px"}}>
    <Row className="Cart-logo">
         Shopping Cart 
    </Row>
    <Row className="d-flex justify-content-center cartContainer">
        <Col xs="12" md="9">
        <CartItem/>
        <CartItem/>
        <CartItem/>
        </Col>
        <Col xs="6" md="3">
            <CartCheak/>
        </Col>
    </Row>
    
   </Container>
    
    
    )
}
export default CartPage ;