import { Col, Container, Row } from "react-bootstrap"
import UserSidebar from "./UserSidebar"
import AddNewPersonalData from "./AddNewPresonalData"

const NewPersonalData=()=>{
    return(
        <Container>
            <Row className="py-3">
                <Col sm="3" xs="2" md="2">
                    <UserSidebar/>
                </Col>

                <Col  sm="9" xs="10" md="10">
                    <AddNewPersonalData/>
                    
                    
                </Col>

            </Row>
        </Container>
    )


}
export default NewPersonalData