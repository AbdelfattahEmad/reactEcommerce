import { Container} from "react-bootstrap";
import DropDown from "../Home/DropDown";
import HeaderCategory from "../Category/HeaderCategory";
import CategoryContainer from "../Category/CategorysContainer";
import PaginationPage from "../Pagination/Paginations";


const ShopProducts=()=>{
    return(
    <div style={{minHeight:"670px"}}>
         <HeaderCategory/>
         <Container>
                <DropDown/>
                <CategoryContainer title=""/>
                <PaginationPage/>
         </Container>
    </div>
     )
}
export default ShopProducts;