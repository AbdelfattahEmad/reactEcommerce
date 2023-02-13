import { Col, Container } from "react-bootstrap";
import SubTitle from "./subtitle";

function DiscountSection({img}){
    return(
        <Container>
            <SubTitle/>
            <div className="d-flex align-items-center justify-content-around my-5">
                <Col sm="6">
                <h1>30% off devices</h1>
                </Col>
                <Col sm="6">
                <img src={img}/>
                </Col>
                
             </div>
        </Container>
    )
}
export default DiscountSection;