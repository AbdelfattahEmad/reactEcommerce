import { Col, Container, Row } from "react-bootstrap"
import UserSidebar from "./UserSidebar"
import AdminAllProduct from "../Admin/AdminAllProduct"


const AllFavorateProduct=()=>{
    return(
        <Container>
            <Row className="py-3">
                <Col sm="3" xs="2" md="2">
                    <UserSidebar/>
                </Col>
                <Col  sm="9" xs="10" md="10">
                <AdminAllProduct/>
                </Col>

            </Row>
        </Container>
    )


}
export default AllFavorateProduct