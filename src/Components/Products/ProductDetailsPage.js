import { Container } from "react-bootstrap"
import HeaderCategory from "../Category/HeaderCategory"
import ProductDetails from "./ProductDetails"
import RatesContainer from "../Rates/RatesContainer"

const ProductDetailsPage =()=>{
    return(
        <div >
            <HeaderCategory/>
            <Container>
                <ProductDetails/>
                <RatesContainer/>
               
            </Container>
        </div>

    )

 }

export default ProductDetailsPage