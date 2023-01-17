import { Container, Row } from "react-bootstrap"
import jak from "../images/jak.webp"
import dress from "../images/dress.webp" 
import dde from "../images/dde.webp" 
import balto from "../images/balto.jpg"
import jac1 from "../images/jac1.webp"
import jaket from "../images/jaket.jpg"
import CategoryCart from "../Home/CategoroyCart";


const CategoryContainer=({title})=>{
    return(
        <Container>
        <div className="my-4">{title}</div>
        <Row className=" my-2 d-flex">
        <CategoryCart title="jaket" img={jak}/>
        <CategoryCart title="dress" img={dress}/>
        <CategoryCart title="dde" img={dde}/>
        <CategoryCart title="jaket" img={jac1}/>
        <CategoryCart title="jaket" img={jaket}/>
        <CategoryCart title="balto" img={balto}/>
        <CategoryCart title="jaket" img={jak}/>
        <CategoryCart title="dress" img={dress}/>
        <CategoryCart title="dde" img={dde}/>
        <CategoryCart title="jaket" img={jac1}/>
        <CategoryCart title="jaket" img={jaket}/>
        <CategoryCart title="balto" img={balto}/>

        <CategoryCart title="jaket" img={jak}/>
        <CategoryCart title="dress" img={dress}/>
        <CategoryCart title="dde" img={dde}/>
        <CategoryCart title="jaket" img={jac1}/>
        <CategoryCart title="jaket" img={jaket}/>
        <CategoryCart title="balto" img={balto}/>

        <CategoryCart title="jaket" img={jak}/>
        <CategoryCart title="dress" img={dress}/>
        <CategoryCart title="dde" img={dde}/>
        <CategoryCart title="jaket" img={jac1}/>
        <CategoryCart title="jaket" img={jaket}/>
        <CategoryCart title="balto" img={balto}/>

        <CategoryCart title="jaket" img={jak}/>
        <CategoryCart title="dress" img={dress}/>
        <CategoryCart title="dde" img={dde}/>
        <CategoryCart title="jaket" img={jac1}/>
        <CategoryCart title="jaket" img={jaket}/>
        <CategoryCart title="balto" img={balto}/>
        <CategoryCart title="jaket" img={jak}/>
        <CategoryCart title="dress" img={dress}/>
        <CategoryCart title="dde" img={dde}/>
        <CategoryCart title="jaket" img={jac1}/>
        <CategoryCart title="jaket" img={jaket}/>
        <CategoryCart title="balto" img={balto}/>
        <CategoryCart title="jaket" img={jak}/>
        <CategoryCart title="dress" img={dress}/>
        <CategoryCart title="dde" img={dde}/>
        <CategoryCart title="jaket" img={jac1}/>
        <CategoryCart title="jaket" img={jaket}/>
        <CategoryCart title="balto" img={balto}/>
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
export default CategoryContainer
