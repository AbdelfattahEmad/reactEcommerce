import { Button, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const CartCheak=()=>{
    return(
    <div >
       <Col className="d-flex my-5">
       <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Discount code"
        className="mx-1"
        width="160px"
      />
        <Button variant="dark">Enter</Button>
       </Col>
        <Col className="text-center">
        <Link to="/order/paymethoud"
        style={{TextDecoration:'none'}}
        >
        <Button width="100px"
         variant="dark"
         >Confirm</Button>
         </Link>
        </Col>
    </div>
    
    


    )

}
export default CartCheak