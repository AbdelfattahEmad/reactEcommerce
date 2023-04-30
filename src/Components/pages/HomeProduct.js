import { Container} from "react-bootstrap";
import ProductCard from "../Home/ProductCard";
import SubTitle from "../Home/subtitle";
import ViewProductsHook from "../../HOOKS/productHooks/view-products-hook";



function HomeProducts({items}){

    const [Allproduct] = ViewProductsHook()
    console.log(Allproduct)

    return(
<div>
    <SubTitle title=" Categories" btn="More" pathText="/allproduct"/>
        <Container className="d-flex">

            {
                Allproduct?(
                    Allproduct.map((items,index)=>{ return <ProductCard key={index} title={items.name} desc={items.descreption} img={items.image} price={items.price}/>
                })
                ) : <h2> No products </h2>
            }
            {/* <ProductCard title="dresst" desc="best seller" img={dress} price="60$"/>
            <ProductCard title="dress" desc="best seller" img={jac1} price="70$"/>
            <ProductCard title="jaket" desc="best seller" img={jaket} price="80$"/> */}
        </Container>
        </div>


    )
}
export default HomeProducts;