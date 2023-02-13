import HomeBrandHook from "../../HOOKS/BrandHooks/HomeBrandHook"
import adidas from "../images/adidas.png"
import BrandCard from "./BrandCard"
import { Container, Row } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner';


const BrandContainer =()=>{


    const [brand , loading] = HomeBrandHook()
    return(
    <Container className="d-flex">
       <Row>

       {
                loading === false ? (
                brand.data.length ? (brand.data.map((item,index)=>{
                    return <BrandCard title={item.title} img={item.image} data={brand} key={index} />
                })

                )  : <h2>no Brands</h2>
                ) :  <Spinner animation="border" />

            }


        <BrandCard  desc="Best Brand" img={adidas} />

        </Row>
    </Container>


    )
}

export default BrandContainer;