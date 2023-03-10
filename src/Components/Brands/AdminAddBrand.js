import { Col, Container, Row } from "react-bootstrap"
import AdminSidebar from "../Admin/AdminSidebar"
import AddBrand from "./AddBrand"
import PaginationPage from "../Pagination/Paginations"

const AdminAddBrandPage=()=>{
    return(
        <Container>
        <Row className="py-3">
            <Col sm="3" xs="2" md="2">
                <AdminSidebar/>
            </Col>

            <Col  sm="9" xs="10" md="10">
                <AddBrand/>
            </Col>
            <PaginationPage/>


        </Row>
    </Container>

    )
}
 export default AdminAddBrandPage