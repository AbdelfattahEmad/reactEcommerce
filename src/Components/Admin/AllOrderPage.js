import { Col, Container, Row } from "react-bootstrap"
import BrandContainer from "../Brands/BrandContainer"
import AdminSidebar from "./AdminSidebar"
import PaginationPage from "../Pagination/Paginations"

const AllOrdersPage=()=>{
    return(
        <Container>
        <Row className="py-3">
            <Col sm="3" xs="2" md="2">
                <AdminSidebar/>
            </Col>

            <Col  sm="9" xs="10" md="10">
                <BrandContainer/>
            </Col>
            <PaginationPage/>


        </Row>
    </Container>

    )
}
 export default AllOrdersPage