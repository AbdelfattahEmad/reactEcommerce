import { Button, Col, Container, Row } from "react-bootstrap"
import mob from '../images/mob.png'

const CartItem=()=>{
    return(
    <Container>
        <Row>
            <Col xs-12 className="d-flex">
                <img  src={mob} alt=""/>
                <div className="Cart-item">
                    <h3>Mobile Phone</h3>
                    <p>Descreption : Headings must have content
                         and the <br/> content must be accessible by a screen
                         must</p>
                    <p>100$</p>
                    <Button variant="dark">Delete From Cart</Button>
                </div>
            </Col>
        </Row>
    </Container>
    )
}
export default CartItem