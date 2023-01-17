
import { Col, Container, Row } from "react-bootstrap"
import PaginationPage from "../Pagination/Paginations"
import CartItem from "../Cart/CartItem"
import UserSidebar from "./UserSidebar"

const AddUserProduct=()=>{
    return(
        <Container>
        <Row className="py-3">
            <Col sm="3" xs="2" md="2">
                <UserSidebar/>
            </Col>

            <Col sm="9" xs="10" md="10">
                <CartItem/>
            </Col>
            <PaginationPage/>


        </Row>
    </Container>

    )
}
 export default  AddUserProduct