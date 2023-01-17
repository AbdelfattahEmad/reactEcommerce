import { Col, Row } from "react-bootstrap"
import ProductGallary from "./ProductGallary"
import ProductDescreption from "./ProductDescreption"

const ProductDetails=()=>{
    return(
        <div className="">
            <Row className="py-3" >
                <Col lg="4">
                <ProductGallary/>
                </Col>
                    
                <Col lg="8">
                <ProductDescreption/>
                </Col>
            </Row>
            
        </div>
    )

}
export default  ProductDetails
