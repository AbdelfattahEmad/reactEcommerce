import { Container, Row } from "react-bootstrap";
import SubTitle from "../Home/subtitle";
import CategoryCart from "../Home/CategoroyCart";
import jak from "../images/jak.webp"
import dress from "../images/dress.webp" 
import dde from "../images/dde.webp" 
import balto from "../images/balto.jpg"
import jac1 from "../images/jac1.webp"
import jaket from "../images/jaket.jpg"



function HomeCategory(){
    return(
        <Container>
            <SubTitle title=" Categories" btn="More" pathText="/allCategory"/>
            <Row className=" my-2 d-flex">
            <CategoryCart title="jaket" img={jak}/>
            <CategoryCart title="dress" img={dress}/>
            <CategoryCart title="dde" img={dde}/>
            <CategoryCart title="jaket" img={jac1}/>
            <CategoryCart title="jaket" img={jaket}/>
            <CategoryCart title="balto" img={balto}/>
            </Row>
        </Container>
    )
}
export default  HomeCategory;