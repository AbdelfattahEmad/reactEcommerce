import { Col, Row } from "react-bootstrap"
import ProductGallary from "./ProductGallary"
import ProductDescreption from "./ProductDescreption"

const ProductDetails=({id})=>{
    return(
        <div className="">
            <Row className="py-3" >
                <Col lg="4">
                <ProductGallary id={id}/>
                </Col>
                    
                <Col lg="8">
                <ProductDescreption id={id}/>
                </Col>
            </Row>
            
        </div>
    )

}
export default  ProductDetails
