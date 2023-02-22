import { Col, Container, Row } from "react-bootstrap"
import AdminSidebar from "./AdminSidebar"
import PaginationPage from "../Pagination/Paginations"
import AddSomeProducts from "./AddSomeProducts"

const AdminAddProductPages=()=>{
    return(
        <Container>
        <Row className="py-3">
            <Col sm="3" xs="2" md="2">
                <AdminSidebar/>
            </Col>

            <Col  sm="9" xs="10" md="10">
                <AddSomeProducts/>
            </Col>

            <PaginationPage/>


        </Row>
    </Container>

    )
}
 export default AdminAddProductPages;