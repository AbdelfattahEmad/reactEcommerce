import adidas from "../images/adidas.png"
import apple from "../images/apple.cms" 
import dell from "../images/dell.jpg"
import ipjone from "../images/ipjone.png"
import ck from "../images/ck.jpg"
import hp from "../images/hp.jpg"
import BrandCard from "../Home/BrandCard"
import { Container, Row } from "react-bootstrap"

const BrandContainer =()=>{
    return(
    <Container className="d-flex">
       <Row>
        <BrandCard  desc="Best Brand" img={adidas} />
        <BrandCard desc="Best Brand" img={apple} />
        <BrandCard  desc="Best Brand" img={dell} />
        <BrandCard  desc="Best Brand" img={ipjone} />
        <BrandCard  desc="Best Brand" img={ck} />
        <BrandCard  desc="Best Brand" img={hp} />
        <BrandCard  desc="Best Brand" img={dell} />
        <BrandCard  desc="Best Brand" img={ipjone} />
        <BrandCard  desc="Best Brand" img={dell} />
        <BrandCard  desc="Best Brand" img={ipjone} />
        <BrandCard  desc="Best Brand" img={adidas} />
        <BrandCard desc="Best Brand" img={apple} />
        <BrandCard  desc="Best Brand" img={ck} />
        <BrandCard  desc="Best Brand" img={hp} />
        <BrandCard  desc="Best Brand" img={dell} />
        <BrandCard  desc="Best Brand" img={ipjone} />
        <BrandCard  desc="Best Brand" img={adidas} />
        <BrandCard desc="Best Brand" img={apple} />

        </Row>
    </Container>


    )
}

export default BrandContainer;