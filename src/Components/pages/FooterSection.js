import Footer from "../Home/Footer"
import instgram from "../images/instgram.jpg"
import face from "../images/face.webp"
import twit from "../images/twit.webp"
import phone1 from "../images/phone1.png"

import { Col, Container} from "react-bootstrap"


function FooterSection(){
    return(
        <Container className="d-flex align-items-center  my-5">
        <Col sm-6>
        <h1>Contact With us</h1>
        </Col>
        <Col sm-6 className="d-flex">
        <Footer img={instgram}/>
            <Footer img={face}/>
            <Footer img={twit}/>
            <Footer img={phone1}/>

        </Col>
        
     </Container>


    )
}
 export default FooterSection