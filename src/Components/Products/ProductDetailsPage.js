import { Container } from "react-bootstrap"
import HeaderCategory from "../Home/HeaderCategory"
import ProductDetails from "./ProductDetails"
import RatesContainer from "../Rates/RatesContainer"
import ProductCard from "../Home/ProductCard"

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