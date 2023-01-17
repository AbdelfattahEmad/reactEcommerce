import { Container } from "react-bootstrap";
import adidas from "../images/adidas.png"
import apple from "../images/apple.cms" 
import dell from "../images/dell.jpg"
import ipjone from "../images/ipjone.png"
import ck from "../images/ck.jpg"
import hp from "../images/hp.jpg"
import BrandCard from "../Home/BrandCard";
import SubTitle from "../Home/subtitle";



function BrandFeture(){
    return(

        <Container className="d-flex">
            <SubTitle  btn="More" pathText="/allbrand"/>
            <BrandCard  desc="Best Brand" img={adidas} />
            <BrandCard desc="Best Brand" img={apple} />
            <BrandCard  desc="Best Brand" img={dell} />
            <BrandCard  desc="Best Brand" img={ipjone} />
            <BrandCard  desc="Best Brand" img={ck} />
            <BrandCard  desc="Best Brand" img={hp} />
        </Container>


    )
}
export default BrandFeture;