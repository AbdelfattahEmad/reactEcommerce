import { Container } from "react-bootstrap"
import HeaderCategory from "../Category/HeaderCategory"
import ProductDetails from "./ProductDetails"
import RatesContainer from "../Rates/RatesContainer"
import { useParams } from "react-router-dom"

const ProductDetailsPage =()=>{

    const [id] = useParams()
    return(
        <div >
            <HeaderCategory/>
            <Container>
                <ProductDetails id={id}/>
                <RatesContainer/>
               
            </Container>
        </div>

    )

 }

export default ProductDetailsPage