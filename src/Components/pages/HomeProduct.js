import { Container} from "react-bootstrap";
import ProductCard from "../Home/ProductCard";
import SubTitle from "../Home/subtitle";
import ViewProductsHook from "../../HOOKS/productHooks/view-products-hook";



function HomeProducts({ title,btn, pathText,products}){


    return(
<div>
    {
        products ? (<SubTitle title={title} btn={btn} pathText={pathText}/>) : null
    }
    
        <Container className="d-flex">

            {
               products ? (
                products.map((item , index)=>{
                    <ProductCard key={index} item={item}/>

                })
                
               ) : null
        
            }
            
        </Container>
        </div>


    )
}
export default HomeProducts;