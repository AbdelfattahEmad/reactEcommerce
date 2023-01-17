import { Container} from "react-bootstrap";
import ProductCard from "../Home/ProductCard";
import jak from "../images/jak.webp"
import dress from "../images/dress.webp" 
import jac1 from "../images/jac1.webp"
import jaket from "../images/jaket.jpg"
import SubTitle from "../Home/subtitle";



function HomeProducts(){
    return(
<div>
    <SubTitle title=" Categories" btn="More" pathText="/allproduct"/>
        <Container className="d-flex">
            <ProductCard title="jaket" desc="best seller" img={jak} price="50$"/>
            <ProductCard title="dresst" desc="best seller" img={dress} price="60$"/>
            <ProductCard title="dress" desc="best seller" img={jac1} price="70$"/>
            <ProductCard title="jaket" desc="best seller" img={jaket} price="80$"/>
        </Container>
        </div>


    )
}
export default HomeProducts;