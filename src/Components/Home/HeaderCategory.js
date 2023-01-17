import { Col, Container, Row } from "react-bootstrap";
import SubTitle from "./subtitle";

const HeaderCategory =()=>{
    return(
        <div className="cat-header">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start py-2 flex-wrap">
                    <div class="mx-2">All</div>
                    <div class="mx-2">Electronics</div>
                    <div class="mx-2">Clothes</div>
                    <div class="mx-2">electric machines</div>
                    <div class="mx-2">offers</div>
                    <div class="mx-2">offers</div>
                    <div class="mx-2">offers</div>
                    <div class="mx-2">offers</div>
                    <div class="mx-2">More</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default HeaderCategory;