import { Col, Container, Row } from "react-bootstrap"
import UserSidebar from "./UserSidebar"
import NewUserName from "./NewUserName"

const ProfileUser=()=>{
    return(
        <Container>
            <Row className="py-3">
                <Col sm="3" xs="2" md="2">
                    <UserSidebar/>
                </Col>

                <Col  sm="9" xs="10" md="10">
                    <NewUserName/>
                </Col>

            </Row>
        </Container>
    )


}
export default ProfileUser